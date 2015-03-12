# Shaarli Blocks

Shaarli Blocks is a theme for [Shaarli](https://github.com/shaarli/Shaarli), the famous personal, minimalist, super-fast, no-database delicious clone.

![Shaarli Blocks Screenshot 1](http://exystenz.com/files/shaarli-blocks/screen1.jpg)

![Shaarli Blocks Screenshot 2](http://exystenz.com/files/shaarli-blocks/screen2.jpg)

## Installation

### Shaarli 0.43b and above
You need to replace the line **31** of `index.php`

    $GLOBALS['config']['RAINTPL_TPL'] = 'tpl/'

by

    $GLOBALS['config']['RAINTPL_TPL'] = 'tpl/blocks/'

Then, copy the *blocks* folder in the *tpl* directory of your Shaarli install.

### Shaarli 0.42b and below
First, go to the [master branch](https://github.com/kalvn/shaarli-blocks/tree/master) and download it. Then paste the content in your Shaarli main folder. Override existing files when asked to.

## Demo
A read-only demo is available on my personal Shaarli : [http://exystenz.com/links](http://exystenz.com/links)

------------------------------------------------------------------------------

Shaarli Blocks was tested and validated on Shaarli 0.0.41 beta.

You can download Shaarli on the project page:
[http://sebsauvage.net/wiki/doku.php?id=php:shaarli](http://sebsauvage.net/wiki/doku.php?id=php:shaarli)

And follow the development on the Github project:
[https://github.com/shaarli/Shaarli](https://github.com/shaarli/Shaarli)