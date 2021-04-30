window.addEventListener('load', function () {
    //下载app
    var downapp = document.querySelector('.topbar-down');
    var appcode = downapp.querySelector('.appcode');
    downapp.addEventListener('mouseover', function () {
        appcode.style.height = '148px';
        downapp.classList.add('show');
    });
    downapp.addEventListener('mouseout', function () {
        appcode.style.height = '0px';
        downapp.classList.remove('show');
    });

    //购物车
    var shopcar = document.querySelector('.topbar-cart');
    var shopcar_con = shopcar.querySelector('.shopcar-con');
    var cart = shopcar.querySelector('.cart');
    shopcar.addEventListener('mouseover', function () {
        shopcar_con.style.height = '100px';
        cart.classList.add('cart-color');
        cart.style.transition = 'background-color .1s,color .1s';
    });
    shopcar.addEventListener('mouseout', function () {
        shopcar_con.style.height = '0px';
        cart.classList.remove('cart-color');
        cart.style.transition = 'background-color 0.1s 0.5s,color 0.1s .5s';
    });

    // 导航栏
    // var nav_item = document.querySelectorAll('.nav-item');
    // var nav_item_children = document.querySelectorAll('.nav-item-children');
    // for (let i = 0; i < nav_item.length - 4; i++) {
    //     nav_item[i].addEventListener('mouseover', function () {
    //         for (let j = 0; j < nav_item_children.length; j++) {
    //             // nav_item_children[j].style.transition = 'height .5s, visibility  0s';
    //             // nav_item_children[j].style.height = '0px';
    //             nav_item_children[j].style.display = 'none';
    //         }
    //         this.children[1].style.display = 'block';
    //         var timer = setInterval(function () {
    //             for (let j = 0; j < nav_item_children.length; j++) {

    //                 nav_item_children[j].style.height = '227px';
    //             }

    //             // this.children[1].style.transition = 'height 0.5s .1s';
    //             // this.children[1].style.height = '227px';
    //             clearInterval(timer);
    //         }, 10);

    //     });
    //     nav_item[i].addEventListener('mouseout', function () {
    //         // this.children[1].style.transition = 'height .5s, visibility 0s ';
    //         // this.children[1].style.height = '0px';
    //         this.children[1].style.display = 'none';
    //         console.log(this.children[1]);
    //     });
    // }

    // 导航栏
    var nav_item = document.querySelectorAll('.nav-item');
    var nav_item_children = document.querySelectorAll('.nav-item-children');
    for (let i = 0; i < nav_item.length - 2; i++) {
        nav_item[i].addEventListener('mouseover', function () {
            for (let j = 0; j < nav_item_children.length; j++) {
                nav_item_children[j].style.transition = 'height 0.3s, visibility  0s,box-shadow .3s 10s';
                nav_item_children[j].style.height = '227px';
                nav_item_children[j].style.visibility = 'hidden';
            }
            this.children[1].style.transition = 'height 0.4s .1s,visibility 0s ,border .3s .1s,box-shadow .3s 10s';
            this.children[1].style.visibility = 'visible';
            this.children[1].style.height = '227px';
        });
        nav_item[i].addEventListener('mouseout', function () {
            this.children[1].style.transition = 'height .4s, visibility 0.4s ';
            this.children[1].style.height = '0px';
            this.children[1].style.visibility = 'hidden';
            // console.log(this.children[1]);
        });
    }

    // 导航栏
    // var nav_item = document.querySelectorAll('.nav-item');
    // var nav_item_children = document.querySelectorAll('.nav-item-children');
    // var timer;
    // for (var i = 0; i < nav_item.length - 4; i++) {
    //     nav_item[i].addEventListener('mouseover', function (e) {
    //         for (let z = 0; z < nav_item_children.length; z++) {
    //             nav_item_children[z].style.display = 'block';
    //             nav_item_children[z].style.visibility = 'hidden';
    //         }
    //         this.children[1].style.visibility = 'visible';
    //         this.children[1].style.display = 'block';
    //         timer = setInterval(function () {
    //             for (let j = 0; j < nav_item_children.length; j++) {
    //                 var wd = nav_item_children[j].offsetHeight + 1 + 'px'
    //                 if (parseInt(wd) > 277) {
    //                     clearInterval(timer);
    //                 }
    //                 else {
    //                     nav_item_children[j].style.height = wd;
    //                 }
    //             }
    //         }, 100);
    //     });
    //     nav_item[i].addEventListener('mouseout', function () {
    //         setInterval(timer)
    //         for (let z = 0; z < nav_item_children.length; z++) {
    //             nav_item_children[z].style.transition = 'height .5s, visibility 0.5s ';
    //             nav_item_children[z].style.height = '0px';
    //             nav_item_children[z].style.visibility = 'hidden';
    //         }
    //         // this.children[1].style.transition = 'height .5s, visibility 0.5s ';
    //         // this.children[1].style.height = '0px';
    //         // this.children[1].style.visibility = 'hidden';
    //     });
    // }

    //搜索框
    var search_text = document.querySelector('.search-text')
    var search_btn = document.querySelector('.search-btn')
    var result_item = document.querySelectorAll('.result-item');
    var search_text_box = document.querySelector('.search-text-box');
    var text_focus = false;
    search_text.addEventListener('focus', function () {
        this.style.borderColor = '#ff6700';
        search_btn.style.borderColor = '#ff6700';
        search_text_box.style.height = '209px';
        search_text_box.classList.add('search-text-bor');
    })
    search_text.addEventListener('blur', function () {
        this.style.borderColor = '#e0e0e0';
        search_btn.style.borderColor = '#e0e0e0';
        search_text_box.style.height = '0px';
        search_text_box.classList.remove('search-text-bor');
    })
    search_btn.addEventListener('mouseover', function () {
        //判断目前搜索框是否为焦点
        text_focus = document.activeElement.className == 'search-text' ? true : false;
        if (text_focus == false) {
            search_text.style.borderColor = '#b0b0b0';
            this.style.borderColor = '#ff6700';
            this.style.backgroundColor = '#ff6700';
            this.style.color = '#fff';
        }
        else {
            this.style.borderColor = '#ff6700';
            this.style.backgroundColor = '#ff6700';
            this.style.color = '#fff';
        }
    })
    search_btn.addEventListener('mouseout', function () {
        //判断目前搜索框是否为焦点
        text_focus = document.activeElement.className == 'search-text' ? true : false;
        if (text_focus == false) {
            search_text.style.borderColor = '#e0e0e0';
            this.style.borderColor = '#e0e0e0';
            this.style.backgroundColor = 'transparent';
            this.style.color = '#616161';
        }
        else {
            this.style.backgroundColor = 'transparent';
            this.style.color = '#616161';
        }
    })
    for (var i = 0; i < result_item.length; i++) {
        result_item[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f9f9f9';
        });
        result_item[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = '#fff';
        });
    }

    //侧边导航栏
    var category_item = document.querySelectorAll('.category-item');
    var children_li = document.querySelectorAll('.children-li');
    for (var i = 0; i < category_item.length; i++) {
        category_item[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#ff6700';
            this.children[1].style.display = 'block';
        })
        category_item[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent';
            this.children[1].style.display = 'none';
        })
    }
    for (let j = 0; j < children_li.length; j++) {
        children_li[j].addEventListener('mouseover', function () {
            this.children[0].style.color = '#ff6700';
        });
        children_li[j].addEventListener('mouseout', function () {
            this.children[0].style.color = '#333';
        });
    }

    //主体下部分
    var l_list = document.querySelector('.l-list');
    for (let i = 0; i < l_list.children.length; i++) {
        l_list.children[i].addEventListener('mouseover', function () {
            this.children[0].style.opacity = '1'
        });
        l_list.children[i].addEventListener('mouseout', function () {
            this.children[0].style.opacity = '0.7';
        });
    }
    var main_sub_ul = document.querySelector('.main-sub-ul');
    for (let i = 0; i < main_sub_ul.children.length; i++) {
        main_sub_ul.children[i].addEventListener('mouseover', function () {
            this.style.boxShadow = '0px 8px 15px rgba(0,0,0,.2)'
        });
        main_sub_ul.children[i].addEventListener('mouseout', function () {
            this.style.boxShadow = '';
        });
    }

    //秒杀模块倒计时
    var hours_box = document.querySelector('.hours-box');
    var minites_box = document.querySelector('.minites-box');
    var seconds_box = document.querySelector('.seconds-box');
    var round = document.querySelector('.round');
    flashsalecount();
    var falsetimer = setInterval(function () {
        flashsalecount();
    }, 1000);
    function flashsalecount() {
        var nowtime = new Date();
        var endtime = new Date();
        var nowhours = nowtime.getHours();
        if (nowhours >= 0 && nowhours < 10) {
            endtime.setHours(10, 0, 0);
            round.innerHTML = '10:00场';
        }
        else if (nowhours >= 10 && nowhours < 12) {
            endtime.setHours(12, 0, 0);
            round.innerHTML = '12:00场';
        }
        else if (nowhours >= 12 && nowhours < 14) {
            endtime.setHours(14, 0, 0);
            round.innerHTML = '14:00场';
        }
        else if (nowhours >= 14 && nowhours < 18) {
            endtime.setHours(18, 0, 0);
            round.innerHTML = '18:00场';
        }
        else if (nowhours >= 18 && nowhours < 20) {
            endtime.setHours(20, 0, 0);
            round.innerHTML = '20:00场';
        }
        else {
            endtime.setHours(24, 0, 0);
            round.innerHTML = '24:00场';
        }
        var countdown = endtime - nowtime;
        var hours = parseInt(countdown / 1000 / 60 / 60);
        hours = hours < 10 ? '0' + hours : hours;
        var minites = parseInt(countdown / 1000 / 60 % 60);
        minites = minites < 10 ? '0' + minites : minites;
        var seconds = parseInt(countdown / 1000 % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        hours_box.innerHTML = hours;
        minites_box.innerHTML = minites;
        seconds_box.innerHTML = seconds;
    }

    //秒杀模块商品列表切换
    //获取元素
    var swiper_wrapper = document.querySelector('.swiper-wrapper');
    var flashsale_btn_l = document.querySelector('.flashsale-btn-prev');
    var flashsale_btn_r = document.querySelector('.flashsale-btn-next');
    //每个商品项的宽度和外边距宽度
    var swiperLiWidth = swiper_wrapper.children[0].offsetWidth + 14;
    //根据商品项数量动态生成商品列表ul的宽度
    swiper_wrapper.style.width = swiperLiWidth * swiper_wrapper.children.length + 'px';
    //商品列表四个为一组，最后一组的序列号（0，1，2，3）
    var count = Math.floor(swiper_wrapper.children.length / 4);
    //当前组的数字
    var num = 0;
    //移动距离
    var target = 0;
    flashsale_btn_r.addEventListener('click', function () {
        //点击后清除计时器自动滚动效果
        clearInterval(timer);
        num++;
        //当为最后一组时，当前组num不再增加
        if (num >= count) {
            num = count;
        }
        //调用tab函数来设置按钮样式和动画效果
        tab();
    });
    flashsale_btn_l.addEventListener('click', function () {
        //点击后清除计时器自动滚动效果
        clearInterval(timer);
        num--;
        //当为第一组时，当前组num不再减少
        if (num <= 0) {
            num = 0;
        } //调用tab函数来设置按钮样式和动画效果
        tab();
    });
    //先调用一次tab函数来设置按钮样式和动画效果
    tab();
    //简单封装tab函数控制按钮样式和移动动画
    function tab() {
        //当前组为最后一组时，移动距离应该是ul的宽度减去一整个组4个商品项的宽度来保证容器被占满
        target = num == count ? target = -(swiper_wrapper.offsetWidth - 4 * swiperLiWidth) : -swiperLiWidth * 4 * num;
        //判断目前是否是第一组，如果是则将左按钮设置禁用样式
        num == 0 ? flashsale_btn_l.classList.add('flashsale-btn-disabled') : flashsale_btn_l.classList.remove('flashsale-btn-disabled');
        //判断目前是否是最后一组，如果是则将右按钮设置禁用样式
        num == count ? flashsale_btn_r.classList.add('flashsale-btn-disabled') : flashsale_btn_r.classList.remove('flashsale-btn-disabled');
        swiper_wrapper.style.transform = 'translateX(' + target + 'px)';
        //设置移动动画时间为1s
        swiper_wrapper.style.transition = "all 1s";
    }
    //设置定时器来控制动画
    var timer = setInterval(function () {
        num++;
        //当最后一组到达后返回第一组
        if (num > count) {
            num = 0;
        }
        tab();
    }, 3000);

    //销售模块
    var sale_item = document.querySelectorAll('.sale-item');
    for (let i = 0; i < sale_item.length; i++) {
        sale_item[i].addEventListener('mouseover', function () {
            this.style.boxShadow = ' 0 15px 30px rgba(0, 0, 0, .1)';
            this.style.transform = 'translate3d(0,-2px,0)';
        });
        sale_item[i].addEventListener('mouseout', function () {
            this.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0)';
            this.style.transform = 'translate3d(0,0px,0)';
        });
    }

    //更多
    var moreall = document.querySelectorAll('.moreall');
    for (let i = 0; i < moreall.length; i++) {
        moreall[i].addEventListener('mouseover', function () {
            this.classList.add('moreall-active');
        });
        moreall[i].addEventListener('mouseout', function () {
            this.classList.remove('moreall-active');
        });
    }

    //销售模块切换
    function tabSale(obj) {
        var sale_box = document.querySelector(obj);
        var tab_list = sale_box.querySelector('.tab-list');
        var sale_list = sale_box.querySelectorAll('.sale-list');
        sale_list[0].classList.add('sale-list-active');
        tab_list.children[0].classList.add('tab-active');
        for (let j = 0; j < tab_list.children.length; j++) {
            tab_list.children[j].addEventListener('mouseover', function () {
                for (let i = 0; i < sale_list.length; i++) {
                    sale_list[i].classList.remove('sale-list-active');
                    tab_list.children[i].classList.remove('tab-active');
                }
                sale_list[j].classList.add('sale-list-active');
                this.classList.add('tab-active');
            });
        }
    }
    tabSale(".home-appliances");
    tabSale(".intellect");
    tabSale(".collaction");

    //视频部分
    var video_item = document.querySelectorAll('.video-item');
    var video_img = document.querySelectorAll('.video-img');
    for (let i = 0; i < video_item.length; i++) {
        video_item[i].addEventListener('mouseover', function () {
            this.style.boxShadow = ' 0 15px 30px rgba(0, 0, 0, .1)';
            this.style.transform = 'translate3d(0,-2px,0)';
        });
        video_item[i].addEventListener('mouseout', function () {
            this.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0)';
            this.style.transform = 'translate3d(0,0px,0)';
        });
        video_img[i].addEventListener('mouseover', function () {
            this.classList.add('video-img-active');
        });
        video_img[i].addEventListener('mouseout', function () {
            this.classList.remove('video-img-active');
        });
    }

    //服务部分
    var service_item = document.querySelectorAll('.service-item');
    for (let i = 0; i < service_item.length; i++) {
        service_item[i].addEventListener('mouseover', function () {
            this.classList.add('service-item-active');
        });
        service_item[i].addEventListener('mouseout', function () {
            this.classList.remove('service-item-active');
        });
    }

    //微信部分
    var follow = document.querySelector('.follow');
    var wx = document.querySelector('.wx');
    var wximg = document.querySelector('.wximg');
    follow.addEventListener('mouseover', function () {
        this.classList.add('follow-active');
    });
    follow.addEventListener('mouseout', function () {
        this.classList.remove('follow-active');
    });
    wx.addEventListener('mouseover', function () {
        wximg.classList.add('wximg-active');
    });
    wx.addEventListener('mouseout', function () {
        wximg.classList.remove('wximg-active');
    });

    //最底部图片切换
    var safeimg = document.querySelector('.safe-img');
    let safenum = 0;
    setInterval(function () {
        if (safenum == 1) {
            safeimg.children[0].style.opacity = '1';
            safenum = 0;
        }
        else {
            safeimg.children[0].style.opacity = '0';
            safenum = 1;
        }
    }, 2000);

    //侧边栏
    var tool_item = document.querySelectorAll('.tool-item');
    var backtop = document.querySelector('.backtop');
    for (let i = 0; i < tool_item.length; i++) {
        tool_item[i].addEventListener('mouseover', function () {
            this.classList.add('tool-item-active');
        });
        tool_item[i].addEventListener('mouseout', function () {
            this.classList.remove('tool-item-active');
        });
    }
    var windowscroll = function () {
        var windowtop = window.pageYOffset;
        backtop.classList.remove('backtop-active');
        if (windowtop >= 1080) {
            backtop.classList.add('backtop-active');
        }
    };
    windowscroll();
    window.addEventListener('scroll', function () {
        windowscroll()
    });
    backtop.addEventListener('click', function () {
        window.scroll(0, 0);
    });
});

