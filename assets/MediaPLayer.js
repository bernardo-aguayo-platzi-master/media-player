export class MediaPlayer {
    //constructor
    /**
     * 
     * @param {config} config 
     */
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }

    //init plugins to media player
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }

    //play video
    play() {
        this.media.play();
    }

    //pause video
    pause() {
        this.media.pause();
    }

    //toggle function
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    //mute video
    mute() {
        this.media.muted = true;
    }

    //unmute video
    unmute() {
        this.media.muted = false;
    }
}