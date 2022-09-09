<?php

// Enqueue Styles and Scripts
function vacareers_styles_and_scripts() {
    wp_enqueue_style('style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('calluna', 'https://use.typekit.net/ysf6agd.css');
    wp_enqueue_script('scripts', get_theme_file_uri('build/scripts.js'), array(), '1.0', true);
    wp_enqueue_script('uswds', get_theme_file_uri('js/uswds.min.js'), array(), '3.0.2', true);
}
add_action('wp_enqueue_scripts', 'vacareers_styles_and_scripts');

// Site feautres
function vacareers_features() {
    add_image_size('hero', 2560, 1280);
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_editor_style(array('https://use.typekit.net/ysf6agd.css', 'style.css'));
    register_nav_menus(array(
        'main-menu' => __('Main Menu')
    ));
}
add_action('after_setup_theme', 'vacareers_features');

/**
 * WCAG 2.0 Attributes for Dropdown Menus
 *
 * Adjustments to menu attributes tot support WCAG 2.0 recommendations
 * for flyout and dropdown menus.
 *
 * @ref https://www.w3.org/WAI/tutorials/menus/flyout/
 */
function wcag_nav_menu_link_attributes($atts, $item, $args, $depth) {

    // Add [aria-haspopup] and [aria-expanded] to menu items that have children
    $item_has_children = in_array('menu-item-has-children', $item->classes);
    if ($item_has_children) {
        $atts['aria-haspopup'] = "true";
        $atts['aria-expanded'] = "false";
    }

    return $atts;
}
add_filter('nav_menu_link_attributes', 'wcag_nav_menu_link_attributes', 10, 4);

class JSXBlock {
    function __construct($name, $renderCallback = null) {
        $this->name = $name;
        $this->renderCallback = $renderCallback;
        add_action('init', [$this, 'onInit']);
    }

    function renderCallbackFn($attributes, $content) {
        ob_start();
        require get_theme_file_path("src/blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        $args = array(
            'editor_script' => $this->name
        );

        if ($this->renderCallback) {
            $args['render_callback'] = [$this, 'renderCallbackFn'];
        }

        register_block_type("vacareers/{$this->name}", $args);
    }
}
new JSXBlock('heading', true);
new JSXBlock('section-container', true);
new JSXBlock('button', true);
new JSXBlock('hero', true);
new JSXBlock('spotlight', true);
new JSXBlock('button-group', true);
new JSXBlock('usajobs-search', true);
new JSXBlock('usa-banner', true);
new JSXBlock('va-header', true);
new JSXBlock('intro-front-page', true);
new JSXBlock('header', true);
new JSXBlock('connect', true);
new JSXBlock('newsletter', true);
new JSXBlock('footer', true);
function va_allowed_blocks($allowed_block_types, $editor_context) {
    return $allowed_block_types;
}
add_filter('allowed_block_types_all', 'va_allowed_blocks', 10, 2);

function va_block_categories($block_categories, $editor_context) {
    array_unshift(
        $block_categories,
        array(
            'slug'  => 'va-blocks',
            'title' => "VA Blocks",
            'icon'  => null,
        )
    );
    return $block_categories;
}

add_filter('block_categories_all', 'va_block_categories', 10, 2);
