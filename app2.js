const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreateProduct);


async function fetchCreateProduct() {
	const newProduct = {name: "miguelinnnnnnn",price: 25.5, category:"vegetable"};
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const span = document.getElementById('productSpan');
        let product = data;
	span.innerHTML = `${product.name} ${product.price} ${product.category}`; 
        
      })
      .catch((error) => console.log(error));
  }
