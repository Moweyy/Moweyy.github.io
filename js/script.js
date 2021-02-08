const options = {
    animationSelector: '[class*="transition-fade"]',
    animateHistoryBrowsing: true,
    scroll: true,
    plugins: [
        new SwupScrollPlugin({
            animateScroll: false,
            animateHistoryBrowsing: true,
            doScrollingRightAway: true
        }),
        new SwupOverlayTheme({
        color: '#002343',
        duration: 500,
        direction: 'to-left'
        })
    ]
};

const swup = new Swup(options);

let scrollValues = {};

swup.on('contentReplaced', function () {
    window.scrollTo(0, 0);
});

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

