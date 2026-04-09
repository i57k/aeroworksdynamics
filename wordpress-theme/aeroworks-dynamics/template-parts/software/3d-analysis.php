<!-- 3D Analysis — mirrors app/software/page.tsx lines 201-255 -->
<section class="section section-bg-card section-border-top">
    <div class="container">
        <div class="two-col-grid">
            <!-- Content -->
            <div>
                <span class="section-label">3D Analysis</span>
                <h2 class="section-heading">Immersive 3D Flight Path Rendering</h2>
                <p class="section-text">
                    Experience your flight simulations in full 3D with photorealistic terrain rendering.
                    Our advanced visualization engine combines high-resolution elevation data with
                    satellite imagery to create an immersive analysis environment.
                </p>
                <p class="section-text">
                    Analyze trajectory characteristics, identify potential issues, and validate
                    flight corridors with geographic precision. Perfect for safety analysis,
                    range coordination, and mission briefings.
                </p>

                <div class="mt-8">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-default btn-primary">
                        See It in Action
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                </div>
            </div>

            <!-- 3D Screenshot -->
            <figure class="figure-centered">
                <div class="screenshot-frame bg-background">
                    <img
                        src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket-sw3.jpeg"
                        alt="MatRocket 3D trajectory visualization showing rocket flight path arc over Scandinavian landscape with coastline"
                    >
                    <figcaption class="sr-only">
                        MatRocket 3D visualization showing a complete sounding rocket trajectory arc rendered over photorealistic
                        Scandinavian terrain, demonstrating the ascent and descent phases of a suborbital flight.
                    </figcaption>
                </div>
            </figure>
        </div>
    </div>
</section>
