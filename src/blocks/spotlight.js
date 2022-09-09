import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";

registerBlockType("vacareers/spotlight", {
    title: "Spotlight Section",
    category: "va-blocks",
    attributes: {
        fallbackImageId: { type: "number" },
        fallbackImageUrl: { type: "string" },
        bgVideoId: { type: "number" },
        bgVideoUrl: { type: "string" },
        fullVideoEmbed: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {
    const TEMPLATE = [
        ['core/quote', {}],
        ['vacareers/button-group', { placeholder: 'Links' }]
    ];

    const {
        attributes: { fallbackImageId, fallbackImageUrl, bgVideoId, bgVideoUrl, fullVideoEmbed },
        setAttributes
    } = props;

    useEffect(() => {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${fallbackImageId}`,
                method: "GET"
            });
            setAttributes({ fallbackImageUrl: response.media_details.sizes.full.source_url });
        }
        go();
    }, [fallbackImageId]);

    const onFallbackImageSelect = (media) => setAttributes({ fallbackImageId: media.id });

    const onBgVideoSelect = (media) => setAttributes({ bgVideoId: media.id, bgVideoUrl: media.url });

    const onFullVideoEmbedEnter = (text) => setAttributes({ fullVideoEmbed: text });

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={ true }>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={ onFallbackImageSelect } value={ fallbackImageId } render={ ({ open }) => {
                                return <Button onClick={ open } variant="secondary">Choose fallback image</Button>;
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
                <PanelBody title="Embeded Video" initialOpen={ true }>
                    <PanelRow>
                        <TextControl label="Video URL" value={ fullVideoEmbed } onChange={ onFullVideoEmbedEnter } />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="spotlight flex-vcenter editor" style={ { backgroundImage: `url('${fallbackImageUrl}')` } }>
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="desktop:grid-col-6 desktop:grid-offset-6">
                            <InnerBlocks template={ TEMPLATE } />
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