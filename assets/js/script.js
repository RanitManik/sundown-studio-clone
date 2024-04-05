const scroll = new LocomotiveScroll({
    el: document.querySelector('#body-wrapper'),
    smooth: true
});

const navElement = document.getElementById('navElement');
const mediaQuery = window.matchMedia('(max-width: 40rem)');

const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
        navElement.innerHTML = `<ul><li><a href="#">Menu</a></li></ul>`;
    } else {
        navElement.innerHTML = `<ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>`;
    }
};

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQueryChange);

