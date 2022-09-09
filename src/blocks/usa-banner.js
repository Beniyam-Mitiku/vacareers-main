import { registerBlockType } from "@wordpress/blocks";
import { THEME_PATH } from "../../inc/theme";

registerBlockType("vacareers/usa-banner", {
    title: "USA Banner",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <section className="usa-banner" aria-label="Official government website">
            <header className="usa-banner__header">
                <div className="usa-banner__inner">
                    <div className="grid-col-auto">
                        <img className="usa-banner__header-flag" src={ `${THEME_PATH}/us_flag_small.png` } alt="U.S. flag" />
                    </div>
                    <div className="grid-col-fill tablet:grid-col-auto">
                        <p className="usa-banner__header-text">
                            An official website of the United States government
                        </p>
                        <p className="usa-banner__header-action" aria-hidden="true">
                            Here’s how you know
                        </p>
                    </div>
                    <a className="usa-banner__button">
                        <span className="usa-banner__button-text">Here’s how you know</span>
                    </a>
                </div>
            </header>
        </section>

    );
};

function SaveComponent() {
    return null;
};