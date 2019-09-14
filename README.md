## Huawei Web UI Setup
- Download the TamperMonkey extension from [here](https://www.tampermonkey.net/)
- Add a new TamperMonkey script with the following code:
```
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://192.168.8.1/*
// @resource     customCSS https://raw.githubusercontent.com/Sekams/my_settings/master/huawei_web_ui/my_theme.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("customCSS"));
})();
```
- Save the script and refresh your Huawei Web UI at `http://192.168.8.1/`