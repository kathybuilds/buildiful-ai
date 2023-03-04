function clientConsoleLog(log_content)
{
    console.log(log_content);
}

class Question
{
    constructor()
    {
        //clientConsoleLog("Class instantiated");
    }
}

function init()
{
    document.querySelector("#answer_div").style.visibility = "hidden";
}

function ask()
{
    //clientConsoleLog("Asked");

    var i = Math.floor(Math.random() * 2);
    var input_id = "#option_" + (i + 1);

    //clientConsoleLog("Returning: " + i);

    //document.querySelector("#answer_div").innerHTML = ">> Answer: " + document.querySelector(input_id).value;
    //document.querySelector("#answer_div").innerHTML = "to be continued...";
    document.querySelector("#answer_div").style.visibility = "visible";
}

function updateName()
{
    var i = Math.floor(Math.random() * 2);

    //clientConsoleLog("Name option i = " + i);

    document.querySelector("#salutation").innerHTML = "Dear " + (i == 0 ? "Bunny" : "Bruno") + ",";
}