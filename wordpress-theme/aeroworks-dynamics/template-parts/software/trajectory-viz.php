<!-- Trajectory Visualization — mirrors app/software/page.tsx lines 141-199 -->
<section class="section section-bg-background section-border-top">
    <div class="container">
        <div class="two-col-grid">
            <!-- Screenshot (first on desktop) -->
            <figure class="figure-centered order-lg-1">
                <div class="screenshot-frame bg-background">
                    <img
                        src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket-sw2.jpeg"
                        alt="MatRocket trajectory visualization showing rocket flight path on satellite terrain map with geoplot coordinates"
                    >
                    <figcaption class="sr-only">
                        MatRocket results interface showing a geoplot visualization of a rocket trajectory overlaid on satellite imagery,
                        displaying the complete flight path with longitude and latitude coordinates.
                    </figcaption>
                </div>
            </figure>

            <!-- Content -->
            <div class="order-lg-2">
                <span class="section-label">Flight Visualization</span>
                <h2 class="section-heading">Integrated Flight Scenario Visualization</h2>
                <p class="section-text">
                    Visualize your complete flight scenarios with integrated geoplot capabilities.
                    MatRocket renders your trajectory data over real satellite terrain imagery,
                    giving you accurate geographic context for mission planning and analysis.
                </p>
                <p class="section-text">
                    Switch between 2D geoplots, standard trajectory plots, and immersive 3D views
                    to analyze your mission from every angle. Export visualizations for reports
                    and presentations with publication-quality output.
                </p>

                <ul class="checklist">
                    <?php
                    $items = array(
                        'Real satellite terrain integration',
                        'Multiple visualization modes (Geoplot, Plot, 3D)',
                        'Coordinate display with precision',
                        'Mission configuration import/export',
                    );
                    foreach ($items as $item) : ?>
                    <li class="checklist-item">
                        <div class="checklist-icon"><?php echo aeroworks_icon('check'); ?></div>
                        <span><?php echo esc_html($item); ?></span>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</section>
