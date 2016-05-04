$(document).ready(function() {
	
	$(".available").click(function() {
		
		var seatName = $(this).attr("name");
		var getCustomerName;

		$("form").text(function() {
		
			$(this).css("display", "block");
			var newSeat = $("#seat").val(seatName);

			$("#button").on("click", function() {
   				getCustomerName = $("#username").val();
   			    var getSeat = $(this);	
				$("#message").text("Thank you for your reservation. " + getCustomerName + " has reserved " + seatName);
			
				$("#name").attr("class", "reserved");
				console.log(name);

			});
		});
	});
});