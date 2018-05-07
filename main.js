var $sliderBox = $('#sliderBox');
var $thumbLis = $('#thumb > li')
var sliderIndex = 0;
for (let i = 0; i < $thumbLis.length; i++) {
    $thumbLis[i].onclick = function () {
        for (var u = 0; u < $thumbLis.length; u++) {
            $($thumbLis[u]).removeClass('actived');
        }
        $(this).addClass('actived')
        $sliderBox.css('margin-left', `-${i * 920}px`);
        sliderIndex = i;
        clearInterval(timer);
        timer = setInterval(autoPlay, 5000);
    }
}
var timer = setInterval(autoPlay, 5000);
function autoPlay() {
    sliderIndex = (sliderIndex < $thumbLis.length - 1 ? sliderIndex + 1 : 0);
    for (var u = 0; u < $thumbLis.length; u++) {
        $($thumbLis[u]).removeClass('actived');
    }
    $($thumbLis[sliderIndex]).addClass('actived')
    $sliderBox.css('margin-left', `-${sliderIndex * 920}px`);
}