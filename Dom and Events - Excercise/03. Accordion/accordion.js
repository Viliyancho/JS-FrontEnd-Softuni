function toggle() {
    const extraContent = document.querySelector("#extra")
    const button = document.querySelector("span.button")

    extraContent.style.display = extraContent.style.display === "block" ? "none" : "block"
    button.textContent = button.textContent === "More" ? "Less" : "More"
}