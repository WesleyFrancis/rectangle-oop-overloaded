import Rectangle from "./BLO/Rectangle.js";
import MainUI from "./ULO/MainUI.js";


/*
  This is my app object
*/
const app=
{

    mainUIBodyID : document.querySelector("#main-body"),
    secondUIBodyID :document.querySelector("#second-body"),

    //The purpose of is to determine which features(even listeners in the app to load. This will be determined by
    //which UI is loaded)
    init()
    {
        //Logic that will detemrine which ui to initialize
        if(this.mainUIBodyID!=null)
        {
            this.mainUInit();
        }   
        else if(this.secondUIBodyID!=null)
        {
            this.secondUIInt();
        }
    
    },

    mainUInit()
    {
       
        MainUI.calculateButton.addEventListener("click",function(){

            const rec = new Rectangle(parseFloat(MainUI.lengthTextField.value),parseFloat(MainUI.widthTextField.value));
       
            if(!MainUI.validateField())
            {
                MainUI.populateAnswerContainer(rec);
            }
            
    
        });
    },

    secondUIInt()
    {

        document.addEventListener("DOMContentLoaded",function(){

          //  alert("Second Page Has finished loaded");
        })


    }

}

app.init();