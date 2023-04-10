//class

//variables

let budgetValue;

//eventListeners

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    budgetValue = prompt("Please enter your weekly budge:");
    console.log(budgetValue);

    //Validate Budget value which enter user
    if (budgetValue === null || budgetValue === "" || budgetValue === "0") {
      window.location.reload();
    }
  });
}
