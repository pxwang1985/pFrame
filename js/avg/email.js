function Email(app, show) { page.call(this, app, "email", show); }
Email.TRL = "ell";
Email.PAGE_MAX = 7;
Email.prototype = new page();

Email.prototype.init = function () {
	this.channel_dat = this.setchannel();
	this.channel_snd = new SSD(this, Email.TRL, { "value": 0, "dx": 1, "dy": Email.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
	this.channel_snd.refresh(this.channel_dat);
};

Email.prototype.addbg = function () {
	var str = '<div class="heads"><div class="title">' + str_epg_title + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
	$("#el .pbg").html(str);

	str = "";
	for (var i = 0; i < Email.PAGE_MAX; i++) {
		str += '<div class="item_bg"></div>';
	}
	$("#el .abg").html(str);
};



Email.prototype.setchannel = function () {
	var channel_dat = new Array();
	for (var i = 0; i < 15; i++) {
		var d_obj = { "id": "ell_" + i, "type": "list", "show": [] };
		d_obj.show.push({ "class": "no", "text": ("000" + i).slice(- 3) });
		d_obj.show.push({ "class": "emstatus", "text": "Receive" });
		d_obj.show.push({ "class": "text", "text": "sadfasfdasdfasdfasdfaasdfasdfasdfasdfsadfasdfsadfsadfsadfasdfsdafsdfasdf" });
		d_obj.show.push({ "class": "sender", "text": "sally" });
		channel_dat.push(d_obj);
	}
	return channel_dat;
};

Email.prototype.area_specialevent = function (event) {
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
Email.prototype.item_specialevent = function (event) {
	var cate = event.cate;
	var kind = event.kind;
	var value = event.value;
	var name = event.name;
	if (cate == "OP_EVENT") {
		if (kind == "OP_DO") {
		}
	}
}

Email.prototype.onspecialkey = function (event) {
	var code = event.code;
	switch (code) {
	}
}

