# Images

Automatically generates background-image associations for each viewport.  
It is assumed to display only images using the background in figure tag, etc.

## Variables

File: [assets/const/\_image.styl](../bin/template/assets/const/_image.styl)

| variable               | description                      |
| ---------------------- | -------------------------------- |
| `$image-large-suffix`  | Large viewport file suffix       |
| `$image-medium-suffix` | Medium viewport file suffix      |
| `$image-small-suffix`  | Small viewport file suffix       |
| `$image-retina-suffix` | Retina file identification       |
| `$image-suffix-pipe`   | Connecting file names and suffix |

### example

```text
/img/
  ├ foo_large.png
  ├ foo_large@2x.png
  ├ foo_medium.png
  ├ foo_medium@2x.png
  ├ foo_small.png
  └ foo_small@2x.png
```

The file name can be broken down as follows.  
foo[`$image-suffix-pipe`][`$image-(large|medium|small)-suffix`][`$imaage-retina-suffix`].png

```stylus
$image-large-suffix = 'large'
$image-medium-suffix = 'medium'
$image-small-suffix = 'small'
$image-retina-suffix = '@2x'
$image-suffix-pipe = '_'
```

## Mixins

File: [assets/mixins/\_background-images.styl](../bin/template/assets/mixins/_background-images.styl)

### `background-images($target)`

Generate a background-image relationship for each viewport and retina.

| params    | type   | description                                         |
| --------- | ------ | --------------------------------------------------- |
| `$target` | string | Specify the file path of the image minus the suffix |

```stylus
figure.bar
  background-images('../img/foo.png')
```

Compile to:

```css
figure.bar {
  background-repeat: no-repeat;
  width: 234px;
  height: 70px;
  background-size: 234px 70px;
  background-image: url(/img/foo_large.png);
}

@media only screen and (max-width: 1068px) {
  figure.bar {
    background-repeat: no-repeat;
    width: 188px;
    height: 56px;
    background-size: 188px 56px;
    background-image: url(/img/foo_medium.png);
  }
}

@media only screen and (max-width: 756px) {
  figure.bar {
    background-repeat: no-repeat;
    width: 188px;
    height: 56px;
    background-size: 188px 56px;
    background-image: url(/img/foo_small.png);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-resolution: 1.5dppx),
  (-webkit-min-device-pixel-ratio: 1.5),
  (min-resolution: 144dpi) {
  figure.foo {
    background-size: 234px 70px;
    background-image: url(/img/foo_large@2x.png);
  }
}

@media only screen and (max-width: 1068px) and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (max-width: 1068px) and (min-resolution: 1.5dppx),
  only screen and (max-width: 1068px) and (min-resolution: 144dpi) {
  figure.foo {
    background-size: 188px 56px;
    background-image: url(/img/foo_medium@2x.png);
  }
}

@media only screen and (max-width: 756px) and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (max-width: 756px) and (min-resolution: 1.5dppx),
  only screen and (max-width: 756px) and (min-resolution: 144dpi) {
  figure.foo {
    background-size: 188px 56px;
    background-image: url(/img/foo_small@2x.png);
  }
}
```

### `bg($target, $suffix = '')`

Normal background-image specification.  
Also used in `background-images`.

| params    | type   | description                                         |
| --------- | ------ | --------------------------------------------------- |
| `$target` | string | Specify the file path of the image minus the suffix |
| `$suffix` | string | If omitted, the suffix will be ignored              |

### `bg-retina($target, $suffix = '', $retina = $image-retina-suffix)`

Retina background-image specification.  
Also used in `background-images`.

| params    | type   | description                                                              |
| --------- | ------ | ------------------------------------------------------------------------ |
| `$target` | string | Specify the file path of the image minus the suffix                      |
| `$suffix` | string | If omitted, the suffix will be ignored                                   |
| `$retina` | string | Retina image identifier.<br>If it is omitted, use `$image-retina-suffix` |

### `image-file-path($target, $suffix = '')`

Add a suffix to the specified file name.

| params    | type   | description                                         |
| --------- | ------ | --------------------------------------------------- |
| `$target` | string | Specify the file path of the image minus the suffix |
| `$suffix` | string | If omitted, the suffix will be ignored              |

```stylus
$img = image-file-path('../img/logo.png', 'large')
// -> '../img/logo_large.png'
```
