export var wordArray = ["home"];

// Url Change

export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    console.log(hashTag + ' ' + pageID);
    
    if (pageID != '') {
    $.get(`pages/${pageID}.html`, function (data) {
     console.log('data ' + data);
     $('#app').html(data);
    });
    } else {
    $.get(`pages/home.html`, function (data) {
    console.log('data ' + data);
     $('#app').html(data);
    });
    }
};

// slideshow

// export let slideIndex = 0;

// export function showSlides() {
//   let i;
//   let slides = $.get("mySlides");
//   let dots = $.get("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// showSlides();

// $(function() {
//     $('.gallery-slideshow').slideshow({
//       // default: 2000
//       interval: 3000,
//       // default: 500
//       // width: 600,
//       // default: 350
//       // height: 400
//     });
//   });

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next(500)
  .fadeIn(1000)
  .end(500)
  .appendTo('#slideshow');
}, 3000);
  