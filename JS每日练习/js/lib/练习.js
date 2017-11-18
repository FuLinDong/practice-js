(function(){
	var input_trim = document.getElementById("input_trim");
	var btn_tirm = document.getElementById("btn_trim");
	var btn_tirml = document.getElementById("btn_triml");
	var btn_tirmr = document.getElementById("btn_trimr");
	var reg = /\s|\u00A0/g;
	var regl = /(?:\s|\u00A0)/g;
	var regr = /(?:\s|\u00A0)/g;
	btn_tirm.onclick = function(){	
		input_trim.value = input_trim.value.replace(reg,'');
	}
	btn_tirml.onclick = function(){
		0
		input_trim.value = input_trim.value.replace(regl,'');
	}
	btn_tirmr.onclick = function(){
		input_trim.value = input_trim.value.replace(regr,'');
	}
}());
