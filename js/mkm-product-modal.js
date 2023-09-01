
var modal_1 = document.getElementById("id-modal-1");
var modal_2 = document.getElementById("id-modal-2");
var modal_3 = document.getElementById("id-modal-3");
var modal_4 = document.getElementById("id-modal-4");


var product_1 = document.getElementById("p1"); 
var product_2 = document.getElementById("p2"); 
var product_3 = document.getElementById("p3"); 
var product_4 = document.getElementById("p4"); 


var span_1 = document.getElementsByClassName("modal_close_1")[0];
var span_2 = document.getElementsByClassName("modal_close_2")[0];
var span_3 = document.getElementsByClassName("modal_close_3")[0];
var span_4 = document.getElementsByClassName("modal_close_4")[0];


product_1.onclick = function() {
    modal_1.style.display = "block";
}

product_2.onclick = function() {
    modal_2.style.display = "block";
}

product_3.onclick = function() {
    modal_3.style.display = "block";
}

product_4.onclick = function() {
    modal_4.style.display = "block";
}


span_1.onclick = function() {
    modal_1.style.display = "none";
}

span_2.onclick = function() {
    modal_2.style.display = "none";
}

span_3.onclick = function() {
    modal_3.style.display = "none";
}

span_4.onclick = function() {
    modal_4.style.display = "none";
}


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

window.addEventListener("click", function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    }
});

window.addEventListener("click", function(event) {
    if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
});

window.addEventListener("click", function(event) {
    if (event.target == modal_3) {
        modal_3.style.display = "none";
    }
});

window.addEventListener("click", function(event) {
    if (event.target == modal_4) {
        modal_4.style.display = "none";
    }
});