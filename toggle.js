function toggleShow(id, btnId)
{
    var link = document.getElementById(id);
    var btn = document.getElementById(btnId);

    if (link.style.display === "none") {
        link.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        link.style.display = "none";
        btn.innerText = "Read More";
    }
}