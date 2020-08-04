const VIDEO = document.querySelector("video");
const BUTTON = document.querySelector("button");

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    (this.media.paused) ? this.play(): this.pause()
}

const PLAYER = new MediaPlayer({
    el: VIDEO
});

BUTTON.onclick = () => PLAYER.togglePlay();