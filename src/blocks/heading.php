<?php
switch ($attributes['size']) {
    case 'h1':
        $tag = 'h1';
        break;
    case '':
    case 'h2':
        $tag = 'h2';
        break;
    case 'h3':
        $tag = 'h3';
        break;
}
$text = ($attributes['text']) ?? '';
$lineColor = ($attributes['lineColor']) ? ' heading--' . $attributes['lineColor'] : null;

echo '<' . $tag . ' class="heading' . $lineColor . '">' . $text . '</' . $tag . '>';
