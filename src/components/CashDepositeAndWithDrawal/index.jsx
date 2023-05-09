import { useState } from "react";
import "./index.css"

import DenominationItem from "../Denominations";


const CashWithdrawal = (props) => {
    const {denominationsList} = props
    const [toggle, setToggle] = useState("Withdraw")
    const [error ,onSetError] = useState(false)
    const [balance, setBalance] = useState(20000)
    const name = 'Gayam Narasimha Reddy'
    const initial = name.slice(0, 1)

    const updateBalance = value => {
        if (toggle === "Deposite") {
            // Deposit logic
            setBalance((prevBalance) => prevBalance + value)
            if (error) onSetError(false);
        } else {
            // Withdrawal logic
            if (balance >= value) {
                setBalance((prevBalance) => prevBalance - value)
                if (error) onSetError(false);
            } else {
                onSetError(true)
            }
        }
    }


    return(
        <div className="app-container">
            <div className="cash-withdrawal-container">
                <div className="user-details-container">
                    <div className="initial-container">
                        <p className="initial">{initial}</p>
                    </div>
                    <p className="name">{name}</p>
                </div>
                <div className="balance-container">
                    <p className="your-balance">Your Balance</p>
                    <p className="balance">{balance}
                    <br/>
                    <span className="balance-in-rupees">/In Rupees</span>
                    </p>
                </div>
                <select onChange={(e) =>setToggle(e.target.value)}>
                    
                    <option value="Withdraw" selected>Withdraw</option>
                    <option value="Deposite">Deposit</option>
                </select>
               
                 {/* <p className="withdraw">{toggle ?"Deposit":"Withdraw" }</p> */}
                 <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                 <ul className="denominations-list">
                    {denominationsList.map(eachDenomination => (
                     <DenominationItem
                     key={eachDenomination.id}
                    denominationDetails={eachDenomination}
                     updateBalance={updateBalance}
                />
                 ))}
                  </ul>
                  { error && <p className="error-msg">Insufficient Balance</p>}

            </div>
        
        </div>
    )
}

export default CashWithdrawal