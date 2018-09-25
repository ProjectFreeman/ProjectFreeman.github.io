window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if (document.getElementById("btn").style.display = "none")
        {
            document.getElementById("btn").style.display = "block";
            document.getElementById("btn").style.zIndex = 99;
        }
    } else {
        document.getElementById("btn").style.display = "none";
    }
}

function go_to_about() {
    var alignToTop = true
    var about = document.getElementById("about");
    about.scrollIntoView(alignToTop);
    document.getElementById("btn").style.display = "block";
}

function go_to_pf() {
    var alignToTop = true
    var pf = document.getElementById("pf");
    pf.scrollIntoView(alignToTop);
    document.getElementById("btn").style.display = "block";
}

function go_to_cu() {
    var alignToTop = true
    var cu = document.getElementById("cu");
    cu.scrollIntoView(alignToTop);
    document.getElementById("btn").style.display = "block";
} 

function go_to_tt() {
    var alignToTop = true
    var tt = document.getElementById("tt");
    tt.scrollIntoView(alignToTop);
    document.getElementById("btn").style.display = "block";
}

function go_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    document.getElementById("btn").style.display = "none";
}