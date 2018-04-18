$.extend({
    inc: function (now, add, max) {
        return (now + add) % max;
    },
    dec: function (now, sub, max) {
        return (now + max - (sub % max)) % max;
    },
    pxdebug: function (name, str) {
        console.log(name, str);
    }
})

function Increase(now, max) {
    return $.inc(parseInt(now), 1, parseInt(max));
}

function Decrease(now, max) {
    return $.dec(parseInt(now), 1, parseInt(max));
}

function GoUp(dx, cur, total) {
    if (total == 0) {
        return 0;
    }
    if (cur >= dx) {
        cur = cur - dx;
    }
    return cur;
}

function GoDown(dx, cur, total) {
    if (total == 0) {
        return 0;
    }
    cur = cur + dx;
    if (cur >= total) {
        cur = total - 1;
    }
    return cur;
}

function GoLeft(dx, cur, total) {
    if (total == 0) {
        return 0;
    }
    if (cur % dx == 0) {
        cur = cur + dx;
        if (cur > (total - 1)) {
            cur = total;
        }
    }
    cur--;
    return cur;
}

function GoRight(dx, cur, total) {
    if (total == 0) {
        return 0;
    }
    if (cur % dx == dx - 1) {
        cur = cur - dx + 1;
    } else if (cur == total - 1) {
        cur = cur - (cur % dx);
    } else {
        cur++;
    }
    return cur;
}

function pxFrame() { }
pxFrame.A_SW = " .asw";
pxFrame.L_SW = ".lsw";
pxFrame.Page = "Page";
pxFrame.CurPage = "CurPage";
pxFrame.LastPage = "LastPage";
pxFrame.AEVENT = "AEVENT";
pxFrame.IEVENT = "IEVENT";

pxFrame.C0 = "rgba(0,0,0,0)";
pxFrame.C1 = "black";
pxFrame.C2 = "white";
pxFrame.C3 = "yellow";
pxFrame.C4 = "#004f80";
pxFrame.C5 = "#002740";
pxFrame.C6 = "#00afd5";
pxFrame.C7 = "#e46900";
pxFrame.C8 = "#e4b600";
pxFrame.C9 = "#0177bf";
pxFrame.N0 = "color";
pxFrame.N1 = "border-color";
pxFrame.N2 = "background-color";

pxFrame.M0 = { "margin-top": "50px", "margin-left": "45px", "width": "100px", "height": "100px" };
pxFrame.M1 = { "margin-top": "0px", "margin-left": "20px", "width": "150px", "height": "150px" };
pxFrame.N0 = { "border-color": pxFrame.C0 };
pxFrame.N1 = { "background-color": pxFrame.C0 };
pxFrame.N2 = { "background-color": pxFrame.C2 };
pxFrame.N3 = { "background-color": pxFrame.C4 };
pxFrame.N4 = { "color": pxFrame.C2, "background-color": pxFrame.C0 };
pxFrame.N5 = { "color": pxFrame.C1, "border-color": pxFrame.C1 };
pxFrame.F0 = { "color": pxFrame.C5 };
pxFrame.F1 = { "color": pxFrame.C1, "background-color": pxFrame.C6 };
pxFrame.F2 = { "color": pxFrame.C2 };
pxFrame.F3 = { "background-color": pxFrame.C7 };
pxFrame.F4 = { "color": pxFrame.C7, "border-color": pxFrame.C7 };
pxFrame.F5 = { "color": pxFrame.C1, "border-color": pxFrame.C1 };
pxFrame.F6 = { "border-color": pxFrame.C7 };
pxFrame.F7 = { "color": pxFrame.C2, "background-color": pxFrame.C1 };
pxFrame.I0 = { "color": pxFrame.C2, "background-color": pxFrame.C3 };
pxFrame.A0 = { "color": pxFrame.C1, "background-color": pxFrame.C8 };
pxFrame.A1 = { "background-color": pxFrame.C9 };
pxFrame.A2 = { "border-color": pxFrame.C9 };
pxFrame.V0 = { "color": pxFrame.C1, "border-color": pxFrame.C1 };
pxFrame.V1 = { "color": pxFrame.C7, "border-color": pxFrame.C7 };

pxFrame.DOM_STATUS = "DOM"
pxFrame.DOM_BUILD = "DOM_BUILD";
pxFrame.DOM_CREATE = "DOM_CREATE";
pxFrame.DISPLAY_STATUS = "DISPLAY";
pxFrame.DISPLAY_HIDE = "DISPLAY_HIDE";
pxFrame.DISPLAY_SHOW = "DISPLAY_SHOW";
pxFrame.DISPLAY_SELECT = "DISPLAY_SELECT";
pxFrame.DISPLAY_NOSELECT = "DISPLAY_NOSELECT";
pxFrame.DISPLAY_ACTIVE = "DISPLAY_ACTIVE";
pxFrame.DISPLAY_FOCUSIN = "DISPLAY_FOCUSIN";
pxFrame.DISPLAY_SELECTBACK = "DISPLAY_SELECTBACK";
pxFrame.CONTROL_STATUS = "CONTROL";
pxFrame.CONTROL_DISABLE = "CONTROL_DISABLE";
pxFrame.CONTROL_ENABLE = "CONTROL_ENABLE";
pxFrame.CONTROL_FOCUSIN = "FOCUS_IN";
pxFrame.SELECT_STATUS = "SELECT";
pxFrame.SELECT_NO = "SELECT_NO";
pxFrame.SELECT_YES = "SELECT_YES";
pxFrame.OP_EVENT = "OP_EVENT";
pxFrame.OP_CHANEL_CHANGE = "OP_CHANEL_CHANGE";
pxFrame.OP_CHANEL_NOCHANGE = "OP_CHANEL_NOCHANGE";
pxFrame.OP_DO = "OP_DO";
pxFrame.OP_ENTER = "OP_ENTER";
pxFrame.OP_EXIT = "OP_EXIT";
pxFrame.OP_OUT = "OP_OUT";
pxFrame.OP_OUT_UP = "OP_OUT_UP";
pxFrame.OP_OUT_DOWN = "OP_OUT_DOWN";
pxFrame.OP_OUT_LEFT = "OP_OUT_LEFT";
pxFrame.OP_OUT_RIGHT = "OP_OUT_RIGHT";

pxFrame.OP_RED = "OP_RED";
pxFrame.OP_YELLOW = "OP_YELLOW";
pxFrame.OP_BLUE = "OP_BLUE";
pxFrame.OP_GREEN = "OP_GREEN";

pxFrame.EVENT = "KEVENT"

pxFrame.str_page = "page";
pxFrame.str_area = "area";
pxFrame.str_name = "name";
pxFrame.str_type = "type";
pxFrame.str_value = "value";
pxFrame.str_display = "display";
pxFrame.str_control = "control";
pxFrame.str_select = "select";
pxFrame.Flag = String.fromCharCode(35);

$.fn.Normal = function (id) {
    var type = '';
    if (!isNaN(id)) {
        type = $(this).find(".item:eq(" + id + ")").attr("ptype");
    }
    switch (type) {
        case "list": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N4);
            if (($(this).find(".text:eq(" + id + ")").length > 0) && ($(this).find(".text:eq(" + id + ")").find("pscroll"))) {
                var str = $(this).find(".text:eq(" + id + ")").find(".pscroll").html();
                $(this).find(".text:eq(" + id + ")").html(str);
                str = null;
            }
        } break;
        case "mlist":
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F7);
            break;
        case "flist": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F0);
        } break;
        case "mclist": {
            $(this).find(".item:eq(" + id + ") .text").css(pxFrame.N2);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N0);
        } break;
        case "vlist": {
            $(this).find(".item:eq(" + id + ") .text").css(pxFrame.N3);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N0);
        } break;
        case "tclist": {
            $(this).find(".item:eq(" + id + ") .item_check").css(pxFrame.N5);
            $(this).find(".item:eq(" + id + ") .item_area").css(pxFrame.N5);
            $(this).find(".item:eq(" + id + ") .time_area").css(pxFrame.N5);
        } break;
        case "chlist": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N1);
        } break;
        case "select":
        case "input":
        case "pincode": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N4);
            $(this).find(".item:eq(" + id + ") .item_area").css(pxFrame.N5);
        } break;
        case "checkbox": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N4);
            $(this).find(".item:eq(" + id + ") .item_carea").css(pxFrame.N5);
        } break;
        case "button": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N4);
        } break;
    }
};

