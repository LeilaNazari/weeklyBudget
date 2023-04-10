//class
class Budget {
  constructor(budget) {
    this.budget = budget;
  }
}
//variables

let budgetValue;
let budget;

//eventListeners

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    budgetValue = prompt("Please enter your weekly budge:");
    console.log(budgetValue);

    //Validate Budget value which enter user
    if (budgetValue === null || budgetValue === "" || budgetValue === "0") {
      window.location.reload();
    } else {
      //instaciate Budget class
      budget = new Budget(budgetValue);
      console.log(budget);
    }
  });
}
