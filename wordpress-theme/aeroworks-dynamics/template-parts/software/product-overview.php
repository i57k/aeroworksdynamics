<!-- Product Overview — mirrors app/software/page.tsx lines 79-139 -->
<section class="section section-bg-card section-border-top">
    <div class="container">
        <div class="two-col-grid">
            <!-- Content -->
            <div>
                <span class="section-label">Product Overview</span>
                <h2 class="section-heading">From Simulation to Flight in Minimum Time</h2>
                <p class="section-text">
                    MatRocket is built for aerospace engineers who need to validate
                    ideas quickly and reliably. Our simulation platform provides the
                    comprehensive tools and accurate data you need to move from concept to reality with confidence.
                </p>
                <p class="section-text">
                    Test your vehicle models, control systems, and guidance algorithms against
                    integrated flight scenarios, with full support for hardware and
                    software peripherals. MatRocket bridges the gap between CAD design
                    and real-world deployment.
                </p>

                <ul class="checklist">
                    <?php
                    $items = array(
                        'Rapid prototyping and validation workflows',
                        'Physics-based flight simulation with real terrain',
                        'Hardware-in-the-loop testing capability',
                        'Comprehensive analytics and mission reporting',
                    );
                    foreach ($items as $item) : ?>
                    <li class="checklist-item">
                        <div class="checklist-icon"><?php echo aeroworks_icon('check'); ?></div>
                        <span><?php echo esc_html($item); ?></span>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Screenshot -->
            <figure class="figure-centered">
                <div class="screenshot-frame bg-background">
                    <img
                        src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket_software1.png"
                        alt="MatRocket geometry interface showing 3D rocket model visualization with component tree hierarchy and parameter editing panel"
                        loading="eager"
                    >
                    <figcaption class="sr-only">
                        MatRocket software interface displaying the geometry modeling tab with a 3D visualization of a sounding rocket,
                        component assembly tree, and detailed parameter configuration panel for aerospace vehicle design.
                    </figcaption>
                </div>
            </figure>
        </div>
    </div>
</section>
