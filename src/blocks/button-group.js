import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType("vacareers/button-group", {
    title: "Button Group",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    const TEMPLATE = [
        ['vacareers/button', {}]
    ];

    return (
        <>
            <div className="button-group editor">
                <InnerBlocks allowedBlocks={ ['vacareers/button'] } template={ TEMPLATE } />
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}