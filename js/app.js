const App = (() => {

    // -- Cache the DOM
    const hamburgerEl = document.querySelector('.hamburger')
    const sliderEl = document.querySelector('#slider')
    const mainPageEl = document.querySelector('#main-page')
    const signUpEl = document.querySelector('.sign-up')
    const closeEl = document.querySelector('.close')
    const modalEl = document.querySelector('.modal')
    const modalContentEl = document.querySelector('.modal-content')

    // -- Eventlisteners
    const Eventlisteners = () => {
        hamburgerEl.addEventListener('click', toggleSlider)
        closeEl.addEventListener('click', toggleModal)
        signUpEl.addEventListener('click', toggleModal)

        modalEl.addEventListener('click', (event) => {
            if(event.target.matches(".modal")) {
                toggleModal();
            }
        })
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

    const toggleModal =() => {
        if(modalEl.style.visibility == 'hidden' && modalContentEl.style.visibility == 'hidden') {
            modalEl.style.visibility = "visible";
            modalEl.style.opacity = "1"
            modalContentEl.style.visibility = "visible";
            modalContentEl.style.opacity = "1";
        } else {
            modalEl.style.visibility = 'hidden';
            modalEl.style.opacity = "0"
            modalContentEl.style.visibility = 'hidden';
            modalContentEl.style.opacity = "0";
        }
    }

    const init = () => {
        render()
        Eventlisteners();
        sliderEl.style.left = "-200px";
        mainPageEl.style.left = "0px"
        modalEl.style.visibility = 'hidden';
        modalContentEl.style.visibility = 'hidden';
    }

    const render = () => {
        console.log("Rendering....")
    }

    return {
        init
    }

})();

App.init();