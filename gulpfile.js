/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './';
uswds.paths.dist.js = './js';
uswds.paths.dist.img = './assets/img';
uswds.paths.dist.fonts = './assets/fonts';
uswds.paths.dist.theme = './sass';

/**
 * Exports
 * Add as many as you need
 */

// Run once
exports.init = uswds.init;

// Manual compile (for icons)
exports.compile = uswds.compile;

// Run always
exports.default = uswds.watch;