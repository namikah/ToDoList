const todolist = document.querySelector(".to-do-list");
const text = document.querySelector(".input-text");
const btn = document.querySelector(".btn-enter");
const ol = document.createElement("ul");
todolist.appendChild(ol);

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    const leftSide = document.createElement("div");
    const span = document.createElement("span");
    const rightSide = document.createElement("span");
    span.innerText = text.value;
    rightSide.innerText = "X";
    rightSide.classList.add("xClose-style");

    leftSide.appendChild(span);
    li.appendChild(leftSide);
    li.appendChild(rightSide);
    ol.appendChild(li);
    const inputText = document.createElement("input");
    inputText.classList.add("input-style");
    inputText.style.display = "none";

    span.addEventListener("click", () => {
        inputText.value = span.innerText;
        span.style.display = "none";
        leftSide.appendChild(inputText);
        inputText.style.display = "block";

        inputText.addEventListener("blur", () => {
            span.innerText = inputText.value;
            inputText.style.display = "none";
            span.style.display = "block";
        })
    })

    rightSide.addEventListener("click", ()=>{
        li.remove();
    })
})