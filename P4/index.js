function start (){
    enableButtons();
    enableSliders();
    drawImage();
    color();
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
function disableSliders(){
    const sliders = document.getElementsByClassName('inputSlider');
    for (let i=0;i<sliders.length;i++){
        sliders[i].setAttribute('disabled', true); 
      }
}
function drawImage(){  
    const img = document.getElementsByClassName('original')[0];
    const canvas = document.getElementsByClassName('canvas')[0];
    const context = canvas.getContext('2d');
    context.drawImage(img, 0,0);
}
function slide(id){
    const value = document.getElementById(id).value;
    document.getElementById(id + 'Value').innerText = value;
    reDrawCanvas();
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
function resetSlider(){
    const sliders = document.getElementsByClassName('inputSlider');
    for (let i=0;i<sliders.length;i++){
        sliders[i].value = 0;
        document.getElementById(sliders[i].id + 'Value').innerText = 0;
    }
}

function grayscale(){
    document.getElementsByClassName('canvas')[0].setAttribute('style', 'filter: grayscale(1)');
    document.getElementById('color').classList.remove('buttonClicked');
    document.getElementById('gray').classList.add('buttonClicked');
    disableSliders();
}
function color(){
    document.getElementsByClassName('canvas')[0].removeAttribute('style');
    document.getElementById('gray').classList.remove('buttonClicked');
    document.getElementById('color').classList.add('buttonClicked');
    enableSliders();
}
function reset(){
    resetSlider();
    drawImage();
    color();
}
