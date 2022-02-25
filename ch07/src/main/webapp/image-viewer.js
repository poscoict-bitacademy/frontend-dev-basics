var imageViewer = {
	init: function(){
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$(".image-viewer img").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideShow.bind(this));
			
			// 첫 번째 이미지 선택
			this._changeImage();
		}.bind(this));
	},
	_slideShow: function(){
		if(this._intervalId){
			/* 슬라이드쇼가 진행 상태 */
			
			// 1. 타이머 중지
			clearInterval(this._intervalId);
			this._intervalId = null;
			
			// 2. 버튼텍스트 => 슬라이드쇼 시작
			$("#btn-slideshow").text("슬라이드쇼 시작");
		} else {
			/* 슬라이드쇼가 중지 상태 */
			
			// 1. 타이머 시작
			this._intervalId = setInterval(function(){
				this._changeImage();
			}.bind(this), 500);
			
			
			// 2. 버튼텍스트 => 슬라이드쇼 중지 
			$("#btn-slideshow").text("슬라이드쇼 중지");
		}
	},
	_changeImage: function(){
		do {
			var index = Math.floor(Math.random() * this._images.length);
			var info = this._images[index];
		} while($(".image-viewer img").attr("alt") === info.name);
		
		$(".image-viewer img").attr({
			src: "images/" + info.file,
			alt: info.name
		});		
	},
	_intervalId: null,
	_images: [{ 
			name: "슬러시1",
			file: "1.png"
		}, { 
			name: "슬러시2",
			file: "2.png"
		}, {
			name: "슬러시3",
			file: "3.png"
		}]	
}