function play(video) {
    if (document.getElementById(video).paused) {
        document.getElementById(video).play();
    } else {
        document.getElementById(video).pause();
    }
}

function stopped(video) {
    document.getElementById(video).pause();
    document.getElementById(video).currentTime = 0;
}

function skipped(value, video) {
    document.getElementById(video).currentTime += value;
}


