import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './Dashboard.css';
import BudgetCalculator from '../components/BudgetCalculator.js';

function Dashboard() {





  return (
    <div className="App">

        {/* Budget Calculator */}
        < BudgetCalculator />



      <html lang="en">

      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Budget App</title>
          {/* Fonts */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
          {/* More fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
          {/* Login css */}
          <link rel="stylesheet" href="style.css" />
      </head>

      <body>
          <div class="wrapper">
              <div class="container">
                  <div class="sub-container">
                      {/* <!-- Budget --> */}
                      <div class="total-amount-container">
                          <h3>Budget</h3>
                          <p class="hide error" id="budget-error">
                              Value cannot be empty or negative
                          </p>
                          <input type="number" id="total-amount" placeholder="Enter Total Amount" />
                          <button class="submit" id="total-amount-button">Set Budget</button>
                      </div>

                      {/* <!-- Expenditure --> */}
                      <div class="user-amount-container">
                          <h3>Expenses</h3>
                          <p class="hide error" id="product-title-error">
                              Values cannot be empty
                          </p>
                          <input type="text" class="product-title" id="product-title" placeholder="Enter Title of Product" />
                          <input type="number" id="user-amount" placeholder="Enter Cost of Product" />
                          <button class="submit" id="check-amount">Check Amount</button>
                      </div>
                  </div>
                  {/* <!-- Output --> */}
                  <div class="output-container flex-space">
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
              <div class="list">
                  <h3>Expense List</h3>
                  <div class="list-container" id="list"></div>
              </div>
          </div>
          {/* <!-- Script --> */}
          <script src="script.js"></script>
      </body>

      </html>
    </div>
  );
}

export default Dashboard;