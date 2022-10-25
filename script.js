// -----------------------------------1ST METHOD--------------------------------------------------------------
const increase = document.getElementById("increase");
const count = document.getElementById("counter");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let countNum = 0;

increase.addEventListener("click", function () {
    countNum+=1;
    count.textContent = countNum;
});

reset.addEventListener("click", function () {
    count.style.color = 'black';
    countNum = 0;
    count.textContent = '0';
})

decrease.addEventListener("click", function () {
    countNum-=1;
    count.textContent = countNum;
})

// -------------------------------------------2ND METHOD--------------------------------------------------------

// const count = document.getElementById("counter");
// const btns = document.querySelectorAll(".btn");
// let c = 0;
// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const styles =  e.currentTarget.classList;
//         if (styles.contains('increase-btn')) {
//             c++;
//         } else if (styles.contains('decrease-btn')) {
//             c--;
//         } else {
//             c = 0;
//         }
//         if (c > 0) {
//             count.style.color = 'green';
//         } else {
//             count.style.color = 'red';
//         }
//         if (c === 0) {
//             count.style.color = "black";
//         }
//         count.textContent = c;
//     })
// })