(function(doc,win){
		    var docEl = doc.documentElement;
		    var resizeEvt = "onorientationchange" in win ? "orientationchange" : "resize";
		    var Timer = null;
		    function recalc(){
		        var clientWidth = docEl.clientWidth || win.innerWidth;
		        //设计稿是750px
		        var initSize = (clientWidth/750) * 100;
		        var fontSize = clientWidth > 768 ? 120 :initSize;
		        docEl.style.fontSize = fontSize + "px";
		    }
		    doc.addEventListener("DOMContendLoaded",recalc,false);

		    //转屏
		    win.addEventListener(resizeEvt,function(){
		        clearTimeout(Timer);
		        Timer = setTimeout(recalc,300)
		    },false);

		    // 初始化
		    recalc();
})(document,window);