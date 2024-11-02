function addItem() {
    const text = document.querySelector("#newItemText").value
    const value = document.querySelector("#newItemText").value

    const selectorMenu = document.querySelector("#menu")

    const option = document.createElement("option")
    option.textContent = text
    option.setAttribute("value", value)

    selectorMenu.appendChild(option)

    document.querySelector("#newItemText").value = ""
    document.querySelector("#newItemValue").value = ""
}