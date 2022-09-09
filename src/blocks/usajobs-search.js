import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/usajobs-search", {
    title: "USAJobs Search",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <>
            <div>USA Jobs Search</div>
        </>
    );
};

function SaveComponent() {
    return null;
};