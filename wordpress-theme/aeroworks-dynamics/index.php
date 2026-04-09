<?php
/**
 * Index fallback — required by WordPress
 */
get_header(); ?>

<div class="pt-navbar">
    <section class="section section-bg-background">
        <div class="container">
            <div class="max-w-3xl mx-auto">
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <article style="margin-bottom:3rem;">
                        <h2 class="section-heading"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="section-text" style="margin-top:1rem;">
                            <?php the_excerpt(); ?>
                        </div>
                    </article>
                <?php endwhile; else : ?>
                    <p class="section-text">No content found.</p>
                <?php endif; ?>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
