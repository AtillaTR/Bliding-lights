import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';


function App() {
    

   /**Ficou uma gambiarra, por enquanto... */
    
   
    function off() {
         document.getElementById("yellow1").style.animation="none";
         document.getElementById("yellow2").style.animation="none";
         document.getElementById("yellow3").style.animation="none";
         document.getElementById("yellow4").style.animation="none";
         document.getElementById("yellow5").style.animation="none";
         document.getElementById("yellow6").style.animation="none";
         document.getElementById("yellow7").style.animation="none";
         document.getElementById("yellow8").style.animation="none";

         document.getElementById("yellow1").style.background="#563260";
         document.getElementById("yellow2").style.background="#563260";
         document.getElementById("yellow3").style.background="#563260";
         document.getElementById("yellow4").style.background="#563260";
         document.getElementById("yellow5").style.background="#563260";
         document.getElementById("yellow6").style.background="#563260";
         document.getElementById("yellow7").style.background="#563260";
         document.getElementById("yellow8").style.background="#563260";
        
         
        
          
    }

    function on(){
        document.getElementById("yellow1").removeAttribute("style");    
        document.getElementById("yellow1").style.animationPlayState = "running";
        document.getElementById("yellow1").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow2").removeAttribute("style");    
        document.getElementById("yellow2").style.animationPlayState = "running";
        document.getElementById("yellow2").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow3").removeAttribute("style");    
        document.getElementById("yellow3").style.animationPlayState = "running";
        document.getElementById("yellow3").style.WebkitAnimationPlayState = "running";
        
        document.getElementById("yellow4").removeAttribute("style");    
        document.getElementById("yellow4").style.animationPlayState = "running";
        document.getElementById("yellow4").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow5").removeAttribute("style");    
        document.getElementById("yellow5").style.animationPlayState = "running";
        document.getElementById("yellow5").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow6").removeAttribute("style");    
        document.getElementById("yellow6").style.animationPlayState = "running";
        document.getElementById("yellow6").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow7").removeAttribute("style");    
        document.getElementById("yellow7").style.animationPlayState = "running";
        document.getElementById("yellow7").style.WebkitAnimationPlayState = "running";

        document.getElementById("yellow8").removeAttribute("style");    
        document.getElementById("yellow8").style.animationPlayState = "running";
        document.getElementById("yellow8").style.WebkitAnimationPlayState = "running";
       
    }
    

    return (
        <>
            <body>
                <div class="main">
                    <div class="circle yellow1" id="yellow1"></div>
                    <div class="circle yellow2" id="yellow2"></div>
                    <div class="circle yellow3" id="yellow3"></div>
                    <div class="circle yellow1" id="yellow4"></div>
                    <div class="circle yellow2" id="yellow5" ></div>
                    <div class="circle yellow3" id="yellow6"></div>
                    <div class="circle yellow1" id="yellow7"></div>
                    <div class="circle yellow2" id="yellow8"></div>
                    
                </div>
                <div class="utilities">
                    <div class="title">
                        <h1 id="title">Blinding Lights</h1>
                    </div>
                    <div class="buttons">
                        <button id="play" onClick={on}>On</button>
                        <button id="stop" onClick={off} >Off</button>
                       
                    </div>
                </div>

            </body>



        </>
    );


}

export default App;