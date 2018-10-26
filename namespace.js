var parm0058 = {
    
init: function(){
    let div = document.createElement("div");
    div.className = "box";
    div.textContent = "parm0058";
    let getboxes = document.getElementById("boxes");
    getboxes.appendChild(createNewDiv);
    
    
    div.addEventListener("click", function(){
        
        div.style.borderColor = "blue";
        div.style.backgroundColor = "lightblue";
        div.style.Color = "hotgreen";
        
         });
    
    //mouse overevent
    
    div.addEventListener("mouseover", function(){
    div.classList.toggle("highlight");
        
    });
    
    //mouse outevnt
    
    div.addEventListener("mouseover", function(){
     div.classList.toggle("highlight");
        div.removeAttribute('style');
    });
    
}
};
