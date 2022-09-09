<?php
$fallbackImageUrl = ($attributes['fallbackImageUrl']) ?? '';
$bgVideoUrl = ($attributes['bgVideoUrl']) ?? '';
$fullVideoEmbed = ($attributes['fullVideoEmbed']) ?? '';
$videoId = (basename(parse_url($fullVideoEmbed, PHP_URL_PATH))) ?? '';
?>
<section class="spotlight flex-vcenter">
    <div class="grid-container">
        <div class="grid-row">
            <div class="desktop:grid-col-6 desktop:grid-offset-6">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
    <video autoplay muted loop class="video-bg" id="spotlightBgVideo" poster="<?php echo $fallbackImageUrl; ?>">
        <source src="<?php echo $bgVideoUrl; ?>" type="video/mp4">
    </video>
    <div class="usa-modal" id="spotlight-modal">
        <div class="spotlight-modal-content">
            <div id="player"></div>
            <script>
                // This code loads the IFrame Player API code asynchronously.
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";

                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                let player;

                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        height: '100%',
                        width: '100%',
                        videoId: '<?php echo $videoId ?>',
                        playerVars: {
                            'playsinline': 1
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }

                function onPlayerReady(event) {
                    // Start video when modal open button is pressed
                    var playButton = document.getElementById("playVideo");
                    playButton?.addEventListener("click", () => player.playVideo());
                }

                // API calls this function when the player's state changes.
                function onPlayerStateChange(event) {

                }

                window.onload = () => {
                    // Select the node that will be observed for mutations
                    const targetNode = document.getElementById('spotlight-modal');

                    // Options for the observer (which mutations to observe)
                    const config = {
                        attributes: true,
                    };

                    // Callback function to execute when mutations are observed
                    function callback(mutationList, observer) {
                        for (const mutation of mutationList) {
                            // Pause video when modal is closed
                            player.pauseVideo();
                        }
                    };

                    // Create an observer instance linked to the callback function
                    const observer = new MutationObserver(callback);

                    // Start observing the target node for configured mutations
                    observer.observe(targetNode, config);

                    // // Later, you can stop observing
                    // observer.disconnect();
                };
            </script>
        </div>
        <button class="usa-button usa-modal__close" aria-label="Close this window" data-close-modal>
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="<?php echo get_stylesheet_directory_uri() . '/assets/img/sprite.svg#close' ?>"></use>
            </svg>
        </button>
    </div>
</section>