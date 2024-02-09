// ==UserScript==
// @name         Hide Post Button AO3
// @namespace    http://tampermonkey.net/
// @version      2024-02-07
// @description  try to take over the world!
// @author       You
// @match        https://archiveofourown.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const postButtons = document.querySelectorAll("[name='post_button']");
    postButtons.forEach((button) => {
        button.style.display = 'none';
    });

    const chapterPostButtons = document.querySelectorAll("[name='commit']");

    chapterPostButtons.forEach((button) => {
        button.style.display = 'none';
    });

    const otherPostButtons = document.querySelectorAll("[name='post_without_preview_button']");

    chapterPostButtons.forEach((button) => {
        button.style.display = 'none';
    });
})();
