

if (document.querySelector(".mySwiper")){
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

if (document.querySelector(".header")){
    let headerButton = document.querySelector(".button_popup")
    let headerNavigation = document.querySelector(".header_nav")
    let closedButton = document.querySelector(".closed_popup")
    let popupLine = document.querySelectorAll(".popup_line")
    let closedIcon = document.querySelector(".closed_icon")
    headerButton.addEventListener("click", function(){
        headerNavigation.classList.toggle("active_header_nav")
        popupLine.forEach((el) => {el.classList.toggle("none_icon")
        closedIcon.classList.toggle("none_icon")
    }
    )})
}

if(document.querySelector(".map")){
  const map = L.map('map')
.setView({
  lat: 59.96831,
  lng: 30.31748,
}, 17);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
},
).addTo(map);

const mainPinIcon = L.icon({
iconUrl: "/source/less/img/Map Pin.png",
iconSize: [38, 50],
iconAnchor: [19, 50],
});

const marker = L.marker(
{
  lat: 59.96831,
  lng: 30.31748,
},
{
  draggable: false,
  icon: mainPinIcon
  
},
);

marker.addTo(map).bindPopup("Coffe 2 Go",
{
keepInView: true,
});
}

if(document.querySelector(".slider_content")){
  window.onload = function(){
    slideOne();
    slideTwo();
  }
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
  }
  function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
  }
  function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #7859CF ${percent1}% , #7859CF ${percent2}%, #dadae5 ${percent2}%)`;
  }
}

if(document.querySelector(".selected_block")){
  let selectedButton = document.querySelector(".selected_block")
  let sortContent = document.querySelector(".item_content")
  selectedButton.addEventListener("click", function(){
  sortContent.classList.toggle("closed_sort")
})
}
