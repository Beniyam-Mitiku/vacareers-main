<header class="site-header">
    <div class="grid-container site-header-wrapper">
        <a href="/" class="logo" title="VA Careers Home">
            <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/va-careers-logo-white.svg' ?>" alt="VA Careers">
        </a>
        <button type="button" class="site-nav-btn" id="site-nav-open-btn">
            <svg class="usa-icon usa-icon--size-5" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="<?php echo get_stylesheet_directory_uri() . '/assets/img/sprite.svg#menu' ?>"></use>
            </svg>
        </button>
    </div>
    <div class="site-nav" id="site-nav" tabindex="-1">
        <nav aria-label="Primary navigation">
            <button type="button" class="site-nav-close-btn" id="site-nav-close-btn">
                <svg class="usa-icon usa-icon--size-5" aria-hidden="true" focusable="false" role="img">
                    <use xlink:href="<?php echo get_stylesheet_directory_uri() . '/assets/img/sprite.svg#close' ?>"></use>
                </svg>
            </button>
            <div class="grid-container">
                <div class="grid-row grid-gap">
                    <div class="desktop:grid-col-8">
                        <nav class="primary" role="navigation" aria-label="Main Navigation">
                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location'  => 'main-menu',
                                    'menu'            => '',
                                    'container'       => 'div',
                                    'container_class' => '',
                                    'container_id'    => '',
                                    'menu_class'      => 'menu',
                                    'menu_id'         => 'main-menu',
                                    'fallback_cb'     => 'wp_page_menu',
                                    'before'          => '',
                                    'after'           => '',
                                    'link_before'     => '',
                                    'link_after'      => '',
                                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                    'depth'           => 0,
                                    'walker'          => ''
                                )
                            );
                            ?>
                        </nav>
                    </div>
                    <div class="desktop:grid-col-4">
                        <form class="newsletter-signup-form">
                            <h3 class="heading heading--theme-color-6">Sign up for VA Careers news</h3>
                            <p>Our newsletters offer the latest about working at VA, delivered right to your inbox.</p>
                            <div class="form-group">
                                <input class="usa-input" id="newsletter-signup" name="newsletter-signup" placeholder="Email address" aria-label="Enter your email address to sign up" />
                                <button class="usa-button usa-button--secondary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>

<?php if (function_exists('yoast_breadcrumb') && !is_front_page()) { ?>
    <div class="breadcrumbs-wrapper">
        <div class="grid-container">
            <?php yoast_breadcrumb('<div class="breadcrumbs">', '</div>'); ?>
        </div>
    </div>
<?php } ?>