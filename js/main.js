$(function(){
	$.get("txt/file.txt", function (r) {
		var txtToArray = r.split("\n");
		$.each(txtToArray, function (i,v) {
			txtToArray[i] = txtToArray[i].split("\t");
		});
		var txtToJson = JSON.stringify(txtToArray);
		console.log(txtToJson);
		$(".response").html(txtToJson);
	});
});