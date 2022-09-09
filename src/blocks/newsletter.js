import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/newsletter", {
    title: "Newsletter Section",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <section className="newsletter-signup bg-darker flex-vcenter vh-500px">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="desktop:grid-col-6 desktop:grid-offset-6">
                        <form className="newsletter-signup-form">
                            <h2 className="heading heading--theme-color-6">Sign up for VA Careers news</h2>
                            <p>Our newsletters offer the latest about working at VA, delivered right to your inbox.</p>
                            <div className="form-group">
                                <input className="usa-input" id="newsletter-signup" name="newsletter-signup" placeholder="Email address" aria-label="Enter your email address to sign up" />
                                <button className="usa-button usa-button--secondary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

function SaveComponent() {
    return null;
};