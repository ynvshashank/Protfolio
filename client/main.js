
var tablelinks=document.getElementsByClassName("tablelink")
var tablecontents=document.getElementsByClassName("tablecontent")
function opentab(tablename){
	for(tablelink of tablelinks){
		tablelink.classList.remove("active");
	}
	for(tablecontent of tablecontents){
		tablecontent.classList.remove("active-con");
	}
	Event.currentTarget.classList.add("active");

}
var tablelinks=document.getElementsByClassName("tablelink")
var tablecontents=document.getElementsByClassName("tablecontent")
function opentab(tablename){
	for(tablelink of tablelinks){
		tablelink.classList.remove("active");
	}
	for(tablecontent of tablecontents){
		tablecontent.classList.remove("active-con");
	}
	event.currentTarget.classList.add("active");
	document.getElementById(tablename).classList.add("active-con");
}