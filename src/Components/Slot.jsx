import React, { useState } from 'react';
import "../Styles/Slot.css"


function Slot() {
    const [randomNumbers, setRandomNumbers] = useState(["0","0","0"]);
    const [spinning, setSpinning] = useState(false);
    const [status, setStatus] = useState("Play and Win :)");
    const [money,setMoney]=useState(1000)
    const [bet,setBet]=useState(100)

  
    function generateRandomNumbers() {
        if (spinning) return; // Eğer zaten dönüyorsa işlemi durdur
        
        

        if(money>50){
            
            
            
        setMoney(money-bet)

        setSpinning(true);

        setStatus("Playing...")

        const interval = setInterval(() => {
            const newNumbers = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ];
            setRandomNumbers(newNumbers);
        }, 500);

        setTimeout(() => {
            clearInterval(interval);

            const finalNumbers = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ];
            setRandomNumbers(finalNumbers);
            setSpinning(false);
            checkWinCondition(finalNumbers);
        }, 3000); // 3 saniye sonra sonuçları göster
        }

     
    if(bet>money){
        setBet(money)
       }

       if(bet===50){
        setBet(100)
        setMoney(100)
       }

      
    }


    const checkWinCondition = (finalNumbers) => {
        if (
            finalNumbers[0] === finalNumbers[1] &&
            finalNumbers[0] === finalNumbers[2] &&
           finalNumbers
        ) {
            setStatus("You win!");
            setMoney(money+2*bet)
        } else if (
            finalNumbers[0] === finalNumbers[1] ||
            finalNumbers[0] === finalNumbers[2] ||
            finalNumbers[1] === finalNumbers[2]
        ) {
            setStatus("You win a little bit!");
            setMoney(money+1.5*bet)
        } else {
            setStatus("You lose!");
          
        }
    };

    function incBet(){
        if(money>bet+50){
            setBet(bet+100)
        }
      
    }
    function decBet(){
        if(bet>0){
            setBet(bet-100)
        }
      
        
    }

    return (
        <div className="all">
           <div className='money'> <h1> {money}$  </h1></div>
        <div className='slot'>
            
           <div className="slots">
           <div className="slotfirst">{randomNumbers[0]}</div>
            <div className="slotfirst">{randomNumbers[1]}</div>
            <div className="slotfirst">{randomNumbers[2]}</div>
           </div>

            <button onClick={generateRandomNumbers} disabled={spinning}>PLAY</button>

            <h3>  <button onClick={decBet} >-</button> Bet : {bet}$ <button  onClick={incBet} >+</button>  </h3>

            <h2>   {status} </h2>
            
        </div>
        </div>
    );
}

export default Slot;
