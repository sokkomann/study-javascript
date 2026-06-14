// V1.0
// const banner = document.querySelector("div.banner");

// let count = 0;
// setInterval(() => {
//     count++;
//     count === 6 && (count = 0); // count가 6이면, count를 0으로 만들어라
//     banner.style.transform = `translate(-${1500 * count}px)`;
//     banner.style.transition = `transform 0.5s`;
// }, 1000);

// V2.0
// const banner = document.querySelector("div.banner");
// const firstBanner = document.createElement("div"); // 첫번째배너라서 변수명을 firstBanner
// let count = 0;

// firstBanner.innerHTML = `<img src="images/001.png">`;
// banner.appendChild(firstBanner); // 배너중에 마지막에 추가
// // 001 → 002 → 003 → 004 → 005 → 006 → 001
// setInterval(() => {
//     // 일정 간격으로 무한반복 함수( [?]ms 간격으로 실행 )
//     count++;
//     // count가 6이되면 7번째이미지(001로 이동함)
//     banner.style.transform = `translate(-${1500 * count}px)`;
//     banner.style.transition = `transform 0.5s`;

//     if (count === 6) {
//         // 7번째 이미지일때(001복제 이미지)
//         setTimeout(() => {
//             banner.style.transform = `translate(0px)`;
//             // 0px로 이동(첫번째 배너)하는데 순간이동임(0초)
//             //    그니까 001(7번째)로 이동함과 동시에 001(1번째)로 순간이동해서
//             //    자연스럽게 보이는것
//             banner.style.transition = `transform 0s`;
//         }, 500);
//         count = 0;
//     }
// }, 1000);

// V2.1
const banner = document.querySelector("div.banner");
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
// 이미지가 총 8장
const arrows = document.querySelectorAll("div.arrow");
let count = 1;
// 인덱스가 아님. count * 1500 을 위한 위치번호일 뿐

firstBanner.innerHTML = `<img src="images/001.png">`;
lastBanner.innerHTML = `<img src="images/006.png">`;
banner.appendChild(firstBanner);
banner.prepend(lastBanner);
// 006 → 001 → 002 → 003 → 004 → 005 → 006 → 001

banner.style.transform = `translate(-1500px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${1500 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === 7) {
        setTimeout(() => {
            banner.style.transform = `translate(-1500px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 1000);
let isMoving = false;

arrows.forEach((arrow) => {
    const img = arrow.firstElementChild;
    img.addEventListener("click", (e) => {
        // 이미지 태그를 클릭하면 이벤트 실행
        if (isMoving) {
            return;
            // 애니메이션이 진행중일때
        }
        // isMoving이 false일때(애니메이션 진행중이 아닐때)
        isMoving = true;
        clearInterval(autoSlideInterval);

        const arrowType = arrow.classList[1];
        // 이미지를 눌렀는데 그 이미지가 left면
        if (arrowType === "left") {
            count--;
            banner.style.transform = `translate(-${1500 * count}px)`;
            banner.style.transition = `transform 0.5s`;
            // 위에 count--; 로 count가 1에서 0이 되면 006(1번째)으로 이동
            // 과 동시에 밑에 if문으로 인해 006(6번째)로 순간이동
            // 0이 안되면 당연히 밑에 무시
            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translate(-9000px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 6;
            }
            // 이미지를 눌렀는데 그 이미지가 right면
        } else {
            count++;
            banner.style.transform = `translate(-${1500 * count}px)`;
            banner.style.transition = `transform 0.5s`;

            if (count === 7) {
                setTimeout(() => {
                    banner.style.transform = `translate(-1500px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 1;
            }
        }
        autoSlideInterval = setInterval(autoSlide, 1000);
        setTimeout(() => {
            isMoving = false;
        }, 500);
    });
});

// V2.2
// const banner = document.querySelector("div.banner");
// const firstBanner = document.createElement("div");
// const lastBanner = document.createElement("div");
// const arrows = document.querySelectorAll("div.arrow");
// const buttons = document.querySelectorAll("div.button-container button");
// let count = 1;
// let tempButton = buttons[0];

// firstBanner.innerHTML = `<img src="images/001.png">`;
// lastBanner.innerHTML = `<img src="images/006.png">`;
// banner.appendChild(firstBanner);
// banner.prepend(lastBanner);

// buttons[0].style.background = "#2ef388";

// banner.style.transform = `translate(-1500px)`;

// const autoSlide = () => {
//     count++;
//     banner.style.transform = `translate(-${1500 * count}px)`;
//     banner.style.transition = `transform 0.5s`;

//     if (count === 7) {
//         setTimeout(() => {
//             banner.style.transform = `translate(-1500px)`;
//             banner.style.transition = `transform 0s`;
//         }, 500);
//         count = 1;
//     }

//     tempButton.style.background = "white";
//     tempButton = buttons[count - 1];
//     buttons[count - 1].style.background = "#2ef388";
// };

// let autoSlideInterval = setInterval(autoSlide, 1000);
// let isMoving = false;

// arrows.forEach((arrow) => {
//     const img = arrow.firstElementChild;
//     img.addEventListener("click", (e) => {
//         if (isMoving) {
//             return;
//         }
//         isMoving = true;
//         clearInterval(autoSlideInterval);

//         const arrowType = arrow.classList[1];
//         if (arrowType === "left") {
//             count--;
//             banner.style.transform = `translate(-${1500 * count}px)`;
//             banner.style.transition = `transform 0.5s`;

//             if (count === 0) {
//                 setTimeout(() => {
//                     banner.style.transform = `translate(-9000px)`;
//                     banner.style.transition = `transform 0s`;
//                 }, 500);
//                 count = 6;
//             }
//         } else {
//             count++;
//             banner.style.transform = `translate(-${1500 * count}px)`;
//             banner.style.transition = `transform 0.5s`;

//             if (count === 7) {
//                 setTimeout(() => {
//                     banner.style.transform = `translate(-1500px)`;
//                     banner.style.transition = `transform 0s`;
//                 }, 500);
//                 count = 1;
//             }
//         }

//         tempButton.style.background = "white";
//         tempButton = buttons[count - 1];
//         buttons[count - 1].style.background = "#2ef388";

//         autoSlideInterval = setInterval(autoSlide, 1000);
//         setTimeout(() => {
//             isMoving = false;
//         }, 500);
//     });
// });

// let buttonCheck = false;

// buttons.forEach((button, i) => {
//     button.addEventListener("click", (e) => {
//         if (buttonCheck) {
//             return;
//         }
//         buttonCheck = true;
//         clearInterval(autoSlideInterval);

//         count = i + 1;
//         banner.style.transform = `translate(-${1500 * count}px)`;
//         banner.style.transition = `transform 0.5s`;

//         tempButton.style.background = "white";
//         tempButton = buttons[count - 1];
//         buttons[count - 1].style.background = "#2ef388";

//         autoSlideInterval = setInterval(autoSlide, 1000);
//         setTimeout(() => {
//             buttonCheck = false;
//         }, 500);
//     });
// });
