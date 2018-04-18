function PIC(app, show) {
	page.call(this, app, "pic", show);
}

PIC.PCL = "pcl";
PIC.PAGE_MAX = 8;
PIC.prototype = new page();

PIC.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, PIC.PCL, { "value": 0, "dx": 1, "dy": PIC.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

PIC.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#pc .pbg").html(str);

	str = "";
	for (var i = 0; i < PIC.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#pc .abg").html(str);
};

PIC.prototype.setchannel = function () {
    var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
		var d_obj = {"id":"pcl_"+i, "type": "list", "show": [] };		
		d_obj.show.push({ "class": "fstatus", "icon": true, "show": true, "img": "img/dir.gif" });		
		d_obj.show.push({ "class": "text", "text": "Path name:=======" });
		channel_dat.push(d_obj);
	}
	return channel_dat;
};


PIC.prototype.area_specialevent = function (event) {
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
PIC.prototype.item_specialevent = function (event) {
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

PIC.prototype.onspecialkey = function (event) {
}

