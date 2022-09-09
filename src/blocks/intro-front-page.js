import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/intro-front-page", {
    title: "Intro For Front Page Section",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <section className="front-page-intro flex-vcenter vh-500px bg-radial-grad">
            <div className="grid-container">
                <div className="grid-row grid-gap">
                    <div className="tablet:grid-col-6">
                        <ul className="wayfinding-list">
                            <li className="theme-color-2">
                                <a>Careers</a><span />
                            </li>
                            <li className="theme-color-3">
                                <a>Career guidance</a><span />
                            </li>
                            <li className="theme-color-4">
                                <a>Benefits</a><span />
                            </li>
                            <li className="theme-color-5">
                                <a>Job application process</a><span />
                            </li>
                            <li className="theme-color-6">
                                <a>Outreach</a><span />
                            </li>
                        </ul>
                    </div>
                    <div className="tablet:grid-col-6">
                        <p>VA Careers has resources to empower you on your journey to finding a fulfilling career at the U.S. Department of Veterans Affairs (VA).</p>
                        <p>At the largest health care system in the country, our providers and support staff help 9 million Veterans reach whole health each year.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

function SaveComponent() {
    return null;
};