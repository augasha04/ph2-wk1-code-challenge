import React, { useState } from 'react'

function MyForm(){

    const[data,setData]=useState({
        date:"",
        description:"",
        category :"",
        amount:"",
    })

    function handleSubmit(e) {
        e.preventDefault();
        const NewData={...data}
        NewData[e.target.id]=e.target.value
        setData(NewData)
        console.log (NewData)
      }
      fetch("https://my-json-server.typicode.com/augasha04/ph2-wk1-code-challenge/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((data) => console.log(data));

    // const handleDelete = (id) => {
    //     fetch(`http://localhost:3003/transactions/${id}`, {
    //       method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(() => {
    //       const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    //       setTransactions(updatedTransactions);
    //     })
    //     .catch(err => console.error(err));
    //   }


  return (
    <div className='transform'>
        <form>
        <h2>INPUT FORM</h2>
        {/* <input type = "ID" placeholder ="ID"/> */}
<input type = "DATE" placeholder = "DATE"/>
<input type = "DESCRIPTION" placeholder ="DESCRIPTION"/>
<input type = "CATEGORY" placeholder ="CATEGORY"/>
<input type = "AMOUNT" placeholder ="AMOUNT"/>
<button type='button'onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default MyForm;