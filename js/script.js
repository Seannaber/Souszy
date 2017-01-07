var burgertime = function() {
	$("#menu").css({left:0});
	$("#thedarkness").css({visibility: "visible"});
}

var byebye = function() {
	$("#menu").css({left:"-1500px"},{transition: "all 300ms"});
	$("#thedarkness").css({visibility: "hidden"});
}