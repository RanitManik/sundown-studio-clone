const scroll = new LocomotiveScroll({
    el: document.querySelector('#body-wrapper'),
    smooth: true
});

const navElement = document.getElementById('navElement');
const mediaQueryMobile = window.matchMedia('(max-width: 40rem)');
const mediaQueryTablet = window.matchMedia('(max-width: 75rem)');
const mediaQueryLaptop = window.matchMedia('(min-width: 75rem)');

if (mediaQueryMobile.matches) {
    navElement.innerHTML = `<ul><li><a href="#"><div class="menu-icon"><div></div><div></div></div>Menu</a></li></ul>`;
} else {
    navElement.innerHTML = `<ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>`;
}

let fixedItemContainer = document.querySelector(".fixed-image-container");
let projectItems = document.querySelectorAll(".featured-projects ul li");

if (mediaQueryLaptop.matches) {
    projectItems.forEach(fixedItem => {
        fixedItem.addEventListener("mouseenter", () => {
            let dataInfo = fixedItem.querySelector(".project-asset-container");
            fixedItemContainer.innerHTML = dataInfo.innerHTML;
            fixedItemContainer.style.display = "block";
        });
        fixedItem.addEventListener("mouseleave", () => {
            fixedItemContainer.style.display = "none";
        });
    });
}

// loader Animation

const loader = document.getElementById("loader");
setTimeout(() => {
    loader.style.top = "-100%";
}, 4000)
