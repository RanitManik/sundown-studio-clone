const scroll = new LocomotiveScroll({
    el: document.querySelector('#body-wrapper'),
    smooth: true
});

const navElement = document.getElementById('navElement');
const mediaQuery = window.matchMedia('(max-width: 40rem)');

const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
        navElement.innerHTML = `<ul><li><a href="#"><div class="menu-icon"><div></div><div></div></div>Menu</a></li></ul>`;
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

let elemC = document.querySelector(".fixed-image-container");
let fixed = document.querySelectorAll(".featured-projects ul li");
fixed.forEach(fixedItem => {
    fixedItem.addEventListener("mouseenter", () => {
        elemC.style.display = "block";
        let image = fixedItem.getAttribute("data-image");
        console.log(image);
        elemC.style.backgroundImage = `url(${image})`;
    });
    fixedItem.addEventListener("mouseleave", () => {
        elemC.style.display = "none";
    });
});

