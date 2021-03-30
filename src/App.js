import React,{useState,useEffect} from "react";
import {para} from './Tester'
import './App.css';

function App() {
  const [words,setWords] = useState('')
  const [timer,setTimer] = useState(20)
  const [arr, setArr] = useState([])
  const [correct, setCorrect] = useState(0)
  const [wordArr,setWordArr] = useState([])
  const [acc, setAcc] = useState(0)
  function handleChange(e){
    setWords(e.target.value) 
  }

  useEffect(() => {
    if(timer===0){
      setWordArr(words.trim().split(' '))
      setArr(para.split(' ').slice(0,wordArr.length)) 
      setCorrect(arr.filter((item,i) => item===wordArr[i]).length)
      setAcc(Math.ceil((correct/(arr.length))*100))
    }
  }, [timer,words,wordArr,arr,correct])
  
  function handleClick(){
      setCorrect(0)
      setAcc(0)
      setWords("")
      setWordArr([])
      setArr([])
      setTimer(20)
      let theInt = setInterval(() =>{
        setTimer(prev => prev>1?prev-1:0)
      }, 1000)
     if(timer===0){
       clearInterval(theInt)
     }
  }
  
  return (
    <div class="app">
      <h1>Test your typing skill</h1>
      <h3>{timer>0?timer:`WPM: ${words!==""?wordArr.length * 3:0}          Accuracy: ${words!==""?acc:0}%`}</h3>
      <p>{para}</p>
      <textarea value={words} disabled={timer>19||timer===0} onChange={(e) => handleChange(e)} /><br />
      <button disabled={timer<20&&timer>0} onClick={() => handleClick()}>Start</button>
    </div>
  );
}

export default App;
