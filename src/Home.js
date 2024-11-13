import React, { useState } from 'react'
import "./index.scss";
//declare a number, score and high score
// if given no is > then display no is gretaer or < declared no then the it fails and the score gets decreased by each attempt
// if given no is equal to declared no then score should be consistent and the score should be compared
// to high score if score is greater  than high score, then high score should be equal to score


const Home = () => {

  const [score,setScore]=useState(20);
  const [highScore,setHighScore]=useState(10);
  const [status,setStatus]=useState("Start guessing...🤔");
  const [providedInput,setProvidedInput]=useState();
  const [bgColor,setbgColor]=useState("normal");
  let number = 15;
  
  const checkNumber=()=>{
   if(providedInput > number){
      setStatus("Too High!😕");
      setScore(score-1);
    }else if(providedInput < number){
      setStatus("Too Low!😕");
      setScore(score-1);
    }else if(providedInput == number){
      setStatus("🎉Correct Answer!!😁");
      setbgColor("success")
      if(score > highScore){
        setHighScore(score)
      }
    }
    else{
      setStatus("Start guessing...🤔")
    }
  }


  const handleChange=(e)=>{
    // console.log(e.target.value);
    if(e.target.value > 20){
      setStatus("Please select in between 1 to 20😐")
    }else{
       setProvidedInput(Number(e.target.value))
    }
   
  }
  
const handleReset=()=>{
  setScore(20);
  setbgColor("normal");
  setStatus("Start guessing...🤔")
}
  return (
    <div className={bgColor}>
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