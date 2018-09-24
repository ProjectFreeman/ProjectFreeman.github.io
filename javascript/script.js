window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
}

function go_to_about() {
    var alignToTop = true
    var about = document.getElementById("about");
    about.scrollIntoView(alignToTop);
}

function go_to_pf() {
    var alignToTop = true
    var pf = document.getElementById("pf");
    pf.scrollIntoView(alignToTop);
}

function go_to_cu() {
    var alignToTop = true
    var cu = document.getElementById("cu");
    cu.scrollIntoView(alignToTop);
} 

function go_to_tt() {
    var alignToTop = true
    var tt = document.getElementById("tt");
    tt.scrollIntoView(alignToTop);
}

function go_to_top() {
    var alignToTop = true
    var top = document.getElementById("top");
    top.scrollIntoView(alignToTop);
}