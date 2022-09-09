import { ToolbarGroup, ToolbarButton, PanelBody, PanelRow, ColorPalette } from "@wordpress/components";
import { RichText, InspectorControls, BlockControls, getColorObjectByColorValue } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { themeColors } from "../../inc/theme";

registerBlockType("vacareers/heading", {
    title: "Heading",
    category: "va-blocks",
    attributes: {
        text: { type: "string" },
        size: { enum: ['h1', 'h2', 'h3'], default: 'h2' },
        lineColor: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {
    const {
        attributes: { text, size, lineColor },
        setAttributes
    } = props;

    function handleTextChange(text) {
        setAttributes({ text: text });
    }

    const currentColorValue = themeColors.filter(color => {
        return color.name == lineColor;
    })[0]?.color;

    function handleColorChange(newValue) {
        if (newValue !== undefined) {
            const { name } = getColorObjectByColorValue(themeColors, newValue);
            setAttributes({ lineColor: name });
        } else {
            setAttributes({ lineColor: null });
        }

    }
    console.log(lineColor);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Line" initialOpen={ true }>
                    <PanelRow>
                        <ColorPalette disableCustomColors={ true } colors={ themeColors } value={ currentColorValue } onChange={ handleColorChange } />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={ size === "h1" } onClick={ () => setAttributes({ size: "h1" }) }>
                        h1
                    </ToolbarButton>
                    <ToolbarButton isPressed={ size === "h2" } onClick={ () => setAttributes({ size: "h2" }) }>
                        h2
                    </ToolbarButton>
                    <ToolbarButton isPressed={ size === "h3" } onClick={ () => setAttributes({ size: "h3" }) }>
                        h3
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={ ["core/italic"] } tagName={ size } className={ `heading heading--${lineColor}` } value={ text } onChange={ handleTextChange } />
        </>
    );
}

function SaveComponent(props) {
    return null;
    // const {
    //     attributes: { text, size, lineColor }
    // } = props;

    // return <RichText.Content tagName={ size } value={ text } className={ `heading heading--${lineColor}` } />;
}
