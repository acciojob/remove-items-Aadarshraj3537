const removeColor = () => {
    let select = document.getElementById("colorSelect");
    let selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        selectedOption.remove(); // Re

