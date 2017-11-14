window.onload = function () { //DOM ready
    window.Own = window.Own || {};
    window.Own.accordion = function () {
        var abtn = document.getElementsByClassName("accordion-button");
        var i;

        for (i = 0; i < abtn.length; i++) {
            abtn[i].onclick = function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }
    };
    window.Own.show = function (btn, target, toggleClass) {
        toggleClass = toggleClass || 'show';
        document.getElementsByClassName(btn)[0].onclick = function () {
            document.getElementsByClassName(target)[0].classList.toggle(toggleClass);
        };
    };

    window.Own.accordion();
    window.Own.show('accordion-mobile-toggle', 'accordion');
    window.Own.show('dropdown-btn', 'menu', 'dropdown');
};

