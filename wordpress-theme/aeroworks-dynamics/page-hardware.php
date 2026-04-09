<?php
/**
 * Template Name: Hardware Page
 */
get_header(); ?>

<article class="pt-navbar">
    <!-- Hero Section -->
    <section class="hardware-hero" aria-labelledby="hardware-hero-heading">
        <!-- Background -->
        <div class="hero-bg">
            <div class="page-hero-grid-60"></div>
            <div class="hardware-hero-glow"></div>
        </div>

        <div class="container relative" style="padding-top:3.5rem; padding-bottom:3.5rem;">
            <div class="max-w-3xl mx-auto text-center">
                <div class="hardware-badge">
                    <span class="hardware-badge-dot"></span>
                    In Development
                </div>

                <h1 id="hardware-hero-heading" class="page-title">Aerospace Hardware Solutions</h1>

                <p class="page-description">
                    Our hardware division is <span class="text-primary-highlight">actively</span> developing physical systems
                    designed to work seamlessly with MatRocket. Contact us to learn more about our hardware roadmap or to discuss
                    potential collaboration opportunities.
                </p>

                <div class="hardware-actions">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-primary">
                        Contact Us
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/software/')); ?>" class="btn btn-lg btn-outline">
                        Explore Software
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-lg btn-outline">
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    </section>
</article>

<?php get_footer(); ?>
