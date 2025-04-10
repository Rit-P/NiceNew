document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("p");
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        counter.textContent = parseInt(counter.textContent) + 1;
    });
});