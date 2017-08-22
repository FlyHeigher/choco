// px转rem
document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';
  window.onresize = function() {            
    document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';        
}; 
var mySwiper=new Swiper('#div2',{
    loop:true,
    effect:'slide', //切换效果
    autoplay:1000,//一秒钟自动播放一次
    autoplayDisableOnInteraction:false//滑完之后仍然自动播放
    /*effect:slide的切换效果，默认为"slide"(位移切换),可设置为"fade"(淡入)，"cube"(方块),"coverflow"(3D流),"flip(3d翻转)"*/
})