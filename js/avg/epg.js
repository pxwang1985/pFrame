function EPG(app, show) {
	page.call(this, app, "epg", show);
}

EPG.ED = "egd";
EPG.EC = "egc";
EPG.EE = "ege";
EPG.PAGE_MAX = 5;
EPG.prototype = new page();

EPG.prototype.init_data = function () {
	var data_set = {};
	data_set["egd"] = 0;
	data_set["egc"] = 0;
	data_set["ege"] = 0;
	return data_set;
};


EPG.prototype.init = function () {
	this.eventlist_created = false;
	var old_dat = this.get_data();
	this.date_snd = new SSD(this, EPG.ED, { "value": old_dat["egd"], "dx": 1, "dy": 5, "status": "SHOW_DISABLE_YES" });
	this.channel_snd = new SSD(this, EPG.EC, { "value": old_dat["egc"], "dx": 1, "dy": 5, "status": "SHOW_ENABLE_YES" });
	this.event_snd = new SSD(this, EPG.EE, { "value": old_dat["ege"], "dx": 1, "dy": 5, "status": "SHOW_DISABLE_NO" });
	this.control = Control.get();
	this.control.addEventListener(ViewEvent.CHANGE_CH_INDEX, this, this.change_ch_id);
	this.control.addEventListener(ViewEvent.REFRESH_DATE_LIST, this, this.refresh_date_list);
	this.control.addEventListener(ViewEvent.RECEIVE_DATE_LIST, this, this.receive_date_list);
	this.control.addEventListener(ViewEvent.REFRESH_CHANNEL_LIST, this, this.refresh_channel_list);
	this.control.addEventListener(ViewEvent.RECEIVE_CHANNEL_LIST, this, this.receive_channel_list);
	this.control.addEventListener(ViewEvent.REFRESH_EVENT_LIST, this, this.refresh_event_list);
	this.control.addEventListener(ViewEvent.RECEIVE_EVENT_LIST, this, this.receive_event_list);
	this.control.addEventListener(ViewEvent.REFRESH_SELECT_EVENT, this, this.refresh_select_event);
};


EPG.prototype.change_ch_id = function (event) {
	var page = event.page;
	var ch_id = event.ch_id;
	if (page != this.getName()) {
		this.channel_snd.do("select", ch_id);
	}
};


