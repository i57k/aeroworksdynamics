<!-- Branding CTA — mirrors app/software/page.tsx lines 259-308 -->
<section class="section section-bg-background section-border-top">
    <div class="container">
        <div class="sw-branding-cta">
            <div class="sw-branding-text">
                <h2 class="section-heading">
                    <span class="text-balance">Ready to Accelerate Your Aerospace Development?</span>
                </h2>
                <p class="section-text">
                    Join aerospace engineers who trust MatRocket to validate their concepts
                    and bring their ideas to flight. Contact us to learn how MatRocket can
                    transform your development workflow.
                </p>
                <div class="sw-branding-actions">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-primary">
                        Request a Demo
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/team/')); ?>" class="btn btn-lg btn-outline">
                        Meet Our Team
                    </a>
                </div>
            </div>

            <figure class="sw-branding-image">
                <img
                    src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket-mascot.jpeg"
                    alt="MatRocket mascot - astronaut character with rocket symbolizing the journey from simulation to flight"
                >
                <figcaption class="sr-only">
                    MatRocket branding illustration featuring an astronaut mascot character alongside a rocket,
                    representing the software's mission to help engineers go from simulation to actual flight.
                </figcaption>
            </figure>
        </div>
    </div>
</section>
