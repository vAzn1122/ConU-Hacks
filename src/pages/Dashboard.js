import React from 'react';

function Dashboard() {
  return (
    <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Budget App</title>
          {/* Fonts */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
          {/* More fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
          {/* Login css */}
          <link rel="stylesheet" href="style.css" />

          <div className="wrapper">
              <div className="container">
                  <div className="sub-container">
                      {/* <!-- Budget --> */}
                      <div className="total-amount-container">
                          <h3>Budget</h3>
                          <p className="hide error" id="budget-error">
                              Value cannot be empty or negative
                          </p>
                          <input type="number" id="total-amount" placeholder="Enter Total Amount" />
                          <button className="submit" id="total-amount-button">Set Budget</button>
                      </div>

                      {/* <!-- Expenditure --> */}
                      <div className="user-amount-container">
                          <h3>Expenses</h3>
                          <p className="hide error" id="product-title-error">
                              Values cannot be empty
                          </p>
                          <input type="text" className="product-title" id="product-title" placeholder="Enter Title of Product" />
                          <input type="number" id="user-amount" placeholder="Enter Cost of Product" />
                          <button className="submit" id="check-amount">Add</button>
                      </div>
                  </div>
                  {/* <!-- Output --> */}
                  <div className="output-container flex-space">
                      <div>
                          <p>Total Budget</p>
                          <span id="amount">0</span>
                      </div>
                      <div>
                          <p>Expenses</p>
                          <span id="expenditure-value">0</span>
                      </div>
                      <div>
                          <p>Balance</p>
                          <span id="balance-amount">0</span>
                      </div>
                  </div>
              </div>
              {/* <!-- List --> */}
              <div className="list">
                  <h3>Expense List</h3>
                  <div className="list-container" id="list"></div>
              </div>
          </div>
          {/* <!-- Script --> */}
          <script src="script.js"></script>
    </div>
  );
}

window.onload=function(){
    
   
let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;


//Set Budget Part
if(totalAmountButton){ 
    totalAmountButton.addEventListener("click", () => {
        console.log("here")
        tempAmount = totalAmount.value;
    //empty or negative input
        if (tempAmount === "" || tempAmount < 0) {
            errorMessage.classList.remove("hide");
        } else {
            errorMessage.classList.add("hide");
        //Set Budget
            amount.innerHTML = tempAmount;
        //Set Balance
            balanceValue.innerText = tempAmount - expenditureValue.innerText;
        //Clear Input Box
            totalAmount.value = "";
        }
    });
}

//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

//Function To Modify List Elements
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButtons(true);
    }
    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText =
        parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
};

//Function To Create List
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(sublistContent);
};

if(checkAmountButton){
//Function To Add Expenses
    checkAmountButton.addEventListener("click", () => {
    //empty checks
        if (!userAmount.value || !productTitle.value) {
            productTitleError.classList.remove("hide");
            return false;
        }
    //Enable buttons
        disableButtons(false);
    //Expense
        let expenditure = parseInt(userAmount.value);
    //Total expense (existing + new)
        let sum = parseInt(expenditureValue.innerText) + expenditure;
        expenditureValue.innerText = sum;
    //Total balance(budget - total expense)
        const totalBalance = tempAmount - sum;
        balanceValue.innerText = totalBalance;
    //Create list
        listCreator(productTitle.value, userAmount.value);
    //Empty inputs
        productTitle.value = "";
        userAmount.value = "";
    });
}
}

export default Dashboard;