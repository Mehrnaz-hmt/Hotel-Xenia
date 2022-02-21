
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
            $('slider ul').css('width','v')
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});  

//-----------------Room Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
//--------------table jquery
$('table tr').each(function(){
  $(this).find('th').first().addClass('first');
  $(this).find('th').last().addClass('last');
  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');
});
$('table tr').first().addClass('row-first');
$('table tr').last().addClass('row-last');

//----------------Show table js and Modal 

var modal = document.querySelector(".myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 

btn.addEventListener("click", () => {
modal.classList.add("active")
})

// btn.onclick = function() {
//   modal.style.display = "block";
// }
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


 
function ShowtblData(obj){

let tblid=$("#tblbody");
tblid.empty();
let userdate="2020"
  obj.forEach(el => {
    tblid.append(`  <tr class="${el.from==userdate && 0==0 ? 'test':''}">
    <td>${el.from}</td>
    <td>${el.to}</td>
    <td>${el.room}</td>
    <td>${el.bed}</td>
  </tr>`);
  });
  
}


$.ajax({
  type: "GET",
  url:"/Assetes/JSOn/rooms.json",
  success: (obj) => {
     debugger
    ShowtblData(obj)
  }
})


