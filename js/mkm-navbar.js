var btn = document.getElementById("nav-btn");

var drp = document.getElementById("dropdown");

// var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    drp.style.display = "block";
}

// span.onclick = function () {
//     drp.style.display = "none";
// }


// Prevents menu from closing when clicked inside 
document.getElementById("dropdown").addEventListener('click', function (event) { 
    event.stopPropagation(); 
});


// // Closes the menu in the event of outside click 
window.onclick = function(event) { 
    if (!event.target.matches('.drop-btn')) { 
                  
        if (drp.style.display = "block") { 
            drp.style.display = "none";  
        } 
    } 
} 


  
