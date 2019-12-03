// Your code goes here
const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});

const footColor = document.querySelector('footer');

console.log(footColor);
footColor.addEventListener('dblclick', (event) => {
    console.log(footColor);
    console.log(event);
    event.target.style.backgroundColor = 'blue';

});

const funBus = document.querySelector(".img-content")
console.log(funBus)

funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.2)";
    funBus.style.transition = "transform 0.3s"
})
funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1)"
})

const buttons = document.querySelectorAll('.destination .btn');
buttons.forEach(function (btn) {
    btn.addEventListener("mouseover", (e) => {
        e.target.style.color = "black";
        e.target.style.background = "white";
        e.target.style.borderRadius = "0px";
    });
});

const navbar = document.querySelectorAll('a.nav-link');
navbar.forEach(link => {
    link.addEventListener("mouseenter", e => {
        e.target.style.color = "purple";
    });
    link.addEventListener("mouseleave", e => {
        e.target.style.color = "pink";
    });
});

window.addEventListener("resize", () => {
    let header = document.querySelector('.main-navigation');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.background = `#${randomColor}`;

});

window.addEventListener('scroll', function(e) {
    const random = e.timeStamp % 256 * Math.random();
    document.body.style.background = `rgba(${random},${random},${random},0.3`;
    console.log(e.timeStamp % 256 * Math.random())
  })

  const funLogo = document.querySelector('.intro img');

funLogo.addEventListener('click', function(e) {
  event.stopPropagation();
  console.log('bus click');

})

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener('dragstart', function(e) {
  destinationImg.style.opacity = 0.1;
  TweenMax.to('.content-destination img', 1, {x:30, y:30});
})

destinationImg.addEventListener('dragend', function(e) {
  destinationImg.style.opacity = 1;
  TweenMax.to('.content-destination img', 1, {x:-30, y:-30});
})

const adventureAwaits = document.querySelector('.inverse-content .text-content');
adventureAwaits.addEventListener('wheel', function () {
    adventureAwaits.style.display = 'flex';
});

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped the link")
})