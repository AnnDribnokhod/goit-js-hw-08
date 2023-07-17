import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY_VIDEEO = 'videoplayer-current-time';
const timeToPlay = localStorage.getItem(LOCAL_STORAGE_KEY_VIDEEO);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(timeToPlay);

const onPlay = throttle(function (data) {
  localStorage.setItem(LOCAL_STORAGE_KEY_VIDEEO, data.seconds);
}, 1000);
player.on('timeupdate', onPlay);