$.fn.Select = function (id) {
    var type = '';
    if (!isNaN(id)) { type = $(this).find(".item:eq(" + id + ")").attr("ptype"); }
    switch (type) {
        case "list": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F1);
            if ($(this).find(".text:eq(" + id + ")").length > 0) {
                var scrollWidth = $(this).find(".text:eq(" + id + ")").get(0).scrollWidth;
                var Width = $(this).find(".text:eq(" + id + ")").width();
                if (scrollWidth > Width) {
                    var a = Width - scrollWidth - 30;
                    var times = (0 - a) * 12;
                    var str = $(this).find(".text:eq(" + id + ")").html();
                    $(this).find(".text:eq(" + id + ")").html('<div class="pscroll">' + str + '</div>');
                    $(this).find(".text:eq(" + id + ")").find(".pscroll").animate({ left: a + 'px' }, times, function () {
                        $(this).css({ left: '0px' }); var str = $(this).html(); $(this).parent().html(str);
                        a = null, str = null, times = null;
                    });
                }
                scrollWidth = null;
                Width = null
            }
        } break;
        case "mlist":
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F1);
            break;
        case "flist": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F2);
        } break;
        case "mclist": {
            $(this).find(".item:eq(" + id + ") .text").css(pxFrame.F3);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F6);
        } break;
        case "vlist": {
            $(this).find(".item:eq(" + id + ") .text").css(pxFrame.F3);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F6);
        } break;
        case "pininput": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F2);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.N1);
        } break;

        case "tclist": {
            $(this).find(".item:eq(" + id + ") .item_check").css(pxFrame.F5);
            $(this).find(".item:eq(" + id + ") .item_area").css(pxFrame.F5);
            $(this).find(".item:eq(" + id + ") .time_area").css(pxFrame.F5);
            var a = $(this).find(".item:eq(" + id + ")").attr("pselect");
            switch (parseInt(a)) {
                case 0: { $(this).find(".item:eq(" + id + ") .item_check").css(pxFrame.F4); } break;
                case 1: { $(this).find(".item:eq(" + id + ") .item_area").css(pxFrame.F4); } break;
                case 2: { $(this).find(".item:eq(" + id + ") .time_area:eq(0)").css(pxFrame.F4); } break;
                case 3: { $(this).find(".item:eq(" + id + ") .time_area:eq(1)").css(pxFrame.F4); } break;
            }
        } break;
        case "chlist": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F3);
        } break;
        case "select":
        case "input":
        case "pincode": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F1);
            $(this).find(".item:eq(" + id + ") .item_area").css(pxFrame.F4);
        } break;
        case "checkbox": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F1);
            $(this).find(".item:eq(" + id + ") .item_carea").css(pxFrame.F4);
        } break;
        case "button": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.F1);
        } break;
    }
};

$.fn.SetList = function (dx, dy, index) {
    var type = "GRID";
    if (dx == 1) { if (dy == 1) { type = "SINGAL"; } else { type = "ver"; } }
    if (dy == 1) { if (dx == 1) { type = "SINGAL"; } else { type = "hor"; } }
    var keyword = "", dir = 0, one_r = 0, start = 0, max_item = dx * dy;
    if (type == "hor") { keyword = "left"; dir = $(this).parent().width(); }
    else if (type == "ver") { keyword = "top"; dir = $(this).parent().height(); }
    else if (type == "GRID") { keyword = "top"; dir = $(this).parent().height(); }
    else { return; }
    one_r = parseInt(dir / max_item);
    max_item = max_item - 1;
    var start_index = -(parseInt(this.find(pxFrame.L_SW).css("top")) / one_r);
    var end_index = start_index + max_item;
    if (index < start_index) { this.find(pxFrame.L_SW).css(keyword, (-index * one_r + start) + "px"); }
    else if (index > end_index) { this.find(pxFrame.L_SW).css(keyword, (-(index - max_item) * one_r + start) + "px"); }
};

$.fn.FocusIn = function (id) {
    var type = '';
    if (!isNaN(id)) type = $(this).find(".item:eq(" + id + ")").attr("ptype");
    switch (type) {
        case "button": {
            $(this).css(pxFrame.I0);
        } break;
    }
};

$.fn.Active = function (id) {
    var type = '';
    if (!isNaN(id)) type = $(this).find(".item:eq(" + id + ")").attr("ptype");
    switch (type) {
        case "chlist":
        case "list": {
            $(this).find(".item:eq(" + id + ")").css(pxFrame.A0);
            if (($(this).find(".text:eq(" + id + ")").length > 0) && ($(this).find(".text:eq(" + id + ")").find("pscroll"))) {
                var str = $(this).find(".text:eq(" + id + ")").find(".pscroll").html();
                $(this).find(".text:eq(" + id + ")").html(str);
            }
        } break;
        case "mclist":
            {
                $(this).find(".item:eq(" + id + ") .text").css(pxFrame.A1);
                $(this).find(".item:eq(" + id + ")").css(pxFrame.A2);
            } break;
        case "vlist": {
            $(this).find(".item:eq(" + id + ") .text").css(pxFrame.A1);
            $(this).find(".item:eq(" + id + ")").css(pxFrame.A1);
        } break;
    }

};

$.fn.SetShow = function (value) {
    switch ($(this).attr("ptype")) {
        case "select": {
            $(this).find(".opt").hide();
            $(this).find(".opt:eq(" + parseInt(value) + ")").show();
        } break;
        case "input": {
            $(this).find(".item_value").html(value);
        } break;
        case "pincode": {
            var len = value.toString().length;
            var str_val = '';
            for (var i = 0; i < len; i++) { str_val += "*"; }
            value = str_val;
            $(this).find(".item_value").html(value);
        } break;
        case "checkbox": {
            if (value) $(this).find(".item_carea").html("&radic;"); else $(this).find(".item_carea").html("");
        } break;
        case "tclist": {
            var a = value.split("/");
            var b = a[1].split("-");
            $(this).attr("pselect", parseInt(a[0]));
            if (b[0] == "1") $(this).find(".item_check").html("&radic;"); else $(this).find(".item_check").html("");
            $(this).find(".item_value:eq(0)").html(b[1]);
            $(this).find(".item_value:eq(1)").html(b[2]);
            $(this).find(".item_value:eq(2)").html(b[3]);
        } break;
    }
};

$.fn.CancelValue = function (value) {
    switch ($(this).attr("ptype")) {
        case "menu": {
            $(this).find(".list_icon:eq(" + value + ")").css(pxFrame.M0);
            $(this).find(".list_icon:eq(" + value + ")").html('<img src="img/' + value + '.png" onerror="nofind();" class="in_pic">');
        } break;
    }
}

$.fn.SetValue = function (value) {
    switch ($(this).attr("ptype")) {
        case "menu": {
            var str = '<img src="img/' + value + '_focus.png" onerror="nofind();" class="in_pic">';
            $(this).find(".list_icon:eq(" + value + ")").css(pxFrame.M1);
            $(this).find(".list_icon:eq(" + value + ")").html(str);
            str = '';
        } break;
        case "select": {
            $(this).find(".opt").hide();
            $(this).find(".opt:eq(" + parseInt(value) + ")").show();
        } break;
        case "input": {
            $(this).find(".item_value").html(value);
        } break;
        case "pininput": {
            var len = value.toString().length;
            var str_val = '';
            for (var i = 0; i < len - 1; i++) {
                str_val += "*";
            }
            str_val += value[len - 1];
            value = str_val;
            $(this).find(".pincode_value").html(value);
        } break;
        case "pincode": {
            var len = value.toString().length;
            var str_val = '';
            for (var i = 0; i < len; i++) { str_val += "*"; }
            value = str_val;
            $(this).find(".item_value").html(value);
        } break;
        case "checkbox": {
            if (value) $(this).find(".item_carea").html("&radic;"); else $(this).find(".item_carea").html("");
        } break;
        case "tclist": {
            var a = value.split("/");
            var b = a[1].split("-");
            $(this).find(".item_check").css(pxFrame.V0);
            $(this).find(".item_area").css(pxFrame.V0);
            $(this).find(".time_area").css(pxFrame.V0);
            switch (parseInt(a)) {
                case 0: { $(this).find(".item_check").css(pxFrame.V1); } break;
                case 1: { $(this).find(".item_area").css(pxFrame.V1); } break;
                case 2: { $(this).find(".time_area:eq(0)").css(pxFrame.V1); } break;
                case 3: { $(this).find(".time_area:eq(1)").css(pxFrame.V1); } break;
            }
            $(this).attr("pselect", parseInt(a[0]));
            if (b[0] == "1") $(this).find(".item_check").html("&radic;"); else $(this).find(".item_check").html("");
            $(this).find(".item_value:eq(0)").html(b[1]);
            $(this).find(".item_value:eq(1)").html(b[2]);
            $(this).find(".item_value:eq(2)").html(b[3]);
        } break;
    }
};


function ArrayMap() {
    this.clear();
}

ArrayMap.prototype.clear = function () {
    this._arrKeys = [];
    this._arrValues = {};
};
ArrayMap.prototype.add = function (name, value) {
    if (this._arrValues[name] && this._arrValues[name].destory)
        this._arrValues[name].destory();
    delete (this._arrValues[name]);
    this._arrValues[name] = value;
    for (var __i = 0, __len = this._arrKeys.length; __i < __len; __i++) {
        if (this._arrKeys[__i] == name) {
            return;
        }
    }
    this._arrKeys.push(name);
};
ArrayMap.prototype.getLength = function () {
    return this._arrKeys.length;
};
ArrayMap.prototype.getKeys = function () {
    return this._arrKeys;
};
ArrayMap.prototype.getValue = function (Key) {
    return this._arrValues[Key];
};

function MenuTree() {
    this.clear();
}
MenuTree.prototype.clear = function () {
    this._tree = [];
};
MenuTree.prototype.add = function (value) {
    this._tree.push(value);
};
MenuTree.prototype.del = function () {
    this._tree.pop();
};
MenuTree.prototype.now = function () {
    return this._tree[this._tree.length - 1];
};
MenuTree.prototype.last = function () {
    if (this._tree.length > 1)
        return this._tree[this._tree.length - 2];
    else
        return "";
};

function APP() {
    this.clear();
    this.init();
    this.view_addBg();
}

APP.instance = null;


function _(msgid) {
    return APP.get().getstr(msgid);
};


APP.get = function () {
    if (!APP.instance) APP.instance = new APP();
    return APP.instance;
};

APP.prototype.clear = function () {
    this._pagemap = new ArrayMap();
    this._menutree = new MenuTree();
    this._curpage = null;
};

APP.prototype.init = function () {
    this.gt = new Gettext();
    this.l_id = 'chn';
};

