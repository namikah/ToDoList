const todolist = document.querySelector(".to-do-list");
const text = document.querySelector(".input-text");
const btn = document.querySelector(".btn-enter");
const ol = document.createElement("ul");
todolist.appendChild(ol);

text.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13) {
        e.preventDefault();
        btn.click();
    }
})

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    const content = document.createElement("div");
    const span = document.createElement("span");
    const xClose = document.createElement("span");
    span.innerText = text.value;
    xClose.innerText = "X";
    xClose.classList.add("xClose-style");

    content.appendChild(span);
    li.appendChild(content);
    li.appendChild(xClose);
    ol.appendChild(li);
    const inputText = document.createElement("input");
    inputText.classList.add("input-style");
    inputText.style.display = "none";

    span.addEventListener("click", () => {
        inputText.value = span.innerText;
        span.style.display = "none";
        content.appendChild(inputText);
        inputText.style.display = "block";

        inputText.addEventListener("blur", () => {
            span.innerText = inputText.value;
            inputText.style.display = "none";
            span.style.display = "block";
        })
    })

    xClose.addEventListener("click", () => {
        li.remove();
    })
})