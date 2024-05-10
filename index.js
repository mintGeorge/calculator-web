const display = document.getElementById("display");

function appendToDisplay(input) 
{
    display.value += input;
}

function clearDisplay() 
{
    display.value = "";
}

function calculate() 
{
    try 
    {
        let expression = display.value;
        
        expression = expression.replace(/%/g, "/100");
        display.value = eval(expression);
    } 
    catch (error) 
    {
        display.value = "Error";
    }
}

function removeOneChar()
{
    display.value = display.value.slice(0, -1);
}