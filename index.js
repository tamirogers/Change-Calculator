// $(document).ready(function(){


function buttonFinal() {


    var saleAmount = document.getElementById('saleEntered').value;
 

    var customerAmount = document.getElementById('custEntered').value;


    var changeCalculated = (customerAmount - saleAmount);
    console.log(changeCalculated)


    var changeMessage = document.getElementById('output');
    var changeAnswer = "Your total change is $  " + changeCalculated.toFixed(2);
    changeAnswer.innerHTML = changeCalculated;

    // var changeBack = document.getElementById("changeButton");
    //     var changeMes = "Your change back is... " + Math.round(changeCalculated) + ".";
    //     changeBack.innerHTML = changeMes;

    var dollarAmount = parseInt(changeCalculated / 1);
    var dollarDue = changeCalculated % 1;
    console.log(dollarDue)

    var quarters = parseInt(dollarDue / .25);
    var quartersDue = Math.round((dollarDue * 100) % 25) / 100;
    console.log(quartersDue)

    var dimes = parseInt(dollarDue / .10);
    var dimesDue = Math.round((dollarDue * 100) % 10) / 100;
    console.log(dimesDue)

    var nickels = parseInt(dollarDue / .05);
    var nickelsDue = Math.round(dollarDue * 100) % 5 / 100;
    console.log(nickelsDue)

    var pennies = parseInt(dollarDue / .01);
    var penniesDue = Math.round(dollarDue * 100) % 1 / 100;
    console.log(penniesDue)


    var ansDollars = document.getElementById('dollarsRemain');
    ansDollars.innerHTML = dollarDue;

    var ansQuarters = document.getElementById('quartersRemain');
    ansQuarters.innerHTML = quartersDue;

    var ansDimes = document.getElementById('dimesRemain');
    ansDimes.innerHTML = dimesDue;

    var ansNickels = document.getElementById('nickelsRemain');
    ansNickels.innerHTML = nickels;

    var ansPennies = document.getElementById('penniesRemain');
    ansPennies.innerHTML = pennies;


    var changeMessage = document.getElementById('output');
    var changeAnswer = "Your total change is $  " + changeCalculated;
    changeMessage.innerHTML = changeAnswer;

};



