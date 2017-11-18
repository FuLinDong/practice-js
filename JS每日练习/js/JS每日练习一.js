//section_one
function alertFunc(){
	alert('弹出窗口');
}
EventUtil.addHandler(document.getElementById('one_button'),'click',alertFunc);
//section_two
function showButton(){
	document.getElementById('section_two_button').style.display = 'block';
}
function hideButton(){
	document.getElementById('section_two_button').style.display = 'none';
}
EventUtil.addHandler(document.getElementById('sectionTwo_chechkbox'),'mouseover',showButton);
EventUtil.addHandler(document.getElementById('sectionTwo_chechkbox'),'mouseout',hideButton);
//section_three
function divMarginChange(){
	this.show = function(){
		document.getElementById('section_three_h4').style.marginBottom = '100px';
		document.getElementById('section_three_h4').style.color = "#ffffff";
		document.getElementsByTagName('section')[3].style.backgroundColor = '#D84C29';
	}
	this.hide = function(){
		document.getElementById('section_three_h4').style.marginBottom = '0px';
		document.getElementById('section_three_h4').style.color = "#91919F";
		document.getElementsByTagName('section')[3].style.backgroundColor = '#FFFFFF';
	}
}
var divMarginChange = new divMarginChange();
EventUtil.addHandler(document.getElementsByTagName('section')[3],'mouseover',divMarginChange.show);
EventUtil.addHandler(document.getElementsByTagName('section')[3],'mouseout',divMarginChange.hide);

//section_four 
var four_child = document.getElementById('four').children;
function ControlShowHideP(){
	this.show = function(){
	    four_child[1].style.display = 'block';
	},
	this.hide = function(){
	    four_child[1].style.display = 'none';
	}
};
var controlShowHideP = new ControlShowHideP();
EventUtil.addHandler(four_child[0],'mouseover',controlShowHideP.show);
EventUtil.addHandler(four_child[0],'mouseout',controlShowHideP.hide);

//section_five
//section_seven

function clickShowHide(element){
	var parent = document.getElementById(element).children;
	if( parent[1].style.display == 'none'){
		parent[1].style.display = 'block';
	}else{
		parent[1].style.display = 'none';
	}
}
var five_child = document.getElementById('five').children;
var seven_divChild = document.getElementById('seven_div').children;
five_child[0].onclick = function(){
	clickShowHide('five');
}
seven_divChild[0].onclick = function(){
	clickShowHide('seven_div');
}

//section_six

function AddBgClass(){
	this.bgOne = function(){
	    document.body.className = 'backgroundColorOne';
	},
	this.bgTwo = function(){
	    document.body.className = 'backgroundColorTwo';
	}
}
var addBgClass = new AddBgClass();
EventUtil.addHandler(document.getElementById('six_btn_one'),'click',addBgClass.bgOne);
EventUtil.addHandler(document.getElementById('six_btn_two'),'click',addBgClass.bgTwo);

















