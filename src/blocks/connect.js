import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/connect", {
    title: "Connect With A Recruiter Section",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <section className="connect bg-dark flex-vcenter vh-500px">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="desktop:grid-col-6">
                        <h2 className="heading heading--theme-color-6">Need help with your job search?</h2>
                        <p>Our recruiters can provide personalized support to help you find a position at VA that fits your skills and lifestyle.</p>
                        <a href="#" className="usa-button usa-button--secondary">Connect with a VA recruiter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

function SaveComponent() {
    return null;
};