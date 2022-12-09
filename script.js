   
	console.log("Kristian. You are aresome!");

   import bank from "./modules/bank.js";
  //  import buy from "./modules/buy.js"
  //  import getDataLaptopsPrice from "./modules/buy.js";
   import {getDataAPI, populateSelectLaptopElement} from "./modules/fetchDataAPI.js";
   


    // BankElements
    const bankTotalElement = document.getElementById("bankTotal");
    const bankButtonElement = document.getElementById("btnBank");

    // LoanElement
    const loanButtonElement = document.getElementById("btn-getLoan");

   // Repay Elements
   const repayButtonElement = document.getElementById("btn-repay");

    // WorkElements
    const workTotalElement = document.getElementById("workTotal");
    const workButtonElement = document.getElementById("btnWork");

    // buyElements
    const buyButtonElement = document.getElementById("btn-buyNow");


    // * Bank button
 
   bankTotalElement.innerText = 0 + bank.getCurrency();
  
   const updateBankTotal = (bankUpdate) => {
			bankTotalElement.innerText =  bank.getCurrency(); // !legg tilbake deposit money
		};

    bank.updateLoanAmounts

    const handleBankButtonClicked = (bankUpdate) => {
			// updateBankTotal(bankUpdate);
      // bank.paymentToBank();
			// Set work money to 0 after bankButtonElement is clicked
			const value = 0 + bank.getCurrency();
			workTotalElement.innerText = value;

			// bank.resetBalanceWork();
			// 		console.log("It worked " + bank.resetBalanceWork());
		};


    bankButtonElement.addEventListener("click", bank.paymentToBank);


     // * Repay bnutton
    // repayButtonElement.style.display = 'none';

    if (bank.getOutstandingLoan() == 0) {
      repayButtonElement.style.display = "none";
    }
    else {
      repayButtonElement.style.display = "block";
    }

    // * Get loan

    loanButtonElement.addEventListener('click', bank.getLoan);

    // * Pay loan

    bank.paymentToBank;

    // * Update loan amounts

    bank.updateLoanAmounts;

   //  * Repay Loan

   repayButtonElement.addEventListener('click',bank)

    // * Reimburse
    bank.reimburse;

    // * Work button

    const handleWorkButtonClicked = () => {
      // workTotalElement.innerText = 0 + bank.getCurrency();
      bank.work();
      workTotalElement.innerText = bank.getWorkBalance() + bank.getCurrency();
      console.log("work clicked");
    };
    
    workButtonElement.addEventListener("click", handleWorkButtonClicked);
    
    workTotalElement.innerText = 0 + bank.getCurrency();


// * Buy Now button
const priceElement = document.getElementById("price");
const laptopModel = document.getElementById("laptopModel");

  let buyLaptop = () => {
      let title = laptopModel.innerText;
      let price = parseInt(priceElement.innerText);
      let bankBalance = parseInt(bankTotalElement.innerText);

      if (bankBalance >= price) {
        bankBalance -= price;
        bankTotalElement.innerText = `${bankBalance} kr`;
        confirm("Congratulations! You are the new owner of " + `${title}.`);
      }
      else {
      alert(`"Sorry, you dont't have enugh money in your bank 😢 Your balance is: ${bankBalance}${bank.getCurrency()}. The computer you wish to buy costs ${price}${bank.getCurrency()}`);
      }
    };

	buyButtonElement.addEventListener("click", buyLaptop);



  
  getDataAPI();
	populateSelectLaptopElement();



