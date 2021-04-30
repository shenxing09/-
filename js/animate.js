//缓速动画
//封装简单动画函数  obj为需要动画的元素对象，target为移动距离,callback为回调函数
function animate(obj, target, callback) {
    // 如果多次点击移动元素的话，会造成元素移动卡顿或加速bug，所以每次点击时清除上一个计时器
    clearInterval(obj.timer);
    //obj.timer相当于给每个不同的对象声明了一个计时器，这样既不用单独给timer添加var开辟内存空间，又可以分开不同对象的计时器，还可以加快效率
    obj.timer = setInterval(function () {
        //每步的步长，递减，可以向左或向右移动，因为目标距离值减去目前距离值可为正数也可为负数
        var step = (target - obj.offsetLeft) / 10;
        //将步长取整数，小数会造成实际位置偏差
        //判断步长是否为正数，为正数往大取整，为负数往小取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //获取元素目前left值
        var value = parseInt(getComputedStyle(obj, null).getPropertyValue('left'));
        //判断是否到达目标位置  
        if (value == target) {
            clearInterval(obj.timer);
            //回调函数一定要写在定时器结束之后，判断是否又回调函数有就执行
            if (callback) {
                callback()
            };
            //短路运算，只有当callback为true时才会触发效果，和if效果一致
            // callback && callback();
        }
        else {
            obj.style.left = value + step + 'px';
        }
    }, 15);
}