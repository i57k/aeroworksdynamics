<?php
/**
 * Template Name: Team Page
 */
get_header(); ?>

<div class="pt-navbar">
    <!-- Hero Section -->
    <section class="page-hero">
        <div class="hero-bg">
            <div class="page-hero-grid-60"></div>
            <div class="page-hero-glow"></div>
        </div>

        <div class="container relative">
            <div class="max-w-3xl mx-auto text-center">
                <span class="section-label">Our Team</span>
                <h1 class="page-title" style="margin-top:1rem;">The Engineers Behind Aeroworks</h1>
                <p class="page-description">
                    A team of dedicated engineers with a shared passion for advancing
                    aerospace technology and pushing the boundaries of flight.
                </p>
            </div>
        </div>
    </section>

    <!-- Team Grid -->
    <section class="section section-bg-card section-border-top">
        <div class="container">
            <div class="team-grid-3">
                <?php
                $team = array(
                    array(
                        'name' => 'Adnan Mohammed',
                        'role' => 'Chief Executive Officer',
                        'initials' => 'AM',
                        'linkedin' => 'https://www.linkedin.com/in/adnan-mohammed-885143338/',
                        'description' => 'Leading Aeroworks Dynamics with a vision to transform aerospace development through innovative software and hardware solutions.',
                    ),
                    array(
                        'name' => 'Vilgot Lötberg',
                        'role' => 'Chief Technology Officer',
                        'initials' => 'VL',
                        'linkedin' => 'https://www.linkedin.com/in/vilgot-l%C3%B6tberg-7b4902294/',
                        'description' => 'Driving technical innovation and leading the development of MatRocket and our core technology stack.',
                    ),
                    array(
                        'name' => 'Samuel Hedin',
                        'role' => 'Chief Operating Officer',
                        'initials' => 'SH',
                        'linkedin' => 'https://www.linkedin.com/in/samuel-hedin-6bb87115b/',
                        'description' => 'Ensuring operational excellence and building the infrastructure to scale our aerospace solutions.',
                    ),
                );
                foreach ($team as $member) : ?>
                <div class="team-card team-card-lg">
                    <div class="team-card-avatar">
                        <span><?php echo esc_html($member['initials']); ?></span>
                    </div>
                    <h2><?php echo esc_html($member['name']); ?></h2>
                    <p class="role"><?php echo esc_html($member['role']); ?></p>
                    <p class="description"><?php echo esc_html($member['description']); ?></p>
                    <a href="<?php echo esc_url($member['linkedin']); ?>" target="_blank" rel="noopener noreferrer" class="linkedin-link">
                        <?php echo aeroworks_icon('linkedin'); ?>
                        Connect on LinkedIn
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="section section-bg-background section-border-top">
        <div class="container">
            <div class="max-w-2xl mx-auto text-center">
                <span class="section-label">Our Values</span>
                <h2 class="section-heading">What Drives Us</h2>
            </div>

            <div class="values-grid">
                <?php
                $values = array(
                    array(
                        'title' => 'Technical Excellence',
                        'description' => 'We hold ourselves to the highest engineering standards. Every solution we build is designed with precision and care.',
                    ),
                    array(
                        'title' => 'Innovation First',
                        'description' => "We push boundaries and challenge conventions. Our goal is to create tools that redefine what's possible in aerospace.",
                    ),
                    array(
                        'title' => 'Collaboration',
                        'description' => 'We believe in the power of working together - with our team, our customers, and the broader aerospace community.',
                    ),
                );
                foreach ($values as $value) : ?>
                <div class="value-card">
                    <h3><?php echo esc_html($value['title']); ?></h3>
                    <p><?php echo esc_html($value['description']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Join Us Section -->
    <section class="section section-bg-card section-border-top">
        <div class="container">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="section-heading">
                    <span class="text-balance">Join Our Mission</span>
                </h2>
                <p class="section-text">
                    We&rsquo;re always looking for talented engineers who share our passion
                    for aerospace innovation. If you&rsquo;re interested in shaping the
                    future of flight, we&rsquo;d love to hear from you.
                </p>

                <div class="mt-10" style="display:flex; justify-content:center;">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-lg btn-primary">
                        Get in Touch
                        <?php echo aeroworks_icon('arrow-right'); ?>
                    </a>
                </div>

                <div class="mt-10" style="display:flex; justify-content:center; margin-top: 4rem;">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/matrocket_mascot2.png" alt="Aeroworks Dynamics Mascot" style="max-width: 250px; height: auto;">
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
