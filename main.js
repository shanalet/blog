//Animations

$(function(){
	$.notify({
	title: '<strong>Hello!</strong>',
	message: "All of this is a work in progress so just sit tight and maybe I'll fix things."
},{
	type: 'danger'
});
	$.notify({
	title: '<strong>By the way.</strong>',
	message: "Some of the photos used are just placeholders. No copyright infringement is intended.	"
},{
	type: 'danger'
});
})

$('.carousel').carousel({
	interval: 5000
})