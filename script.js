let string ="";    // this is a empty string that shows while open the calculator 
let buttons = document.querySelectorAll("button");   // add a quarry selector on button to perform using buttons  
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{   // add a event in each button
        if(e.target.innerHTML == '=')
            { try{
                string = eval(string);          // for evalute the value using BODMAS rule
                document.querySelector('input').value = string
            }
            catch{
                document.querySelector('input').value = "Error"   // if user write a worng syntex it shows erroe
                string =""
            }
        }
       else if(e.target.innerHTML == 'AC'){   // for clear the complete string
            string = "";
            document.querySelector('input').value = string
        }
       else if(e.target.innerHTML == 'backspace'){    // for clear the last entered value to first one
 
            string = string.slice(0,-1);      
            document.querySelector('input').value = string
        }
        else{
            string = string+ e.target.innerHTML;      //   to generate the final result
            document.querySelector('input').value = string  // provide the result
        }
    })
})







