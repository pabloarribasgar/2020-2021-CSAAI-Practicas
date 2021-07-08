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
            if (lastInput == '+' || lastInput == '-'){
                alert('Introduce un numero');
            } else if(numbers < 2)
                input.value += operator;
            else 
                alert('Solo se permiten dos numeros');
            break;

        case 'DEL':
            input.value = input.value.substr(0, input.value.length-1);
            break;
        case 'AC':
            input. value = "";
            break;
        case '=':
            if (numbers < 1)
            alert('Introduce un numero primero');
        input.value = Math.round(eval(input.value));
        break;
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