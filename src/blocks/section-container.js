import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType("vacareers/section-container", {
    title: "Section With Container",
    category: "va-blocks",
    edit: () => {
        return (
            <>
                <section className="section editor">
                    <div className="grid-container">
                        <InnerBlocks />
                    </div>
                </section>
            </>
        );
    },
    save: () => {
        return <InnerBlocks.Content />;
    }
});