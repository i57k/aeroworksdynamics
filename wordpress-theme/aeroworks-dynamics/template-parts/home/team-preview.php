<!-- Team Preview — mirrors components/home/team-preview.tsx -->
<section class="section section-bg-background section-border-top" aria-labelledby="team-preview-heading">
    <div class="container">
        <!-- Header Row -->
        <div class="team-header">
            <header class="team-header-text">
                <span class="section-label">Our Founding Team</span>
                <h2 id="team-preview-heading" class="section-heading">
                    <span class="text-balance">The Engineers Behind Aeroworks Dynamics</span>
                </h2>
                <p class="section-subtitle">
                    A team of dedicated Swedish engineers with a shared passion for advancing
                    aerospace technology and bringing innovative simulation solutions to market.
                </p>
            </header>
            <a href="<?php echo esc_url(home_url('/team/')); ?>" class="btn btn-default btn-outline">
                Meet the Full Team
                <?php echo aeroworks_icon('arrow-right'); ?>
            </a>
        </div>

        <!-- Team Cards -->
        <div class="team-grid">
            <?php
            $team = array(
                array('name' => 'Adnan Mohammed', 'role' => 'Chief Executive Officer', 'initials' => 'AM', 'linkedin' => 'https://www.linkedin.com/in/adnan-mohammed-885143338/'),
                array('name' => 'Vilgot Lötberg', 'role' => 'Chief Technology Officer', 'initials' => 'VL', 'linkedin' => 'https://www.linkedin.com/in/vilgot-l%C3%B6tberg-7b4902294/'),
                array('name' => 'Samuel Hedin', 'role' => 'Chief Operating Officer', 'initials' => 'SH', 'linkedin' => 'https://www.linkedin.com/in/samuel-hedin-6bb87115b/'),
            );
            foreach ($team as $member) : ?>
            <div class="team-card">
                <div class="team-card-avatar">
                    <span><?php echo esc_html($member['initials']); ?></span>
                </div>
                <h3><?php echo esc_html($member['name']); ?></h3>
                <p class="role"><?php echo esc_html($member['role']); ?></p>
                <a href="<?php echo esc_url($member['linkedin']); ?>" target="_blank" rel="noopener noreferrer" class="linkedin-link">
                    <?php echo aeroworks_icon('linkedin'); ?>
                    LinkedIn
                </a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
