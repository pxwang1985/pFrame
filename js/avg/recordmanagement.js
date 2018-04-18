function RecordManagement(app, show) {
	page.call(this, app, "recordmanagement", show);
}

RecordManagement.RTL = "rtl";
RecordManagement.PAGE_MAX = 7;
RecordManagement.prototype = new page();

RecordManagement.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, RecordManagement.RTL, { "value": 0, "dx": 1, "dy": RecordManagement.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

RecordManagement.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#rt .pbg").html(str);

	str = "";
	for (var i = 0; i < RecordManagement.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#rt .abg").html(str);
};

RecordManagement.prototype.setchannel = function () {
	var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
		var d_obj = {"id":"rtl_"+i, "type": "list", "show": [] };		
		d_obj.show.push({ "class": "no", "text": i });
		d_obj.show.push({ "class": "text", "text": "Pasdfasdfasdfasdfasdfasdf" });		
		d_obj.show.push({ "class": "date", "text": "2017/06/21" });		
		d_obj.show.push({ "class": "time", "text": "12:12-16:00" });
		d_obj.show.push({ "class": "rtype", "text": "Film" });		
		d_obj.show.push({ "class": "rstatus", "text": "Order" });
		channel_dat.push(d_obj);
	}
	return channel_dat;
};


RecordManagement.prototype.area_specialevent = function (event) {
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
RecordManagement.prototype.item_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_DO") {
			var id = parseInt(name.split("_")[1]);
			var name = name.split("_")[0];
			if (name == EPG.EE) {
			}
			if (name == EPG.EC) {
				
			}
		}
	}
}

RecordManagement.prototype.onspecialkey = function (event) {
	var code = event.code;
}

