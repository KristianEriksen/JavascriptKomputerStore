
 let selectedLaptopPrice = 0;


	// ********** LaptopElement section ********** 
 	// SelectElements
	const selectLaptopElement = document.getElementById("selectLaptops");
    //  Laptop description
    const laptopDescription = document.getElementById("laptopDescription");
    // Laptop Description
    const featuresLaptopElement = document.getElementById("featuresLaptop");
    // Laptop prise
    const priceElement = document.getElementById("price");
	// Laptop images
	const imageElement = document.getElementById("laptopImage");
	const imageURL = "https://computer-api-production.up.railway.app/"; 
	// buyElements
    const buyButtonElement = document.getElementById("btn-buyNow");
	// modelElement
	const laptopModelElement = document.getElementById("laptopModel");


	// ********** API section ********** 
	
	// Fetch data from API 
	const getDataAPI = async () => {
		try {
			const url = "https://computer-api-production.up.railway.app/computers";
			const res = await fetch(url);
			const dataLaptops = await res.json();
			console.log(dataLaptops);
			return dataLaptops;
		} catch (err) {
			console.log("Something went wrong", err);
		}
	};

	

	
	// Populate selectLaptopElement with data from API
	const populateSelectLaptopElement = async () => {
		const dataLaptops = await getDataAPI();
		const populateSelectLaptop = (dataLaptops) => {
			// default description
			const defaultDescription = document.createElement("p");
			defaultDescription.innerText = dataLaptops[0].description;
			laptopDescription.appendChild(defaultDescription);

			// default Features
			const defaultFeatures = document.createElement("li");
			defaultFeatures.innerText = dataLaptops[0].specs;
			featuresLaptopElement.appendChild(defaultFeatures);

			// default Price
			const defaultPrice = document.createElement("p");
			defaultPrice.innerText = dataLaptops[0].price;
			priceElement.appendChild(defaultPrice);

			// default image
			const defaultImg = document.createElement("img");
			// img.src = imageURL + dataLaptops[0].image;
			imageElement.innerHTML = "<img src=" + imageURL + dataLaptops[0].image + ">";
			imageElement.appendChild(defaultImg);

			// default model name
			const defaultModel = document.createElement('h2');
			defaultModel.innerText = dataLaptops[0].title;

			console.log("default element" + defaultPrice);

			// Handle select menu change
			const handleLaptopMenuChange = (e) => {
				const selectedLaptop = dataLaptops[e.target.selectedIndex];
				laptopDescription.innerText = selectedLaptop.description;
				featuresLaptopElement.innerText = selectedLaptop.specs;
				priceElement.innerText = selectedLaptop.price;
				laptopModelElement.innerText = selectedLaptop.title;
				

				// Image connected to product
				imageElement.innerHTML = "<img src=" + imageURL + selectedLaptop.image + ">";

			};

			selectLaptopElement.addEventListener("change", handleLaptopMenuChange);
			featuresLaptopElement.addEventListener("change", handleLaptopMenuChange);

			for (let i = 0; i < dataLaptops.length; i++) {
				// console.log(i);
				const laptops = document.createElement("option");
				const titleElement = document.createElement("p");
				titleElement.innerText = dataLaptops[i].title;
				const laptopPrice = document.createElement("li");
				laptopPrice.innerText = dataLaptops[i].price;
				const description = document.createElement("p");
				description.innerText = dataLaptops[3].id;
				const bilder = document.createElement("img");
				bilder.src = imageURL + dataLaptops[i].image;
				let price = dataLaptops[3].price;

				// Populates the slectLaptopElement
				laptops.appendChild(titleElement);
				selectLaptopElement.appendChild(laptops);

				// imageElement.appendChild(bilder);

				console.log("priser" + laptopPrice);
				
			}
		};

		populateSelectLaptop(dataLaptops);
		// console.log(populateLaptops);
	};
	

	export { getDataAPI, populateSelectLaptopElement };