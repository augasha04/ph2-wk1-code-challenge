import './App.css';
import MyForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';




function App() {
  return (
    
    <div className="App">
    <TransactionTable />
    <MyForm />
    </div>
  );
}

export default App;
