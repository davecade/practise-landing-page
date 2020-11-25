const App = (() => {

    // -- Cache the DOM
    const hamburgerEl = document.querySelector('.hamburger')
    const sliderEl = document.querySelector('#slider')
    const mainPageEl = document.querySelector('#main-page')

    // -- Eventlisteners
    const Eventlisteners = () => {
        hamburgerEl.addEventListener('click', toggleSlider)
    }

    // -- Methods
    const toggleSlider = () => {
        if(sliderEl.style.left == '-200px' && mainPageEl.style.left == '0px') {
            sliderEl.style.left = "0px";
            mainPageEl.style.left = "200px"
        } else {
            sliderEl.style.left = "-200px";
            mainPageEl.style.left = "0px"
        }
    }

    const init = () => {
        render()
        Eventlisteners();
        sliderEl.style.left = "-200px";
        mainPageEl.style.left = "0px"
    }

    const render = () => {
        console.log("hello World")
    }

    return {
        init
    }

})();

App.init();