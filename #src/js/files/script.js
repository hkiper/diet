let orderItem = document.querySelectorAll('.fuq__text');
let subtText =document.querySelectorAll('.fuq__sub-text');
/* subtText.forEach(elem =>{
	elem.addEventListener('click', IsSwow)
}) */


orderItem.forEach(el=>{
	el.addEventListener('click', her)
})
function her() {
	let subItem = this.nextElementSibling;
	console.log(subItem.classList.value);
	subItem.classList.toggle('show');
	console.log(subItem.classList[1]);
	console.log(subItem.target.open);
	
}


/* function her() {
	let subItem = this.nextElementSibling;
	console.log(subItem.classList.value);
	subItem.classList.toggle('show');
	console.log(subItem.classList[1]);
	console.log(subItem.target.open);
	
} */