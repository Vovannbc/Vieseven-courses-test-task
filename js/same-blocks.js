function SameBlocks (blocks, minScreenWidth) {
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