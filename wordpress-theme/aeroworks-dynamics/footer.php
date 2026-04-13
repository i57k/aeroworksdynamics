</main>

<!-- Footer -->
<footer class="footer">
    <div class="container footer-inner">
        <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-logo" aria-label="Aeroworks Dynamics - Home">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/awd_logo.jpeg" alt="Aeroworks Dynamics logo" width="36" height="36">
                    <span class="font-display">Aeroworks Dynamics</span>
                </a>
                <p>Aeroworks Dynamics AB specializes in aerospace hardware and software solutions. From simulation to flight, we accelerate your aerospace development.</p>
            </div>

            <!-- Navigation -->
            <div>
                <h3 class="footer-heading">Navigation</h3>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/software/')); ?>">Software</a></li>
                    <li><a href="<?php echo esc_url(home_url('/hardware/')); ?>">Hardware</a></li>
                    <li><a href="<?php echo esc_url(home_url('/team/')); ?>">Team</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="footer-heading">Contact</h3>
                <ul class="footer-links">
                    <li><a href="mailto:contact@aeroworksdynamics.se">contact@aeroworksdynamics.se</a></li>
                </ul>
                <p class="footer-direct-label">Direct Contact</p>
                <ul class="footer-direct-links">
                    <li><a href="mailto:adnan@aeroworksdynamics.se" class="footer-links">adnan@aeroworksdynamics.se</a></li>
                    <li><a href="tel:+46761817979" class="footer-links">+46 76 181 79 79</a></li>
                </ul>
            </div>
        </div>

        <!-- Bottom -->
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Aeroworks Dynamics AB. All rights reserved.</p>
            <div class="footer-bottom-links">
                <a href="<?php echo esc_url(home_url('/contact/')); ?>">Privacy Policy</a>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
