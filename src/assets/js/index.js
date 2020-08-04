import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"

const VIDEO = document.querySelector("video");
const BUTTON = document.querySelector("#play-pause");
const SOUND = document.querySelector("#mute-unmute");

const PLAYER = new MediaPlayer({
    el: VIDEO,
    plugins: [
        new AutoPlay()
    ]
});

BUTTON.onclick = () => PLAYER.togglePlay();

SOUND.onclick = () => PLAYER.toggleMute();