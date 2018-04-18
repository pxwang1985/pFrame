function Welcome(app, show) {
    page.call(this, app, "welcome", show);
}

Welcome.WEC = "wec";
Welcome.PAGE_MAX = 7;
Welcome.prototype = new page();

Welcome.prototype.init_data = function () {
    var lan = this.l;
    var lan_id = 0;
    if (lan == "chn") { lan_id = 1; }
    var data_set = {};
    data_set["wec"] = 0;
    data_set["we_mlanguage"] = lan_id;
    data_set["we_apower"] = 0;
    data_set["we_fch"] = 1;
    data_set["we_mfreq"] = 762000;

    return data_set;
};

Welcome.prototype.init = function () {
    var old_dat = this.get_data();
    //this._power = true;
    this.channel_snd = new SSD(this, Welcome.WEC, { "value": old_dat["wec"], "dx": 1, "dy": Welcome.PAGE_MAX, "status": "SHOW_ENABLE_YES" });
    this.data_refresh(1);
};


Welcome.prototype.data_refresh = function () {
    this.channel_dat = this.setchannel();
    this.channel_snd.refresh(this.channel_dat);

};




Welcome.prototype.addbg = function () {
    var str = '<div class="heads"><div class="title">' + _("Welcome") + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div><div class="tail"></div>';
    $("#we .pbg").html(str);
};

Welcome.prototype.setchannel = function () {
    var channel_dat = new Array();
    var old_dat = this.get_data();
    var lan = this.l;
    var lan_id = 0;
    if (lan == "chn") { lan_id = 1; }
    channel_dat.push({ "id": "we_mlanguage", "type": "select", "name": _("Menu Language"), "value": lan_id, "options": [{ "id": 0, "value": "en", "show": _("en") }, { "id": 1, "value": "chn", "show": _("chn") }] });
    channel_dat.push({ "id": "we_apower", "type": "select", "name": _("Antenna Power"), "value": old_dat["we_apower"], "options": [{ "id": 0, "value": "OFF", "show": _("OFF") }, { "id": 1, "value": "ON", "show": _("ON") }] });
    channel_dat.push({ "id": "we_fch", "type": "select", "name": _("Frequency Channel"), "value": old_dat["we_fch"], "options": [{ "id": 0, "value": "OFF", "show": _("OFF") }, { "id": 1, "value": "ON", "show": _("ON") }] });
    channel_dat.push({ "id": "we_mfreq", "type": "input", "name": _("Frequency"), "value": old_dat["we_mfreq"], "format": "num", "len": 6 });
    channel_dat.push({ "id": "we_fir", "type": "button", "name": _("Confirm") });
    return channel_dat;
};


Welcome.prototype.area_specialevent = function (event) {
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
Welcome.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_DO") {
            $("#we .test").html(name + " - " + this.page_itemvalue_get(name));
            if (name == "we_fir") {
                this.PageExit(1);
                $("#st .psw").html("");
                var event = { "page": this.getName(), "action": "search", "params": {"do":"start"} };			
                Control.get().Do(event);
                APP.get().APPSelect("searchresult", 0);
            }
        }
    }

    if (cate == "DISPLAY") {
        if (kind == "DISPLAY_SELECT") {
            $("#we .test").html(name + " change " + this.page_itemvalue_get(name));
            if (name == "we_mlanguage") {
                var a = this.page_itemvalue_get(name);
                var l_str = 'en';
                if (a == 1) {
                    l_str = "chn";
                }
                console.log("set", a, l_str);
                APP.get().setDomain(l_str);
                this.language_refresh();
            }
        }
    }
}

Welcome.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.NUM0: {
            this.IPClose();
        } break;
    }
}
/*
Welcome.prototype.IPClose = function () {
    var o = {};
    o.title_str = "Title Name";
    o.context_str = "Are you sure to Exit?";
    o.defchoose = 0;
    o.dispear = 0;
    o.choose = new Array();
    o.choose.push("Yes");
    o.choose.push("No");
    //o.choose.push("Cancel");
    $("#mx .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    MessageBox.get().set(o);
    this.selectPage("messagebox", 1)
}
*/

