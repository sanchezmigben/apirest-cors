const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditProduct);

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click",fetchDeleteProduct);

async function fetchDeleteProduct() {
	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const priceField = document.getElementById("txtPrice").value;
	const categoryField = document.getElementById("txtCategory").value;
	console.log(nameField + " " + priceField + " " + categoryField);
	
	const newProduct = {name: nameField, price: priceField, category:categoryField};
	
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/" + idField + "?_method=DELETE",
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
        alert("Product Deleted");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }



async function fetchEditProduct() {
	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const priceField = document.getElementById("txtPrice").value;
	const categoryField = document.getElementById("txtCategory").value;
	console.log(nameField + " " + priceField + " " + categoryField);
	
	const newProduct = {name: nameField, price: priceField, category:categoryField};
	
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/" + idField + "?_method=PUT",
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
        alert("Product Edited");
        
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
	
	 try {
		 
		 document.getElementById("txtId").value = id;
		 
		 if (product != null){
			document.getElementById("txtName").value = product.name;      
			document.getElementById("txtPrice").value = product.price;      
			document.getElementById("txtCategory").value = product.category;
		 }
	  
	}
	catch (e) {
	   // sentencias para manejar cualquier excepción
	   console.log(e); // pasa el objeto de la excepción al manejador de errores
	}
    
	      
	
        
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
