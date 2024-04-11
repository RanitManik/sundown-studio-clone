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

let fixedItemContainer = document.querySelector(".fixed-image-container");
let projectItems = document.querySelectorAll(".featured-projects ul li");

projectItems.forEach(fixedItem => {
    fixedItem.addEventListener("mouseenter", () => {
        fixedItemContainer.style.display = "block";
        let dataImage = fixedItem.getAttribute("data-image");
        let dataType = fixedItem.getAttribute("data-type");
        if (dataType === "image") {
            fixedItemContainer.innerHTML = `<img src="${dataImage}" alt="">`;
        } else if (dataType === "video") {
            fixedItemContainer.innerHTML = `<video autoplay muted loop                   src="${dataImage}"></video>`;
        }
    });
    fixedItem.addEventListener("mouseleave", () => {
        fixedItemContainer.style.display = "none";
    });
});
