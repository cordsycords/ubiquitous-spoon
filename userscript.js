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
