document.addEventListener("DOMContentLoaded",
    function () {
        var thElm;
        var childLeft, childRight;
        var parentLeft, parentRight;
        var off_child, off_current, off_parent, off_table;
        var scroll = document.querySelectorAll('.table-info-panel');
        var scroll_vertical = document.querySelectorAll('.scr-vertical');
        var pre = document.querySelector('.icon-pre');
        var next = document.querySelector('.icon-next');

        var sibling;
        var scroll_pre_next = document.querySelector('.list-catolo');



        // xu ly dong bo scroll
        scroll.forEach(function (scr, index) {
            scr.addEventListener("scroll", function () {
                if (index == 0) {
                    scroll[1].scrollTop = scr.scrollTop;

                }
                else {
                    scroll[0].scrollTop = scr.scrollTop;
                }
            })
        })
        scroll_vertical.forEach(function (scr, index) {
            scr.addEventListener("scroll", function () {
                if (index == 0) {
                    scroll_vertical[1].scrollLeft = scr.scrollLeft;

                }
                else {
                    scroll_vertical[0].scrollLeft = scr.scrollLeft;
                }
            })
        })

        var pre_next = function (pn, k) {
            pn.addEventListener('click',
                function (pn) {
                    if (k == 0) {
                        scroll_pre_next.scrollLeft += 300;
                    }
                    else {
                        if (scroll_pre_next.scrollLeft != 0) scroll_pre_next.scrollLeft -= 300;
                    }
                })

        }
        pre_next(pre, 1);
        pre_next(next, 0);



        // xu ly dong bo scroll



        // xu ly hien thi  cac drop-box
        var drop = document.querySelectorAll('.drop');
        console.log(drop);

        drop.forEach(function (drop) {

            drop.addEventListener("click", function () {
                console.log('click');

                var str_drop = '.' + this.getAttribute('data-link');
                var class_drop = document.querySelector(str_drop);

                var show_drop = document.querySelector('.show_drop');
                if (show_drop != class_drop && show_drop) {

                    show_drop.classList.remove('show_drop');

                }

                class_drop.classList.toggle('show_drop');
            })
        })
        // xu ly hien thi  cac drop-box

        // xu ly resize thanh ngang
        var btn_resize = document.querySelector('.btn-resize');
        var down_container = document.querySelector('.down-container');
        var up_container = document.querySelector('.up-container');
        var table_height = document.querySelectorAll('.table-info-panel');


        btn_resize.addEventListener('click', function () {
            this.classList.toggle('trans');
            down_container.classList.toggle('height0');
            up_container.classList.toggle('height100')
            table_height.forEach(
                function (table) {
                    table.classList.toggle('table-height');
                }
            );
        })

        up_container.style.position = 'relative';
        var grip = document.createElement('div');
        var RowElm, pageY_table, pageY_up, pageY_down;
        grip.innerHTML = "&nbsp;";
        grip.style.right = '0px';
        grip.style.bottom = '0px';
        grip.style.width = '100%';
        grip.style.height = '5px';
        grip.style.border = '1px solid transparent';
        grip.style.position = 'absolute';
        grip.style.cursor = 'row-resize';
        grip.addEventListener('mousedown', function (e) {
            pageY_table = table_height[0].offsetHeight - e.pageY;
            RowElm = up_container;

        });
        up_container.appendChild(grip);


        // xu ly resize thanh ngang

        var leftElm;
        var rightElm;
        var right_panel = document.querySelector('.right-panel');
        console.log(right_panel);

        var table_container = document.querySelector('.table-container');

        // xy ly resize bang
        Array.prototype.forEach.call(
            document.querySelectorAll(".left-panel .resize"),
            function (th, index) {
                th.style.position = 'relative';
                var grip = document.createElement('div');
                grip.innerHTML = "&nbsp;";
                grip.style.top = '0px';
                grip.style.right = '0px';
                grip.style.bottom = '0px';
                grip.style.width = '0px';
                grip.style.height = '100%';
                grip.style.border = '1px solid transparent';
                grip.style.position = 'absolute';
                grip.style.cursor = 'col-resize';
                grip.addEventListener('mousedown', function (e) {
                    var strId = ".x-grid-cell-" + index;
                    childLeft = document.querySelectorAll(strId);
                    parentLeft = th.parentNode;
                    sibling = parentLeft.nextElementSibling;
                    parentLeft = parentLeft.parentNode;
                    off_table = sibling.offsetWidth - e.pageX;
                    off_parent = parentLeft.offsetWidth - e.pageX;
                    off_current = th.offsetWidth - e.pageX;
                    leftElm = th;
                    pageX = e.pageX;
                });

                th.appendChild(grip);
            });


        Array.prototype.forEach.call(
            document.querySelectorAll(".right-panel .resize"),
            function (th, index) {
                th.style.position = 'relative';
                var grip = document.createElement('div');
                grip.innerHTML = "&nbsp;";
                grip.style.top = '0px';
                grip.style.right = '0px';
                grip.style.bottom = '0px';
                grip.style.width = '0px';
                grip.style.height = '100%';
                grip.style.border = '1px solid transparent';
                grip.style.position = 'absolute';
                grip.style.cursor = 'col-resize';
                grip.addEventListener('mousedown', function (e) {
                    var strId = ".x-grid-cell-" + (index + 2);
                    childRight = document.querySelectorAll(strId);
                    parentRight = th.parentNode;
                    off_parent = parentRight.offsetWidth - e.pageX;
                    off_current = th.offsetWidth - e.pageX;
                    rightElm = th;
                    pageX = e.pageX;
                });

                th.appendChild(grip);
            });


        document.addEventListener('mousemove', function (e) {
            if (leftElm) {
                var x = off_parent + e.pageX;
                sibling.style.width = off_table + e.pageX + 'px';
                parentLeft.style.width = x + 'px';
                leftElm.style.width = off_current + e.pageX + 'px';
                childLeft.forEach(function (child) {
                    child.style.width = off_current + e.pageX + 'px';
                });
                right_panel.style.width = table_container.offsetWidth - x + 'px';
                scroll_vertical.forEach(function (scroll) {
                    scroll.style.width = table_container.offsetWidth - x + 'px';
                });
            };
            if (rightElm) {

                parentRight.style.width = off_parent + e.pageX + 'px';
                rightElm.style.width = off_current + e.pageX + 'px';
                childRight.forEach(function (child) {
                    child.style.width = off_current + e.pageX + 'px';
                });
            };
            if (RowElm) {

                table_height.forEach(function (table) {
                    table.style.height = pageY_table + e.pageY + 'px';
                });


                down_container.style.height = 491 - up_container.offsetHeight + 'px';
                console.log(down_container.offsetHeight);
            }
        });

        document.addEventListener('mouseup', function () {
            leftElm = undefined;
            rightElm = undefined;
            RowElm = undefined;
        });

        // xy ly resize bang

    }, false);

