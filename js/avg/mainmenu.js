function MainMenu(app, show) {
    page.call(this, app, "mainmenu", show);
}
MainMenu.MUF = "muf";
MainMenu.MUS = "mus";
MainMenu.prototype = new page();
MainMenu.prototype.appear = function () { }
MainMenu.prototype.disappear = function () { }

MainMenu.prototype.setfirstdata = function () {
    var first_cfg = new Array();
    var menu_cfg = { "id": "muf_menu", "type": "menu", "name": "muf_menu", "options": [] };
    menu_cfg.options.push({ "id": "installation", "img": "img/0.png" });
    menu_cfg.options.push({ "id": "channel_edit", "img": "img/1.png" });
    menu_cfg.options.push({ "id": "tools", "img": "img/2.png" });
    menu_cfg.options.push({ "id": "system_settings", "img": "img/3.png" });
    menu_cfg.options.push({ "id": "media_center", "img": "img/4.png" });
    first_cfg.push(menu_cfg);
    return first_cfg;
}

MainMenu.prototype.setseconddata = function () {
    var second_dat = new Array();
    var second_0_dat = {
        "name": _("Installation"), "son": [{ "id": "programsearch", "type": "list", "show": [{ "class": "name", "text": _("Terrestrial Search DVB_T/T2") }], "son": [] }]
    };
    var second_1_dat = {
        "name": _("Channel Edit"), "son": [{ "id": "tv_editor", "type": "list", "show": [{ "class": "name", "text": _("TV Channel List") }], "son": [] },
        { "id": "radio_editor", "type": "list", "show": [{ "class": "name", "text": _("Radio Channel List") }], "son": [] },
        { "id": "epg", "type": "list", "show": [{ "class": "name", "text": _("EPG") }], "son": [] }]
    };
    var second_2_dat = {
        "name": _("Tools"), "son": [{ "id": "language", "type": "list", "show": [{ "class": "name", "text": _("Language") }], "son": [] },
        { "id": "time", "type": "list", "show": [{ "class": "name", "text": _("Time") }], "son": [] },
        { "id": "tv_Setting", "type": "list", "show": [{ "class": "name", "text": _("TV Setting") }], "son": [] },
        { "id": "change_password", "type": "list", "show": [{ "class": "name", "text": _("Change Password") }], "son": [] }]
    };
    var third_3_dat = {
        "name": _("CAS"), "son": [{ "id": "email", "type": "list", "show": [{ "class": "name", "text": _("Email") }], "son": [] },
        { "id": "password_modify", "type": "list", "show": [{ "class": "name", "text": _("Password Modify") }], "son": [] },
        { "id": "entitlement", "type": "list", "show": [{ "class": "name", "text": _("Entitlement") }], "son": [] },
        { "id": "smc_info", "type": "list", "show": [{ "class": "name", "text": _("SMC Info") }], "son": [] }]
    };
    var second_3_dat = {
        "name": _("System Settings"), "son": [{ "id": "info", "type": "list", "show": [{ "class": "name", "text": _("Information") }], "son": [] },
        { "id": "ca", "type": "list", "show": [{ "class": "name", "text": _("Conditional Access") }], "son": third_3_dat },
        { "id": "timer_setting", "type": "list", "show": [{ "class": "name", "text": _("Timer Setting") }], "son": [] },
        { "id": "osdsetting", "type": "list", "show": [{ "class": "name", "text": _("OSD Setting") }], "son": [] }]
    };
    var second_4_dat = {
        "name": _("Media Center"), "son": [{ "id": "pic", "type": "list", "show": [{ "class": "name", "text": _("Picture") }], "son": [] },
        { "id": "record", "type": "list", "show": [{ "class": "name", "text": _("Records") }], "son": [] },
        { "id": "recordconfig", "type": "list", "show": [{ "class": "name", "text": _("Records Configuration") }], "son": [] },
        { "id": "hdd_info", "type": "list", "show": [{ "class": "name", "text": _("HDD Information") }], "son": [] },
        { "id": "recordmanagement", "type": "list", "show": [{ "class": "name", "text": _("Records Management") }], "son": [] }]
    };
    second_dat.push(second_0_dat);
    second_dat.push(second_1_dat);
    second_dat.push(second_2_dat);
    second_dat.push(second_3_dat);
    second_dat.push(second_4_dat);

    return second_dat;
}


MainMenu.prototype.data_refresh = function () {       
    this.second_cfg = this.setseconddata();
    this.deepout();
};

MainMenu.prototype.init = function () {
    this.isdebug = true;
    this.deep = 0;
    this.choose = [0, 0, 0];
    this.first_cfg = this.setfirstdata();
    this.second_cfg = this.setseconddata();
    this.fir_snd = new SSD(this, MainMenu.MUF, { "value": 0, "dx": 1, "dy": 1, "status": "SHOW_ENABLE_YES" }).refresh(this.first_cfg);
    this.sec_snd = new SSD(this, MainMenu.MUS, { "value": 0, "dx": 1, "dy": 4, "status": "SHOW_ENABLE_YES" });
};

MainMenu.prototype.addbg = function () {
    $("#muf .abg").html('<div class="left_arr"></div><div class="center"></div><div class="right_arr"></div><div class="tail"></div>');
    $("#mus .abg").html('<div class="title"></div><div class="hor_line"></div>');
};

MainMenu.prototype.deepin = function () {
    this.deep = 1;
    this.third_dat = this.sec_dat.son[this.choose[1]].son
    $("#mus .title").html(this.third_dat.name);
    this.sec_snd.refresh(this.third_dat.son);
};

MainMenu.prototype.deepout = function () {
    this.deep = 0;
    this.sec_dat = this.second_cfg[this.choose[0]];
    $("#mus .title").html(this.sec_dat.name);
    this.sec_snd.refresh(this.sec_dat.son, this.choose[1]);
};

MainMenu.prototype.area_specialevent = function (event) {
    if ((event.cate == "OP_EVENT") && (event.kind == "OP_OUT") && (event.name == MainMenu.MUS)) {
        if (this.deep == 1) { this.deepout(); }
        else { alert("exit"); }
    }
    if ((event.cate == "DISPLAY") && (event.kind == "DISPLAY_SELECT") && (event.name == MainMenu.MUS)) {
        if (!isNaN(event.value)) { this.choose[this.deep + 1] = event.value; }
    }
};

MainMenu.prototype.item_specialevent = function (event) {
    if ((event.cate == "DISPLAY") && (event.name == "muf_menu")) {
        switch (event.kind) {
            case "DISPLAY_SELECT":
            case "DISPLAY_SHOW": {
                $("#" + event.name).CancelValue(this.choose[0]);
                this.choose[0] = event.value;
                $("#" + event.name).SetValue(this.choose[0]);
                this.deepout();
            } break;
            default: { } break;
        }
    }
    if (event.cate == "OP_EVENT") {
        if (event.kind == "OP_DO") {
            if ((this.sec_dat.son[this.choose[1]].son.son) && (this.sec_dat.son[this.choose[1]].son.son.length > 0) && (this.deep == 0)) { this.deepin(); }
            else {
                if (event.name == "radio_editor")
                    event.name = "tv_editor";
                this.selectPage(event.name, 0);
            }
        }
    }
};

MainMenu.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.MENU: {
            //this.PageExit(1);
        } break;
    }
};
