function addfunction(){
	var addvalue=document.getElementById('commentsinput').value;
	//判斷有沒有輸入//
	if(document.getElementById('commentsinput').value==""){
	alert('請輸入留言內容！');
	}
	else if(document.getElementById('nameinput').value==""){
		alert('請輸入名字或暱稱！');
	}
	else{
	alert('留言成功！');
	append();
	appendguest();
	document.getElementById('commentsinput').value="";
	document.getElementById('nameinput').value="";
	}

}

//清除留言clear的function//
function clearfunction(){
	document.getElementById('commentsinput').value="";
	document.getElementById('nameinput').value="";
}

function menu() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

