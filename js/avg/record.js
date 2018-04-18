function Record(app, show) {
	page.call(this, app, "record", show);
}

Record.RDL = "rdl";
Record.PAGE_MAX = 7;
Record.prototype = new page();

Record.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, Record.RDL, { "value": 0, "dx": 1, "dy": Record.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

Record.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">' + str_epg_title + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#rd .pbg").html(str);

	str = "";
	for (var i = 0; i < Record.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#rd .abg").html(str);
};

Record.prototype.setchannel = function () {
	var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
		var d_obj = { "id": "rdl_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "dstatus", "icon": true, "show": true, "img": "img/dir.gif" });
		d_obj.show.push({ "class": "pathname", "text": "Path name" });
		d_obj.show.push({ "class": "time", "text": "12:12-16:00" });
		d_obj.show.push({ "class": "date", "text": "5/8" });
		channel_dat.push(d_obj);
	}
	return channel_dat;
};


Record.prototype.area_specialevent = function (event) {
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
Record.prototype.item_specialevent = function (event) {
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

Record.prototype.onspecialkey = function (event) {

}

