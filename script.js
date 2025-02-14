document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("input[type='button']").addEventListener("click", function () {
        let select = document.getElementById("colorSelect");

        if (select.selectedIndex !== -1) {  // Ensure an option is selected
            select.remove(select.selectedIndex);
        }
    });
});

