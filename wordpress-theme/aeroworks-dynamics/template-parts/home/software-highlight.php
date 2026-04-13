<!-- Software Highlight — mirrors components/home/software-highlight.tsx -->
<section class="section section-bg-background section-border-top sw-highlight" aria-labelledby="software-heading">
    <div class="sw-highlight-glow"></div>
    <div class="container relative">
        <div class="two-col-grid">
            <!-- Content -->
            <div>
                <span class="section-label">Featured Product</span>
                <h2 id="software-heading" class="section-heading-xl">MatRocket</h2>
                <p class="section-text">
                    MatRocket is your complete simulation platform for aerospace
                    development. Designed to take your idea from simulation to air in
                    minimum time, MatRocket provides the accurate data you need to validate
                    concepts quickly and reliably.
                </p>
                <p class="section-text">
                    Test your vehicle models, control systems, and guidance algorithms against
                    integrated flight scenarios, with full support for hardware and
                    software peripherals. MatRocket bridges the gap between CAD design and
                    real-world deployment.
                </p>
                <div class="mt-8">
                    <a href="<?php echo esc_url(home_url('/software/')); ?>" class="btn btn-default btn-primary">
                        Learn More About MatRocket
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                </div>
            </div>

            <!-- Screenshot -->
            <figure class="figure-centered">
                <div class="screenshot-frame bg-card">
                    <img
                        src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket_software1.png"
                        alt="MatRocket software interface showing 3D rocket model in the geometry tab with component hierarchy and parameter editing"
                    >
                    <figcaption class="sr-only">
                        MatRocket aerospace simulation software displaying a 3D visualization of a sounding rocket with component tree navigation and detailed parameter configuration panel.
                    </figcaption>
                </div>
            </figure>
        </div>
    </div>
</section>
