#!/usr/bin/env node
/*!
io-arc - preset-stylus
Create a preset of stylus with cli

https://github.com/io-arc/preset-stylus#readme
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";var e=require("update-notifier"),r=require("commander");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}t(e).default({pkg:{name:"@io-arc/preset-stylus",version:"0.0.0"}}).notify(),r.program.version("0.0.0").parse(process.argv);
