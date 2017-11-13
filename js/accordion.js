window.onload = function () { //DOM ready
    window.accordion = window.accordion || {};
    window.accordion.own = function () {
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
    window.accordion.own();
};