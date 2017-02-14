console.log("hello");

var CarLot = (function(originalCarLot){

	originalCarLot.activateEvents = function(){
		$(".card").click(function() {
    		CarLot.clearStyles();
    		$(this).css("border", "dashed 10px black");
    		$(this).css("background-color", "yellow");
    		// var button = $("#submit")
    		var textInput = $("#text");
    		textInput.val("");
    		textInput.focus();
		});
	};

	originalCarLot.clearStyles = function(){
		$(".card").css("border", "solid 2px black");
		$(".card").css("background-color", "white");
	};


	return originalCarLot;
})(CarLot);

