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

See [document](docs/mixins.md).
