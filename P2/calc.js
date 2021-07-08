function numero (number){
    input = document.getElementsByClassName("display")[0];
    input.value += number;
}

function operacion (operator) {
    input = document.getElementsByClassName("display")[0];
    const lastInput = input.value.charAt(input.value.length-1);
    
    switch (operator){
        case '*':
        case '/':
            if(numbers < 1){
                alert('Introduce un numero antes de un operador');
                break;
            }
        case '+':
        case '-':
           
        case 'DEL':
          
        case 'AC':
            
        case '=':
          
        default:
            break;
    }
}

function howManyNumbers(value){
    let numbers = 0;
    let lastCharNumber = false;
    for (let i=0; i < value.length; i++){
        if(!isNaN(value.charAt(i))){
            if(!lastCharNumber)
                numbers++;
            lastCharNumber = true;
        } else {
            lastCharNumber = false;
        }
    }
    return numbers;
}