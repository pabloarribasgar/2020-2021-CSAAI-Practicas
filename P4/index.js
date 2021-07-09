function start (){
    
    document.getElementsByClassName('canvasButton')[0].classList.add('hidden');
    document.getElementsByClassName('canvas')[0].classList.remove('hidden');
}

function enableButtons (){
    const buttons = document.getElementsByClassName('actionButton');
    for (let i=0;i<buttons.length;i+){
      buttons[i].removeAttribute('disabled'); 
    }
}