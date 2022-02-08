

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
