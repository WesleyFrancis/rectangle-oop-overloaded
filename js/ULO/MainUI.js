

//This is a UI object
const MainUI = 
{

    lengthTextField : document.querySelector("#length"),
    widthTextField :document.querySelector("#width"),
    calculateButton : document.querySelector("#calculateButton"),
    answerContainer : document.querySelector("#container"),
    errorContainer : document.querySelectorAll(".error-message"),

    populateAnswerContainer(rectangle)
    {
        this.answerContainer.innerHTML=`The area of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calArea()}`;
        this.answerContainer.innerHTML+=`<br>The permieter of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calPerimeter()}`;
    },

    validateFieldLength(char)
    {
        if(char=="")
        {
            this.errorContainer[0].innerHTML="Sorry you must enter a length";
            this.errorContainer[0].style.color ="red";
            this.answerContainer.innerHTML="";
        }
        if(char!="")
        {
            this.errorContainer[0].innerHTML="";
        }
        
    },
    validateFieldWidth(char)
    {
        if(char=="")
        {
            this.errorContainer[1].innerHTML="Sorry you must enter a width";
            this.errorContainer[1].style.color ="red";
            this.answerContainer.innerHTML="";
        }
        if(char!="")
        {
            this.errorContainer[1].innerHTML="";
        }
    },
    validateCharType(type,char)
    {
        if(type=="length")
        {
            
        }
        if(type=="width")
        {

        }
    }

}

export default  MainUI;