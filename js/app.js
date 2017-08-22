function Move(){
	this.oUl = document.getElementsByClassName("banner-inner")[0];
	this.aImg = this.oUl.children;
	this.aLi = document.getElementsByClassName("banner-control")[0].children;
	this.defaultWidth = this.oUl.children[0].offsetWidth;
	var _this = this;
	onresize = function(){
		_this.defaultWidth = _this.oUl.children[0].offsetWidth
	}
	//上一张
	this.prevIndex = 0;
	//当前点击的那张
	this.thisIndex = 0;

	for (var i=0;i<this.aLi.length;i++){
	    this.aLi[i].index = i;
	    var _this = this;
	    this.aLi[i].onclick = function () {
	        //更新当前这张索引值
	        _this.thisIndex = this.index;

	        if(_this.thisIndex == _this.prevIndex) return false;

	        //隐藏掉所有的图片
	        for(var i=0;i<_this.aImg.length;i++){
	            _this.aImg[i].style.display = 'none';
	            _this.aLi[i].className = '';
	        }
	        //当前这张和上一张都显示出来
	        _this.aImg[_this.prevIndex].style.display = 'block';
	        _this.aImg[_this.thisIndex].style.display = 'block';
	        _this.aLi[_this.thisIndex].className = 'active';

	        if(_this.thisIndex > _this.prevIndex){
	            _this.oUl.style.left = 0;
	            move(_this.oUl,{left:-_this.defaultWidth});
	        }
	        else{
	            _this.oUl.style.left = -_this.defaultWidth + 'px';
	           	move(_this.oUl,{left:0});
	        }
	        _this.prevIndex = _this.thisIndex;

	    }
	}

	this.t = null;
	clearInterval(this.t)
	var _this = this;
	this.t = setInterval(function(){
		_this.thisIndex ++
		if (_this.thisIndex>_this.aImg.length-1) {
			_this.thisIndex = 0
		}
	    if(_this.thisIndex == _this.prevIndex) return false;

	    //隐藏掉所有的图片
	    for(var i=0;i<_this.aImg.length;i++){
	        _this.aImg[i].style.display = 'none';
	        _this.aLi[i].className = '';
	    }
	    //当前这张和上一张都显示出来
	    _this.aImg[_this.prevIndex].style.display = 'block';
	    _this.aImg[_this.thisIndex].style.display = 'block';
	    _this.aLi[_this.thisIndex].className = 'active';

	    if(_this.thisIndex > _this.prevIndex){
	        _this.oUl.style.left = 0;
	        move(_this.oUl,{left:-_this.defaultWidth});
	    }
	    else{
	        _this.oUl.style.left = -_this.defaultWidth + 'px';
	        move(_this.oUl,{left:0});
	    }
	    _this.prevIndex = _this.thisIndex;
	},5000)
}

new Move()