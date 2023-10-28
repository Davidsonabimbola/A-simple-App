
import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App() {
  
  const [step,setStep] = useState(1);
  const[isOpen, setIsOpen] = useState(true)


  function handlePrevious(){
    // if (step>1) setStep(step-1)

    if (step>1) setStep((s)=>step-1)
    // This is used preferrably in a situation where you want to update based on the current state i.e 's'- 'THIS IS CALLED CALLBACK'
  }

  function handleNext(){
// if (step<3) setStep(step+1); OR (step<3) && (setStep((s)=>step+1))
 if (step<3) setStep((s)=>step+1)
// This is used preferrably in a situation where you want to update based on the current state i.e 's' - 'THIS IS CALLED CALLBACK'
  }
  return (
    <div>
      <button className='close' onClick={()=>setIsOpen((s)=>!isOpen)}>&times;</button>
      {/* CALLBACK was used for the setIsOpen too */}
      {isOpen &&  (
    <div className="steps">
      <div className='numbers'>
        <div className={`${step>=1? "active":""}`}>1</div>
        <div className={`${step>=2? "active":""}`}>2</div>
        <div className={`${step>=3? "active":""}`}>3</div>
</div>
<p className='message'>
  Step{step}: {messages[step-1]}</p>
<div className='buttons'>
<button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handlePrevious}
>Previous</button>
<button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handleNext}>Next</button>
    </div>
    </div>
)}
    </div>
  );
}

export default App;