APP.prototype.setDomain = function (lang) {
    this.l_id = lang;
    console.log("setDomain", this.l_id);
};

APP.prototype.getDomain = function () {
    return this.l_id;
};

APP.prototype.getstr = function (msgid) {
    return this.gt.dgettext(this.l_id, msgid);
};



APP.prototype.AppTimer = function () {
    Ts.get();
};
APP.prototype.onkey = function (code) {
    if (this._curpage) {
        var __e = new QEvent(QEvent.KEYPRESS);
        __e.code = code;
        this._curpage.dispatchEvent(__e);
        delete (__e);
        __e = null;
    }

};

APP.prototype.onkeyup = function (code) {
    if (this._curpage) {
        var __e = new QEvent(QEvent.KEYUP);
        __e.code = code;
        this._curpage.dispatchEvent(__e);
        delete (__e);
        __e = null;
    }
};

APP.prototype.add = function (name, obj) {
    this._pagemap.add(name, obj);
};

APP.prototype.getPage = function (key, name) {
    var page = null;
    switch (key) {
        case pxFrame.CurPage:
            {
                page = this._curpage;
            }
            break;
        case pxFrame.Page:
            {
                page = this._pagemap.getValue(name);
            }
            break;
        case pxFrame.LastPage:
            {
                page = this._pagemap.getValue(this._menutree.last());
            }
            break;
        default:
            { }
            break;
    }
    return page;
};

APP.prototype.APPCur = function () {
    return this.getPage(pxFrame.CurPage);
};

APP.prototype.APPGet = function (name) {
    return this.getPage(pxFrame.Page, name);
};

APP.prototype.BackToPlayer = function () {
    this._curpage = this._pagemap.getValue(this._menutree.now());
    while (this._curpage.getName() != "player") {
        this._curpage.disappear();
        this._curpage.page_hide();
        this._menutree.del();
        this._curpage = this._pagemap.getValue(this._menutree.now());
        this._curpage.back();
    }
};

APP.prototype.Select_Do = function (name, flag) {
    if (!this._pagemap.getValue(name)) {
        return;
    }
    if ((this._curpage) && (flag == 0)) {
        this._curpage.front();
    }
    this._menutree.add(name);
    this._curpage = this._pagemap.getValue(name);
    this._curpage.enter();
};


APP.prototype.InputPin = function (name, flag) {
    var o = {};
    o.title_str = "Input Password";
    o.context_str = "";
    o.params = { "name": name, "flag": flag };
    $("#pe .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    Pincode.get().set(o);
    Pincode.get().addEventListener(QEvent.PE_CORRECT, this, this.PincodeCorrect);
    this.Select_Do("pincode", 1)
}

APP.prototype.PincodeCorrect = function (event) {
    var params = event.params;
    this.Select_Do(params.name, params.flag);
}


APP.prototype.APPSelect = function (name, flag) {
    if (!this._pagemap.getValue(name)) {
        return;
    }
    var newpage = this._pagemap.getValue(name);
    if (newpage.getPower()) {
        this.InputPin(name, flag);
    }
    else {
        this.Select_Do(name, flag);
    }
};

APP.prototype.exit = function (name, flag) {
    this._curpage = this._pagemap.getValue(this._menutree.now());
    if (this._curpage.getName() == name) {
        this._menutree.del();
        this._curpage = this._pagemap.getValue(this._menutree.now());
        if (flag == 1) {
            this._curpage.back();
        }
    }
};

APP.prototype.view_addBg = function () { };

function page(name, show) {
    if (typeof EventDispatcher == 'undefined')
        throw new Error("EventDispatcher class is missing.");
    if (typeof name != 'undefined') {
        this.isdebug = false;
        this.clear();
        this._app = APP.get();
        this.l = this._app.getDomain();
        this._name = name;
        this._power = false;
        this.sn = this._name[0] + this._name[this._name.length - 1];
        this._app.add(this._name, this);
        this._focusitem = '';
        this.data_set = this.init_data();
        this.addbg();
        this.init();
        if ((name == "pincode") || (name == "messagebox"))
            this._power = false;
    }
    if (show == 1) {
        this.enter();
    }
}
page.prototype.getName = function () {
    return this._name;
}

page.prototype.getPower = function () {
    return this._power;
}


page.prototype.debug = function () {
    if (this.isdebug) {
        var s = "";
        for (var i = 0; i < arguments.length; i++) {
            s += arguments[i] + ",";
        }
        $.pxdebug("page:" + this._name, s);
    }
}

page.prototype.clear = function () {
    EventDispatcher.initialize(this);
    this.addEventListener(QEvent.KEYPRESS, this, this.onkey);
    this.addEventListener(QEvent.KEYUP, this, this.onkeyup);
    this.addEventListener(pxFrame.AEVENT, this, this.area_specialevent);
    this.addEventListener(pxFrame.IEVENT, this, this.item_specialevent);
    this._area = new ArrayMap();
    this._item = new ArrayMap();
}
page.prototype.init_data = function () { return {} };
page.prototype.get_data = function () { return this.data_set };


page.prototype.addbg = function () { };
page.prototype.data_refresh = function () { };
page.prototype.page_show = function () {
    if ($(pxFrame.Flag + this.sn).attr("class") == "spage") { $(pxFrame.Flag + this.sn).parent().parent().show(); }
    $(pxFrame.Flag + this.sn).show();
    if (this.l != this._app.getDomain()) {
        this.language_refresh();
    }
    this.reselect("enter");
}
page.prototype.language_refresh = function () {
    this.l = this._app.getDomain();
    this.addbg();
    this.data_refresh();
    Ts.rt();
};

page.prototype.page_hide = function () {
    $(pxFrame.Flag + this.sn).hide();
    if ($(pxFrame.Flag + this.sn).attr("class") == "spage") { $(pxFrame.Flag + this.sn).parent().parent().hide(); }
    this.reselect("exit");
}
page.prototype.selectPage = function (name, flag) {
    this._app.APPSelect(name, flag);
}
page.prototype.enter = function () {
    this.page_show();
    this.appear();
}

page.prototype.reselect = function (flag) {
    var __area = this._area.getKeys();
    var __that = this;
    var __enable_area = new Array();
    $.each(__area, function (i, item) {
        var __a_obj = __that._area.getValue(item);
        if (__a_obj.obj_is_enable()) {
            __enable_area.push(__a_obj);
        }
    });
    $.each(__enable_area, function (i, item) {
        var id = item.getValue();
        if ($(pxFrame.Flag + item._name + pxFrame.A_SW).find(".item:eq(" + id + ")").attr("ptype") == "list") {
            if (flag == "enter") { item.obj_doselect(); }
            else if (flag == "exit") { item.obj_noselect() }
        }
    });
    delete (__enable_area);
}

page.prototype.exit = function (flag) {
    this.disappear();
    this.page_hide();
    this._app.exit(this._name, flag);
}
page.prototype.front = function () {
    this.disappear();
    this.page_hide();
}
page.prototype.back = function () {
    this.page_show();
    this.appear();
}

page.prototype.area_add = function (obj) {
    this._area.add(obj.getName(), obj);
    obj.addEventListener(pxFrame.EVENT, this, this.area_event);
}
page.prototype.area_event = function (event) {
    var value = 0;
    event.type = pxFrame.AEVENT;
    if (!isNaN(event.value))
        value = event.value;
    if (event.cate == pxFrame.DISPLAY_STATUS) {
        switch (event.kind) {
            case "DISPLAY_SELECT": {
                var __a_obj = this._area.getValue(event.name);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).Select(value);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
                this.data_set[event.name] = value;
            } break;
            case "DISPLAY_SELECTBACK": {
                var __a_obj = this._area.getValue(event.name);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).Select(value);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_NOSELECT": {
                $(pxFrame.Flag + event.name + pxFrame.A_SW).Normal(value);
            } break;
            case "DISPLAY_ACTIVE": {
                var __a_obj = this._area.getValue(event.name);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).Active(value);
                $(pxFrame.Flag + event.name + pxFrame.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_SHOW": {
                var __a_obj = this._area.getValue(event.name);
                $(pxFrame.Flag + event.name).show();
                $(pxFrame.Flag + event.name + pxFrame.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_HIDE": {
                $(pxFrame.Flag + event.name).hide();
            } break;
        }
    }
    if (this._app.APPCur().getName() == this.getName()) {
        this.dispatchEvent(event);
    }
    delete (event);
    event = null;
}
page.prototype.item_add = function (obj) {
    if (obj.getName() == undefined) {
        return;
    }
    this._item.add(obj.getName(), obj);
    if (this._area.getValue(obj.getArea()))
        this._area.getValue(obj.getArea()).item_add(obj);
    obj.addEventListener(pxFrame.EVENT, this, this.item_event);
}
page.prototype.item_event = function (event) {
    switch (event.cate) {
        case pxFrame.OP_EVENT:
            {
                switch (event.kind) {
                    case pxFrame.OP_OUT:
                    case pxFrame.OP_OUT_UP:
                    case pxFrame.OP_OUT_DOWN:
                    case pxFrame.OP_OUT_LEFT:
                    case pxFrame.OP_OUT_RIGHT:
                    case pxFrame.OP_ENTER:
                    case pxFrame.OP_EXIT:
                        {
                            var name = event.name;
                            event.type = Area.MOVE;
                            if (event.kind == pxFrame.OP_ENTER) {
                                if (this._focusitem == '') this._focusitem = name;
                            } else if (event.kind == pxFrame.OP_EXIT) {
                                if (this._focusitem == name) this._focusitem = '';
                            }
                            this._area.getValue(this._item.getValue(name).getArea()).dispatchEvent(event);
                        }
                        break;
                    case pxFrame.OP_DO:
                    case pxFrame.OP_CHANEL_CHANGE:
                    case pxFrame.OP_CHANEL_NOCHANGE:
                    default:
                        {
                            event.type = pxFrame.IEVENT;
                            this.dispatchEvent(event);

                        }
                        break;
                }
            }
            break;
        default:
            {
                event.type = pxFrame.IEVENT;
                if (event.cate == "DISPLAY") {
                    if (event.kind == "DISPLAY_SHOW") {
                        $(pxFrame.Flag + event.name).SetShow(event.value);
                    }
                    if (event.kind == "DISPLAY_SELECT") {
                        $(pxFrame.Flag + event.name).SetValue(event.value);
                        this.data_set[event.name] = event.value;
                    }
                }
                this.dispatchEvent(event);
            }
            break;
    }
    delete (event);
    event = null;
}

