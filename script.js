document.getElementById("output").style.visibility="hidden";
document.getElementById("nairaInput").addEventListener("input", function(event){
    document.getElementById("output").style.visibility="visible";
    let naira = event.target.value;
    document.getElementById("poundsOutput").innerHTML = naira / 515.38;
    document.getElementById("dollarsOutput").innerHTML = naira / 386.28;
    document.getElementById("yuanOutput").innerHTML = naira / 56.49;
});