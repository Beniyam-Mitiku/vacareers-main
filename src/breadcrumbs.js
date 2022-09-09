// Add USWDS link class to breadcrumbs
const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
breadcrumbLinks.forEach((el) => {
    el.classList.add('usa-link');
});