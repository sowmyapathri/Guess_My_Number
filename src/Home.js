import React, { useState } from 'react'
import "./index.scss";

const Home = () => {

  const [score,setScore]=useState(20);
  const [highScore,setHighScore]=useState(10);
  const [status,setStatus]=useState("Start guessing...🤔");
  const [providedInput,setProvidedInput]=useState();
  const [guess,setGuess]=useState(Math.trunc(Math.random()*20));
 
  const checkNumber=()=>{
   if(providedInput > guess){
      setStatus("Too High!😕");
      setScore(score-1);
    }else if(providedInput < guess){
      setStatus("Too Low!😕");
      setScore(score-1);
    }else if(providedInput == guess){
      setStatus("🎉Correct Answer!!😁");
      if(score > highScore){
        setHighScore(score)
      }
    }
    else{
      setStatus("Start guessing...🤔")
    }
  }


  const handleChange=(e)=>{
    if(e.target.value > 20){
      setStatus("Please select in between 1 to 20😐")
    }else{
       setProvidedInput(Number(e.target.value))
    }
   
  }
  
const handleReset=()=>{
  setScore(20);
  setGuess(Math.trunc((Math.random()*10)+10));
  setStatus("Start guessing...🤔")
}
  return (
    <div>
        <h1>Guess My Number!</h1>
        <p style={{fontSize: "80%"}}>Number should be between 1 to 20</p>
        {score == 0 ? <div><p>"Sorry! 😓 You Lost.Try again" </p>
          <button onClick={handleReset}>Again!</button>
        </div> : 
        <div> 
        <p>{status}</p>
        <input type='number' onChange={handleChange} style={{background:"white" , color : "black"}}/>
        <div className='btnDisplay'>
          <button onClick={checkNumber} style={{padding:"12px" , borderColor:"white"}}>Check!</button>
          <button onClick={handleReset} style={{padding:"12px" , borderColor:"white"}}>Again!</button>
        </div>
        
        <div className="scoreDisplay">
          <p>Score :{" "+score}</p>
          <p>High Score : {" " +highScore}</p>
        </div>
        </div>
       
        }
        
        
    </div>
  )
}


export default Home;