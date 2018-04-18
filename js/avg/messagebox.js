function MessageBox(app, show) {
    page.call(this, app, "messagebox", show);
}
MessageBox.instance;
MessageBox.get = function () { return MessageBox.instance };

QEvent.MB_ = "MB_";
QEvent.MB_0 = "MB_0";
QEvent.MB_1 = "MB_1";
QEvent.MB_2 = "MB_2";

MessageBox.prototype = new page();

MessageBox.prototype.init = function () {
    MessageBox.instance = this;    
    this.choose_snd = new SSD(this, "mxc", { "value": 0, "dx": 3, "dy": 1, "status": "SHOW_ENABLE_YES" });
};

MessageBox.prototype.addbg = function () {
    $("#mxc .asw").html('<div style="background:green;width:400px;height:300px"></div>')
};

MessageBox.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.FT_UP:
        case KEYS.FT_DOWN:
        case KEYS.FT_LEFT:
        case KEYS.FT_RIGHT:
        case KEYS.FT_POWER:
        case KEYS.FT_ENTER:
        case KEYS.FT_MENU: {            
        } break;
    }
}

MessageBox.prototype.appear = function () {

};
MessageBox.prototype.disappear = function () {

};

MessageBox.prototype.set = function (o) {
    this.clear();
    this.cfg = o;
    //$("#mxc").css({ "top": "410px" });
    this.choose_dat = [];
    for(var i=0;i<o.choose.length;i++)
    {
        this.choose_dat.push({"id":"mxc_" + i, "type": "mlist", "show": o.choose[i]});
    }
    this.choose_snd.refresh(this.choose_dat);
    var top_val = 410 + (2 - this.choose_dat.length) * 40;
    $("#mxc .asw").css("paddingLeft",((480-this.choose_dat.length*120)/2) + "px");
};

MessageBox.prototype.area_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;

    if (cate == "OP_EVENT") {
        if (kind == "OP_OUT") {
            this.PageExit(1);
        }
    }
};


MessageBox.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_DO") {
            var id = parseInt(name.split("_")[1]);
            var name = name.split("_")[0];
            if ((this.cfg.refresh) && (this.cfg.refresh == 1))
                this.PageExit(0);
            else
                this.PageExit(1);
            var __e = new QEvent(QEvent.MB_ + id);
            this.dispatchEvent(__e);
        }
    }
};