const src1 = 'https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4?&autoplay=1&autopause=0';
const src2 = 'https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4?&autoplay=1&autopause=0';

function enableTestCameras(){
    const cameras = document.getElementsByClassName('videoTest');
    for (let i=0;i<cameras.length;i++){
        if (cameras[i].id == 'video1')
            cameras[i].src = src1;
        else if (cameras[i].id == 'video2')
            cameras[i].src = src2;
        cameras[i].classList.remove('hidden');
    }
}
function disableTestCameras(){
    const cameras = document.getElementsByClassName('videoTest');
    for (let i=0;i<cameras.length;i++){
        cameras[i].classList.add('hidden');
        cameras[i].src = '';
    }
}

function enableButtons(){
    const buttons = document.getElementsByClassName('actionButton');
    for (let i=0;i<buttons.length;i++){
        if(buttons[i].id == "on")
            buttons[i].setAttribute('disabled', true);
        else
            buttons[i].removeAttribute('disabled');
    }
}
function disableButtons(){
    const buttons = document.getElementsByClassName('actionButton');
    for (let i=0;i<buttons.length;i++){
        if(buttons[i].id == "on")
            buttons[i].removeAttribute('disabled');
        else
            buttons[i].setAttribute('disabled', true);
    }
}

function on(){
    enableTestCameras();
    enableButtons();
}
function off(){
    disableButtons();
    disableTestCameras();
} 


function switchOnMain(){
    document.getElementsByClassName('mainImage')[0].classList.add('hidden');
    document.getElementsByClassName('videoMain')[0].classList.remove('hidden');
}
function switchOffMain(){
    document.getElementsByClassName('videoMain')[0].classList.add('hidden')
    document.getElementsByClassName('mainImage')[0].classList.remove('hidden');
}