// JavaScript Document

//=== Header_Scroll Start ===
let nav = document.querySelector(".navbar");
window.onscroll = function () {
	if(document.documentElement.scrollTop > 20){
		nav.classList.add("header-scrolled");
	}else{
		nav.classList.remove("header-scrolled");
	}
}
//=== Header_Scroll End ===

//=== Nav_Hide Start ===
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
	a.addEventListener("click", function(){
		navCollapse.classList.remove("show");
	})
})
//=== Nav_Hide End ===