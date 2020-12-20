#!/usr/bin/env node
/*!
@io-arc/preset-stylus
Create a preset of stylus with cli

Version: 1.0.0
License: ISC
Document: https://github.com/io-arc/preset-stylus#readme

Copyright (c) 2020 arc one
*/
"use strict";var e=require("commander"),r=require("cpx"),o=require("kleur"),t=require("path"),i=require("update-notifier");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(r),s=n(t);n(i).default({pkg:{name:"@io-arc/preset-stylus",version:"1.0.0"}}).notify(),e.program.version("1.0.0").option("-o, --overwrite","If the file has the same name, it will be overwritten.").parse(process.argv);const l=!e.program.overwrite;a.default.copy(`${s.default.dirname(__filename)}/template/**/*.styl`,"",{update:l},(e=>{if(null!=e)return console.log("Oops X("),void console.log(o.red(JSON.stringify(e)));console.log(o.green("Assets copy is done !"))}));
