let counter = document.getElementById("counter").value;
if (counter == undefined) counter = 0;;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");
const pause = document.getElementById("pause");
const commentBox = document.getElementById("comment-input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// adds 1 to the counter every second
let interval = setInterval(() => {
    counter += 1;
    return document.getElementById("counter").innerHTML = counter;
}, 1000);

// if plus button is clicked
plus.addEventListener("click", () => {
    counter += 1;
    return document.getElementById("counter").innerHTML = counter;
});

// if minus button is clicked
minus.addEventListener("click", () => {
    counter -= 1;
    return document.getElementById("counter").innerHTML = counter;
});

// if heart button is clicked
let multiple;
let arr = [];
if (multiple == null) multiple = 1;
heart.addEventListener("click", () => {
    let li = document.createElement("li");
    if (!arr.includes(counter)) {
        multiple = 1;
        li.appendChild(document.createTextNode(`${ counter } has been liked ${ multiple } time`));
        li.id = counter;
        arr.push(counter);
        likes.appendChild(li);
        return multiple = 2;
    } else {
        document.getElementById(`${counter}`).innerHTML = `${ counter } has been liked ${ multiple } times`;
        return multiple += 1;
    };
});

// if pause button is clicked
pause.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            counter += 1;
            pause.innerHTML = "pause";
            return document.getElementById("counter").innerHTML = counter;
        }, 1000);

        // enables all buttons
        heart.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        commentBox.disabled = false;
        submit.disabled = false;
    } else {
        clearInterval(interval);
        pause.innerHTML = "resume";
        interval = null;

        // disables all buttons
        heart.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        commentBox.disabled = true;
        submit.disabled = true;
    }
});

// if a comment is added
submit.addEventListener("click", (e) => {
    console.log(commentBox.value);
    const p = document.createElement("p");
    p.innerHTML = (commentBox.value);
    list.appendChild(p);
    e.preventDefault();
})