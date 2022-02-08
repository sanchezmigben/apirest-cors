function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const btnNew = document.getElementById("btnNew2");
btnNew.addEventListener("click",fetchCreateProduct);


async function fetchCreateProduct() {
	const newProduct = { "name": "miguel", "price": 25.5, "category":"vegetable"};
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products",
	  //"http://192.168.1.115:3000/products_api",
      {				
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': "application/json"
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

async function fetchProducts() {
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products_api",
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

  fetchProducts();
