var img = document.getElementById('img');

var slides=['img2.jpg','img3.jpg', 'img4.jpg','img5.jpg', 'img6.jpg', 'img7.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,4000);