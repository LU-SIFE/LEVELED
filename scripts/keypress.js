document.addEventListener('keydown', logKey);
function logKey(e) {
    keypress = `${e.code}`;

    if (keypress == "Escape") {
        if (pause_state) {
            pause_state = false;
            unpause_game();
        } else {
            pause_state = true;
            pause_game();
        }
    }

    if (keypress == "Space") {
        if (text_progressable) {
            if (fast_text) {
                text_progressable = false;
            } else {
                text_progressable = false;
                fade(proceed_text);
                fade(text_container);
                story_progress++;
                setTimeout(() => proceed(), 3000);
            }
        }
    }
}