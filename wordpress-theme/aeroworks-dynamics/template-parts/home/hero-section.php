<!-- Hero Section — mirrors components/home/hero-section.tsx -->
<section class="hero" aria-label="Hero">
    <!-- Background Grid & Glow -->
    <div class="hero-bg">
        <div class="hero-grid-pattern"></div>
        <div class="hero-glow-right"></div>
        <div class="hero-glow-left"></div>
    </div>

    <div class="hero-content">
        <!-- Text Content -->
        <div class="hero-text">
            <div class="hero-badge">
                <span class="hero-badge-dot"></span>
                Swedish Aerospace Engineering
            </div>

            <h1 class="hero-title">
                <span class="text-balance">Engineering the</span><br>
                <span class="text-primary">Future of Flight</span>
            </h1>

            <p class="hero-subtitle">
                Aeroworks Dynamics AB develops advanced aerospace hardware and
                software solutions. Our flagship product, MatRocket, takes your concepts from
                simulation to air in minimum time.
            </p>

            <div class="hero-actions">
                <a href="<?php echo esc_url(home_url('/software/')); ?>" class="btn btn-lg btn-primary">
                    Explore MatRocket
                    <?php echo aeroworks_icon('arrow-right'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-outline">
                    Contact Us
                </a>
            </div>
        </div>

        <!-- Hero Image -->
        <div class="hero-image">
            <div class="hero-image-wrapper">
                <div class="hero-image-glow"></div>
                <img
                    src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket-hero.jpeg"
                    alt="MatRocket aerospace simulation platform - from concept design through hardware testing to real rocket launches"
                    loading="eager"
                >
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero-scroll">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>
