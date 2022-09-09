<?php
$text = ($attributes['text']) ?? '';
$url = ($attributes['linkObject']['url']) ?? '';
$buttonStyle = ($attributes['buttonStyle']) ? ' usa-button--' . $attributes['buttonStyle'] : null;
$spotlightModal = ($attributes['isSpotlightModal']) ? ' aria-controls="spotlight-modal" data-open-modal id="playVideo"' : null;

echo '<a href="' . $url . '" class="usa-button' . $buttonStyle . '"' . $spotlightModal . '>' . $text . '</a>';
