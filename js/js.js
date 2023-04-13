//class
class Budget {
  constructor(budget) {
    this.budget = budget;
    this.budgetLeft = this.budget;
  }

  subtractFromBudget(amount) {
    return (this.budgetLeft -= amount.value);
  }
}
//every thing Related to the HTML
class HTML {
  insertBudget(amount) {
    total.innerHTML = amount;
    left.innerHTML = amount;
  }
  //show message to user
  showMessage(message, className) {
    const box = document.createElement("div");
    box.classList.add(className);
    box.appendChild(document.createTextNode(message));

    const primary = document.querySelector(".message");
    primary.innerHTML =
      box.innerText = `<span class='text ${className}'>${message}</span>`;
  }
  //display Expense in the html
  insertExpense(name, amount) {
    const listBox = document.querySelector("#expenses .list-group");
    let li = document.createElement("li");

    li.innerHTML = `${name} 
    <span>${amount}</span>`;
    listBox.appendChild(li);
  }

  //subtrack expense amount from budget

  trackBudget() {
    const budgetLeftTomans = budget.subtractFromBudget(amount);
    console.log(budgetLeftTomans);
    left.innerHTML = `${budgetLeftTomans}`;

    //if less than 25% budget left change color to the danger
    if (budget.budget / 4 > budgetLeftTomans) {
      left.parentElement.parentElement.classList.remove(
        "remaining-color-green",
        "remaining-color-orange"
      );
      left.parentElement.parentElement.classList.add("remaining-color-red");
    } else if (budget.budget / 2 > budgetLeftTomans) {
      //if less than 50% budget left change color to the danger
      left.parentElement.parentElement.classList.remove(
        "remaining-color-green",
        "remaining-color-orange"
      );
      left.parentElement.parentElement.classList.add("remaining-color-orange");
    }
  }
}

//variables

let budgetValue;
let budget;
let total = document.querySelector("span#total");
let left = document.querySelector("span#left");
const addExpense = document.querySelector("#add-expense");

const html = new HTML();
//eventListeners

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    budgetValue = prompt("Please enter your weekly budge:");

    //Validate Budget value which enter user
    if (budgetValue === null || budgetValue === "" || budgetValue === "0") {
      window.location.reload();
    } else {
      //instaciate Budget class
      budget = new Budget(budgetValue);

      html.insertBudget(budget.budget);
    }
  });
  //get value from the form
  addExpense.addEventListener("submit", function (e) {
    e.preventDefault();
    //access to the value of input
    const expense = document.querySelector("#expense").value;
    const amount = document.querySelector("#amount").value;

    if (expense === "" || amount === "") {
      html.showMessage("please enter all fields", "wrong");
    } else {
      html.insertExpense(expense, amount);
      html.trackBudget(amount);
    }

    setTimeout(() => {
      document.querySelector(".text").remove();
    }, 10000);
    addExpense.reset();
  });
}
