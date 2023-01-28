function show() {
    var y = document.getElementById("heading1");
    var x = document.getElementById("breakfastdiv");
    var z = document.getElementById("MENU");
    var a = document.getElementById("heading2");
    var b = document.getElementById("brunchdiv");
        if (x.style.display === "none") {
            y.className="custom";
            x.style.display = "block";
            z.style.width="95%";
            a.className="custom_not";
            b.style.display = "none";
        } else {
            y.className="custom_not";
            x.style.display = "none";
            z.style.width="800px";
    }
}
function show2() {
    var m=document.getElementById("heading1");
    var l=document.getElementById("breakfastdiv");
    var y = document.getElementById("heading2");
    var x = document.getElementById("brunchdiv");
    var z = document.getElementById("MENU");
        if (x.style.display === "none") {
            y.className="custom";
            x.style.display = "block";
            z.style.width="95%";
            l.style.display = "none";
            m.className="custom_not";
        } else {
            y.className="custom_not";
            x.style.display = "none";
            z.style.width="800px";
    }
}

let counter=0;
function count(){
    
    counter++;
    alert(`Cart : ${counter}`);
}