EPG.prototype.refresh_date_list = function (event) {
	var date_list = event.data;
	var date_len = date_list.length;
	var date_dat = new Array();
	for (var i = 0; i < date_len; i++) {
		var d_obj = { "id": "egd_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "edate", "text": ("00" + date_list[i].month).slice(-2) + "/" + ("00" + date_list[i].date).slice(-2) });
		d_obj.show.push({ "class": "day", "text": str_epg_day[date_list[i].day] });
		date_dat.push(d_obj);
	}
	delete (event);
	delete (this.date_dat);
	this.date_dat = date_dat;
	this.date_snd.refresh(this.date_dat);

};
EPG.prototype.receive_date_list = function (event) { this.date_snd.temp(); }
EPG.prototype.refresh_channel_list = function (event) {
	var ch_list = event.data;
	var ch_len = ch_list.length;
	var channel_dat = new Array();
	for (var i = 0; i < ch_len; i++) {
		var d_obj = { "id": "egc_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "id", "text": ("000" + ch_list[i].ch_id).slice(-3) });
		d_obj.show.push({ "class": "text", "text": ch_list[i].ch_name });
		channel_dat.push(d_obj);
	}
	delete (event);
	delete (this.channel_dat);
	this.channel_dat = channel_dat;
	this.channel_snd.refresh(this.channel_dat);
}
EPG.prototype.receive_channel_list = function (event) { this.channel_snd.temp(); }
EPG.prototype.refresh_event_list = function (event) {
	var event_list = event.data;
	var event_index = event.index;
	var event_len = event_list.length;
	var event_dat = new Array();
	for (var i = 0; i < event_len; i++) {
		var d_obj = { "id": "ege_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "time", "text": event_list[i].event_time });
		d_obj.show.push({ "class": "text", "text": event_list[i].event_name });
		d_obj.show.push({ "class": "order", "icon": true, "show": event_list[i].order, "img": "img/order.png" });
		d_obj.show.push({ "class": "rec", "icon": true, "show": event_list[i].rec, "img": "img/recing.png" });
		event_dat.push(d_obj);
	}
	delete (event);
	delete (this.event_dat);
	this.event_dat = event_dat;	
	this.event_snd.refresh(this.event_dat,event_index);
}



EPG.prototype.receive_event_list = function (event) { 
	this.event_snd.temp(); }
EPG.prototype.refresh_select_event = function (event) {
	var page = event.page;
	var ev_id = event.index;
	if (page != this.getName()) {
		this.event_snd.do("select", ev_id);
	}
	$("#eg .test").html(event.data.event_time + " " + event.data.event_name);
 }


EPG.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">' + str_epg_title + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#eg .pbg").html(str);
	str = "";
	for (var i = 0; i < 5; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#eg .abg").html(str);
};



EPG.prototype.setevent = function () {
	var event_dat = new Array();
	for (var i = 0; i < 5; i++) {
		var d_obj = { "id": "ege_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "time", "text": "00:00-" + "09:00" });
		d_obj.show.push({ "class": "text", "text": "Event Name: =============== " + ("000" + i).slice(-3) + "=======" });
		d_obj.show.push({ "class": "order", "icon": true, "show": true, "img": "img/order.png" });
		d_obj.show.push({ "class": "rec", "icon": true, "show": true, "img": "img/recing.png" });
		event_dat.push(d_obj);
	}
	return event_dat;
};

EPG.prototype.area_specialevent = function (event) {
	console.log("area_specialevent",event);
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_OUT") {
			if (name == EPG.EC) {
				this.PageExit(1)
			}
			else if (name == EPG.ED) {
				this.date_snd.do("active");
				this.channel_snd.do("noactive");
				this.PageExit(1)
			}
			else if (name == EPG.EE) {
				this.event_snd.do("noselect");
				this.event_snd.do("disable");
				this.channel_snd.do("noactive");
				this.PageExit(1)
			}
		}
		if (kind == "OP_OUT_RIGHT") {
			if (name == EPG.ED) {
				this.date_snd.do("active");
				this.channel_snd.do("noactive");
			}
			if (name == EPG.EC) {
				this.channel_snd.do("active");
				this.event_snd.do("noactive");
			}
		}
		if (kind == "OP_OUT_LEFT") {
			if (name == EPG.EC) {
				this.channel_snd.do("active");
				this.date_snd.do("noactive");
			}
			if (name == EPG.EE) {
				this.event_snd.do("noselect");
				this.event_snd.do("disable");
				this.channel_snd.do("noactive");
			}
		}
	}

	if ((cate == "DISPLAY") && (kind == "DISPLAY_SELECT")) {
		var event = {};
		if (name == EPG.EC) {
			event = { "page": this.getName(), "action": "ch_change", "params": { "ch": value } };
			Control.get().Do(event);
		}
		else if (name == EPG.ED) {
			event = { "page": this.getName(), "action": "event_change", "params": { "date": value} };			
			Control.get().Do(event);
		}
		else if (name == EPG.EE) {
			event = { "page": this.getName(), "action": "event_select", "params": { "ev": value} };			
			Control.get().Do(event);
		}

	}
}
EPG.prototype.item_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_DO") {
			var id = parseInt(name.split("_")[1]);
			var name = name.split("_")[0];
			if (name == EPG.EE) { }
			if (name == EPG.EC) {

			}
		}
	}
}

EPG.prototype.onspecialkey = function (event) {
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
			}
			break;
	}
	return;
}
