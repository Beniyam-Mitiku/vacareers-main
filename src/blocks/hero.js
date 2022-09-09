import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

registerBlockType("vacareers/hero", {
    title: "Hero Section",
    category: "va-blocks",
    attributes: {
        bgImageId: { type: "number" },
        bgImageUrl: { type: "string" },
        bgVideoId: { type: "number" },
        bgVideoUrl: { type: "string" },
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {
    const {
        attributes: { bgImageId, bgImageUrl, bgVideoId, bgVideoUrl },
        setAttributes
    } = props;

    const dump = select('core/block-editor').getTemplate();
    console.log(dump);

    useEffect(
        function () {
            async function go() {
                const response = await apiFetch({
                    path: `/wp/v2/media/${bgImageId}`,
                    method: "GET"
                });
                setAttributes({ bgImageUrl: response.media_details.sizes.full.source_url });
            }
            go();
        }, [bgImageId]
    );

    const onBgImageSelect = (media) => setAttributes({ bgImageId: media.id });

    const onBgVideoSelect = (media) => setAttributes({ bgVideoId: media.id, bgVideoUrl: media.url });

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={ true }>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={ onBgImageSelect } value={ bgImageId } render={ ({ open }) => {
                                return <Button onClick={ open } variant="secondary">Choose background image</Button>;
                            } } />
                        </MediaUploadCheck>
                    </PanelRow>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={ onBgVideoSelect } value={ bgVideoId } allowedTypes={ ['video/mp4'] } render={ ({ open }) => {
                                return <Button onClick={ open } variant="secondary">Choose video</Button>;
                            } } />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="hero flex-vcenter vh-80 editor" style={ { backgroundImage: `url('${bgImageUrl}')` } }>
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="desktop:grid-col-8">
                            <InnerBlocks allowedBlocks={ ["core/paragraph", "vacareers/heading", "vacareers/usajobs-search"] } />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

function SaveComponent() {
    return <InnerBlocks.Content />;
};