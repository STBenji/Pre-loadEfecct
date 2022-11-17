const loader = document.querySelector('.loading')

window.addEventListener('load', e => {

    setTimeout(() => {

        loader.classList.add('.fadeOut')
        setTimeout(() => {

            loader.style.display = 'none'

        }, 1000);

    }, 1000);


})