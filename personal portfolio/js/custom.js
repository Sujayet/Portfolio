






// usefull code for feature portfolio

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleBtn = document.getElementById('toggle-btn');
//     const leftHeader = document.getElementById('left-header');

//     toggleBtn.addEventListener('click', function () {
//         if (leftHeader.style.left === '-250px' || leftHeader.style.left === '') {
//             leftHeader.style.left = '0';
//         } else {
//             leftHeader.style.left = '-250px';
//         }
//     });

//     // Close the left header when a user clicks outside of it
//     window.addEventListener('click', function (event) {
//         if (event.target !== toggleBtn && event.target.parentNode !== leftHeader && leftHeader.style.left === '0') {
//             leftHeader.style.left = '-250px';
//         }
//     });

//     // Toggle the left header on window resize for responsiveness
//     window.addEventListener('resize', function () {
//         if (window.innerWidth > 768) {
//             leftHeader.style.left = '0';
//         } else {
//             leftHeader.style.left = '-250px';
//         }
//     });
// });

// function dragger(){
//     $('.dragger-close').click(function(){
//         $('.sidebar').css( 'transform' , "translateX(1000px)")
//     })
// }

$(function () {
    $('.dragger').click(function () {
        $('.sidebar').css('transform', "translateX(0)")
    })
})


$(function () {
    $('.dragger-close').click(function () {
        $('.sidebar').css('transform', "translateX(-1000px)")
        $('.dragger-close').css("opacity(0)")
    })
})

function addspan(params) {
    document.querySelectorAll(".repeat")
        .forEach(function (elem) {
            // create two span tag

            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");
            // add classes in the snap tag

            spanParent.classList.add("parent");
            spanChild.classList.add("child");

            //    span parent get child and child span get elam
            spanParent.appendChild(spanChild);

            spanChild.textContent = elem.textContent;
            // elem replace its value with parent span
            elem.innerHTML = "";
            elem.appendChild(spanParent)
        })
}
addspan();

function animationloader() {
    let tl = gsap.timeline();

    tl
        .from("h1 .parent .child", {
            x: 100,
            duration: 1,
            // stagger: 1,
            // delay:1,
            ease: Circ.easeInOut
        })
        .to(".parent .child", {
            y: "-103%",
            duration: 1,
            delay: 0,
            ease: Circ.easeInOut
        })
        // .to(".loading" ,{
        //     y: "-101%",
        //     duration: 1 ,
        //     delay: .1,
        //     ease:  Circ.easeInOut
        // })

        .to(".loader", {
            height: 0,
            duration: .9,
            delay: -.1,
            ease: Circ.easeInOut
        })
        .to(".green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -1,
            ease: Circ.easeInOut
        })
        .to(".green", {
            height: 0,
            duration: 1,
            delay: -.5,
            ease: Circ.easeInOut
        })

        .from(".t-ab", {
            scale: 1.3,
            duration: 1,
            yoyo: true,
            repeat: -1
        })
    gsap.to('.fill', {
        width: '75%',
        duration: .5,
        scrollTrigger: {
            trigger: '.fill',
            scroller: 'body',

        }
    })


    // .to("#main",{
    //     // position: absolute,
    //     // top: "100%",
    //     diplay:none,
    // })

}
animationloader();



function sidebaranimation() {
    let tl = gsap.timeline();

    tl.from("ul li a p",{
       y:-50,
       duration:1,
       delay:1, 
    })
}

function nameanimate(){
    var tl = new TimelineLite();

// /*tl.to(".tp1", 2.3, {strokeDashoffset:"0"});
// tl.to(".tp1", 0.2, {fillOpacity:1}, "-=1.7");
// tl.to(".tp2", 2.3, {strokeDashoffset:"0"}, "-=1.7");
// tl.to(".tp2", 0.2, {fillOpacity:1}, "-=1.4");*/
tl.to(".tp3", 2.3, {strokeDashoffset:"0"},"-=1.4");
tl.to(".tp3", 0.2, {fillOpacity:1}, "-=2");
tl.to(".tp4", 2.3, {strokeDashoffset:"0"}, "-=1.0");
tl.to(".tp4", 0.2, {fillOpacity:1}, "-=1.6");
// tl.to("#svg",{
//     yoyo:true,
//     repeat:-1
// })
}

nameanimate();

function tabanimate() {
    let tl = gsap.timeline();

    tl.to(".tab",{
        scale:1.2,
        duration:.8,
        yoyo: true,
        repeat:-1,
    })
}
tabanimate();
