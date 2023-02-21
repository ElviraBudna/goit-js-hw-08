import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const VIDEO_PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, data.seconds);
};

function getterDataLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME);
  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  }
  return 0;
}

player.setCurrentTime(getterDataLocalStorage());
player.on('timeupdate', throttle(onPlay, 1000));
