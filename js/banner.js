window.onload = function(){
	var banImg = document.getElementById('banner_img');
	var prev = document.getElementsByClassName('prev')[0];
	var next = document.getElementsByClassName('next')[0];
	var btns = document.getElementById('btns');
	var lis = btns.getElementsByTagName('li');

	var images = ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg'];
	var index = 0;

	//设置图片轮播
	function changeImg(){
		index ++;
		if(index >= images.length){
			index = 0;
		}
		banImg.src = images[index];
		selectIndex(index);
	}
	var timer = window.setInterval(changeImg,2000);

	//设置轮播图标下标点
	function selectIndex(index){
		for(var i=0; i<lis.length; i++){
			if(index == i){
				lis[i].className = "active";
			} else{
				lis[i].className = "";
			}
		}
	}

	//移入下标点显示对应图片
	for(var i=0; i<lis.length; i++){
		lis[i].setAttribute('index',i);
		lis[i].onmouseover = function(){
			clearInterval(timer);
			index = this.getAttribute('index');
			for(var i=0; i<lis.length; i++){
				if(index == i){
					banImg.src = images[index];
					selectIndex(index);
				}
			}
		}
		lis[i].onmouseout = function(){
			timer = window.setInterval(changeImg,2000);
		}
	}

	//移入移出轮播图片
	banImg.onmouseover = function(){
		clearInterval(timer);
	}
	banImg.onmouseout = function(){
		timer = window.setInterval(changeImg,2000);
	}

	//点击前一张图片
	prev.onmouseover = function(){
		clearInterval(timer);
	}
	prev.onclick = function(){
		index --;
		if(index < 0){
			index = images.length -1;
		}
		banImg.src = images[index];
		selectIndex(index);
	}

	//点击下一张图片
	next.onmouseover = function(){
		clearInterval(timer);
	}
	next.onclick = function(){
		index ++;
		if(index >= images.length){
			index = 0;
		}
		banImg.src = images[index];
		selectIndex(index);
	}
}