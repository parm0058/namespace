var parm0058 = {
    
init: function(){
    let createNewDiv = document.createElement("div");
    createNewDiv.className = "box";// add "box" class to div
    createNewDiv.textContent = "parm0058";//add text content to div
    let getboxes = document.getElementById("boxes");//get div of id boxes
    getboxes.appendChild(createNewDiv);
    
    //click event
    createNewDiv.addEventListener("click", function(){
        
        createNewDiv.style.borderColor = "blue";
        createNewDiv.style.backgroundColor = "lightblue";
        createNewDiv.style.Color = "hotyellow";
        
         });
    
    //mouse overevent
    
    createNewDiv.addEventListener("mouseover", function(){
     createNewDiv.classList.toggle("highlight");
        
    });
    
    //mouse outevnt
    
    createNewDiv.addEventListener("mouseover", function(){
     createNewDiv.classList.toggle("highlight");
        createNewDiv.removeAttribute('style');
    });
    
}
};
