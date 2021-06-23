function toggleShow()
{
    var link = document.getElementById("readMore");
    var btn = document.getElementById("readMoreBTN");

    if (link.style.display === "none") {
        link.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        link.style.display = "none";
        btn.innerText = "Read More";
    }
}