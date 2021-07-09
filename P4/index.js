function start (){
    enableButtons();
    enableSliders();
    document.getElementsByClassName('canvasButton')[0].classList.add('hidden');
    document.getElementsByClassName('canvas')[0].classList.remove('hidden');
}

function enableButtons (){
    const buttons = document.getElementsByClassName('actionButton');
    for (let i=0;i<buttons.length;i++){
      buttons[i].removeAttribute('disabled'); 
    }
}

function enableSliders (){
    const sliders = document.getElementsByClassName('inputSlider');
    for (let i=0;i<sliders.length;i++){
        sliders[i].removeAttribute('disabled'); 
    }
}
function drawImage(){
    const img = document.getElementsByClassName('original')[0];
    const canvas = document.getElementsByClassName('canvas')[0];
    const context = canvas.getContext('2d');
    context.drawImage(img, 0,0);
}

function reDrawCanvas(){
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    const img = document.getElementsByClassName('original')[0];
    const canvas = document.getElementsByClassName('canvas')[0];
    const context = canvas.getContext('2d');
    context.drawImage(img, 0,0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i=0; i<data.length; i+=4) {
        if (data[i] < red){
            data[i] = red;
        }
        if (data[i+1] < green){
            data[i+1] = green;
        }
        if (data[i+2] < blue){
        data[i+2] = blue;
        }
    }
    context.putImageData(imageData, 0, 0);
}