import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const NewExpense = (props) => {
  const AddData = async (data) => {
    const notify = (mess) => toast(mess);
    const notify1 = (mess) => 
    toast.error(mess, {
      position: toast.POSITION.TOP_RIGHT
    });

  try {
    const response = await fetch('https://expense-tracker-9603b-default-rtdb.firebaseio.com/tasks.json',
    {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
          'Content-Type': 'application/json',
        },
    })

    if(!response.ok){
            notify1('Данныйлар жонотулгон жок')
    }else{
      notify("Ийгиликтуу ишке ашты")

    }
    

    props.onAddDataToArray('')

  } catch (error) {
    
  }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddData={AddData} />
      <ToastContainer />
    </div>
  );
};
export default NewExpense;
