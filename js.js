document.addEventListener('onSpinStart', e => {
    console.log(e.detail.rotation)
    console.log(e.detail.speed)
    console.log(e.detail.friction)
})

document.addEventListener('onResult', e => {
    console.log(e.detail.result)
      //顯示自訂結果的訊息框
  		document.getElementById("myOverlay").style.display = "block";
		document.getElementById('result').innerHTML = e.detail.result
		document.getElementById("myOverlay").classList.remove("fadeOut");
		document.getElementById("myOverlay").classList.add("fadeIn");
      //播放音效
		document.getElementById("myAudio").play();
      //設定六秒後訊息框自動消失
		setTimeout(function(){
			document.getElementById("myOverlay").style.display = "none";
			document.getElementById("myOverlay").classList.remove("fadeIn");
			document.getElementById("myOverlay").classList.add("fadeOut");
		}, 6000);
      // 改寫者 Milly Lin 2023.04
})
