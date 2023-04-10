//class
class Budget {
  constructor(budget) {
    this.budget = budget;
  }
}
//every thing Related to the HTML
class HTML {
  insertBudget(amount) {
    console.log(amount);
  }
}

//variables

let budgetValue;
let budget;
let total = document.querySelector("span#total");
let left = document.querySelector("span#left");

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
}
