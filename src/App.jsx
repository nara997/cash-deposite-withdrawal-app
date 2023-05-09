import CashWithdrawal from "./components/CashDepositeAndWithDrawal"

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
  {
    id: 5,
    value: 1000,
  },
  {
    id: 6,
    value: 2000,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App
