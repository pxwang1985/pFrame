function Entitlement(app, show) {
	page.call(this, app, "entitlement", show);
}

Entitlement.ETL = "etl";
Entitlement.PAGE_MAX = 7;
Entitlement.prototype = new page();

Entitlement.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, Entitlement.ETL, { "value": 0, "dx": 1, "dy": Entitlement.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

Entitlement.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#et .pbg").html(str);
	str = "";
	for (var i = 0; i < Entitlement.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#et .abg").html(str);
};

Entitlement.prototype.setchannel = function () {
	var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
		var d_obj = {"id":"etl_"+i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "no", "text": ("000" + i).slice(- 3) });
		d_obj.show.push({ "class": "etstatus", "text": "Authridafasdfs" });
		d_obj.show.push({ "class": "datetime", "text": "2017-12-12 12:12" });
		channel_dat.push(d_obj);
	}
	return channel_dat;
};


Entitlement.prototype.area_specialevent = function (event) {
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
Entitlement.prototype.item_specialevent = function (event) {
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

Entitlement.prototype.onspecialkey = function (event) {
	var code = event.code;
	switch (code) {
		case KEYS.NUM0:
		case KEYS.NUM1:
		case KEYS.NUM2:
		case KEYS.NUM3:
		case KEYS.NUM4:
		case KEYS.NUM5:
		case KEYS.NUM6:
		case KEYS.NUM7:
			{
				var start = code - KEYS.NUM0;
				this.channel_snd.refresh(this.channel_dat);
			}
			break;
	}
}