page.prototype.getItems = function (name) { return this._item; }
page.prototype.page_itemvalue_get = function (name) { return this._item._arrValues[name].getValue(); }
page.prototype.page_itemvalue_clean = function (name) { return this._item._arrValues[name].obj_clean(); }

page.prototype.onkey = function (event) {
    if (this._focusitem != '') {
        this._item.getValue(this._focusitem).onspecialkey(event);
        return;
    }
    var __area = this._area.getKeys();
    var __that = this;
    var __enable_area = new Array();
    $.each(__area, function (i, item) {
        var __a_obj = __that._area.getValue(item);
        if (__a_obj.obj_is_enable()) {
            __enable_area.push(__a_obj);
        }
    });
    $.each(__enable_area, function (i, item) {
        item.dispatchEvent(event);
    });
    delete (__enable_area);
    this.onspecialkey(event);
}

page.prototype.onkeyup = function (event) {
    if (this._focusitem != '') {
        this._item.getValue(this._focusitem).onspecialkey(event);
        return;
    }
    this.onspecialkeyup(event);
}

page.prototype.PageExit = function (flag) {
    this.exit(flag);
}

page.prototype.init = function () { }
page.prototype.appear = function () { }
page.prototype.disappear = function () { }
page.prototype.onspecialkey = function (event) { }
page.prototype.onspecialkeyup = function (event) { }
page.prototype.area_specialevent = function (event) { }
page.prototype.item_specialevent = function (event) { }

function kEvent(name, itype, cate, kind, value) {
    QEvent.call(this, pxFrame.EVENT);
    if (typeof name != 'undefined') this.name = name;
    if (typeof itype != 'undefined') this.itype = itype;
    if (typeof cate != 'undefined') this.cate = cate;
    if (typeof kind != 'undefined') this.kind = kind;
    if (typeof value != 'undefined') this.value = value
}

function kobj(page, area, name, type, display, control, select) {
    if (typeof EventDispatcher == 'undefined') throw new Error("EventDispatcher class is missing.");
    EventDispatcher.initialize(this);
    this.addEventListener(QEvent.KEYPRESS, this, this.onkey);
    this._page = page;
    this._name = name;
    this._type = type;

    if ((typeof name != 'undefined') && (name != "")) {
        this.handle = $(pxFrame.Flag + name);
        this.handle.data(pxFrame.str_page, page._name);
        this.handle.data(pxFrame.str_area, area);
        this.handle.data(pxFrame.str_name, name);
        this.handle.data(pxFrame.str_type, type);
        this.handle.data(pxFrame.str_value, '');
        this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_HIDE);
        this.handle.data(pxFrame.str_control, pxFrame.CONTROL_DISABLE);
        this.handle.data(pxFrame.str_select, pxFrame.SELECT_NO);
    }
}

kobj.HORIZONTAL = "hor";
kobj.VERTICAL = "ver";
kobj.prototype.init = function () {
    this.self_init();
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DOM_STATUS, pxFrame.DOM_BUILD, this.handle.data(pxFrame.str_value)));
};
kobj.prototype.self_init = function () { };
kobj.prototype.getArea = function () { return this.handle.data(pxFrame.str_area); };
kobj.prototype.getName = function () { return this.handle.data(pxFrame.str_name); };
kobj.prototype.getControl = function () { return this.handle.data(pxFrame.str_control); };
kobj.prototype.obj_build = function () { this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DOM_STATUS, pxFrame.DOM_CREATE, 0)) }
kobj.prototype.obj_hide = function () {
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_HIDE);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_HIDE, 0))
}
kobj.prototype.obj_show = function () {
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_SHOW);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SHOW, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.obj_noselect = function () {
    this.handle.data(pxFrame.str_select, pxFrame.SELECT_NO);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_NOSELECT);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_NOSELECT, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.obj_doselect = function () {
    this.handle.data(pxFrame.str_select, pxFrame.SELECT_YES);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_SELECT);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SELECTBACK, this.handle.data(pxFrame.str_value)))
}

kobj.prototype.obj_doselect_act = function () {
    this.handle.data(pxFrame.str_select, pxFrame.SELECT_YES);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_SELECT);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SELECT, this.handle.data(pxFrame.str_value)))
}

kobj.prototype.obj_noactive = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_ENABLE);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_SELECT);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SELECTBACK, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.obj_active = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_DISABLE);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_ACTIVE);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_ACTIVE, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.obj_disable = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_DISABLE);
}
kobj.prototype.obj_enable = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_ENABLE);
}
kobj.prototype.obj_focusin = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_FOCUSIN);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_FOCUSIN);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_FOCUSIN, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.obj_focusout = function () {
    this.handle.data(pxFrame.str_control, pxFrame.CONTROL_ENABLE);
    this.handle.data(pxFrame.str_display, pxFrame.DISPLAY_SELECT);
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SELECT, this.handle.data(pxFrame.str_value)))
}
kobj.prototype.setValue = function (value) {
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_NOSELECT, this.handle.data(pxFrame.str_value)))
    this.handle.data(pxFrame.str_value, value);
    if (this.obj_is_enable()) {
        this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SELECT, this.handle.data(pxFrame.str_value)));
    }
    else if (this.obj_is_yes()) {
        this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_ACTIVE, this.handle.data(pxFrame.str_value)));
    }
    else {
        this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.DISPLAY_STATUS, pxFrame.DISPLAY_SHOW, this.handle.data(pxFrame.str_value)));
    }
}

kobj.prototype.getValue = function () {
    return this.handle.data(pxFrame.str_value);
}
kobj.prototype.setValue_Only = function (value) {
    this.handle.data(pxFrame.str_value, value);
}
kobj.prototype.obj_out_type = function (out_flag) {
    this.dispatchEvent(new kEvent(this._name, this._type, pxFrame.OP_EVENT, out_flag, 0))
}
kobj.prototype.obj_is_enable = function () {
    return this.handle.data(pxFrame.str_control) == pxFrame.CONTROL_ENABLE;
};

kobj.prototype.obj_is_yes = function () {
    return this.handle.data(pxFrame.str_select) == pxFrame.SELECT_YES;
};

kobj.prototype.obj_setselect = function (value) {
    this.handle.data(pxFrame.str_select, value);
}
kobj.prototype.getSelect = function () { return this.handle.data(pxFrame.str_select); };

kobj.prototype.destory = function () {
    this.term();
    this.termEventListener();

    delete (this._page);
    delete (this._name);
    delete (this._type);
}

kobj.prototype.obj_clean = function () {
};

kobj.prototype.onkey = function (event) { }
kobj.prototype.onspecialkey = function (event) { }
kobj.prototype.term = function () { }


Area.MOVE = "AREA_MOVE";
Area.DX = "dx";
Area.DY = "dy";

Area.SINGAL = "signal";
Area.ROW = "row";
Area.COL = "col";
Area.GRID = "grid";



function Area(page, name, display, control, select, cfg) {
    kobj.call(this, page, '', name, "area", display, control, select);
    this.cfg = cfg;
    if (typeof cfg != 'undefined') {
        if (typeof cfg["value"] != 'undefined') {
            this.setValue(parseInt(cfg["value"]))
        }
        if (typeof cfg[Area.DX] != 'undefined') {
            this._dx = parseInt(cfg[Area.DX])
        }
        if (typeof cfg[Area.DY] != 'undefined') {
            this._dy = parseInt(cfg[Area.DY])
        }

        this._atype = Area.GRID;
        if (this._dy == 1) {
            if (this._dx == 1) {
                this._atype = Area.SINGAL;
            } else {
                this._atype = Area.ROW;
            }
        }
        if (this._dx == 1) {
            if (this._dy == 1) {
                this._atype = Area.SINGAL;
            } else {
                this._atype = Area.COL;
            }
        }
    }
    this._items = new Array();
    if (typeof name != 'undefined') {
        this.init()
    }
    if (display == pxFrame.DISPLAY_SHOW) {
        this.obj_show()
    }
    else {
        this.obj_hide()
    }
    if (control == pxFrame.CONTROL_ENABLE) {
        this.obj_enable();
    }
    this.obj_setselect(select);
}
Area.prototype = new kobj();

Area.prototype.self_init = function () {
    this._page.area_add(this);
    this.addEventListener(Area.MOVE, this, this.move)
}

Area.prototype.term = function () {
    $.each(this._items, function (i, item) {
        item.destory();
    });
    delete (this._items);
    delete (this.cfg);
    delete (this._atype);
    delete (this._dx);
    delete (this._dy);
}
Area.prototype.item_add = function (item) {
    this._items.push(item)
}




Area.prototype.getItems = function () {
    return this._items;
}

