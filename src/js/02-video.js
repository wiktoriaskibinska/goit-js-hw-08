// import
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// selecting elements 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// function which gets current time of video and sets it in localStorage
function onPlay() {
    player.getCurrentTime().then(seconds => {
        localStorage.setItem('videoplayer-current-time', seconds)
    })
}; 

//alternative function (it uses 'seconds' property from timeupdate event)
/*function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
*/

// watching time update
player.on('timeupdate', throttle(onPlay, 1000))  
 
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//

 