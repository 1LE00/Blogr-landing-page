const hamburger = document.getElementsByClassName("hamburger-icon")[0];

const hamburgerDropdown = document.getElementsByClassName("hamburger-content")[0];

const dropdowns = document.getElementsByClassName("dropdowns");


hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("close");
    hamburgerDropdown.classList.toggle("show");
});

hamburgerDropdown.addEventListener("click", function(event){
    
    var element = event.target;
    console.log(element);
    try {
        if(element.nextElementSibling.matches(".img")){
            element.classList.toggle("color-change");
            element.nextElementSibling.classList.toggle("rotate");
        }    
    } catch (TypeError) {
        console.log("No next Sibling was found.");
    }
    
    

    var text = element.textContent;
    if (text == 'Product') {
        dropdowns[0].classList.toggle("dropdown-show");
    }

    else if(text == 'Company'){
        dropdowns[1].classList.toggle("dropdown-show");
    }
    
    else if(text == 'Connect'){
        dropdowns[2].classList.toggle("dropdown-show");
    }

});


