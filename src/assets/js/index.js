import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.ts"

const VIDEO = document.querySelector("video");
const BUTTON = document.querySelector("#play-pause");
const SOUND = document.querySelector("#mute-unmute");

const PLAYER = new MediaPlayer({
    el: VIDEO,
    plugins: [
        new AutoPlay(), new AutoPause()
    ]
});

BUTTON.onclick = () => PLAYER.togglePlay();

SOUND.onclick = () => PLAYER.toggleMute();