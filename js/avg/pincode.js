
QEvent.PE_ERROR = "PE_ERROR";
QEvent.PE_CORRECT = "PE_CORRECT";


function Pincode(app, show) {
    page.call(this, app, "pincode", show);
}

Pincode.instance;
Pincode.get = function () { return Pincode.instance };


Pincode.PEI = "pei";
Pincode.PAGE_MAX = 1;
Pincode.prototype = new page();
Pincode.prototype.init = function () {
    Pincode.instance = this;
    this.input_snd = new SSD(this, Pincode.PEI, { "value": 0, "dx": 1, "dy": 1, "status": "SHOW_ENABLE_YES" });
}
Pincode.prototype.addbg = function () {
};

Pincode.prototype.set = function (o) {
    this.clear();
    this.try = 0;
    this.cfg = o;
    this.input_dat = [];
    this.input_dat.push({ "id": "pei_input", "type": "pininput", "name": "", "value": "****", "len": 4 });
    this.input_snd.refresh(this.input_dat);
}


Pincode.prototype.area_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;
    if (cate == "OP_EVENT") {
        if (kind == "OP_OUT") {
            console.log("Pincode ABORT");
            var __e = new QEvent(QEvent.PE_ERROR);
            __e.params = this.cfg.params;
            this.dispatchEvent(__e);
            this.PageExit(1);
        }
    }
}
Pincode.prototype.item_specialevent = function (event) {
    var cate = event.cate;
    var kind = event.kind;
    var value = event.value;
    var name = event.name;

    if (cate == "DISPLAY") {
        if (kind == "DISPLAY_SELECT") {
            this.pincode_value(value);
        }
        if (kind == "DISPLAY_NOSELECT") {
            //this.pincode_hide(value);
        }
    }
}

Pincode.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.CH_UP:
        case KEYS.UP:
        case KEYS.CH_DOWN:
        case KEYS.DOWN:
            {                
                var lastPage = APP.get().getPage("LastPage");
                if (lastPage && (lastPage.getName() === "player" || lastPage.getName() === "epg")) {                    
                    console.log("Pincode ABORT");
                    var __e = new QEvent(QEvent.PE_ERROR);
                    __e.params = this.cfg.params;
                    this.dispatchEvent(__e);
                    this.PageExit(0);
                    lastPage.dispatchEvent(event);
                }
            }
            break;
    }
}

Pincode.prototype.CheckPincode = function () {
    $(".pincode_value").html("****");
    var value = this.page_itemvalue_get("pei_input");
    if ((value == "1234")) {
        this.PageExit(1);
        var __e = new QEvent(QEvent.PE_CORRECT);
        __e.params = this.cfg.params;
        this.dispatchEvent(__e);

    }
    else {
        this.try++;
        $("#pe .mx_context").html(PE_PINCODE_ERROR_str + this.try + PE_PINCODE_TIME_str);
        this.page_itemvalue_clean("pei_input");
        if (3 > 0 && this.try >= 3) {
            this.PageExit(1);
            this.MB_Retry();
        }
    }
    clearTimeout(this.t_check);
}

Pincode.CkPincode = function () {
    Pincode.get().CheckPincode();
}






Pincode.prototype.pincode_value = function (value) {
    if (value == "") {
        //
        return;
    }

    clearTimeout(this.t_check);
    var len = value.toString().length;
    if (len == 4) {
        //$(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ")").css({ "border-color": "red" });
        //$(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ") .pe_input_text").html("*"); 
        this.t_check = setTimeout(Pincode.CkPincode, 500);
    }
    else {
        //$(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ")").css({ "border-color": "red" });
        //$(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ") .pe_input_text").html(value.toString()[len - 1]);

    }
}

Pincode.prototype.pincode_hide = function (value) {
    var len = value.toString().length;
    $(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ")").css({ "border-color": "black" });
    $(".pei_" + this.len_max + "input_area:eq(" + (len - 1) + ") .pe_input_text").html("*");

}


Pincode.prototype.retry = function () {
    this.try = 0;
    $("#pe .mx_context").html("");
    this.selectPage("pincode", 1)
}

Pincode.prototype.untry = function () {    
    console.log("Pincode ABORT");
    var __e = new QEvent(QEvent.PE_ERROR);
    __e.params = this.cfg.params;
    this.dispatchEvent(__e);
    this.MB_NoPower();
}

Pincode.prototype.MB_NoPower = function () {
    var o = {};
    o.title_str = "Title Name";
    o.context_str = "No Power";
    o.defchoose = 0;
    o.dispear = 0;
    o.choose = new Array();
    o.choose.push("Confirm");
    //o.choose.push("Cancel");
    $("#mx .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    MessageBox.get().set(o);
    this.selectPage("messagebox", 1)
}

Pincode.prototype.MB_Retry = function () {
    var o = {};
    o.title_str = "Title Name";
    o.context_str = "Are you sure to Retry?";
    o.defchoose = 0;
    o.dispear = 0;
    o.choose = new Array();
    o.choose.push("Yes");
    o.choose.push("No");
    //o.choose.push("Cancel");
    $("#mx .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    MessageBox.get().set(o);
    MessageBox.get().addEventListener(QEvent.MB_0, this, this.retry);
    MessageBox.get().addEventListener(QEvent.MB_1, this, this.untry);
    this.selectPage("messagebox", 1)
}