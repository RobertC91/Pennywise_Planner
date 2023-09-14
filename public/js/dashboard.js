newExpense.addEventListener('submit', event => {
    var discription = document.querySelector('#discription').value;
    var amount = document.querySelector('#amount').value;
    event.preventDefault()
    console.log('you clicked me')
    if (!discription || !amount) {
        alert('Please enter both discription and amount')
        return;
    }
    const expense = {
        discription: discription,
        amount: amount,
    }
    fetch('/api/expenses', {
        method: 'POST',
        body:JSON.stringify(expense),
        headers:{
            'Content-type':'application/json'
        }
    }).then(res=>{
        if(res.ok){
            createNew.setAttribute('hidden', 'false')
            location.reload()
        } else {
            alert('Error - please try again')
        }
    })
})

