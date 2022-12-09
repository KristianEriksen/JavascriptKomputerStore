let workBalance = 0;
let bankBlance = 0;
let wage = 100;
let outstandingLoan = 0;
let hasLoan = false;
let currency = " NOK";


// *** Work section ***

const work = () => {
	workBalance += wage;
	
};

const getWorkBalance = () => {
	return workBalance;
};

const resetBalanceWork = () => {
	workBalance = 0;
};

// *** Bank section ***

const getBankBalance = () => {
	return bankBlance;
};

const getCurrency = () => {
	return currency;
};

const getOutstandingLoan = () => {
	return outstandingLoan;
};

const getHasLoan = () => {
	return hasLoan;
};

// const depositMoney = () => {
// 	let saveMoney = getWorkBalance();
// 	let sum = saveMoney;

// 	for (let i = 0; i < bankBlance.length; i++) {
// 		sum += bankBlance[i];
// 	}
// 	bankBlance.push(saveMoney);
// 	return sum;
// };



	// * Get loan

const getLoan = () => {
	console.log("so far, so good!");
	// Checks if the user already have a loan or not
	if (hasLoan) {
		alert(`You already have an outstanding loan of ${outstandingLoan()}`);
		return;
	}

		// check if the user meet the requirements to be able to get a loan
		if (bankBlance == 0) {
			alert(`To get a loan, you need balance in your bank.`);
		} else {
			// Ask user about the amount of money the user want for a loan
			 const loanAmount = parseInt(
				prompt(`Type in amount og money you wish to loan. Your current bank balance is: ${bankBlance}${getCurrency()}. You a can get a loan for up to the double of your bank balance. Max amount of loan you cant take is ${bankBlance * 2} ${getCurrency()}`)
			 )

			 // checks if amount is valid
			 if (!loanAmount) {
				 alert("Please enter a valid number.");
			 }

			 if (loanAmount)

			 if (loanAmount > bankBlance * 2) {
				alert(`It's not possible to make a higher loan then the double of your bank account. You can loan up to ${getBankBalance() * 2}${getCurrency()}`);
			 } else {
				
				// if amount is valid, process loan 
				bankBlance += parseInt(loanAmount); 
				console.log(bankBlance); 
				hasLoan = true;
				console.log(hasLoan);
				outstandingLoan = loanAmount;
				console.log(outstandingLoan)
				alert(`Congratulations. You will now receive your loan.`);

				// Updates the loan, balance and pay elements
				updateLoanAmounts();
			 }
		}
	}

	// * Payment

const paymentToBank = ()  =>{
	let rememberLoan = 0;
	// let bankBalance =
	// check if user has a loan
	if (hasLoan) {
		alert(`You have an outstanding loan. 10% of your transfer has been used for repayment. Bank transfer = ${workBalance}${getCurrency()} -10% = ${workBalance * 0.9}${getCurrency()}${workBalance * 0.1} ${getCurrency()} have been used for repayment of loan.`);
		
		// subtract 10% of bank payment for loan
		rememberLoan = outstandingLoan;
		outstandingLoan -= workBalance * 0.1;
		workBalance *= 0.9;
	}
	// update the account balance
	bankBlance += workBalance;

	// check if user has negative outstanding loan balance and reimburse them
	reimburse(rememberLoan, false);

	
	// If user has no loan, set workBalance to 0
	if (outstandingLoan == 0) {
		hasLoan = false;
		resetBalanceWork();
	}

	updateLoanAmounts();	   
}


// * RepayLoan 
const repayLoan = () => {
	const rememberLoan = outstandingLoan;
	outstandingLoan -= workBalance;

	// check if outstanding loan value is negative and reimburse user balance if needed
	if (outstandingLoan < 0) {
		reimburse(rememberLoan, true);
	}

	// set has loan to false and set payment to 0
	if (outstandingLoan == 0) {
		hasLoan = false;
	}

	workBalance = 0;

	updateLoanAmounts();
}
// * Reimburse 

const reimburse  = (loan, showMessage) => {
	// Message to remember user of the payment for reimbursement 
	console.log('Hi from reimburse function')
	const RememberPayment = parseInt(workBalance);

	// display message if user chose repayment option
	if (showMessage) {
		alert(`${workBalance} kr. has gone toward the repayment of your ${loan} kr. loan. The remaining ${workBalance - loan} kr. has been added to your account balance.`);
	}

	// reimburse user for overpayment
	if (outstandingLoan < 0) {
		// show additional alert message if user overpaid on 10% payment
		if (!showMessage) {
			alert(`An additional ${-parseInt(outstandingLoan)}${getCurrency()}.has been added to your account balance as you overpaid. You paid ${loan + -parseInt(outstandingLoan)}${getCurrency()} on a ${loan} ${getCurrency()}. loan. Total amount transferred to account = ${workBalance} ${getCurrency()}. + ${-parseInt(outstandingLoan)}${getCurrency()} = ${workBalance + -parseInt(outstandingLoan)} kr.`);
		}
			
		// update balance and outstanding loan value
		bankBlance -= parseInt(outstandingLoan);
		outstandingLoan = 0;
	}
}



const updateLoanAmounts = () => {
	// Updates the loan, balance and pay elements
	const bankTotalElement = document.getElementById("bankTotal");
	bankTotalElement.innerText = `${bankBlance}${getCurrency()}`;

	const workTotalElement = document.getElementById("workTotal");
	workTotalElement.innerText = `${workBalance} kr.`;

	const outstandingLoanElement = document.getElementById("loan");
	outstandingLoanElement.innerText = `${outstandingLoan} kr.`;

	// hide or show loan elements depending on wether there is a loan or not
	if (outstandingLoan == 0) {
		outstandingLoanElement.style.display = "none";
	} else {
		outstandingLoanElement.style.display = "block";
	}
}

const bank = {
	work,
	workBalance,
	getBankBalance,
	getWorkBalance,
	getCurrency,
	resetBalanceWork,
	getOutstandingLoan,
	getHasLoan,
	getLoan,
	updateLoanAmounts,
	paymentToBank,
	reimburse,
	repayLoan
};

export default bank;
