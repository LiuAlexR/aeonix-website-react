    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if(isIOS) {
        var CanvasVideoPlayer: any;

        new CanvasVideoPlayer({
            videoSelector: '.video',
            canvasSelector: '.canvas',
            timelineSelector: false,
            autoplay: true,
            makeLoop: true,
            pauseOnClick: false,
            audio: false
        })
    } else {
        document.querySelectorAll('.canvas')[0].setAttribute("style", "display:none;");
    }