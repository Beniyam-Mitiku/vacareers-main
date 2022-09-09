import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/va-header", {
    title: "VA Header",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <section className="va-header">
            <div className="grid-container">
                <nav className="va-nav">
                    <ul className="va-menu">
                        <li className="menu-item"><a>VA.gov</a></li>
                        <li className="menu-item"><a>VA News</a></li>
                        <li className="menu-item"><a>Locations</a></li>
                        <li className="menu-item"><a>Business</a></li>
                        <li className="menu-item"><a>VA Careers</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

function SaveComponent() {
    return null;
};