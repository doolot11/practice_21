import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import './App.css';
import { useState } from 'react';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false)



  const addDataToArray = async (task)=>{
    setLoading(true)
try {
  const response = await fetch('https://expense-tracker-9603b-default-rtdb.firebaseio.com/tasks.json')
  const data = await response.json()
  const loadedtasks = []

  for(const taskKey in data){
    loadedtasks.push({date: new Date(2022, 5, 11), text: data[taskKey].title, amount: data[taskKey].amount})
  }
  setArray(loadedtasks)
  console.log(loadedtasks);
    setLoading(false)

} catch (error) {
}

  }
  return (
    <div className="App">
      <NewExpense onAddDataToArray={addDataToArray} /> 
      {loading && <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
        <Expenses expenses={array} /> 

    </div>
  );
}

export default App;

//ReactDom
