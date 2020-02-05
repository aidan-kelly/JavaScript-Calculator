let command_string = "";

function addButtonListener(){
    //grabs all of our buttons
    let ourButtons = document.getElementsByTagName("button");

    //loop through the buttons
    for(let i = 0; i < ourButtons.length; i++){

        //add a listener that add it's value to the command string
        ourButtons[i].addEventListener("click", function(){
            let ourChar = ourButtons[i].textContent;

            if(ourChar === '='){
                let result = eval(command_string);
                document.getElementById("result").textContent = `${command_string} = ${result}`;
                command_string = result;


            }else if(ourChar === "←"){
                command_string = command_string.slice(0, -1);
                document.getElementById("result").textContent = command_string;

            }else if(ourChar === "Clear"){
                command_string = "";
                document.getElementById("result").textContent = command_string;

            }else{
                command_string += ourChar;
                document.getElementById("result").textContent = command_string;
            }

            console.log(command_string);
            
        });
    }
}

//once the DOM is loaded, add the button listeners
window.addEventListener("load", addButtonListener);