//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}

document.addEventListener("DOMContentLoaded", function () {
    const trailerButtons = document.querySelectorAll(".trailer-btn");

    trailerButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const vidBox = this.closest(".content").querySelector(".vid-trailer");

            if (vidBox) {
                if (vidBox.requestFullscreen) {
                    vidBox.requestFullscreen();
                } else if (vidBox.mozRequestFullScreen) { // Firefox
                    vidBox.mozRequestFullScreen();
                } else if (vidBox.webkitRequestFullscreen) { // Chrome, Safari, Opera
                    vidBox.webkitRequestFullscreen();
                } else if (vidBox.msRequestFullscreen) { // IE/Edge
                    vidBox.msRequestFullscreen();
                }
                
                vidBox.play();
            }
        });
    });
});

   
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // Pause all audio elements
      document.querySelectorAll("audio").forEach((audio) => {
        audio.pause();
      });
  
      // Pause all video elements (if any)
      document.querySelectorAll("video").forEach((video) => {
        video.pause();
      });
    }
  });
  