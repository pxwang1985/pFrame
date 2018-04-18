$(document).ready(function () {
	KEYS = PCKEY;
	APP.get();
	Control.get();
	mTree();	
	Control.get().start();
	//Gstatus.Init();
	APP.get().AppTimer();
	document.onkeydown = function (event) {
		var code = System_KeyCode(event);
		APP.get().onkey(code);
	};
	/*
	document.onkeyup = function (event) {
		var code = System_KeyCode(event);
		if(isPower)
			return;
		APP.get().APPOnkeyup(code);
	};*/
	
	APP.get().APPSelect("mainmenu");
	APP.get().APPSelect("welcome",0);
	
	
	
});

var isPower = false;
var Menus = [];

Menus[0] = { "name": "mainmenu", "show": 0, "prop": MainMenu };
Menus[1] = { "name": "epg", "show": 0, "prop": EPG };
Menus[2] = { "name": "tv_editor", "show": 0, "prop": TV_Editor };
Menus[3] = { "name": "hdd_info", "show": 0, "prop": HDD_Info };
Menus[4] = { "name": "email", "show": 0, "prop": Email };
Menus[5] = { "name": "entitlement", "show": 0, "prop": Entitlement };
Menus[6] = { "name": "record", "show": 0, "prop": Record };
Menus[7] = { "name": "recordmanagement", "show": 0, "prop": RecordManagement };
Menus[8] = { "name": "pic", "show": 0, "prop": PIC };
Menus[9] = { "name": "recordconfig", "show": 0, "prop": RecordConfig };
Menus[10] = { "name": "language", "show": 0, "prop": Language };
Menus[11] = { "name": "welcome", "show": 0, "prop": Welcome };
Menus[12] = { "name": "programsearch", "show": 0, "prop": ProgramSearch };
Menus[13] = { "name": "messagebox", "show": 0, "prop": MessageBox };
Menus[14] = { "name": "pincode", "show": 0, "prop": Pincode };
Menus[15] = { "name": "searchresult", "show": 0, "prop": Searchresult };


APP.prototype.view_addBg = function () {
	return;
	var str = '';
	for (var i = 1; i < 15; i++) {
		str += "<div class='bg" + i + "'></div>";
	}
	$("#vw .vbg").html(str);
}


function mTree() {
	$.each(Menus, function (i, item) { new item.prop(item.name, item.show); })
}
function nofind() {
	var img = event.srcElement;
	img.src = "img/tanhao.jpg";
	img.onerror = null
}