Area.prototype.area_findfirst = function () {
    for (var i = 0; i < this._items.length; i++) {
        if (this._items[i].obj_is_enable()) {
            return i;
        }
    }
    return -1;
}

Area.prototype.area_findnext = function () {
    var start = this.getValue();
    var len = this._items.length;
    for (var i = 0; i < len; i++) {
        if (this._items[(start + i) % len].obj_is_enable()) {
            return (start + i) % len;
        }
    }
    return start;
}

Area.prototype.area_findprev = function () {
    var start = this.getValue();
    var len = this._items.length;
    for (var i = 0; i < len; i++) {
        if (this._items[(start - i + len) % len].obj_is_enable()) {
            return (start - i + len) % len;
        }
    }
    return start;
}
Area.prototype.move = function (event) {
    switch (event.kind) {
        case pxFrame.OP_OUT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case pxFrame.OP_EXIT:
            {
                this.obj_focusout();
            }
            break;
        case pxFrame.OP_ENTER:
            {
                this.obj_focusin();
            }
            break;
        default:
            {
                switch (this._atype) {
                    case Area.GRID:
                        {
                            this.move_grid(event.kind);
                        }
                        break;
                    case Area.ROW:
                        {
                            this.move_row(event.kind)
                        }
                        break;
                    case Area.COL:
                        {
                            this.move_col(event.kind);
                        }
                        break;
                    case Area.SINGAL:
                        {
                            this.move_singal(event.kind);
                        }
                        break;
                    default:
                        { }
                        break;
                }
            }
            break;
    }
}
Area.prototype.move_grid = function (flag) {
    switch (flag) {
        case pxFrame.OP_OUT_UP:
            {
                this.setValue(GoUp(this._dx, this.getValue(), this._items.length)); //pxwang
            }
            break;
        case pxFrame.OP_OUT_DOWN:
            {
                this.setValue(GoDown(this._dx, this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_LEFT:
            {
                this.setValue(GoLeft(this._dx, this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_RIGHT:
            {
                this.setValue(GoRight(this._dx, this.getValue(), this._items.length));
            }
            break;
        default:
            { }
            break;
    }
}
Area.prototype.move_singal = function (flag) {
    switch (flag) {
        case pxFrame.OP_OUT_UP:
        case pxFrame.OP_OUT_DOWN:
        case pxFrame.OP_OUT_LEFT:
        case pxFrame.OP_OUT_RIGHT:
            {
                this.obj_out_type(flag);
            }
            break;
        default:
            { }
            break;
    }
}
Area.prototype.move_row = function (flag) {
    switch (flag) {
        case pxFrame.OP_OUT_LEFT:
            {
                this.setValue(Decrease(this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_RIGHT:
            {
                this.setValue(Increase(this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_UP:
        case pxFrame.OP_OUT_DOWN:
            {
                this.obj_out_type(flag);
            }
            break;
        default:
            { }
            break;
    }
}
Area.prototype.move_col = function (flag) {
    switch (flag) {
        case pxFrame.OP_OUT_UP:
            {
                this.setValue(Decrease(this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_DOWN:
            {
                this.setValue(Increase(this.getValue(), this._items.length));
            }
            break;
        case pxFrame.OP_OUT_LEFT:
        case pxFrame.OP_OUT_RIGHT:
            {
                this.obj_out_type(flag);
            }
            break;
        default:
            { }
            break;
    }
}

Area.prototype.onkey = function (event) {
    var code = event.code;
    this.onselfkey(event);
    if (this._items.length < 1) {
        return
    }
    var name = this._items[this.getValue()].getName();
    this._page.getItems().getValue(name).dispatchEvent(event);
}
Area.prototype.onselfkey = function (event) { }

Area.prototype.AreaCreate = function () {
    this.obj_build();
    /*
    if (this._items.length > 0) {
        var id = this.area_findfirst();
        if (id < this._items.length) {

            this.setValue_Only(id);
        }
    }*/
    //if (this.obj_is_yes()) {
    //    this.obj_doselect()
    //}
}

Area.prototype.AreaSelect = function (id) {
    if (id < this._items.length)
        this.setValue(id);
}


function kitem(page, area, name, type, display, control, select, cfg) {
    kobj.call(this, page, area, name, type, display, control, select);
    this.cfg = cfg;
    if (typeof name != 'undefined') {
        this.init()
    }
    if (display == pxFrame.DISPLAY_SHOW) {
        this.obj_show()
    }
    if (control == pxFrame.CONTROL_ENABLE) {
        this.obj_enable()
    }
    if (select == pxFrame.SELECT_YES) {
        this.obj_doselect()
    }
}
kitem.prototype.type = "item";
kitem.prototype.area = "";
kitem.prototype = new kobj();
kitem.prototype.self_init = function () {
    this.item_cfg_init();
    this._page.item_add(this);
}

kitem.prototype.item_cfg_init = function () { }


function Input(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "input", display, control, select, cfg);
}
Input.prototype = new kitem();
Input.prototype.type = "input";
Input.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = this.len;
                    this.tmp = '0';
                } else {
                    this.now = this.tmp.length;
                }
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}

Input.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

Input.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP)
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN)
            }
            break;
        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now >= this.len) {
                    this.now = 0;
                    this.tmp = '';
                } {
                    var val = code - KEYS.ZERO;
                    this.tmp = this.tmp + "" + val;
                    this.now++;

                    this.setValue(this.tmp);
                }

            }
            break
    }
}

function Password(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "password", display, control, select, cfg);
}
Password.prototype = new kitem();
Password.prototype.type = "password";
Password.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.now = 0;
                this.tmp = ""
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}

Password.prototype.obj_clean = function () {
    this.tmp = "", this.now = 0;
};

Password.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

Password.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP)
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN)
            }
            break;
        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now < this.len) {
                    {
                        var val = code - KEYS.ZERO;
                        this.tmp = this.tmp + "" + val;
                        this.now++;

                        this.setValue(this.tmp);
                    }

                }
                break
            }
    }
}


function ChannelNum(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "channelnum", display, control, select, cfg);
}
ChannelNum.prototype = new kitem();
ChannelNum.prototype.type = "channelnum";
ChannelNum.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];


                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = this.len;
                    this.tmp = '0';
                } else {
                    this.now = this.tmp.length;
                    this.setValue(this.tmp);
                }


            } else
                this.setValue(this.tmp);
        }
    }
}

ChannelNum.prototype.obj_clean = function () {
    this.tmp = "", this.now = 0;
};
ChannelNum.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
                this.obj_out_type("OP_CHANEL_CHANGE");
            }
            break;
        case KEYS.EXIT:
            this.obj_out_type(pxFrame.OP_EXIT);
            this.obj_out_type("OP_CHANEL_NOCHANGE");
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now < this.len) {
                    this.tmp = this.tmp + "" + a.code - KEYS.ZERO;
                    this.now++;
                    this.setValue(this.tmp);
                }
                if (this.now >= this.len) {
                    this.obj_out_type(pxFrame.OP_EXIT);
                    this.obj_out_type("OP_CHANEL_CHANGE");
                }
            }
            break
    }
};
ChannelNum.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                this.obj_out_type(pxFrame.OP_ENTER);
                if (this.now >= this.len) {
                    this.now = 0;
                    this.tmp = '';
                }
                else {
                    this.tmp = this.tmp + "" + code - KEYS.ZERO;
                    this.now++;
                    this.setValue(this.tmp);
                }

            }
            break
    }
}

function NetAddr(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "netaddr", display, control, select, cfg);
}
NetAddr.prototype = new kitem();
NetAddr.prototype.type = "netaddr";
NetAddr.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = this.len;
                    this.tmp = '0';
                } else {
                    this.now = this.len;
                }
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}

NetAddr.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

NetAddr.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP)
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN)
            }
            break;
        case KEYS.RIGHT:
            {
                var a = this.tmp.split(".");
                if (a.length < 4) {
                    this.now = a.length * 4;
                    this.tmp = this.tmp + ".";
                    this.setValue(this.tmp);
                }
            }
            break;

        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    if (this.tmp[this.tmp.length - 1] == ".") {
                        this.now--;
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                        var a = this.tmp.split(".");
                        this.now = a.length * 3 + a.length - 1;
                    }
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now >= this.len) {
                    this.now = 0;
                    this.tmp = '';
                }
                var c = this.tmp.split(".");
                if (c[c.length - 1] == 25) {
                    if ((code - KEYS.ZERO) > 5) {
                        return;
                    }
                }

                {
                    var val = code - KEYS.ZERO;
                    this.tmp = this.tmp + "" + val;
                    this.now++;
                    var a = this.tmp.split(".");
                    var large = a[a.length - 1];
                    if ((large > 25) || (large.length > 2)) {
                        if (a.length < 4) {
                            this.now = a.length * 4;
                            this.tmp = this.tmp + ".";
                        } else {
                            this.now = this.len;
                        }
                    }
                    this.setValue(this.tmp);
                }

            }
            break
    }
}

function DateTime(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "datetime", display, control, select, cfg);
}
DateTime.prototype = new kitem();
DateTime.prototype.type = "datetime";
DateTime.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = 0;
                    this.tmp = '';
                } else {
                    this.now = this.len;
                }
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}

DateTime.prototype.getMaxDate = function (year, month) {
    year = parseInt(year);
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    var dates = d.getDate();
    delete (d);
    return dates;
}

DateTime.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

