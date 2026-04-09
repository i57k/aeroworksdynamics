<?php
/**
 * Template Name: Contact Page
 */
get_header(); ?>

<div class="pt-navbar">
    <!-- Contact Section -->
    <section class="page-hero">
        <div class="hero-bg">
            <div class="page-hero-grid-60"></div>
            <div class="page-hero-glow"></div>
            <div class="page-hero-glow-left"></div>
        </div>

        <div class="container relative">
            <div class="max-w-2xl">
                <span class="section-label">Contact Us</span>
                <h1 class="page-title" style="margin-top:1rem;">Let&rsquo;s Talk Aerospace</h1>
                <p class="page-description">
                    Whether you&rsquo;re interested in our simulation tools, exploring a
                    partnership, or just want to discuss aerospace innovation &mdash; we&rsquo;d
                    love to hear from you. We welcome inquiries about MatRocket,
                    partnership opportunities, and discussions about how we can help
                    accelerate your aerospace development.
                </p>

                <div class="contact-items-list">
                    <!-- Contact Email -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <?php echo aeroworks_icon('mail'); ?>
                        </div>
                        <div>
                            <p class="contact-label">Email</p>
                            <a href="mailto:contact@aeroworksdynamics.se" class="contact-value">
                                contact@aeroworksdynamics.se
                            </a>
                        </div>
                    </div>

                    <!-- LinkedIn -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <?php echo aeroworks_icon('linkedin'); ?>
                        </div>
                        <div>
                            <p class="contact-label">LinkedIn</p>
                            <a href="https://www.linkedin.com/company/aeroworks-dynamics" target="_blank" rel="noopener noreferrer" class="contact-value contact-value-linkedin">
                                <?php echo aeroworks_icon('linkedin'); ?>
                                Aeroworks Dynamics
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Direct Contact Card -->
                <div class="contact-direct-card">
                    <h3>Direct Contact</h3>
                    <div class="contact-direct-items">
                        <!-- Contact Person -->
                        <div class="contact-item">
                            <div class="contact-icon contact-icon-sm">
                                <?php echo aeroworks_icon('user'); ?>
                            </div>
                            <div>
                                <p class="contact-label">Contact Person</p>
                                <p class="contact-value contact-value-sm" style="cursor:default;">Adnan Mohammed</p>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="contact-item">
                            <div class="contact-icon contact-icon-sm">
                                <?php echo aeroworks_icon('mail'); ?>
                            </div>
                            <div>
                                <p class="contact-label">Email</p>
                                <a href="mailto:adnan@aeroworksdynamics.se" class="contact-value contact-value-sm">
                                    adnan@aeroworksdynamics.se
                                </a>
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="contact-item">
                            <div class="contact-icon contact-icon-sm">
                                <?php echo aeroworks_icon('phone'); ?>
                            </div>
                            <div>
                                <p class="contact-label">Phone</p>
                                <a href="tel:+46761817979" class="contact-value contact-value-sm">
                                    +46 76 181 79 79
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
