function calculate(){
    var num1 =parseFloat(document.getElementById("num1").value);
    var num2 =parseFloat(document.getElementById("num2").value);
    var operations = document.getElementById("operation").value;

    var result;

    switch(operations){
        case 'add':{
            result=num1+num2;
            break;
        }
        case 'subtract':{
            result=num1-num2;
            break;
        }
        case 'multiply':{
            result=num1*num2;
            break;
        }
        case 'divide':{
            if(num2!==0){
             result=num1/num2;   
            }
            else{
                document.getElementById('result').innerHTML="division by 0";
                return;
             /*if the switch statement is contained in a function, 
             then a return statement terminates the execution of the function body 
             and therefore the switch statement*/
            }
            break;
        }
        default:{
         document.getElementById('result').innerHTML="error: invalid operation";
        }
    }
    //displaying the result
    document.getElementById('result').innerHTML = "Result: " + result;
}
    

