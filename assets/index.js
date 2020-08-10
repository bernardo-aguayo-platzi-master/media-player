//imports 
import { MediaPlayer } from './MediaPLayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

// select video from document
const video = document.querySelector('video');

//instance new object from media player 
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()],
});

//get button ans assign toggle function
const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

//get button an assign mue and unmute function
const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}