DateTime.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP);
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN);
            }
            break;
        case KEYS.RIGHT:
            {
                switch (this.now) {
                    case 6:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val + "/";
                            this.now = this.now + 2;
                            this.setValue(this.tmp);
                        }
                        break;

                    case 9:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val + "-";
                            this.now = this.now + 2;
                            this.setValue(this.tmp);
                        }
                        break;

                    case 12:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val + ":";
                            this.now = this.now + 2;
                            this.setValue(this.tmp);
                        }
                        break;

                    case 15:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val;
                            this.now = this.now + 1;
                            this.setValue(this.tmp);
                        }
                        break;
                }
            }
            break;

        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    var a = this.tmp[this.tmp.length - 1];
                    switch (a) {
                        case "/":
                            {
                                var c = this.tmp.split("/");
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                if (c.length == 3) {
                                    this.now = 7;
                                } else if (c.length == 2) {
                                    this.now = 4;
                                }
                            }
                            break;
                        case "-":
                            {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now = 10;
                            }
                            break;
                        case ":":
                            {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now = 13;
                            }
                            break;
                    }
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now >= this.len) {
                    return;
                    this.now = 0;
                    this.tmp = '';
                }

                {
                    var val = code - KEYS.ZERO;
                    this.tmp = this.tmp + "" + val;
                    this.now++;
                    if (this.now < 11) {
                        var a = this.tmp.split("/");
                        var large = a[a.length - 1]
                        switch (a.length) {
                            case 1:
                                {
                                    if (large.length == 4) {
                                        this.tmp = this.tmp + "/";
                                        this.now++;
                                    }
                                }
                                break;
                            case 2:
                                {
                                    if (large.length == 1) {
                                        if (large > 1) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.tmp = this.tmp + "0" + val + "/";
                                            this.now = this.now + 2;
                                        }
                                    } else if (large.length == 2) {
                                        if (large > 12) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.now--;
                                            return;
                                        } else {
                                            this.tmp = this.tmp + "/";
                                            this.now++;
                                        }
                                    }

                                }
                                break;
                            case 3:
                                {
                                    var d = this.tmp.split("/");
                                    var maxDate = this.getMaxDate(d[0], d[1]);
                                    var ll = parseInt(maxDate / 10);
                                    if (large.length == 1) {
                                        if (parseInt(large) > ll) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.tmp = this.tmp + "0" + val + "-";
                                            this.now = this.now + 2;
                                        }
                                    } else if (large.length == 2) {
                                        if (parseInt(large) > maxDate) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.now--;
                                            return;
                                        } else {
                                            this.tmp = this.tmp + "-";
                                            this.now++;
                                        }
                                    }
                                }
                                break;
                        }
                    } else if ((this.now == 12) || (this.now == 13)) {
                        var b = this.tmp.split("-");
                        var blarge = b[b.length - 1]


                        if (blarge.length == 1) {
                            if (parseInt(blarge) > 2) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.tmp = this.tmp + "0" + val + ":";
                                this.now = this.now + 2;
                            }
                        } else if (blarge.length == 2) {
                            if (parseInt(blarge) > 23) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now--;
                                return;
                            } else {
                                this.tmp = this.tmp + ":";
                                this.now++;
                            }
                        }
                    } else if ((this.now == 14) || (this.now == 15)) {
                        var c = this.tmp.split(":");
                        var clarge = c[c.length - 1]
                        if (clarge.length == 1) {
                            if (parseInt(clarge) > 5) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.tmp = this.tmp + "0" + val;
                                this.now++;
                            }
                        } else if (clarge.length == 2) {
                            if (parseInt(clarge) > 59) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now--;
                                return;
                            }
                        }
                    }
                    this.setValue(this.tmp);
                }

            }
            break
    }
}


function Dates(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "date", display, control, select, cfg);
}
Dates.prototype = new kitem();
Dates.prototype.type = "date";
Dates.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = 0;
                    this.tmp = '';
                } else {
                    this.now = this.len;
                }
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}

Dates.prototype.getMaxDate = function (year, month) {
    year = parseInt(year);
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
}

Dates.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

Dates.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP);
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN);
            }
            break;
        case KEYS.RIGHT:
            {
                switch (this.now) {
                    case 6:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val + "/";
                            this.now = this.now + 2;
                            this.setValue(this.tmp);
                        }
                        break;

                    case 9:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val;
                            this.now = this.now + 1;
                            this.setValue(this.tmp);
                        }
                        break;
                }
            }
            break;

        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    var a = this.tmp[this.tmp.length - 1];
                    switch (a) {
                        case "/":
                            {
                                var c = this.tmp.split("/");
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                if (c.length == 3) {
                                    this.now = 7;
                                } else if (c.length == 2) {
                                    this.now = 4;
                                }
                            }
                            break;
                    }
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now >= this.len) {
                    return;
                    this.now = 0;
                    this.tmp = '';
                }

                {
                    var val = code - KEYS.ZERO;
                    this.tmp = this.tmp + "" + val;
                    this.now++;
                    if (this.now < 10) {
                        var a = this.tmp.split("/");
                        var large = a[a.length - 1]
                        switch (a.length) {
                            case 1:
                                {
                                    if (large.length == 4) {
                                        this.tmp = this.tmp + "/";
                                        this.now++;
                                    }
                                }
                                break;
                            case 2:
                                {
                                    if (large.length == 1) {
                                        if (large > 1) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.tmp = this.tmp + "0" + val + "/";
                                            this.now = this.now + 2;
                                        }
                                    } else if (large.length == 2) {
                                        if (large > 12) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.now--;
                                            return;
                                        } else {
                                            this.tmp = this.tmp + "/";
                                            this.now++;
                                        }
                                    }

                                }
                                break;
                            case 3:
                                {
                                    var d = this.tmp.split("/");
                                    var maxDate = this.getMaxDate(d[0], d[1]);
                                    var ll = parseInt(maxDate / 10);
                                    if (large.length == 1) {
                                        if (parseInt(large) > ll) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.tmp = this.tmp + "0" + val;
                                            this.now = this.now + 1;
                                        }
                                    } else if (large.length == 2) {
                                        if (parseInt(large) > maxDate) {
                                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                            this.now--;
                                            return;
                                        } else {
                                            this.tmp = this.tmp + "-";
                                            this.now++;
                                        }
                                    }
                                }
                                break;
                        }
                    }
                    this.setValue(this.tmp);
                }

            }
            break
    }
}


function Time(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "time", display, control, select, cfg);
}
Time.prototype = new kitem();
Time.prototype.type = "time";
Time.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this.type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.old = cfg["value"];
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = cfg["value"].toString();
                if (this.tmp == 0) {
                    this.now = 0;
                    this.tmp = '';
                } else {
                    this.now = this.len;
                }
                this.setValue(this.tmp);


            } else
                this.setValue(this.tmp);
        }
    }
}


Time.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

Time.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP);
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN);
                console.log("Date Time OUT_DOWN");
            }
            break;
        case KEYS.RIGHT:
            {
                switch (this.now) {
                    case 1:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val + ":";
                            this.now = this.now + 2;
                            this.setValue(this.tmp);
                        }
                        break;

                    case 4:
                        {
                            var tmp_val = this.tmp[this.tmp.length - 1];
                            this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                            this.tmp = this.tmp + "0" + tmp_val;
                            this.now = this.now + 1;
                            this.setValue(this.tmp);
                        }
                        break;
                }
            }
            break;

        case KEYS.LEFT:
            {
                if (this.now >= 1) {
                    var a = this.tmp[this.tmp.length - 1];
                    switch (a) {
                        case ":":
                            {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now = 2;
                            }
                            break;
                    }
                    this.now--;
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.setValue(this.tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.now >= this.len) {
                    return;
                    this.now = 0;
                    this.tmp = '';
                }

                {
                    var val = code - KEYS.ZERO;
                    this.tmp = this.tmp + "" + val;
                    this.now++;
                    if ((this.now == 1) || (this.now == 2)) {
                        var b = this.tmp.split("-");
                        var blarge = b[b.length - 1]


                        if (blarge.length == 1) { } else if (blarge.length == 2) {
                            {
                                this.tmp = this.tmp + ":";
                                this.now++;
                            }
                        }
                    } else if ((this.now == 4) || (this.now == 5)) {
                        var c = this.tmp.split(":");
                        var clarge = c[c.length - 1]
                        if (clarge.length == 1) {
                            if (parseInt(clarge) > 5) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.tmp = this.tmp + "0" + val;
                                this.now++;
                            }
                        } else if (clarge.length == 2) {
                            if (parseInt(clarge) > 59) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now--;
                                return;
                            }
                        }
                    }
                    this.setValue(this.tmp);
                }

            }
            break
    }
}

function CheckBox(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "checkbox", display, control, select, cfg);
}
CheckBox.prototype = new kitem();
CheckBox.prototype.type = "checkbox";
CheckBox.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        this.setValue(cfg["value"]);
    }
}

CheckBox.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.setValue(!this.getValue());
            }
            break;
        case KEYS.UP:
            {
                this.obj_out_type(pxFrame.OP_OUT_UP)
            }
            break;
        case KEYS.DOWN:
            {
                this.obj_out_type(pxFrame.OP_OUT_DOWN)
            }
            break;
        case KEYS.LEFT:
            {
                this.obj_out_type(pxFrame.OP_OUT_LEFT)
            }
            break;
        case KEYS.RIGHT:
            {
                this.obj_out_type(pxFrame.OP_OUT_RIGHT)
            }
            break
    }
}

function Button(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "button", display, control, select);
    this.cfg = cfg;
}
Button.prototype = new kitem();
Button.prototype.type = "button";

