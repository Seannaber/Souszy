$("#hero").css("background-image", "url(img/cooking" + (Math.floor(Math.random() * 7) + 1) + ".gif)");

var burgertime = function() {
	$("#menu").css({left:0});
	$("#thedarkness").css({visibility: "visible"});
};

var byebye = function() {
	$("#menu").css({left:"-1500px", transition: "all 400ms"});
	$("#thedarkness").css({visibility: "hidden"});
};

var grilledcheese = function() {
	$.cookie("Menu1", 0);
	$("#grilledcheese" + Number($.cookie("Menu1"))).css({display: "block"});
	$(".description").css({display: "none"});
};

var grilledCheeseNext = function() {
	if ($.cookie("Menu1") == 4) {
		$.cookie("Menu1", 0);
		$("#grilledcheese1").css({display: "none"});
		$("#grilledcheese2").css({display: "none"});
		$("#grilledcheese3").css({display: "none"});
		$("#grilledcheese4").css({display: "none"});
		$("#appcontainer").css({visibility: "visible"});
	} else {
		$("#grilledcheese" + Number($.cookie("Menu1"))).css({display: "none"});
		$.cookie("Menu1", (Number($.cookie("Menu1")) + 1));
		$("#grilledcheese" + Number($.cookie("Menu1"))).css({display: "block"});
	};
}

var grilledCheesePrev = function() {
	$("#grilledcheese" + Number($.cookie("Menu1"))).css({display: "none"});
	$.cookie("Menu1", (Number($.cookie("Menu1")) - 1));
	$("#grilledcheese" + Number($.cookie("Menu1"))).css({display: "block"});
};