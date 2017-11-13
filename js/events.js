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
    window.Own.SameBlocks = function (blocks, minScreenWidth) {
        var swidth = screen.width;
        if (swidth > minScreenWidth) {
            var maxHeight = 0,
                blocks = document.querySelectorAll(blocks);

            for (var i = 0; i < blocks.length; i++) {
                blocks[i].offsetHeight > maxHeight ? maxHeight = blocks[i].offsetHeight : false;
            }
            blocks.forEach(function (i) {
                i.style.height = maxHeight;
            });
            console.log('blocks aligned')
        }
    };



    window.Own.accordion();
    window.Own.SameBlocks('footer .col', 340);

    var btn = document.getElementsByClassName('.accordion-mobile-toggle');
    var accordion = document.querySelector('.accordion');
    btn.onclick = function () {
        console.log('click');
        accordion.classList.toggle('show');
    };
};

