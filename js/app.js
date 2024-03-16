const components = document.querySelectorAll('.button');
var result = document.getElementById('txt_result');
var componentHistory = document.getElementById('txt_historial_result');
var histories = [];
var operators = [];
var numbers = [];
var operations = ['-','+','÷','AC','=','x','%'];

components.forEach(component =>{
    component.addEventListener('click', function () {
        let content = this.firstElementChild;

        concatOperator(content);
        //viewResult();
        console.log(operators);
   
    });
});

function concatOperator(content) {
    if(content.value == 'image'){
        operators.pop();
    }else{
        operators.push(content.textContent);
    }

    Operar(content);
    viewResult()
}

function Operar(content) {
    let number = '';
    let copyArray = operators.slice();
    copyArray.pop();
    if(content.value == 'image'){
        content.textContent == '=';
    }
    if(content.textContent == 'X'){
        content.textContent == 'x';
    }
    switch (content.textContent) {
        case operations[0]:
            copyArray.forEach(operator => {
                number+=operator;
            });
            
            numbers.push(number);
            numbers.push(operations[0]);
            break;
    
        case operations[1]:
                copyArray.forEach(operator => {
                    number+=operator;
                });
                
                numbers.push(number);
                numbers.push(operations[1]);
                break;
        case operations[2]:
            copyArray.forEach(operator => {
                number+=operator;
            });
            
            numbers.push(number);
            numbers.push(operations[2]);
            break;

        case operations[3]:
                operators=[];
                numbers=[];
                
                break;

        case operations[4]:
                for (let index = (numbers[0].length + 1); index < copyArray.length; index++) {
                    number+=copyArray[index];
                }
                numbers.push(number);
                console.log(numbers);


                numbers.push(content.textContent);

                /**
                 * operación
                 */
                let result = op(numbers[0],numbers[2],numbers[1]);
                numbers.push(result);
                /*
                fin op
                */
                operators=[];
                

                //history
                record(numbers);
                console.log(histories)
                numbers=[];
                break;

        case operations[5]:
                    copyArray.forEach(operator => {
                        number+=operator;
                    });
                    
                    numbers.push(number);
                    numbers.push(operations[5]);
                    break;

        case operations[6]:
                    copyArray.forEach(operator => {
                        number+=operator;
                    });
                    
                    numbers.push(number);
                    numbers.push(operations[6]);
                    break;
        default:
            break;
    }
   
}
function viewResult() {
    let concat = '';
    operators.forEach(operator => {
        concat+=operator;
    });
    result.innerText = concat;
}

function record(array) {
    let concat = '';
    array.forEach(x=>{
        concat+=x;
    });
    histories.push(concat);

    componentHistory.innerText = '';
    histories.forEach(x=>{
        componentHistory.innerText += x + '\n';
    });

    
}

function op(num1,num2,op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0;
    switch (op) {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
    
        case 'x':
                result = num1*num2;
                break;
        case '÷':
            result = num1/num2;
            break;
        case '%':
            result = num1%num2;
            break;
        default:
            break;
    }
    return result;
}