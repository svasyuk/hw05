class FormData {
    text = NaN
    number = NaN
    date = NaN
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs =  document.querySelectorAll(".tab");
    const contents =  document.querySelectorAll(".content");
    const inputText =  document.querySelector(".input-text");
    const inputNumber =  document.querySelector(".input-number");
    const inputDate =  document.querySelector(".input-date");

    formData = new FormData()

    hideTabContent();
    showTabContent(0);

    function hideTabContent() {
        contents.forEach(tabContent => {
            tabContent.classList.remove("show")
            tabContent.classList.add("hide")
        });
        tabs.forEach(tab => {
           tab.classList.remove("active") 
        });
    }

    document.addEventListener("click", listenerOnClick);

    function listenerOnClick(event) {
        const target = event.target;
        if (target.classList.contains("tab")) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
        else if (target.classList.contains("button-output")) {
            formData.text = inputText.value.trim()
            formData.number = inputNumber.value
            formData.date = inputDate.value
            console.log(formData)
        }

    }

    function showTabContent(i) {
        if (contents[i].classList.contains("hide")) {
            hideTabContent();
            tabs[i].classList.add("active");
            contents[i].classList.remove("hide");
            contents[i].classList.add("show");
        }
    }

})    

