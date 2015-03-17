# Shaarli Blocks

Shaarli Blocks is a theme for [Shaarli](https://github.com/shaarli/Shaarli), the famous personal, minimalist, super-fast, no-database delicious clone.

![Shaarli Blocks Screenshot 1](http://exystenz.com/files/shaarli-blocks/screen1.jpg)

![Shaarli Blocks Screenshot 2](http://exystenz.com/files/shaarli-blocks/screen2.jpg)

## Installation

### Shaarli 0.0.44b and above


### Shaarli 0.0.43b
You need to replace the line **31** of `index.php`

    $GLOBALS['config']['RAINTPL_TPL'] = 'tpl/'

by

    $GLOBALS['config']['RAINTPL_TPL'] = 'tpl/blocks/'

Then, copy the *blocks* folder in the *tpl* directory of your Shaarli install.

### Shaarli 0.0.42b and below
Upgrade to a more recent version of Shaarli and follow the steps above :)

## Demo
A read-only demo is [available here](http://exystenz.com/demo/shaarliblocks/).

------------------------------------------------------------------------------

Shaarli Blocks was tested and validated on Shaarli 0.0.45 beta.

You can download Shaarli on the project page:
[http://sebsauvage.net/wiki/doku.php?id=php:shaarli](http://sebsauvage.net/wiki/doku.php?id=php:shaarli)

And follow the development on the Github project:
[https://github.com/shaarli/Shaarli](https://github.com/shaarli/Shaarli)