function operacion (operator) {
    function numero (number){
        input = document.getElementsByClassName("display")[0];
        input.value += number;
    }
    
    switch (operator){
        case '*':
        case '/':
            if(numbers < 1){
                alert('Introduce a number before an operator');
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