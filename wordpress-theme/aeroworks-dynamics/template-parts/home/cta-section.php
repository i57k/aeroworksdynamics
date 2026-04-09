<!-- CTA Section — mirrors components/home/cta-section.tsx -->
<section class="section section-bg-card section-border-top cta-section" aria-labelledby="cta-heading">
    <div class="cta-glow"></div>
    <div class="container relative">
        <div class="max-w-2xl mx-auto text-center">
            <h2 id="cta-heading" class="section-heading-xl">
                <span class="text-balance">Ready to Accelerate Your Aerospace Development?</span>
            </h2>
            <p class="section-text">
                Whether you&rsquo;re looking to validate a new aerospace concept with MatRocket, integrate our
                simulation tools into your workflow, or explore a partnership opportunity, we&rsquo;d love to hear from
                you. Contact our team to discuss how Aeroworks Dynamics can support your mission.
            </p>

            <div class="cta-actions">
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-primary">
                    Get in Touch
                    <?php echo aeroworks_icon('arrow-right'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/software/')); ?>" class="btn btn-lg btn-outline">
                    Explore MatRocket
                </a>
            </div>

            <p class="cta-email">
                Contact us at
                <a href="mailto:contact@aeroworksdynamics.se">contact@aeroworksdynamics.se</a>
            </p>
        </div>
    </div>
</section>
