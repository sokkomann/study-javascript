const banner = document.querySelector("div.banner");
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const arrows = document.querySelectorAll("div.arrow");

let count = 1;

firstBanner.innerHTML = `<img src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/hb_web_pc_%EA%B0%95%EB%A6%89%EA%B0%88%EB%9E%98_3b5424cdc3d01542842fa5c10e12d63934c77de3ddd669f8b0f2c54ee77bf61b">`;
lastBanner.innerHTML =
    '<img src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/250312_Web_banner_%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A9%E1%86%AB%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%87%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC_8abf17e17d5e2015486d1edc78b8538b3a7571c13e9562d419ae05fe5ac16c8f">';

banner.append(firstBanner);
banner.prepend(lastBanner);
// 6 - 1 - 2 - 3 - 4 - 5 - 6 - 1
banner.style.transform = `translate(-768px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${768 * count}px)`;
    banner.style.transition = `transform 0.7s`;

    if (count === 7) {
        setTimeout(() => {
            banner.style.transform = `translate(-768px)`;
            banner.style.transition = `transform 0s`;
        }, 700);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 1000);
let isMoving = false;

arrows.forEach((arrow) => {
    const arrowImgOnBanner = arrow.firstElementChild;
    arrowImgOnBanner.addEventListener("click", (e) => {
        if (isMoving) {
            return;
        }

        isMoving = true;
        clearInterval(autoSlideInterval);

        const arrowLeftOrRight = arrow.classList[1];
        if (arrowLeftOrRight === "right") {
            count++;
            banner.style.transform = `translate(-${768 * count}px)`;
            banner.style.transition = `transform 0.7s`;

            if (count === 7) {
                setTimeout(() => {
                    banner.style.transform = `translate(-768px)`;
                    banner.style.transition = `transform 0s`;
                }, 700);
                count = 1;
            }
        } else {
            count--;
            banner.style.transform = `translate(-${768 * count}px)`;
            banner.style.transition = `transform 0.7s`;

            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translate(-4608px)`;
                    banner.style.transition = `transform 0s`;
                }, 700);
                count = 6;
            }
        }
        autoSlideInterval = setInterval(autoSlide, 1000);
        setTimeout(() => {
            isMoving = false;
        }, 700);
    });
});
