import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

try {
    const startTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(startTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

  } catch (error) {
    console.error("Set state error: ", error.message);
  }

    player.on('timeupdate', onPlayDuration);

    function onPlayDuration(evt) {
        try {
            let videoTimePosition = String(evt.seconds);
            localStorage.setItem("videoplayer-current-time", videoTimePosition);
          } catch (error) {
            console.error("Set state error: ", error.message);
          }


    }

