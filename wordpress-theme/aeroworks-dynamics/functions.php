<?php
/**
 * Aeroworks Dynamics Theme Functions
 */

// ── Theme Setup ──────────────────────────────────────────────
function aeroworks_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'aeroworks-dynamics'),
    ));
}
add_action('after_setup_theme', 'aeroworks_setup');

// ── Enqueue Styles & Scripts ─────────────────────────────────
function aeroworks_enqueue() {
    // Google Fonts
    wp_enqueue_style(
        'aeroworks-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        array(),
        null
    );

    // Theme stylesheet
    wp_enqueue_style(
        'aeroworks-style',
        get_stylesheet_uri(),
        array('aeroworks-google-fonts'),
        wp_get_theme()->get('Version')
    );

    // Theme JavaScript
    wp_enqueue_script(
        'aeroworks-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'aeroworks_enqueue');

// ── JSON-LD Structured Data ──────────────────────────────────
function aeroworks_jsonld_organization() {
    $jsonld = array(
        '@context'     => 'https://schema.org',
        '@type'        => 'Organization',
        'name'         => 'Aeroworks Dynamics AB',
        'alternateName'=> 'Aeroworks Dynamics',
        'url'          => 'https://aeroworksdynamics.se',
        'logo'         => get_template_directory_uri() . '/assets/images/awd_logo.jpeg',
        'description'  => 'Swedish aerospace technology company specializing in simulation software and hardware solutions for aerospace development.',
        'foundingDate' => '-',
        'founders'     => array(
            array('@type' => 'Person', 'name' => 'Adnan Mohammed', 'jobTitle' => 'Chief Executive Officer'),
            array('@type' => 'Person', 'name' => 'Vilgot Lötberg', 'jobTitle' => 'Chief Technology Officer'),
            array('@type' => 'Person', 'name' => 'Samuel Hedin', 'jobTitle' => 'Chief Operating Officer'),
        ),
        'address' => array(
            '@type'          => 'PostalAddress',
            'addressCountry' => 'SE',
        ),
        'contactPoint' => array(
            '@type'       => 'ContactPoint',
            'telephone'   => '+46-76-181-79-79',
            'email'       => 'adnan@aeroworksdynamics.se',
            'contactType' => 'sales',
        ),
        'sameAs' => array(
            'https://www.linkedin.com/company/aeroworks-dynamics',
        ),
    );
    echo '<script type="application/ld+json">' . wp_json_encode($jsonld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>' . "\n";
}
add_action('wp_head', 'aeroworks_jsonld_organization');

function aeroworks_jsonld_website() {
    $jsonld = array(
        '@context'    => 'https://schema.org',
        '@type'       => 'WebSite',
        'name'        => 'Aeroworks Dynamics',
        'url'         => 'https://aeroworksdynamics.se',
        'description' => 'Swedish aerospace technology company specializing in simulation software and hardware solutions.',
        'publisher'   => array(
            '@type' => 'Organization',
            'name'  => 'Aeroworks Dynamics AB',
        ),
    );
    echo '<script type="application/ld+json">' . wp_json_encode($jsonld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>' . "\n";
}
add_action('wp_head', 'aeroworks_jsonld_website');

// ── Helper: Check active page ────────────────────────────────
function aeroworks_is_current_page($slug) {
    if ($slug === '/' || $slug === 'home') {
        return is_front_page();
    }
    return is_page($slug);
}

// ── Helper: SVG icons ────────────────────────────────────────
function aeroworks_icon($name, $class = '') {
    $icons = array(
        'arrow-right' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' . esc_attr($class) . '"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
        'menu'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        'x'           => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
        'cpu'         => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
        'check'       => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
        'linkedin'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
        'mail'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        'phone'       => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'user'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        'send'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
    );
    return isset($icons[$name]) ? $icons[$name] : '';
}

// ── Disable unnecessary WordPress features ───────────────────
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// ── Set theme color meta ─────────────────────────────────────
function aeroworks_theme_color() {
    echo '<meta name="theme-color" content="#141414">' . "\n";
}
add_action('wp_head', 'aeroworks_theme_color', 1);
