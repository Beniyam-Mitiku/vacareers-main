import { link } from "@wordpress/icons";
import { ToolbarGroup, ToolbarButton, Popover, PanelBody, PanelRow, ColorPalette, CheckboxControl } from "@wordpress/components";
import { RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, getColorObjectByColorValue } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useState, useEffect } from "@wordpress/element";
import { buttonStyles } from "../../inc/theme";
import { select } from "@wordpress/data";

registerBlockType("vacareers/button", {
    title: "Button",
    category: "va-blocks",
    attributes: {
        text: { type: "string" },
        linkObject: { type: "object" },
        buttonStyle: { type: "string", default: "primary" },
        isSpotlightModal: { type: "boolean", default: false }
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {
    const {
        attributes: { text, linkObject, buttonStyle, isSpotlightModal },
        setAttributes,
        clientId
    } = props;

    useEffect(() => {
        // Check if it's inside the spotlight block
        const parentBlocks = select('core/block-editor').getBlockParents(clientId);
        setInSpotlight(
            parentBlocks.some(block => select('core/block-editor').getBlockName(block) == 'vacareers/spotlight')
        );
        if (!inSpotlight) {
            setAttributes({ inSoptlightModal: false });
        }
    }, []);

    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
    const [inSpotlight, setInSpotlight] = useState(false);

    function handleTextChange(x) {
        setAttributes({ text: x });
    }

    function handleLinkChange(newLink) {
        setAttributes({ linkObject: newLink });
    }

    function handleIsModalChange(change) {
        setAttributes({ isSpotlightModal: change });
    }

    const currentColorValue = buttonStyles.filter(color => {
        return color.name == buttonStyle;
    })[0].color;

    function handleColorChange(newValue) {
        if (newValue !== undefined) {
            const { name } = getColorObjectByColorValue(buttonStyles, newValue);
            setAttributes({ buttonStyle: name });
        } else {
            return;
        }

    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Color" initialOpen={ true }>
                    <PanelRow>
                        <ColorPalette disableCustomColors={ true } clearable={ false } colors={ buttonStyles } value={ currentColorValue } onChange={ handleColorChange } />
                    </PanelRow>
                </PanelBody>
                { inSpotlight && (
                    <PanelBody title="Spotlight Modal" initialOpen={ true }>
                        <PanelRow>
                            <CheckboxControl label="Open spotlight modal" help="Select if you want this button to open the spotlight modal" checked={ isSpotlightModal } onChange={ handleIsModalChange } />
                        </PanelRow>
                    </PanelBody>
                ) }
            </InspectorControls>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={ isLinkPickerVisible } onClick={ () => setIsLinkPickerVisible(state => !state) } icon={ link } />
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={ [] } tagName="a" className={ `usa-button usa-button--${buttonStyle}` } value={ text } onChange={ handleTextChange } />
            { isLinkPickerVisible && (
                <Popover position="middle center" onFocusOutside={ () => setIsLinkPickerVisible(false) }>
                    <LinkControl settings={ [] } value={ linkObject } onChange={ handleLinkChange } />
                </Popover>
            ) }
        </>
    );
}

function SaveComponent(props) {
    return null;
    // const {
    //     attributes: { text, linkObject, buttonStyle, isSpotlightModal }
    // } = props;

    // if (isSpotlightModal) {
    //     return (
    //         <a href={ linkObject?.url } className={ `usa-button usa-button--${buttonStyle}` } aria-controls="spotlight-modal" data-open-modal id="playVideo">{ text }</a>
    //     );
    // } else {
    //     return (
    //         <a href={ linkObject?.url } className={ `usa-button usa-button--${buttonStyle}` }>{ text }</a>
    //     );
    // }
}
