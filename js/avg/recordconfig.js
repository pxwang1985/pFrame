function RecordConfig(app, show) {
    page.call(this, app, "recordconfig", show);
}

RecordConfig.RGC = "rgc";
RecordConfig.PAGE_MAX = 7;
RecordConfig.prototype = new page();

RecordConfig.prototype.init_data = function () {
    var data_set = {};
    data_set["rgc"] = 0;
    data_set["rg_chid"] = 53;
    data_set["rg_date"] = "2012/12/15";
    data_set["rg_stime"] = "00:00";
    data_set["rg_etime"] = "12:12";
    data_set["rg_cycle"] = 0;

    return data_set;
};
RecordConfig.prototype.init = function () {
    var old_dat = this.get_data();
    this.channel_dat = this.setchannel();
    this.channel_snd = new SSD(this, RecordConfig.RGC, { "value": old_dat["rgc"], "dx": 1, "dy": RecordConfig.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
    this.channel_snd.refresh(this.channel_dat);
};

RecordConfig.prototype.addbg = function () {
    var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
    $("#rg .pbg").html(str);
};

RecordConfig.prototype.setchannel = function () {
    var channel_dat = new Array();    
    var old_dat = this.get_data();
    channel_dat.push({ "id": "rg_chid", "type": "input", "name": "Channel ID", "value": old_dat["rg_chid"],"format":"num","len":3 });
    channel_dat.push({ "id": "rg_date", "type": "input", "name": "Date", "value": old_dat["rg_date"], "format": "date" });
    channel_dat.push({ "id": "rg_stime", "type": "input", "name": "Start Time", "value": old_dat["rg_stime"], "format": "time"});
    channel_dat.push({ "id": "rg_etime", "type": "input", "name": "End Time", "value": old_dat["rg_etime"], "format": "time"});
    channel_dat.push({ "id": "rg_cycle", "type": "select", "name": "Set Record Cycle", "value": old_dat["rg_cycle"], "options": [{ "id": 0, "value": "Single","show":_("Single") }, { "id": 1, "value": "50%", "show":"50%" }, { "id": 2, "value": "30%", "show":"30%" }] });
    channel_dat.push({ "id": "rg_fir", "type": "button", "name": "Confirm" });
    return channel_dat;
};


RecordConfig.prototype.area_specialevent = function (event) {
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
RecordConfig.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_DO") {
            $("#rg .test").html(name + " - " + this.page_itemvalue_get(name));
        }
    }

    if (cate == "DISPLAY") {
        if (kind == "DISPLAY_SELECT") {
            $("#rg .test").html(name + " change " + this.page_itemvalue_get(name));
        }
    }

    
}

RecordConfig.prototype.onspecialkey = function (event) {
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

