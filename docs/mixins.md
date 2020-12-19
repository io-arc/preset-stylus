# Mixins

[Here](docs/usage-image.md) for image relations.

## `responsive-view($child, $left, $right)`

File: [assets/mixins/\_chore.styl](template/assets/mixins/_chore.styl)

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

## `placeholder-color($color)`

File: [assets/mixins/\_chore.styl](template/assets/mixins/_chore.styl)

Placeholder color in the input tag.

| params   | type | description       |
| -------- | ---- | ----------------- |
| `$color` | hex  | placeholder color |

## `safe-area($type)`

File: [assets/mixins/\_chore.styl](template/assets/mixins/_chore.styl)

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

## `vertical-rythum($level, $fz, $lh)`

File: [assets/mixins/\_chore.styl](template/assets/mixins/_chore.styl)

Configuration using vertical rhythm.

| params   | type   | description           |
| -------- | ------ | --------------------- |
| `$level` | number | multiple              |
| `$fz`    | number | font size (px)        |
| `$lh`    | number | base of the line (px) |

```stylus
.vr
  line-height: vertical-rhythm(1, 16, 26)
```

Compile to:

```css
.vr {
  line-height: 1.625;
}
```

## `default-font-size-large()`, `default-font-size-medium()`, `default-font-size-small()`

File: [assets/mixins/\_chore.styl](template/assets/mixins/_chore.styl)

Default settings for font size and line-height.
