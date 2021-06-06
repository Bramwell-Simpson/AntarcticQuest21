var countdownDate = new Date("Jun 9, 2021 12:30:00").getTime();

var x = setInterval
(function()
    {
        var now = new Date().getTime();

        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds";

        if(distance < 0)
        {
            clearInterval(x);
            document.getElementById("coundown").innerHTML = "Crowdfunder has started!";
        }
    }, 1000
);