<?php get_header(); ?>

<div class="pt-navbar">
    <section class="hardware-hero" style="min-height:70vh;">
        <div class="hero-bg">
            <div class="page-hero-grid-60"></div>
            <div class="hardware-hero-glow"></div>
        </div>

        <div class="container relative" style="padding-top:3.5rem; padding-bottom:3.5rem;">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="page-title" style="font-size:6rem; opacity:0.15; margin-bottom:1.5rem;">404</h1>
                <h2 class="section-heading-xl">Page Not Found</h2>
                <p class="page-description">
                    The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
                </p>
                <div class="hardware-actions" style="margin-top:2rem;">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-lg btn-primary">
                        Back to Home
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-outline">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
