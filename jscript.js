const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let pos = 0;

function changeSlide() {

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[pos].style.display = 'block';

}
changeSlide();

function prevSlide() {
          
       if(pos > 0){
           pos--;
       }
       else
         pos = imgs.length -1 ;

      changeSlide();
}
function nextSlide() {
    if(pos < imgs.length - 1){
        pos++;
    }
    else
      pos = 0;

   changeSlide();
}

prev_btn.addEventListener('click',prevSlide);
next_btn.addEventListener('click',nextSlide);



