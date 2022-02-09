var images = [
'../images/bg/1.jpg', 
'../images/bg/2.jpg', 
'../images/bg/3.jpg', 
'../images/bg/4.jpg', 
'../images/bg/5.jpg', 
'../images/bg/6.jpg', 
'../images/bg/7.jpg'];
$('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
