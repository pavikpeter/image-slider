var picIndex=1;
showPics(picIndex);

function passPics(n){
    showPics(picIndex+=n);
}

function showPics(n) {
  var i;
  var x = document.getElementsByClassName("slidePics");
  if (n > x.length) {
      picIndex = 1;
    }
  if (n < 1) {
      picIndex = x.length;
    } ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[picIndex-1].style.display="block";

}

//https://www.w3schools.com/w3css/w3css_slideshow.asp