'use strict'

// deal with spolier text
function hideContent(s) {
    let content = s.nextElementSibling;
    content.classList.toggle("content_hide");
}

//deal with sensitive images
function hideImage(i) {
    let img = i.nextElementSibling;
    img.classList.toggle("img_hide");
    i.classList.toggle("img_hide_eye");
}

// deal with timezone
var offset = new Date().getTimezoneOffset();
var dts = document.getElementsByClassName('status_dt');
for (var i = 0; i < dts.length; i++) {
    var ori_time = dts[i].innerHTML;
    var timeInMillis = Date.parse(ori_time);
    var correctTime = new Date(timeInMillis - offset * 60 * 1000);
    var correct_datetime = correctTime.toISOString();
    dts[i].innerHTML = correct_datetime.substr(0, 16).replace('T', ' ');
}

// add the function of opening a image
function openImage(g) {
    var img_canvas = document.getElementById('img_view');
    var img_detail = document.getElementById('img_d');
    var img_caption = document.getElementById('caption');
    img_canvas.style.display = 'block';
    img_detail.src = g.src;
    if (g.alt) {
        img_caption.innerHTML = g.alt;
    }
}

// close the image view
function clickcloseimg() {
    document.getElementById('img_view').style.display = 'none';
}
