function ProgramSearch(app, show) {
    page.call(this, app, "ProgramSearch", show);
}

ProgramSearch.PHC = "phc";
ProgramSearch.PHM = "phm";
ProgramSearch.PAGE_MAX = 7;
ProgramSearch.prototype = new page();

ProgramSearch.prototype.init_data = function () {
    var data_set = {};
    data_set["phc"] = 0;
    data_set["phm"] = 0;

    data_set["phc_apower"] = 0;
    data_set["phc_ff"] = 1;
    data_set["phc_lcn"] = 1;

    
    data_set["phm_apower"] = 57;
    data_set["phm_ff"] = 762000;
    data_set["phm_lcn"] = 1;

    return data_set;
};

ProgramSearch.prototype.init = function () {    
    var old_dat = this.get_data();
    this.channel_dat = this.setchannel();
    this.channel_snd = new SSD(this, ProgramSearch.PHC, { "value": old_dat["phc"], "dx": 1, "dy": ProgramSearch.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
    this.channel_snd.refresh(this.channel_dat);

    this.manual_dat = this.setmanual();
    this.manual_snd = new SSD(this, ProgramSearch.PHM, { "value": old_dat["phm"], "dx": 1, "dy": ProgramSearch.PAGE_MAX, "status": "HIDE_DISABLE_YES" });
    this.manual_snd.refresh(this.manual_dat);
};

ProgramSearch.prototype.addbg = function () {
    var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
    $("#ph .pbg").html(str);
};

ProgramSearch.prototype.data_refresh = function () {
    this.channel_dat = this.setchannel();
    this.channel_snd.refresh(this.channel_dat);

    this.manual_dat = this.setmanual();
    this.manual_snd.refresh(this.manual_dat);
};

ProgramSearch.prototype.setchannel = function () {
    var channel_dat = new Array();    
    var old_dat = this.get_data();
    channel_dat.push({ "id": "phc_auto", "type": "button", "name": _("Auto Scan") });
    channel_dat.push({ "id": "phc_manual", "type": "button", "name": _("Manual Scan") });
    channel_dat.push({ "id": "phc_apower", "type": "select", "name": _("Antenna Power"), "value": old_dat["phc_apower"], "options": [{ "id": 0, "value": "OFF","show":_("OFF") }, { "id": 1, "value": "ON","show":_("ON") }] });
    channel_dat.push({ "id": "phc_ff", "type": "select", "name": _("FTA+FTV"), "value": old_dat["phc_ff"], "options": [{ "id": 0, "value": "NO","show":_("NO") }, { "id": 1, "value": "YES","show":_("YES") }] });
    channel_dat.push({ "id": "phc_lcn", "type": "select", "name": _("LCN"), "value": old_dat["phc_lcn"], "options": [{ "id": 0, "value": "OFF","show":_("OFF") }, { "id": 1, "value": "ON","show":_("ON") }] });
    return channel_dat;
};

ProgramSearch.prototype.setmanual = function () {
    var channel_dat = new Array();    
    var old_dat = this.get_data();
    channel_dat.push({ "id": "phm_apower", "type": "input", "name": "Antenna Power", "value": old_dat["phm_apower"], "len": 3, "format": "num" });
    channel_dat.push({ "id": "phm_ff", "type": "input", "name": "FTA+FTV", "value": old_dat["phm_ff"], "len": 6, "format": "num" });
    channel_dat.push({ "id": "phm_lcn", "type": "select", "name": "LCN", "value": old_dat["phm_lcn"], "options": [{ "id": 0, "value": "8M","show":"8M" }, { "id": 1, "value": "16M","show":"16M" }] });
    channel_dat.push({ "id": "phm_fim", "type": "button", "name": "Manual Scan" });

    return channel_dat;
};


ProgramSearch.prototype.area_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_OUT") {

            if (event.name == "phc")
                this.PageExit(1)
            else if (event.name == "phm") {
                this.manual_snd.do("hide");
                this.manual_snd.do("disable");

                this.channel_snd.do("show");
                this.channel_snd.do("enable");
            }

        }

    }
}
ProgramSearch.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_DO") {
            $("#ph .test").html(name + " - " + this.page_itemvalue_get(name));
            if (name == "phc_manual") {
                this.channel_snd.do("hide");
                this.channel_snd.do("disable");
                this.manual_snd.do("show");
                this.manual_snd.do("enable");
            }
            if(name == "phc_auto"){                
                this.PageExit(1);
                $("#st .psw").html("");
                var event = { "page": this.getName(), "action": "search", "params":{"do":"start"} };			
                Control.get().Do(event);
                APP.get().APPSelect("searchresult",0);
            }

            if(name == "phm_fim"){                
                this.PageExit(1);
                $("#st .psw").html("");
                var event = { "page": this.getName(), "action": "search", "params":{"do":"start"} };			
                Control.get().Do(event);
                APP.get().APPSelect("searchresult",0);
            }
        }
    }

    if (cate == "DISPLAY") {
        if (kind == "DISPLAY_SELECT") {
            $("#ph .test").html(name + " change " + this.page_itemvalue_get(name));
        }
    }


}

ProgramSearch.prototype.onspecialkey = function (event) {
}

