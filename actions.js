

// Utilizado para mostrar el hidden menu al dar click en el menú hamburguesa
const burgerMenu = document.querySelector(".navbar-btn-menu");
const hiddenMenu = document.querySelector(".hidden-container");

burgerMenu.addEventListener("click", function () {
	hiddenMenu.classList.toggle("shown");
});


// Muestra la ventana oculta del carrito de tienda
const cartIcon = document.querySelector(".navbar-btn-cart");
const hiddenCart = document.querySelector(".background-container");

cartIcon.addEventListener("click", function () {
	hiddenCart.classList.toggle("shown");
})


// Funcion dada para los botones de quantity-section
// Incrementa o disminuye la cantidad de producto
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("num");

	let i = 1;

	plus.addEventListener("click", () =>{
		i++;
		num.innerText=i;
		console.log(i)
	});

	minus.addEventListener("click", () =>{
		if(i > 1){
			i--;
			num.innerText = i;
		}
	});


// FUNCIONALIDADES PARA EL CARRITO DE COMPRA PRÓXIMO A IMPLEMENTARSE
// EL ESTADO DEL PROYECTO ESTÁ EN PROGRESO