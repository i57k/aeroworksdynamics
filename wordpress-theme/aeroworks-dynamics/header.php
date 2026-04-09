<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navbar -->
<header class="navbar">
    <nav class="navbar-inner">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-logo" aria-label="Aeroworks Dynamics - Home">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/awd-logo.jpeg" alt="Aeroworks Dynamics logo" width="36" height="36">
            <span class="font-display">Aeroworks Dynamics</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="navbar-links">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="<?php echo aeroworks_is_current_page('/') ? 'active' : ''; ?>">Home</a>
            <a href="<?php echo esc_url(home_url('/software/')); ?>" class="<?php echo aeroworks_is_current_page('software') ? 'active' : ''; ?>">Software</a>
            <a href="<?php echo esc_url(home_url('/hardware/')); ?>" class="<?php echo aeroworks_is_current_page('hardware') ? 'active' : ''; ?>">Hardware</a>
            <a href="<?php echo esc_url(home_url('/team/')); ?>" class="<?php echo aeroworks_is_current_page('team') ? 'active' : ''; ?>">Team</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="<?php echo aeroworks_is_current_page('contact') ? 'active' : ''; ?>">Contact</a>
        </div>

        <!-- CTA Button -->
        <div class="navbar-cta">
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-default btn-primary">Get in Touch</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-toggle" aria-label="Toggle menu" id="mobile-toggle">
            <span class="icon-menu"><?php echo aeroworks_icon('menu'); ?></span>
            <span class="icon-close" style="display:none;"><?php echo aeroworks_icon('x'); ?></span>
        </button>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="<?php echo aeroworks_is_current_page('/') ? 'active' : ''; ?>">Home</a>
            <a href="<?php echo esc_url(home_url('/software/')); ?>" class="<?php echo aeroworks_is_current_page('software') ? 'active' : ''; ?>">Software</a>
            <a href="<?php echo esc_url(home_url('/hardware/')); ?>" class="<?php echo aeroworks_is_current_page('hardware') ? 'active' : ''; ?>">Hardware</a>
            <a href="<?php echo esc_url(home_url('/team/')); ?>" class="<?php echo aeroworks_is_current_page('team') ? 'active' : ''; ?>">Team</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="<?php echo aeroworks_is_current_page('contact') ? 'active' : ''; ?>">Contact</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-default btn-primary">Get in Touch</a>
        </div>
    </div>
</header>

<main>
