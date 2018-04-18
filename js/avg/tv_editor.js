function TV_Editor(app, show) {
	page.call(this, app, "tv_editor", show);
}

TV_Editor.TRL = "trl";
TV_Editor.PAGE_MAX = 7;
TV_Editor.prototype = new page();

TV_Editor.prototype.init = function () {	  
    //this._power = true;
	this.channel_snd = new SSD(this, TV_Editor.TRL, { "value": 0, "dx": 1, "dy": TV_Editor.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
	this.control = Control.get();
	this.control.addEventListener(ViewEvent.CHANGE_CH_INDEX, this, this.change_ch_id);
	this.control.addEventListener(ViewEvent.REFRESH_CHANNEL_LIST, this, this.refresh_channel_list);
	this.control.addEventListener(ViewEvent.RECEIVE_CHANNEL_LIST, this, this.receive_channel_list);
};

TV_Editor.prototype.change_ch_id = function (event) {
	console.log("TV_Editor change_ch_id", event)
	var page = event.page;
	var ch_id = event.ch_id;
	if(page!=this.getName()){
		console.log(" TV_Editor.prototype.change_ch_id ",page,ch_id);
		this.channel_snd.do("select",ch_id);
	}
};
TV_Editor.prototype.refresh_channel_list = function (event) {
	var ch_list = event.data;
	var ch_len = ch_list.length;
	var channel_dat = new Array();
	for (var i = 0; i < ch_len; i++) {
		var d_obj = { "id": "trl_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "id", "text": ("000" + ch_list[i].ch_id).slice(- 3) });
		d_obj.show.push({ "class": "text", "text": ch_list[i].ch_name });
		d_obj.show.push({ "class": "chfav", "icon": true, "show": ch_list[i].fav, "img": "img/heart.png" });
		d_obj.show.push({ "class": "chlock", "icon": true, "show": ch_list[i].lock, "img": "img/lock.png" });
		channel_dat.push(d_obj);
	}
	delete (event);
	delete (this.channel_dat);
	this.channel_dat = channel_dat;
	this.channel_snd.refresh(this.channel_dat);
}
TV_Editor.prototype.receive_channel_list = function (event) { this.channel_snd.temp([]); }




TV_Editor.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">' + str_epg_title + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#tr .pbg").html(str);

	str = "";
	for (var i = 0; i < TV_Editor.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#tr .abg").html(str);
};

TV_Editor.prototype.area_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_OUT") {
			this.PageExit(1)
		}
	}

	if ((cate == "DISPLAY") && (kind == "DISPLAY_SELECT")) {
		var event = {};
		//event = { "page": this.getName(), "action": "ch_change", "params": {"ch": value } };		
		//Control.get().Do(event);
	}
}
TV_Editor.prototype.item_specialevent = function (event) {
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

TV_Editor.prototype.onspecialkey = function (event) {
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
				this.channel_dat = this.setbakchannel(start);
				this.channel_snd.refresh(this.channel_dat);
			}
			break;
	}
}

