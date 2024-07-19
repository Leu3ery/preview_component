document.addEventListener("DOMContentLoaded", function() {
    let share = document.getElementById("share");
    let popup = document.getElementById("popup");

    let buttons = document.getElementsByClassName("share");
    for (button of buttons) {
        button.addEventListener("click", clicked);
    }

    function clicked() {
        // rgb(236, 242, 248) = hsl(210, 46%, 95%)
        // rgb(72, 85, 106) = hsl(217, 19%, 35%)
        if (window.innerWidth > 768) {
            let share_background = getComputedStyle(share).backgroundColor
            share.style.background = share_background === "rgb(236, 242, 248)" ?  "rgb(72, 85, 106)" :  "rgb(236, 242, 248)";
            
            // getBoundingClientRect()
            // Знаходить позицію елемента на сторінці
            let rect = share.getBoundingClientRect();
            let offsetTop = rect.top + window.scrollY;
            let offsetLeft = rect.left + window.scrollX;
            popup.style.top = `${offsetTop-80}px`;
            popup.style.left = `${offsetLeft+17}px`;
            let popup_display = getComputedStyle(popup).display;
            popup.style.display = popup_display === "block" ?  "none" :  "block";
        } else {
            let right_holder = document.getElementById("rightHolder");
            right_holder.style.borderRadius = getComputedStyle(right_holder).borderRadius === "0px 0px 13px 13px" ?  "0 0 0 0" :  "0px 0px 13px 13px";

            let share_phone = document.getElementById("sharePhone");
            let share_phone_background = getComputedStyle(share_phone).backgroundColor
            share_phone.style.background = share_phone_background === "rgb(236, 242, 248)" ?  "rgb(172, 185, 206)" :  "rgb(236, 242, 248)";
            
            let under_holder = document.getElementById("underHolder");
            let under_holder_phone = document.getElementById("underHolderPhone");
            under_holder.style.display = getComputedStyle(under_holder).display === "flex" ? "none" : "flex";
            under_holder_phone.style.display = getComputedStyle(under_holder_phone).display === "flex" ? "none" : "flex";
        }
        
    };
    function handleResize() {
        share.style.background =  "rgb(236, 242, 248)";
        popup.style.display = "none";
        if (window.innerWidth > 768) {
            document.getElementById("underHolder").style.display = "flex";
            document.getElementById("underHolderPhone").style.display = "none";
        }
    }
    // Додаємо обробник події зміни розмірів екрану
    window.addEventListener("resize", handleResize);
});


