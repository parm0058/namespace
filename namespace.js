var PARM0058 = {

    init: function () {
        let div = document.createElement("div");
        div.className = "box"; // add "box" class to div
        div.textContent = "parm0058"; //add text content to div
        let getboxes = document.getElementById("boxes"); //get div of id boxes
        getboxes.appendChild(div); //apped div with box class to the div with id boxes

        //click event
        div.addEventListener("click", function () {

            div.style.borderColor = "blue";
            div.style.backgroundColor = "lightblue";
            //createNewDiv.style.Color = "hotyellow";

        });

        //mouse overevent

        div.addEventListener("mouseover", function () {
            div.classList.toggle("highlight");

        });

        //mouse outevnt

        div.addEventListener("mouseout", function () {
            div.classList.toggle("highlight");
            div.removeAttribute('style');
        });


    }
};
