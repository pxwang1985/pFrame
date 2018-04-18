function HDD_Info(app, show) {
	page.call(this, app, "hdd_info", show);
}

HDD_Info.HOL = "hol";
HDD_Info.PAGE_MAX = 7;
HDD_Info.prototype = new page();

HDD_Info.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, HDD_Info.HOL, { "value": 0, "dx": 1, "dy": HDD_Info.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

HDD_Info.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#ho .pbg").html(str);

	str = "";
	for (var i = 0; i < HDD_Info.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#ho .abg").html(str);
};

HDD_Info.prototype.setchannel = function () {
	var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
        var d_obj = {"id":"hol_"+i, "type": "list", "show": [] };	
		d_obj.show.push({ "class": "hdstatus", "icon": true, "show": true, "img": "img/red.gif" });
		d_obj.show.push({ "class": "no", "text": ("00" + i).slice(- 2) });
		d_obj.show.push({ "class": "format", "text": "FAT32" });
		d_obj.show.push({ "class": "storage", "text": "15189MB" });		
		d_obj.show.push({ "class": "used", "text": "11801MB" });		
		d_obj.show.push({ "class": "remaining", "text": "3388MB" });		
		channel_dat.push(d_obj);
	}
	return channel_dat;
};


HDD_Info.prototype.area_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_OUT") {
			this.PageExit(1)
		}
		
	}
}
HDD_Info.prototype.item_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_DO") {
			var id = parseInt(name.split("_")[1]);
			var name = name.split("_")[0];
		}
	}
}

HDD_Info.prototype.onspecialkey = function (event) {
	var code = event.code;
}

