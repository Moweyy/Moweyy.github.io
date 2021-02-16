
new WOW().init();

window.addEventListener('scroll', () => {
    const scrolls = window.scrollY;
    const arrow = document.querySelector('.works-pointer');
    if(scrolls>150 && window.innerWidth > 768) {
        $(arrow).fadeOut(200);
    }
    else {
        $(arrow).fadeIn(200);
    }
})

// Page Transitions
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
        duration: 1.5,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1.3,
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
                    await delay(1000);
                    done();
                },
                // Animates the content in once you enter any page
                async enter(data) {
                    contentAnimation();
                },
                // Animates the content in the first time you load in
                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});


