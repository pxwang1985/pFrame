function Language(app, show) {
    page.call(this, app, "language", show);
}

Language.LEC = "lec";
Language.PAGE_MAX = 7;
Language.prototype = new page();

Language.prototype.init_data = function () {
    var lan = this.l;
    var lan_id = 0;
    if (lan == "chn") { lan_id = 1; }    
    var data_set = {};
    data_set["lec"] = 0;
    data_set["le_language"] = lan_id;
    data_set["le_faudio"] = 0;
    data_set["le_saudio"] = 0;
    data_set["le_subtitle"] = 0;
    data_set["le_teletext"] = 0;

    return data_set;
};

Language.prototype.init = function () {  
    this._power = true;
    var old_dat = this.get_data();
    this.channel_dat = this.setchannel();
    this.channel_snd = new SSD(this, Language.LEC, { "value": old_dat["lec"], "dx": 1, "dy": Language.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
    this.channel_snd.refresh(this.channel_dat);
};

Language.prototype.data_refresh = function () {
    this.channel_dat = this.setchannel();
    this.channel_snd.refresh(this.channel_dat);
};

Language.prototype.addbg = function () {
    var str = '<div class="heads"><div class="title">'+str_epg_title+'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
    $("#le .pbg").html(str);
};

Language.prototype.setchannel = function () {       
    var old_dat = this.get_data(); 
    var lan = this.l;
    var lan_id = 0;
    if (lan == "chn") { lan_id = 1; }   
    var channel_dat = new Array();
    console.log(this.data_set);
    channel_dat.push({ "id": "le_language", "type": "select", "name": _("Menu Language"), "value": lan_id, "options": [{ "id": 0, "value": "en","show":_("en") }, { "id": 1, "value": "chn","show":_("chn") }]});
    channel_dat.push({ "id": "le_faudio", "type": "select", "name": _("First Audio Track"), "value": old_dat["le_faudio"], "options": [{ "id": 0, "value": "en","show":_("en") }, { "id": 1, "value": "chn","show":_("chn") }]});
    channel_dat.push({ "id": "le_saudio", "type": "select", "name": _("Second Audio Track"), "value": old_dat["le_saudio"], "options": [{ "id": 0, "value": "en","show":_("en") }, { "id": 1, "value": "chn","show":_("chn") }]});
    channel_dat.push({ "id": "le_subtitle", "type": "select", "name": _("Subtitle Language"), "value": old_dat["le_subtitle"], "options": [{ "id": 0, "value": "en","show":_("en") }, { "id": 1, "value": "chn","show":_("chn") }]});
    channel_dat.push({ "id": "le_teletext", "type": "select", "name": _("Teletext Language"), "value": old_dat["le_teletext"], "options": [{ "id": 0, "value": "en","show":_("en") }, { "id": 1, "value": "chn","show":_("chn") }] });
    channel_dat.push({ "id": "le_fir", "type": "button", "name": _("Confirm") });
    return channel_dat;
};


Language.prototype.area_specialevent = function (event) {
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
Language.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_DO") {
            $("#le .test").html(name + " - " + this.page_itemvalue_get(name));
        }
    }

    if (cate == "DISPLAY") {
        if (kind == "DISPLAY_SELECT") {
            $("#le .test").html(name + " change " + this.page_itemvalue_get(name));
            if (name == "le_language") {   
                var a = this.page_itemvalue_get(name);
                var l_str = 'en';
                if (a == 1) {
                    l_str = "chn";
                }
                APP.get().setDomain(l_str);
                this.language_refresh();
            }
        }
    }

    
}

Language.prototype.onspecialkey = function (event) {
}

