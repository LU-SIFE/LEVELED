document.addEventListener('keydown', logKey);
function logKey(e) {
    keypress = `${e.code}`;

    if (keypress == "Space") {
        if (text_progressable === true) {
            text_progressable = false;
            fade(proceed_text);
            fade(text_container);
            story_progress++;
            setTimeout(() => proceed(), 3000);
        }
    }
}