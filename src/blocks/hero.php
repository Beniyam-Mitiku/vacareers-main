<?php
$bgImageUrl = ($attributes['bgImageUrl']) ?? '';
$bgVideoUrl = ($attributes['bgVideoUrl']) ?? '';
?>
<section class="hero flex-vcenter vh-80 bg-darker usa-dark-background" style="background-image:url(<?php echo $bgImageUrl; ?>)">
    <div class="grid-container">
        <div class="grid-row">
            <div class="desktop:grid-col-6">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
    <?php if (is_front_page() && $bgVideoUrl) : ?>
        <video autoplay muted loop class="video-bg" id="heroBgVideo" poster="<?php echo $bgImageUrl; ?>">
            <source src="<?php echo $bgVideoUrl; ?>" type="video/mp4">
        </video>
    <?php endif; ?>
</section>