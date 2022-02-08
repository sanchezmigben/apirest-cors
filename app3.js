

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
        const ul = document.getElementById('products');
        let products = data;
        //console.log(products);
        
        for(let product of products){
            let li = createNode('li');
            let span = createNode('span');
	    let a = createNode('a');
	    a.setAttribute('href', "show.html?id=" + product._id);
	    a.innerText = product._id;	
            span.innerHTML = `${product.name} ${product.price} ${product.category}`;            
            append(li, span);
	    append(li, a);
            append(ul, li);
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
