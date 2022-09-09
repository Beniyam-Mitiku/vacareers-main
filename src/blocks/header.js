import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import { THEME_PATH } from "../../inc/theme";

registerBlockType("vacareers/header", {
    title: "Header Section / Nav Menu",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {

    return (
        <>
            <header className="site-header">
                <div className="grid-container site-header-wrapper">
                    <div className="logo">
                        <img src={ `${THEME_PATH}/va-careers-logo-white.svg` } alt="VA Careers" />
                    </div>
                    <div className="site-nav-btn" id="site-nav-open-btn">
                        <svg className="usa-icon usa-icon--size-5" aria-hidden="true" focusable="false" role="img">
                            <use xlinkHref={ `${THEME_PATH}/sprite.svg#menu` } />
                        </svg>
                    </div>
                </div>
            </header>
        </>
    );
};

function SaveComponent() {
    return <InnerBlocks.Content />;
};