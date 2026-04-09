<?php
/**
 * Template Name: Software Page
 */
get_header(); ?>

<article class="pt-navbar">
    <?php
    // JSON-LD for Software Product
    $sw_jsonld = array(
        '@context' => 'https://schema.org',
        '@type' => 'SoftwareApplication',
        'name' => 'MatRocket',
        'applicationCategory' => 'EngineeringApplication',
        'operatingSystem' => 'Windows',
        'description' => 'Professional aerospace simulation platform for rapid validation of vehicle models, control systems, and algorithms against integrated flight scenarios.',
        'offers' => array(
            '@type' => 'Offer',
            'availability' => 'https://schema.org/InStock',
            'priceCurrency' => 'EUR',
        ),
        'author' => array(
            '@type' => 'Organization',
            'name' => 'Aeroworks Dynamics AB',
        ),
        'featureList' => array(
            'Rapid validation workflow',
            'Integrated flight scenarios',
            'Geometry configuration',
            'Control system testing',
            'Algorithm validation',
            'Hardware-in-the-loop support',
        ),
    );
    echo '<script type="application/ld+json">' . wp_json_encode($sw_jsonld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
    ?>

    <?php get_template_part('template-parts/software/hero'); ?>
    <?php get_template_part('template-parts/software/product-overview'); ?>
    <?php get_template_part('template-parts/software/trajectory-viz'); ?>
    <?php get_template_part('template-parts/software/3d-analysis'); ?>
    <?php get_template_part('template-parts/software/branding-cta'); ?>
</article>

<?php get_footer(); ?>
