import MediaPlayer from "./mediaPlayer.js"

const VIDEO = document.querySelector("video");
const BUTTON = document.querySelector("button");

const PLAYER = new MediaPlayer({
    el: VIDEO
});

BUTTON.onclick = () => PLAYER.togglePlay();