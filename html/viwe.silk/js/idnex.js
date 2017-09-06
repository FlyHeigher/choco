// px转rem
document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';
  window.onresize = function() {            
    document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';        
}; 


// 轮播
var mySwiper=new Swiper('#div2',{
    loop:true,
    effect:'slide', //切换效果
    autoplay:1000,//一秒钟自动播放一次
    autoplayDisableOnInteraction:false//滑完之后仍然自动播放
    /*effect:slide的切换效果，默认为"slide"(位移切换),可设置为"fade"(淡入)，"cube"(方块),"coverflow"(3D流),"flip(3d翻转)"*/
})

// 侧边栏
var nav_left=document.querySelector('.nav_left'),
    all=document.querySelector('.all');

nav_left.addEventListener('click',slide_show);
function slide_show(){
    all.style.transition="all 0.3s linear";
    if(parseFloat(all.style.left)<0){
        all.style.left="0";
    }else{
        all.style.left="-12rem";
    }
}
