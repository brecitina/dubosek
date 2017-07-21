var sliders = document.getElementsByName('toggle');

function changeSlide() {
  for (var idx = 0; idx < sliders.length; idx++) 
  {
    if (sliders[idx].checked) {
      idx++;
      if (idx >= sliders.length) {
        idx = 0; 
      }
      sliders[idx].checked = true; 
      break;
    }
  }
  setTimeout(changeSlide, 5000);
}

setTimeout(changeSlide, 5000);

var sizes = document.querySelectorAll('.btn--size-value'); 
var image = document.querySelector('.item__image'); 

function changeSize(size) { 
  image.src = size.getAttribute("data-adress");
  image.width = size.getAttribute("data-img-width");
  image.height = size.getAttribute("data-img-height");
} 

function clickSize(size) { 
    size.addEventListener('click', function() { 
    changeSize(size); 
  }); 
} 

for (var i = 0; i < sizes.length; i++) { 
  clickSize(sizes[i]); 
};