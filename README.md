# Shaarli Blocks

Shaarli Blocks is a theme for [Shaarli](https://github.com/shaarli/Shaarli), the famous personal, minimalist, super-fast, no-database delicious clone.

![Shaarli Blocks Screenshot 1](http://exystenz.com/files/shaarli-blocks/screen1.jpg)
![Shaarli Blocks Screenshot 2](http://exystenz.com/files/shaarli-blocks/screen2.jpg)

## Installation

### Shaarli 0.0.43b and above
Download the `blocks` folder into the `tpl` directory of your Shaarli installation. It should be next to existing `.html` files.

In your Shaarli installation, open the `options.php` file which is inside the `data` folder. If it doesn't exist, create it.
If you created it, ensure the content of the file starts with `<?php`.

At the bottom of the file, add the following lines:

```php
$GLOBALS['config']['RAINTPL_TPL'] = 'tpl/blocks/' ; // keep the trailing slash!
```

Access your Shaarli and enjoy your new Blocks theme.

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