Button.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT: {
            this.obj_out_type(pxFrame.OP_OUT);
        } break;
        case KEYS.ENTER: {
            this.obj_out_type(pxFrame.OP_DO);
        } break;
        case KEYS.UP: {
            this.obj_out_type(pxFrame.OP_OUT_UP)
        } break;
        case KEYS.DOWN: {
            this.obj_out_type(pxFrame.OP_OUT_DOWN)
        } break;
        case KEYS.LEFT: {
            this.obj_out_type(pxFrame.OP_OUT_LEFT)
        } break;
        case KEYS.RIGHT: {
            this.obj_out_type(pxFrame.OP_OUT_RIGHT)
        } break;
        case KEYS.RED: {
            this.obj_out_type(pxFrame.OP_RED);
        } break;
        case KEYS.YELLOW: {
            this.obj_out_type(pxFrame.OP_YELLOW);
        } break;
        case KEYS.BLUE: {
            this.obj_out_type(pxFrame.OP_BLUE);
        } break;
        case KEYS.GREEN: {
            this.obj_out_type(pxFrame.OP_GREEN);
        } break;

    }
}


function Menu(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "select", display, control, select, cfg);
    if (typeof cfg != 'undefined') {
        if (typeof cfg["total"] != 'undefined') {
            this.total = parseInt(cfg["total"])
        }
        if (typeof cfg["direction"] != 'undefined') {
            this.direction = cfg["direction"]
        }
    }
}
Menu.prototype = new kitem();
Menu.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if ((typeof cfg != 'undefined') && (typeof cfg["value"] != 'undefined')) {
        if (this._type == "select") {
            this.setValue(parseInt(cfg["value"]));
        } else {
            if (cfg["format"] == "num") {
                this.setValue(parseInt(cfg["value"]));
                this.old = parseInt(cfg["value"]);
                this.len = cfg["len"];
                this.max = cfg["max"];
                this.min = cfg["min"];

                this.tmp = parseInt(cfg["value"]);
                this.now = this.tmp.toString().length;

            } else
                this.setValue(parseInt(cfg["value"]));
        }
    }
}

Menu.prototype.select_increase = function () {
    this.setValue(Increase(this.getValue(), this.total));
}
Menu.prototype.select_decrease = function () {
    this.setValue(Decrease(this.getValue(), this.total));
}
Menu.prototype.select = function (id) {
    if (id < this.total) {
        this.setValue(id);
    }
}
Menu.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}
Menu.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {

            }
            break;
        case KEYS.UP:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_UP)
                } else {
                    this.select_decrease()
                }
            }
            break;
        case KEYS.DOWN:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_DOWN)
                } else {
                    this.select_increase()
                }
            }
            break;
        case KEYS.LEFT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_decrease()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_LEFT)
                }
            }
            break;
        case KEYS.RIGHT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_increase()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_RIGHT)
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                this.select(code - KEYS.ZERO)
            }
            break
    }
}


function Select(page, area, name, display, control, select, cfg) {
    Menu.call(this, page, area, name, display, control, select, cfg);
}
Select.prototype = new Menu();
Select.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                this.obj_out_type(pxFrame.OP_DO);
            }
            break;
        case KEYS.UP:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_UP)
                } else {
                    this.select_decrease()
                }
            }
            break;
        case KEYS.DOWN:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_DOWN)
                } else {
                    this.select_increase()
                }
            }
            break;
        case KEYS.LEFT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_decrease()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_LEFT)
                }
            }
            break;
        case KEYS.RIGHT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_increase()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_RIGHT)
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                this.select(code - KEYS.ZERO)
            }
            break
    }
}


function TimeControl(page, area, name, display, control, select, cfg) {
    kitem.call(this, page, area, name, "timecontrol", display, control, select, cfg);
    if (typeof cfg != 'undefined') {
        if (typeof cfg["total"] != 'undefined') {
            this.total = parseInt(cfg["total"])
        }
        if (typeof cfg["direction"] != 'undefined') {
            this.direction = cfg["direction"]
        }
    }
}
TimeControl.prototype = new kitem();
TimeControl.prototype.item_cfg_init = function () {
    var cfg = this.cfg;
    if (typeof cfg != 'undefined') {
        if (cfg["type"] == "multiinput") {
            this.team = this.cfg.dat;
            var a = cfg.value;
            var b = [];
            for (var i = 0; i < this.team.length; i++) {
                b.push(this.team[i].value);
            }
            this.setValue(a + "/" + b.join("-"));
        }
    }
}

TimeControl.prototype.select_increase = function () {
    var value = this.getValue();
    var a = value.split("/");
    this.set_id(Increase(a[0], this.total));
}
TimeControl.prototype.select_decrease = function () {
    var value = this.getValue();
    var a = value.split("/");
    this.set_id(Decrease(a[0], this.total));
}

TimeControl.prototype.set_id = function (id) {
    var value = this.getValue();
    var a = value.split("/");
    a[0] = id
    this.setValue(a.join("/"));
}

TimeControl.prototype.set_value = function (val) {
    var value = this.getValue();
    var a = value.split("/");
    var b = a[1].split("-");
    b[parseInt(a[0])] = val;
    this.setValue(a[0] + "/" + b.join("-"));
}

TimeControl.prototype.select_value_increase = function () {
    var value = this.getValue();
    var a = value.split("/");
    var b = a[1].split("-");
    var id = parseInt(a[0]);
    this.set_value(Increase(b[id], this.mult_total));
}
TimeControl.prototype.select_value_decrease = function () {
    var value = this.getValue();
    var a = value.split("/");
    var b = a[1].split("-");
    var id = parseInt(a[0]);
    this.set_value(Decrease(b[id], this.mult_total));
}

TimeControl.prototype.onspecialkey = function (event) {
    var value = this.getValue();
    var a = value.split("/");
    var b = a[1].split("-");
    var id = parseInt(a[0]);
    switch (this.team[id].type) {
        case "num":
            {
                this.onspecialkey_num(event, id);
            }
            break;
        case "select":
            {
                this.onspecialkey_select(event, id);
            }
            break;
        case "time":
            {
                this.onspecialkey_time(event, id);
            }
            break;
    }
}
TimeControl.prototype.onspecialkey_select = function (event, id) {
    var code = event.code;
    switch (code) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
        case KEYS.UP:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_UP)
                } else {
                    this.select_value_decrease()
                }
            }
            break;
        case KEYS.DOWN:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_DOWN)
                } else {
                    this.select_value_increase()
                }
            }
            break;
        case KEYS.LEFT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_value_decrease()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_LEFT)
                }
            }
            break;
        case KEYS.RIGHT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_value_increase()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_RIGHT)
                }
            }
            break;
    }
}

TimeControl.prototype.onspecialkey_num = function (event, id) {
    var code = event.code;
    switch (code) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
    }
}

TimeControl.prototype.onspecialkey_time = function (event, id) {
    var code = event.code;
    switch (code) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_EXIT);
            }
            break;
        case KEYS.RIGHT:
            {
                switch (this.mult_now) {
                    case 1:
                        {
                            var tmp_val = this.mult_tmp[this.mult_tmp.length - 1];
                            this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                            this.mult_tmp = this.mult_tmp + "0" + tmp_val + ":";
                            this.mult_now = this.mult_now + 2;
                            this.set_value(this.mult_tmp);
                        }
                        break;

                    case 4:
                        {
                            var tmp_val = this.mult_tmp[this.mult_tmp.length - 1];
                            this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                            this.mult_tmp = this.mult_tmp + "0" + tmp_val;
                            this.mult_now = this.mult_now + 1;
                            this.set_value(this.mult_tmp);
                        }
                        break;
                }
            }
            break;

        case KEYS.LEFT:
            {
                if (this.mult_now >= 1) {
                    var a = this.mult_tmp[this.mult_tmp.length - 1];
                    switch (a) {
                        case ":":
                            {
                                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                                this.mult_now = 2;
                            }
                            break;
                    }
                    this.mult_now--;
                    this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                    this.set_value(this.mult_tmp);
                }
            }
            break;
        case KEYS.ZERO:
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.EIGHT:
        case KEYS.NINE:
            {
                if (this.mult_now >= this.mult_total) {
                    this.mult_now = 0;
                    this.mult_tmp = '';
                }

                {
                    var val = code - KEYS.ZERO;
                    this.mult_tmp = this.mult_tmp + "" + val;
                    this.mult_now++;
                    if ((this.mult_now == 1) || (this.mult_now == 2)) {
                        var b = this.mult_tmp.split("-");
                        var blarge = b[b.length - 1]


                        if (blarge.length == 1) {
                            if (parseInt(blarge) > 2) {
                                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                                this.mult_tmp = this.mult_tmp + "0" + val + ":";
                                this.mult_now = this.mult_now + 2;
                            }
                        } else if (blarge.length == 2) {
                            if (parseInt(blarge) > 23) {
                                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                                this.mult_now--;
                                return;
                            } else {
                                this.mult_tmp = this.mult_tmp + ":";
                                this.mult_now++;
                            }
                        }
                    } else if ((this.mult_now == 4) || (this.mult_now == 5)) {
                        var c = this.mult_tmp.split(":");
                        var clarge = c[c.length - 1]
                        if (clarge.length == 1) {
                            if (parseInt(clarge) > 5) {
                                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                                this.mult_tmp = this.mult_tmp + "0" + val;
                                this.mult_now++;
                            }
                        } else if (clarge.length == 2) {
                            if (parseInt(clarge) > 59) {
                                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                                this.mult_now--;
                                return;
                            }
                        }
                    }
                    this.set_value(this.mult_tmp);
                }

            }
            break
    }
}



