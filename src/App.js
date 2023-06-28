import React,{useState} from 'react'
import './App.css';

function App() {
   const[card1UnmountCount,setCard1UnmountCount]=useState(0)
   const[card2UnmountCount,setCard2UnmountCount]=useState(0)
   const[card3UnmountCount,setCard3UnmountCount]=useState(0)
   const[card4UnmountCount,setCard4UnmountCount]=useState(0)
   const[card5UnmountCount,setCard5UnmountCount]=useState(0)
   const[showReport,setShowReport]=useState(false)
   const [card1Show, setCard1Show] = useState(true)
   const [card2Show, setCard2Show] = useState(true)
   const [card3Show, setCard3Show] = useState(true)
   const [card4Show, setCard4Show] = useState(true)
   const [card5Show, setCard5Show] = useState(true)

   let Unmount=(cardNumber)=>{
    switch(cardNumber){
      case 1:
        setCard1UnmountCount((count) => count + 1)
        setCard1Show(false)
        break
      case 2:
        setCard2UnmountCount((count) => count + 1)
        setCard2Show(false)
        break
      case 3:
        setCard3UnmountCount((count) => count + 1)
        setCard3Show(false)
        break
      case 4:
        setCard4UnmountCount((count) => count + 1)
        setCard4Show(false)
        break
      case 5:
        setCard5UnmountCount((count) => count + 1)
        setCard5Show(false)
        break
      default:
        break
    }
   }


   const show=()=>{
setShowReport(true)
   }

  return (
   <div className='wrapper'>
    {card1Show && (
   <div className='first'>1
   <button type='submit' onClick={() => Unmount(1)}>X</button></div>
   )}
   {card2Show && (
   <div className='second'>2
   <button type='submit'onClick={() => Unmount(2)}>X</button></div>
   )}
   {card3Show && (
   <div className='third'>3
   <button type='submit' onClick={() => Unmount(3)}>X</button></div>
   )}
    {card4Show && (
   <div className='fourth'>4
   <button type='submit' onClick={() => Unmount(4)}>X</button></div>
   )}
    {card5Show && (
   <div className='fifth'>5
   <button type='submit' onClick={() => Unmount(5)}>X</button></div>
    )}
   <button type='submit' className='show' onClick={show}>Show</button>
      {showReport && (
        <div className='report'>
          <div>Report</div>
          <div>Card 1 unmounted {card1UnmountCount} times</div>
          <div>Card 2 unmounted {card2UnmountCount} times</div>
          <div>Card 3 unmounted {card3UnmountCount} times</div>
          <div>Card 4 unmounted {card4UnmountCount} times</div>
          <div>Card 5 unmounted {card5UnmountCount} times</div>
        </div>
      )}
   </div>
  )
}

export default App;
