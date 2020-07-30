let navBar = document.querySelector('header');
let scrollPrevious = window.pageYOffset;
// let navSelect = document.querySelectorAll('header nav a');
window.onscroll = function(){
  console.log('cargar'+scrollPrevious)
  let scrollCurrent = window.pageYOffset;
  console.log('actual' + scrollCurrent)

  if (scrollPrevious > scrollCurrent ) {
    navBar.style.top = "0px";
    navBar.style.backgroundColor='black'
  }else{
    navBar.style.top = "-90px";
  }
  if(scrollCurrent == 0){
    navBar.style.backgroundColor='transparent'
    
  }

  scrollPrevious = scrollCurrent

}