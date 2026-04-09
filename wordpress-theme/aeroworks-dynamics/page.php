<?php
/**
 * Generic page fallback
 */
get_header(); ?>

<div class="pt-navbar">
    <section class="section section-bg-background">
        <div class="container">
            <div class="max-w-3xl mx-auto">
                <?php while (have_posts()) : the_post(); ?>
                    <h1 class="page-title"><?php the_title(); ?></h1>
                    <div class="section-text" style="margin-top:2rem;">
                        <?php the_content(); ?>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
