let tabs = document.querySelectorAll(".filter .tabs li");
let tabsArray = Array.from(tabs);
let content = document.querySelectorAll(".filter .content > div");
let contentArray = Array.from(content);

tabsArray.forEach((element) => {
    element.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cat).style.display = "block";
    });
});