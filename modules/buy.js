import { getDataAPI } from "./fetchDataAPI";

getDataAPI()



let price = 0;

const getDataLaptopsPrice = async () => {
	const dataLaptops = await getDataAPI();
	console.log("It works");
	const kake = dataLaptops[4].price;
	console.log(kake);

	return price + kake;
};


// const buy = () => {
//    getDataLaptopsPrice,
//    console.log('1')
   
// }

export default getDataLaptopsPrice();
