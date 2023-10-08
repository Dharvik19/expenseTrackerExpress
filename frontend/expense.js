const expense = document.getElementById('input-expense');
const description = document.getElementById('input-description');
const category = document.getElementById('input-category');

const btn = document.getElementById('btnid');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const obj = {
        expense : expense.value,
        description : description.value,
        category : category.value,
    }

    console.log(obj);
    axios.post("http://localhost:3000/addExpense", obj)
    .then((response=>{
        showUserOnScreen(response.data.data);
        console.log(response);
    }))
    .catch(err=>{
        console.log(err);
    })
    expense.value = '';
    description.value = '';
    category.value = '';
})

function showUserOnScreen(user){
    const parentNode = document.getElementById('expenselist');

    const createNewUserHtml = `<li id=${user.id}>${user.expense}-${user.description}-${user.category}
                        <button onCLick=deleteUser('${user.id}')>Delete</button>
                        <button onclick=editUser('${user.expense}','${user.description}','${user.category}','${user.id}')>Edit </button>

            </li>`

            parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
}

window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();

    axios.get('http://localhost:3000/getExpense')
    .then((response)=>{
        console.log(response);
        for(let i =0;i<response.data.response.length;i++){
            let expense = response.data.response[i].expense;
            let description = response.data.response[i].description;
            let category = response.data.response[i].category;
            let id = response.data.response[i].id;

            const parentNode = document.getElementById('expenselist');
            const createNewUserHtml = `<li id=${id}> ${expense}-${description}-${category}
            <button onCLick=deleteUser('${id}')>Delete</button>
            <button onclick=editUser('${user.expense}','${user.description}','${user.category}','${user.id}')>Edit</button>

            </li>`

            parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
        }
    }).catch(err=>{
        console.log(err);
    })
})

function deleteUser(userid){
    axios.delete(`http://localhost:3000/deleteExpense/${userid}`)
    .then(response =>{
        removeElementFromScreen(userid);
    }).catch(err=>{
        console.log(err);
    })
}

function removeElementFromScreen(userid){
    const parentNode = document.getElementById('expenselist');
    const elememt = document.getElementById(userid);
    parentNode.removeChild(elememt);
}

function editUser(expense, description, category, id) {

    document.getElementById("description").value = description;
    document.getElementById("category").value = category;
    document.getElementById("expense").value = expense;
    deleteUser(id);

}