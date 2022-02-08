const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditProduct);


async function fetchEditProduct() {
	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const priceField = document.getElementById("txtPrice").value;
	const categoryField = document.getElementById("txtCategory").value;
	console.log(nameField + " " + priceField + " " + categoryField);
	
	const newProduct = {name: nameField, price: priceField, category:categoryField};
	
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/idField?_method=PUT",
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
        
        
      })
      .catch((error) => console.log(error));
  }


async function fetchProduct(id) {
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/" + id,
      {		
        method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"		  
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
	let product = data;
	
	document.getElementById("txtId").value = product._id;
	document.getElementById("txtName").value = product.name;      
	document.getElementById("txtPrice").value = product.price;      
        document.getElementById("txtCategory").value = product.category;
        
      })
      .catch((error) => console.log(error));
  }



function getParameterByName(name, url = window.location.href) {
  console.log(url);
  
    name = name.replace(/[\[\]]/g, '\\$&');
  
  console.log(name);
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log(getParameterByName('id'));
  fetchProduct(getParameterByName('id'));
