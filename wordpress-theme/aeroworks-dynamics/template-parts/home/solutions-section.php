<!-- Solutions Section — mirrors components/home/solutions-section.tsx -->
<section class="section section-bg-card section-border-top" aria-labelledby="solutions-heading">
    <div class="container">
        <!-- Section Header -->
        <header style="max-width:42rem; margin-left:auto; margin-right:auto; text-align:center;">
            <span class="section-label">Our Solutions</span>
            <h2 id="solutions-heading" class="section-heading">
                <span class="text-balance">Aerospace Hardware &amp; Software Solutions</span>
            </h2>
            <p class="section-subtitle">
                Comprehensive simulation software and hardware solutions designed for advanced aerospace development,
                testing, and validation workflows.
            </p>
        </header>

        <!-- Cards Grid -->
        <div class="solutions-grid">
            <!-- Software Card -->
            <a href="<?php echo esc_url(home_url('/software/')); ?>" class="solution-card">
                <div class="solution-card-circle orange"></div>
                <div class="solution-card-content">
                    <div class="solution-card-icon with-image">
                        <img
                            src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket_mascot_default.png"
                            alt="MatRocket Mascot"
                        >
                    </div>
                    <h3>Software Solutions</h3>
                    <p>
                        Our flagship product MatRocket delivers rapid simulation and
                        validation capabilities for aerospace engineers. Test models,
                        control systems, and algorithms against integrated flight
                        scenarios.
                    </p>
                    <div class="solution-card-link">
                        Explore MatRocket
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </div>
                </div>
            </a>

            <!-- Hardware Card -->
            <a href="<?php echo esc_url(home_url('/hardware/')); ?>" class="solution-card">
                <div class="solution-card-circle grey"></div>
                <div class="solution-card-content">
                    <div class="solution-card-icon with-svg">
                        <?php echo aeroworks_icon('cpu'); ?>
                    </div>
                    <h3>Hardware Solutions</h3>
                    <div class="badge-coming-soon">Coming Soon</div>
                    <p>
                        Our hardware division is under active development. We are
                        building physical systems designed to work seamlessly with our
                        software solutions for complete end-to-end aerospace validation.
                    </p>
                    <div class="solution-card-link">
                        Learn More
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </div>
                </div>
            </a>
        </div>
    </div>
</section>
