function clientConsoleLog(log_content)
{
    //console.log(log_content);
}

class Question
{
    constructor()
    {

    }
}

function ask()
{
    clientConsoleLog("Asked");

    var i = Math.floor(Math.random() * 2);
    var input_id = "#option_" + (i + 1);

    clientConsoleLog("Returning: " + i);

    document.querySelector("#answer").innerHTML = "Answer: " + document.querySelector(input_id).value;
}