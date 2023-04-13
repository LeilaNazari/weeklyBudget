//class
class Budget {
  constructor(budget) {
    this.budget = budget;
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
    console.log(box);
    const primary = document.querySelector(".message");
    primary.innerHTML =
      box.innerText = `<span class='${className}'>${message}</span>`;
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
      html.showMessage("All fields are correct", "right");
    }
  });
}
