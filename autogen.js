//<![CDATA[
$(document).ready(function(){
//Generate
$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
}
else{
return decodeURI(results[1]) || 0;
}
}		
var getlink = $("#getlink"),
gotolink = $("#gotolink"),
timer = $('#timer');
if ($.urlParam('o') != null){
  var counter = 16;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      count = document.getElementById("count");
      count.innerHTML = "Link will appear in " + counter;
    }
    if (counter === 0) {
		$('#loading').addClass('hidden');
		getlink.prop('disabled',false);						
        getlink.removeClass('hidden');
        clearInterval(counter);
    }
  }, 1000);
}
function gotolinkcountdown(){
var countDown = 8;
gotolink.removeClass('hidden');
gotolink.prop('disabled',true);
var x = setInterval(function() {
var distance = countDown -= 1;
gotolink.html('Plase Wait...');
if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('Go to Link Now !');
}
}, 1000);
}
var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);
});
gotolink.on("click",function(){
var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
window.location.href=realurl;
});
fuckAdBlock.on(true, function() {
$("#adbs").html("Adblock Detected");
$("#adb").removeClass('hidden');
}).on(false, function() {
});
})
//]]>