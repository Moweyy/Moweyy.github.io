// const options = {
//     animationSelector: '[class*="transition-fade"]',
//     animateHistoryBrowsing: true,
//     scroll: true,
//     plugins: [
//         new SwupScrollPlugin({
//             animateScroll: true,
//             animateHistoryBrowsing: true,
//             doScrollingRightAway: true
//         }),
//         new SwupOverlayTheme({
//         color: '#002343',
//         duration: 500,
//         direction: 'to-left'
//         })
//     ]
// };

// const swup = new Swup(options);

// let scrollValues = {};

// swup.on('contentReplaced', function () {
//     window.scrollTo(0, 0);
// });

// --------------------------------------------

// swup.on('clickLink', () => {
//     scrollValues[window.location.href] = window.scrollY;
// });

// swup.on('popState', () => {
//     setTimeout(function() {
//         window.scrollTo(0, scrollValues[window.location.href]);
//     }, 100);
// });


// new SwupOverlayTheme({
//     color: '#002343',
//     duration: 1000,
//     direction: 'to-left'



function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 0.8,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 0.6,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".content-out", { duration: 0.5, opacity: 0, stagger: 0.4});
}

$(function () {
    barba.hooks.enter((data) => {
            window.scrollTo(0,0);
    });
    barba.init({
        sync: true,
        transitions: [
            {
                // Transition Animation whenever you leave a page
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(500);
                    done();
                },
                // Animates the content in once you enter any page
                async enter(data) {
                    contentAnimation();
                    $(function(){
                        $('.preview img').imagesLoaded().done(function(){
                          $('.preview .loading-overlay').remove();
                          $('.preview img.hide').removeClass('hide');
                        })
                    });
                },
                // Animates the content in the first time you load in
                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});


// Image Loader
$(function(){
    $('.preview img').imagesLoaded().done(function(){
      $('.preview .loading-overlay').remove();
      $('.preview img.hide').removeClass('hide');
    })
});

