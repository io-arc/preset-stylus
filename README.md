# preset-stylus

Assets preset for stylus.

## Install

```shell
$ npm i -g @io-arc/preset-stylus

# yarn
$ yarn global add @io-arc/preset-stylus
```

## Usage

Just type a command in the directory where you want to expansion.  
If you want to extract into `<project>/src/css`.

```shell
$ cd <project>/src/css
$ preset-stylus
```

By default, if a file with the same name exists, it will be skipped.  
The following parameter will delete and overwrite the existing file with the same name.

```shell
# overwrite the file
$ preset-stylus --overwrite
# or
$ preset-stylus -o
```

## Variables

Create a variable file by purpose.  
[assets/const/\_xxx.styl](bin/template/assets/const).

## Utility classes

### margin, padding

File: [components/utility/\_space.styl](bin/template/components/utility/_space.styl)

Margin and padding classes.  
`.ma-{n}`, `.mt-{n}` ...

`{n}` is `0` to `24`.  
Calculate the radix multiplied by `$spacer`.

`$spacer` is [assets/const/\_space.styl](bin/template/assets/const/_space.styl).

Example `$spacer` is `4px`.  
`.ma-0` is `margin: 0;`.  
`.ma-1` is `margin: 4px;`

#### Default

| classes   | property         |
| --------- | ---------------- |
| `.ma-{n}` | `margin`         |
| `.mt-{n}` | `margin-top`     |
| `.mb-{n}` | `margin-bottom`  |
| `.ml-{n}` | `margin-left`    |
| `.mr-{n}` | `margin-right`   |
| `.pa-{n}` | `padding`        |
| `.pt-{n}` | `padding-top`    |
| `.pb-{n}` | `padding-bottom` |
| `.pl-{n}` | `padding-left`   |
| `.pr-{n}` | `padding-right`  |

#### Medium viewport

| classes     | property         |
| ----------- | ---------------- |
| `.m-ma-{n}` | `margin`         |
| `.m-mt-{n}` | `margin-top`     |
| `.m-mb-{n}` | `margin-bottom`  |
| `.m-ml-{n}` | `margin-left`    |
| `.m-mr-{n}` | `margin-right`   |
| `.m-mr-{n}` | `margin-right`   |
| `.m-pa-{n}` | `padding`        |
| `.m-pt-{n}` | `padding-top`    |
| `.m-pb-{n}` | `padding-bottom` |
| `.m-pl-{n}` | `padding-left`   |
| `.m-pr-{n}` | `padding-right`  |

#### Small viewport

| classes     | property         |
| ----------- | ---------------- |
| `.s-ma-{n}` | `margin`         |
| `.s-mt-{n}` | `margin-top`     |
| `.s-mb-{n}` | `margin-bottom`  |
| `.s-ml-{n}` | `margin-left`    |
| `.s-mr-{n}` | `margin-right`   |
| `.s-mr-{n}` | `margin-right`   |
| `.s-pa-{n}` | `padding`        |
| `.s-pt-{n}` | `padding-top`    |
| `.s-pb-{n}` | `padding-bottom` |
| `.s-pl-{n}` | `padding-left`   |
| `.s-pr-{n}` | `padding-right`  |

## Mixins

### `responsive-view($child, $left, $right)`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Make inline frames such as YouTube responsive.

| params   | type   | description      |
| -------- | ------ | ---------------- |
| `$child` | string | class name or id |
| `$left`  | number | ratio            |
| `$right` | number | ratio            |

```stylus
.iframe
  responsive-view('.iframe-container', 16, 9)
```

Compile to:

```css
.iframe {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.iframe-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### `placeholder-color($color)`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Placeholder color in the input tag.

| params   | type | description       |
| -------- | ---- | ----------------- |
| `$color` | hex  | placeholder color |

## `safe-area($type)`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Safe area settings for iPhone X, etc.

| params  | type                                   | description  |
| ------- | -------------------------------------- | ------------ |
| `$type` | `top` or `bottom` or `left` or `right` | padding type |

```stylus
.safe-area
  safe-area(top)
```

Compile to:

```css
.safe-area {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
```

### `vertical-rythum($level, $fz, $lh)`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Configuration using vertical rhythm.

| params   | type   | description           |
| -------- | ------ | --------------------- |
| `$level` | number | multiple              |
| `$fz`    | number | font size (px)        |
| `$lh`    | number | base of the line (px) |

```stylus
.vr
  line-height: vertical-rhythm(1, 16, 24)
```

Compile to:

```css
.vr {
  line-height: 1.5;
}
```

### `line-height-crop($lh)`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Cut off the top and bottom margins of the line-height.

| params | type     | description       |
| ------ | -------- | ----------------- |
| `$lh`  | `number` | line-height value |

```stylus
.foo
  font-size: 20px
  line-height: 1.5
  line-height-crop(1.5)

.bar
  font-size: 20px
  line-height: 30px
  line-height-crop(30 / 20)
```

Compile to:

```css
.foo {
  font-size: 20px;
  line-height: 1.5;
}
.foo::before {
  display: block;
  content: '';
  width: 0;
  height: 0;
  margin-top: calc((1 - 1.5) * 0.5em);
}
.foo::after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  margin-bottom: calc((1 - 1.5) * 0.5em);
}

.bar {
  font-size: 20px;
  line-height: 30px;
}
.bar::before {
  display: block;
  content: '';
  width: 0;
  height: 0;
  margin-top: calc((1 - 1.5) * 0.5em);
}
.bar::after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  margin-bottom: calc((1 - 1.5) * 0.5em);
}
```

### `default-font-size-large()`, `default-font-size-medium()`, `default-font-size-small()`

File: [assets/mixins/\_chore.styl](bin/template/assets/mixins/_chore.styl)

Default settings for font size and line-height.

### `min-max-large-size($min, $max)`, `min-max-medium-size($min, $max)`, `min-max-small-size($min, $max)`

Range of size value (font-size, padding, margin etc.)  
\* Using `clamp` that not available for IE

| params   | type     | description           |
| -------- | ------   | --------------------- |
| `$min`   | `string` | min size              |
| `$max`   | `string` | max size              |

```stylus
.size
  font-size: min-max-large-size(12px, 20px)
```

Compile to:

```css
.size {
  font-size: clamp(14px, 0.875rem + ((1vw - 7.56px) * 1.2821), 18px);
}
```

File: [assets/mixins/\_size.styl](bin/template/assets/mixins/_size.styl)

## Others

- [Images operation](docs/usage-image.md)
