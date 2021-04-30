window.addEventListener('load', function () {
    //轮播图
    //设置index来控制当前图片和小圆点
    var index = 0;
    //获取元素
    var slider_ul = document.querySelector('.slider-ul');
    var btn_l = document.querySelector('.btn-l');
    var btn_r = document.querySelector('.btn-r');
    var slider = document.querySelector('.slider');
    var sli_box = document.querySelector('.sli-box');
    //轮播图窗口的宽度
    var slider_width = slider.offsetWidth;
    //给轮播图窗口添加暂停事件
    slider.addEventListener('mouseover', function () {
        clearInterval(slider.run);
    });
    //鼠标离开后重新开启定时器
    slider.addEventListener('mouseout', function () {
        slider.run = setInterval(function () {
            btn_r.click();
        }, 3000);
    });

    //根据图片数量动态添加小圆点数量
    for (var i = 0; i < slider_ul.children.length; i++) {
        //创建小圆点a元素
        var a = document.createElement('a');
        //给每个小圆点自定义类名和序列号，以方便点击时移动
        a.classList.add('sli-box-children');
        a.setAttribute('index', i);
        sli_box.appendChild(a);
        // 给每个小圆点添加事件
        a.addEventListener('mouseover', function () {
            this.classList.add('select-sli');
        })
        a.addEventListener('mouseout', function () {
            //判断离开的元素是不是对应图片的当前小圆点,如果不是就移除样式
            if (index != this.getAttribute('index')) {
                //特殊情况当index为5且鼠标当前目标为0时不移除
                if (!(this.getAttribute('index') == 0 && index == 5)) {
                    this.classList.remove('select-sli');
                }
            }
        })
        //点击小圆点跳到对应图片    
        a.addEventListener('click', function () {
            //排他思想
            for (let i = 0; i < sli_box.children.length; i++) {
                sli_box.children[i].classList.remove('select-sli');
            }
            if (index == 5) {
                slider_ul.style.left = '0px';
            }
            index = this.getAttribute('index');
            this.classList.add('select-sli');
            console.log(index);
            animate(slider_ul, index * -slider_width);
        })
    }

    //将第一个小圆点设置样式
    sli_box.children[0].classList.add('select-sli');
    //将第一张图片复制添加到ul最后面
    var first = slider_ul.children[0].cloneNode(true);
    slider_ul.appendChild(first);
    //根据图片数量生成ul宽度
    slider_ul.style.width = slider_width * slider_ul.children.length + 'px';

    //节流阀参数，防止轮播图左右键连续点击造成播放过快
    //节流阀目的，当上一个函数动画执行完毕再去执行下一个
    var flag = true;
    //给左右按钮添加事件
    btn_l.addEventListener('click', function () {
        //判断节流阀是不是打开状态
        if (flag === true) {
            //当开始执行动画后关闭节流阀，等待animate动画完成后打开节流阀
            flag = false;
            //排他思想
            for (let i = 0; i < sli_box.children.length; i++) {
                sli_box.children[i].classList.remove('select-sli');
            }
            if (index == 0) {
                index = 5;
            }
            index--;
            sli_box.children[index].classList.add('select-sli');
            animate(slider_ul, index * - slider_width, function () {
                //只有当动画执行完之后才把节流阀打开，这样才会触发动画效果
                flag = true;
            });
        }
    });
    btn_r.addEventListener('click', function () {
        //判断节流阀是不是打开状态
        if (flag === true) {
            //当开始执行动画后关闭节流阀，等待animate动画完成后打开节流阀
            flag = false;
            //排他思想
            for (let i = 0; i < sli_box.children.length; i++) {
                sli_box.children[i].classList.remove('select-sli');
            }
            index++;
            //为了更好的完成图片的滚动效果，这里的最后一张照片是第六张
            //所以当序列号为6时当前小圆点应该是第一个，然后将ul的left设置为0，下一张图序列号为1，将index设置为1
            if (index == slider_ul.children.length) {
                slider_ul.style.left = '0px';
                sli_box.children[1].classList.add('select-sli');
                index = 1;
            }
            //所以当序列号为5时当前小圆点应该是第一个
            else if (index == slider_ul.children.length - 1) {
                sli_box.children[0].classList.add('select-sli');
            }
            else {
                sli_box.children[index].classList.add('select-sli');
            }
            animate(slider_ul, index * - slider_width, function () {
                //只有当动画执行完之后才把节流阀打开，这样才会触发动画效果  
                flag = true;
            });
        }
    });
    btn_l.addEventListener('mouseover', function () {
        this.style.backgroundPosition = '0px,0px'
    });
    btn_l.addEventListener('mouseout', function () {
        this.style.backgroundPosition = '-83px,0px'
    });
    btn_r.addEventListener('mouseover', function () {
        this.style.backgroundPosition = '-42px,0px'
    });
    btn_r.addEventListener('mouseout', function () {
        this.style.backgroundPosition = '-125px,0px'
    });

    //图片自动滚动效果，实际就类似于点击了右键按钮
    //利用定时器手动触发右键点击事件，
    slider.run = setInterval(function () {
        btn_r.click();
    }, 3000);

});

