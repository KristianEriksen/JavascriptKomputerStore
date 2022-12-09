   
   
//  *** Main content
   
    const inventory = [];

    const addIteme = (item) => {
        inventory.push(item);
    }

    const getInventory = () => {
        return [...inventory]
    }


//  *** Test Area ***

    const products = [
        {
            description: "An old computer",
            price: 100
        },
        {
            description: "An new model of the old computer",
            price: 350
        }

    ]

    const getProducts = () => {
        return [...getProducts]
    }



// *** Export

    const boughtItemes = {
        addIteme,
        getInventory,
        getProducts
    }

    export default boughtItemes