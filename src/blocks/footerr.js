import { registerBlockType } from "@wordpress/blocks";

registerBlockType("vacareers/footerr", {
    title: "footer",
    category: "va-blocks",
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent() {
    return (
        <footer className="usa-footer">
        <div className="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
          <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  [Primary link]
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  [Primary link]
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  [Primary link]
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  [Primary link]
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="usa-footer__secondary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div className="mobile-lg:grid-col-auto">
                  <img
                    className="usa-footer__logo-img"
                    src="/assets/img/logo-img.png"
                    alt=""
                  />
                </div>
                <div className="mobile-lg:grid-col-auto">
                  <p className="usa-footer__logo-heading">[Name of Agency]</p>
                </div>
              </div>
              <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="/assets/img/usa-icons/facebook.svg"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="/assets/img/usa-icons/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="/assets/img/usa-icons/youtube.svg"
                        alt="YouTube"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="/assets/img/usa-icons/instagram.svg"
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="/assets/img/usa-icons/rss_feed.svg"
                        alt="RSS"
                      />
                    </a>
                  </div>
                </div>
                <p className="usa-footer__contact-heading">[Agency Contact Center]</p>
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                      <a href="tel:1-800-555-5555">[(800) 555-GOVT]</a>
                    </div>
                    <div className="grid-col-auto">
                      <a href="mailto:info@agency.gov">[info@agency.gov]</a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="official-footer bg-darker usa-dark-background">
          <div className="grid-container">
            <p>The official website of the U.S. Department of Veterans Affairs</p>
            <ul className="usa-list--unstyled">
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov"
                  rel="nofollow noopener"
                >
                  VA.gov
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://choose.va.gov"
                  rel="nofollow noopener"
                >
                  ChooseVA
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/ABOUT_VA/index.asp"
                  rel="nofollow noopener"
                >
                  About VA
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.section508.va.gov/"
                  rel="nofollow noopener"
                >
                  Accessibility support
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/ormdi/NOFEAR_Select.asp"
                  rel="nofollow noopener"
                >
                  No FEAR Act data
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/accountability/"
                  rel="nofollow noopener"
                >
                  Whistleblower Protection
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/oig/"
                  rel="nofollow noopener"
                >
                  Office of the Inspector General
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/performance-dashboard/"
                  rel="nofollow noopener"
                >
                  Performance reports
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/privacy-policy/"
                  rel="nofollow noopener"
                >
                  Privacy policy
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/foia/"
                  rel="nofollow noopener"
                >
                  FOIA requests
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/web/standards/disclaimer.cfm"
                  rel="nofollow noopener"
                >
                  Disclaimers
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.data.va.gov/"
                  rel="nofollow noopener"
                >
                  Open Data
                </a>
              </li>
              <li className="usa-links-item">
                <a
                  className="usa-link"
                  href="https://www.va.gov/vulnerability-disclosure-policy/"
                  rel="nofollow noopener"
                >
                  Vulnerability Disclosure Policy
                </a>
              </li>
            </ul>
            <p>
              Looking for U.S. government information and services?{" "}
              <a
                className="usa-link"
                href="https://www.usa.gov/"
                rel="nofollow noopener"
              >
                Visit USA.gov
              </a>
            </p>
          </div>
        </div>
      </footer>
      
    );
};

function SaveComponent() {
    return null;
};