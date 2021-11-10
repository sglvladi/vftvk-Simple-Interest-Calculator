function compute()
{
    // Read Principal value
    var principal = document.getElementById("principal").value;

    // Alert when Principal value is leq to 0
    if(principal<=0)
    {

        // Clear the result
        document.getElementById("result").innerHTML = "";
        // Raise the alert
        alert("Please enter a positive number");
        // Focus principal element
        document.getElementById("principal").focus();
        // Return null to avoid running the rest of the code
        return;
    }

    // Read rate value
    var rate = document.getElementById("rate").value;

    // Read number of years
    var years = document.getElementById("years").value;

    // Calculate interest
    var interest = principal * years * rate /100;

    // Compute end year
    var year = new Date().getFullYear()+parseInt(years);

    // Set result
    document.getElementById("result").innerHTML =
        "If you deposit <mark>" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
        "You will receive an amount of <mark>" + interest +"</mark>,<br>"+
        "in the year <mark>" + year + "</mark>"
}

function updateRate()
{
    // Update slider rate
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value + "%";
}
        