TimeControl.prototype.onkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.obj_out_type(pxFrame.OP_OUT);
            }
            break;
        case KEYS.ENTER:
            {
                var value = this.getValue();
                var a = value.split("/");
                var b = a[1].split("-");
                var id = parseInt(a[0]);
                switch (this.team[id].type) {
                    case "checkbox":
                        {
                            b[id] = 1 - parseInt(b[id]);
                            this.set_value(b[id]);
                        }
                        break;
                    case "num":
                    case "select":
                    case "time":
                        {
                            this.mult_tmp = b[id];
                            this.mult_total = this.team[id].total;
                            this.mult_now = this.mult_total;
                            this.obj_out_type(pxFrame.OP_ENTER);
                        }
                        break;
                }
            }
            break;
        case KEYS.UP:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_UP)
                } else {
                    this.select_decrease()
                }
            }
            break;
        case KEYS.DOWN:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.obj_out_type(pxFrame.OP_OUT_DOWN)
                } else {
                    this.select_increase()
                }
            }
            break;
        case KEYS.LEFT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_decrease()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_LEFT)
                }
            }
            break;
        case KEYS.RIGHT:
            {
                if (this.direction == kobj.HORIZONTAL) {
                    this.select_increase()
                } else {
                    this.obj_out_type(pxFrame.OP_OUT_RIGHT)
                }
            }
            break;
    }
}

function SSD(page, handle, cfg, cb) {
    if (typeof EventDispatcher == 'undefined')
        throw new Error("EventDispatcher class is missing.");
    this.clear().init(page, handle, cfg, cb);
}
SSD.A_SW = " .asw";


SSD.D = "DISPLAY_";
SSD.C = "CONTROL_";
SSD.S = "SELECT_";

SSD.ID = "DISPLAY_SHOW";
SSD.IC = "CONTROL_ENABLE";
SSD.IS = "SELECT_NO";




SSD.Display = '<div class="lsw"><div class="item"  v-for="item in lists":id="item.id" :ptype="item.type">' +
    '<div v-if="item.type == \'mlist\'" class="text">{{ item.show }}</div>' +
    '<div v-if="item.type == \'list\'" v-bind:class="value.class" v-for="value in item.show">{{ value.text }}' +
    '<img v-show="value.show" v-if="value.icon" class="in_pic" v-bind:src="value.img" \>' +
    '</div>' +
    '<div v-if="item.type == \'menu\'" v-for="opt_item in item.options":id="opt_item.id" class="litem">' +
    '<div v-if="item.type == \'menu\'" class="list_icon"><img v-if="item.type == \'menu\'" class="in_pic" v-bind:src="opt_item.img" onerror="nofind();"></div>' +
    '</div>' +
    '<div v-if="item.type == \'checkbox\'"  class="ititle">{{item.name}}</div>' +
    '<div v-if="item.type == \'input\'"  class="ititle">{{item.name}}</div>' +
    '<div v-if="item.type == \'pininput\'" class="pincode_value">{{item.value}}</div>' +
    '<div v-if="item.type == \'pincode\'"  class="ititle">{{item.name}}</div>' +
    '<div v-if="item.type == \'select\'"  class="ititle">{{item.name}}</div>' +
    '<div v-if="item.type == \'button\'"  class="ititle">{{item.name}}</div>' +

    '<div v-if="item.type == \'checkbox\'"  class="item_carea"></div>' +
    '<div v-if="item.type == \'input\'"  class="item_area"><div class="item_value">{{item.value}}</div></div>' +
    '<div v-if="item.type == \'pincode\'" class="item_area"><div class="item_value">{{item.value}}</div><div class="pincode_status"><img class="info_pic" src="img/correct.png" /></div></div>' +
    '<div v-if="item.type == \'select\'"  class="item_area"><div class="sel_left"></div><div class="item_value"><div v-for="opt_item in item.options" class="opt" :pvalue="opt_item.value">{{opt_item.show}}</div></div><div class="sel_right"></div></div>' +
    '</div></div>';

SSD.prototype.clear = function () {
    EventDispatcher.initialize(this);
    return this;
}
SSD.prototype.init = function (page, name, cfg, cb) {
    this.dat = [{ "id": name + "_null", "type": "list", "show": [{ "class": "null", "text": "Null Data" }] }];
    this.cfg = cfg;
    this.page = page;
    this.name = name;
    this.cb = cb;
    $('#' + this.name + SSD.A_SW).html(SSD.Display);
    this.create({
        "lists": []
    });
    return this;
}

SSD.prototype.refresh_cb = function () {
    var ssd = this.ssd;
    var page = ssd.page;
    var dat = ssd.dat;
    var status = ssd.cfg.status.split("_");
    if (ssd.area) {
        ssd.do("noselect");
        if (ssd.do("isenable")) {
            status[1] = "ENABLE";
        }
        else {
            status[1] = "DISABLE";
        }
        $('#' + ssd.name + SSD.A_SW).find(pxFrame.L_SW).css("top", "0px");
        ssd.area.destory();
        delete (ssd.area);
        ssd.area = null;
    }
    else {
        ssd.oid = ssd.cfg.value;
    }

    console.log("refresh_cb",dat);


    ssd.area = new Area(page, ssd.name, SSD.D + status[0], SSD.C + status[1], SSD.S + status[2], ssd.cfg);
    if ((typeof dat != 'undefined') && (dat) && (dat.length > 0)) {
        for (var i = 0; i < dat.length; i++) {
            var id_str = "";
            if (dat[i].id) { id_str = dat[i].id; } else { id_str = ssd.name + "_" + i; }
            switch (dat[i].type) {
                case "menu": {
                    new Menu(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "value": 0, "total": dat[i].options.length, "direction": "hor" });
                } break;
                case "button":
                case "list":
                case "mlist": {
                    new Button(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS);
                } break;
                case "select": {
                    new Select(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "value": dat[i].value, "total": dat[i].options.length, "direction": "hor" });
                } break;
                case "checkbox": {
                    new CheckBox(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "value": dat[i].value });
                } break;
                case "pininput": {
                    new Password(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": 4 });
                } break;
                case "input": {
                    switch (dat[i].format) {
                        case "num": {
                            new Input(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": dat[i].len, "min": dat[i].min, "max": dat[i].max });
                        } break;
                        case "ip": {
                            new NetAddr(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": 15 });
                        } break;
                        case "channelnum": {
                            new ChannelNum(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": dat[i].len });
                        } break;
                        case "time": {
                            new Time(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": 5 });
                        } break;
                        case "date": {
                            new Dates(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": 10 });
                        } break;
                        case "datetime": {
                            new DateTime(page, ssd.name, id_str, SSD.ID, SSD.IC, SSD.IS, { "format": "num", "value": dat[i].value, "len": 16 });
                        } break;
                        case "timecontrol": { } break;
                    }
                } break;

                default: {
                } break;
            }
        }
    } else {
        dat.push("NULL");
        new Button(page, ssd.name, ssd.name + "_null", "DISPLAY_HIDE", "CONTROL_ENABLE", "SELECT_NO");
    }
    if (status[1] == "ENABLE") {
        ssd.do("create");
    }
    
    ssd.status = true;
    if (ssd.oid < dat.length) {
        ssd.do("select", ssd.oid);
    } else {
        ssd.do("select", dat.length - 1);
    }
    if (status[1] == "DISABLE") {
        if (status[2] == "YES") {
            ssd.do("active");
        }
        else {
            ssd.do("noselect");
        }
    }
    if (ssd.cb) ssd.cb();
}

SSD.prototype.create = function (dat) {
    this.vhandle = new Vue({
        el: '#' + this.name,
        data: dat
    });
    this.vhandle.refresh_cb = this.refresh_cb;
    this.vhandle.ssd = this;
    this.vhandle.refresh = function (dat) {
        this.lists = dat;
        this.$nextTick(function () {
            this.refresh_cb();
        })
    }
    this.vhandle.refresh(this.dat);
}


SSD.prototype.refresh = function (dat, oid) {
    this.status = false;
    this.dat = null;
    this.dat = dat;
    if (typeof oid != 'undefined') {
        this.oid = oid;
        this.cfg.value = oid;
    }
    else
    {
        this.oid = 0;
    }
        
    if ((typeof dat != 'undefined') && (dat) && (dat.length > 0)) {
        this.vhandle.refresh(dat);
    }
    else {
        this.vhandle.refresh([{ "id": this.name + "_null", "type": "list", "show": [{ "class": "null", "text": "Null Data" }] }]);
    }
    delete (dat);
    return this;
}

SSD.prototype.temp = function () {    
    this.status = false;
    this.oid = 0;
    this.cfg.value = 0;
    var dat = [{ "id": this.name + "_null", "type": "list", "show": [{ "class": "null", "text": "Receiving Data" }] }];    
    this.dat = dat;
    this.vhandle.refresh(dat);
}

SSD.prototype.do = function (op, id) {
    var ret = true, area = this.area;
    switch (op) {
        case "create": {
            area.AreaCreate();
        } break;
        case "active": {
            area.obj_active();
        } break;
        case "noactive": {
            area.obj_noactive();
        } break;
        case "noselect": {
            area.obj_noselect();
        } break;
        case "disable": {
            area.obj_disable();
        } break;
        case "enable": {
            area.obj_enable();
        } break;
        case "show": {
            area.obj_show();
        } break;
        case "hide": {
            area.obj_hide();
        } break;
        case "select": {
            if(this.status)
            {
                area.AreaSelect(id);
            }
            
        } break;
        case "isenable": {
            ret = area.obj_is_enable();
        } break;
        case "getvalue": {
            ret = area.getValue();
        } break;

    }
    area = null;
    return ret;
}