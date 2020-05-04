

//This is a UI object
const MainUI = 
{

    lengthTextField : document.querySelector("#length"),
    widthTextField :document.querySelector("#width"),
    calculateButton : document.querySelector("#calculateButton"),
    answerContainer : document.querySelector("#container"),
    errorContainer : document.querySelectorAll(".error-message"),
    InputContainer : document.querySelectorAll(".form-control"),

    populateAnswerContainer(rectangle)
    {
        this.answerContainer.innerHTML=`The area of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calArea()}`;
        this.answerContainer.innerHTML+=`<br>The permieter of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calPerimeter()}`;
    },
    erorStyle(Err,textbox,msg)
    {
        Err.style.color ="red";
        textbox.style.border="2px solid red";
        Err.innerHTML=msg;
    },

    validateField()
    {
        let hasErr=false;
        for(let i=0;i<this.errorContainer.length;i++)
        {
            const textbox=this.InputContainer[i].querySelector("input");
            const label=this.InputContainer[i].querySelector("label");
            const Err=this.InputContainer[i].querySelector("div");
            
            if(textbox.value=="")
            {
                this.erorStyle(Err,textbox,`Sorry you must enter a value for ${label.innerHTML}`);
                this.answerContainer.innerHTML="";
                hasErr=true;
            }
           else
           {
               if(isNaN(textbox.value))
               {
                    this.erorStyle(Err,textbox,'Sorry you must enter a number');
                    
                    hasErr=true;
               }
               else
               {
                    Err.innerHTML="";
                    Err.style.color ="none";
                    textbox.style.border="2px solid #555";
                    hasErr=false;
               }  
           }
        }
        this.answerContainer.innerHTML="";
        return hasErr;
    }
}

export default  MainUI;