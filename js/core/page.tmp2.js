$.extend({
    inc: function (a, b, c) {
        return (a + b) % c;
    },
    dec: function (a, c, b) {
        return (a + b - (c % b)) % b;
    },
    pxdebug: function (a, b) {
        console.log(a, b);
    }
})

function Increase(b, a) {
    return $.inc(parseInt(b), 1, parseInt(a))
}
function Decrease(b, a) {
    return $.dec(parseInt(b), 1, parseInt(a))
}
function GoUp(b, a, c) {
    if (0 == c) return 0;
    a >= b && (a -= b);
    return a
}
function GoDown(b, a, c) {
    if (0 == c) return 0;
    a += b;
    a >= c && (a = c - 1);
    return a
}
function GoLeft(b, a, c) {
    if (0 == c) return 0;
    0 == a % b && (a += b, a > c - 1 && (a = c));
    a--;
    return a
}
function GoRight(b, a, c) {
    if (0 == c) return 0;
    a % b == b - 1 ? a = a - b + 1 : a == c - 1 ? a -= a % b : a++;
    return a
};
function p() { }
p.A_SW = " .asw";
p.L_SW = ".lsw";
p.Page = "Page";
p.CurPage = "CurPage";
p.LastPage = "LastPage";
p.AEVENT = "AEVENT";
p.IEVENT = "IEVENT";

p.C0 = "rgba(0,0,0,0)";
p.C1 = "black";
p.C2 = "white";
p.C3 = "yellow";
p.C4 = "#004f80";
p.C5 = "#002740";
p.C6 = "#00afd5";
p.C7 = "#e46900";
p.C8 = "#e4b600";
p.C9 = "#0177bf";
p.N0 = "color";
p.N1 = "border-color";
p.N2 = "background-color";

p.M0 = { "margin-top": "50px", "margin-left": "45px", "width": "100px", "height": "100px" };
p.M1 = { "margin-top": "0px", "margin-left": "20px", "width": "150px", "height": "150px" };
p.N0 = { "border-color": p.C0 };
p.N1 = { "background-color": p.C0 };
p.N2 = { "background-color": p.C2 };
p.N3 = { "background-color": p.C4 };
p.N4 = { "color": p.C2, "background-color": p.C0 };
p.N5 = { "color": p.C1, "border-color": p.C1 };
p.F0 = { "color": p.C5 };
p.F1 = { "color": p.C1, "background-color": p.C6 };
p.F2 = { "color": p.C2 };
p.F3 = { "background-color": p.C7 };
p.F4 = { "color": p.C7, "border-color": p.C7 };
p.F5 = { "color": p.C1, "border-color": p.C1 };
p.F6 = { "border-color": p.C7 };
p.F7 = { "color": p.C2, "background-color": p.C1 };
p.I0 = { "color": p.C2, "background-color": p.C3 };
p.A0 = { "color": p.C1, "background-color": p.C8 };
p.A1 = { "background-color": p.C9 };
p.A2 = { "border-color": p.C9 };
p.V0 = { "color": p.C1, "border-color": p.C1 };
p.V1 = { "color": p.C7, "border-color": p.C7 };

p.D0 = "DOM";
p.D1 = "DOM_BUILD";
p.D2 = "DOM_CREATE";
p.D0 = "DISPLAY";
p.D1 = "DISPLAY_HIDE";
p.D2 = "DISPLAY_SHOW";
p.D3 = "DISPLAY_SELECT";
p.D4 = "DISPLAY_NOSELECT";
p.D5 = "DISPLAY_ACTIVE";
p.D6 = "DISPLAY_FOCUSIN";
p.D7 = "DISPLAY_SELECTBACK";
p.T0 = "CONTROL";
p.T1 = "CONTROL_DISABLE";
p.T2 = "CONTROL_ENABLE";
p.T3 = "FOCUS_IN";
p.PO = "SELECT";
p.P0 = "SELECT_NO";
p.P1 = "SELECT_YES";
p.O0 = "OP_EVENT";
p.O1 = "OP_CHANEL_CHANGE";
p.O2 = "OP_CHANEL_NOCHANGE";
p.O3 = "OP_DO";
p.O4 = "OP_ENTER";
p.O5 = "OP_EXIT";
p.O6 = "OP_OUT";
p.O7 = "OP_OUT_UP";
p.O8 = "OP_OUT_DOWN";
p.O9 = "OP_OUT_LEFT";
p.OO = "OP_OUT_RIGHT";

p.UO = "OP_RED";
p.U1 = "OP_YELLOW";
p.U2 = "OP_BLUE";
p.U3 = "OP_GREEN";
p.EVENT = "KEVENT";

p.k0 = String.fromCharCode(97);
p.k1 = String.fromCharCode(99);
p.k2 = String.fromCharCode(101);
p.k3 = String.fromCharCode(103);
p.k4 = String.fromCharCode(35);
p.k5 = String.fromCharCode(108);
p.k6 = String.fromCharCode(110);
p.k7 = String.fromCharCode(115);
p.k8 = String.fromCharCode(118);
$.fn.Normal = function (a) {
    var b = "";
    isNaN(a) || (b = $(this).find(".item:eq(" + a + ")").attr("ptype"));
    switch (b) {
        case "list":
            $(this).find(".item:eq(" + a + ")").css(p.N4);
            0 < $(this).find(".text:eq(" + a + ")").length && $(this).find(".text:eq(" + a + ")").find("pscroll") && (b = $(this).find(".text:eq(" + a + ")").find(".pscroll").html(), $(this).find(".text:eq(" + a + ")").html(b));
            break;
        case "mlist":
            $(this).find(".item:eq(" + a + ")").css(p.F7);
            break;
        case "flist":
            $(this).find(".item:eq(" + a + ")").css(p.F0);
            break;
        case "mclist":
            $(this).find(".item:eq(" + a + ") .text").css(p.N2);
            $(this).find(".item:eq(" + a + ")").css(p.N0);
            break;
        case "vlist":
            $(this).find(".item:eq(" + a + ") .text").css(p.N3);
            $(this).find(".item:eq(" + a + ")").css(p.N0);
            break;
        case "tclist":
            $(this).find(".item:eq(" + a + ") .item_check").css(p.N5);
            $(this).find(".item:eq(" + a + ") .item_area").css(p.N5);
            $(this).find(".item:eq(" + a + ") .time_area").css(p.N5);
            break;
        case "chlist":
            $(this).find(".item:eq(" + a + ")").css(p.N1);
            break;
        case "select":
        case "input":
        case "pincode":
            $(this).find(".item:eq(" + a + ")").css(p.N4);
            $(this).find(".item:eq(" + a + ") .item_area").css(p.N5);
            break;
        case "checkbox":
            $(this).find(".item:eq(" + a + ")").css(p.N4);
            $(this).find(".item:eq(" + a + ") .item_carea").css(p.N5);
            break;
        case "button":
            $(this).find(".item:eq(" + a + ")").css(p.N4)
    }
};
$.fn.L = function (a) {
    var b = "";
    isNaN(a) || (b = $(this).find(".item:eq(" + a + ")").attr("ptype"));
    switch (b) {
        case "list":
            $(this).find(".item:eq(" + a + ")").css(p.F1);
            if (0 < $(this).find(".text:eq(" + a + ")").length) {
                var d = $(this).find(".text:eq(" + a + ")").get(0).scrollWidth,
                    c = $(this).find(".text:eq(" + a + ")").width();
                if (d > c) {
                    var e = c - d - 30;
                    var f = (0 - e) * 12;
                    d = $(this).find(".text:eq(" + a + ")").html();
                    $(this).find(".text:eq(" + a + ")").html('<div class="pscroll">' + d + "</div>");
                    $(this).find(".text:eq(" + a + ")").find(".pscroll").animate({
                        left: e + "px"
                    }, f, function () {
                        $(this).css({ left: "0px" });
                        var a = $(this).html();
                        $(this).parent().html(a)
                    })
                }
            }
            break;
        case "mlist":
            $(this).find(".item:eq(" + a + ")").css(p.F1);
            break;
        case "flist":
            $(this).find(".item:eq(" + a + ")").css(p.F2);
            break;
        case "mclist":
            $(this).find(".item:eq(" + a + ") .text").css(p.F3);
            $(this).find(".item:eq(" + a + ")").css(p.F6);
            break;
        case "pininput": {
            $(this).find(".item:eq(" + a + ")").css(p.F2);
            $(this).find(".item:eq(" + a + ")").css(p.N1);
        } break;
        case "vlist":
            $(this).find(".item:eq(" + a + ") .text").css(p.F3);
            $(this).find(".item:eq(" + a + ")").css(p.F6);
            break;
        case "tclist":
            $(this).find(".item:eq(" + a + ") .item_check").css(p.F5);
            $(this).find(".item:eq(" + a + ") .item_area").css(p.F5);
            $(this).find(".item:eq(" + a + ") .time_area").css(p.F5);
            b = $(this).find(".item:eq(" + a + ")").attr("pselect");
            switch (parseInt(b)) {
                case 0:
                    $(this).find(".item:eq(" + a + ") .item_check").css(p.F4);
                    break;
                case 1:
                    $(this).find(".item:eq(" + a + ") .item_area").css(p.F4);
                    break;
                case 2:
                    $(this).find(".item:eq(" + a + ") .time_area:eq(0)").css(p.F4);
                    break;
                case 3:
                    $(this).find(".item:eq(" + a + ") .time_area:eq(1)").css(p.F4)
            }
            break;
        case "chlist":
            $(this).find(".item:eq(" + a + ")").css(p.F3);
            break;
        case "select":
        case "input":
        case "pincode":
            $(this).find(".item:eq(" + a + ")").css(p.F1);
            $(this).find(".item:eq(" + a + ") .item_area").css(p.F4);
            break;
        case "checkbox":
            $(this).find(".item:eq(" + a + ")").css(p.F1);
            $(this).find(".item:eq(" + a + ") .item_carea").css(p.F4);
            break;
        case "button":
            $(this).find(".item:eq(" + a + ")").css(p.F1)
    }
};
$.fn.SetList = function (a, b, c) {
    var d = "GRID";
    1 == a && (d = 1 == b ? "SINGAL" : "ver");
    1 == b && (d = 1 == a ? "SINGAL" : "hor");
    a *= b;
    if ("hor" == d) d = "left", b = $(this).parent().width();
    else if ("ver" == d) d = "top", b = $(this).parent().height();
    else if ("GRID" == d) d = "top", b = $(this).parent().height();
    else return;
    b = parseInt(b / a);
    --a;
    var e = -(parseInt(this.find(p.L_SW).css("top")) / b),
        f = e + a;
    c < e ? this.find(p.L_SW).css(d, -c * b + 0 + "px") : c > f && this.find(p.L_SW).css(d, -(c - a) * b + 0 + "px")
};
$.fn.FocusIn = function (a) {
    var b = "";
    isNaN(a) || (b = $(this).find(".item:eq(" + a + ")").attr("ptype"));
    switch (b) {
        case "button":
            $(this).css(p.I0)
    }
};
$.fn.Active = function (a) {
    var b = "";
    isNaN(a) || (b = $(this).find(".item:eq(" + a + ")").attr("ptype"));
    switch (b) {
        case "chlist":
        case "list":
            $(this).find(".item:eq(" + a + ")").css(p.A0);
            0 < $(this).find(".text:eq(" + a + ")").length && $(this).find(".text:eq(" + a + ")").find("pscroll") && (b = $(this).find(".text:eq(" + a + ")").find(".pscroll").html(), $(this).find(".text:eq(" + a + ")").html(b));
            break;
        case "mclist":
            $(this).find(".item:eq(" + a + ") .text").css(p.A1);
            $(this).find(".item:eq(" + a + ")").css(p.A2);
            break;
        case "vlist":
            $(this).find(".item:eq(" + a + ") .text").css(p.A1), $(this).find(".item:eq(" + a + ")").css(p.A1)
    }
};
$.fn.SetShow = function (a) {
    switch ($(this).attr("ptype")) {
        case "select":
            $(this).find(".opt").hide();
            $(this).find(".opt:eq(" + parseInt(a) + ")").show();
            break;
        case "input":
            $(this).find(".item_value").html(a);
            break;
        case "pincode":
            a = a.toString().length;
            for (var b = "", c = 0; c < a; c++) b += "*";
            a = b;
            $(this).find(".item_value").html(a);
            break;
        case "checkbox":
            a ? $(this).find(".item_carea").html("&radic;") : $(this).find(".item_carea").html("");
            break;
        case "tclist":
            a = a.split("/"), b = a[1].split("-"), $(this).attr("pselect", parseInt(a[0])), "1" == b[0] ? $(this).find(".item_check").html("&radic;") : $(this).find(".item_check").html(""), $(this).find(".item_value:eq(0)").html(b[1]), $(this).find(".item_value:eq(1)").html(b[2]), $(this).find(".item_value:eq(2)").html(b[3])
    }
};
$.fn.CancelValue = function (a) {
    switch ($(this).attr("ptype")) {
        case "menu":
            $(this).find(".list_icon:eq(" + a + ")").css(p.M0), $(this).find(".list_icon:eq(" + a + ")").html('<img src="img/' + a + '.png" onerror="nofind();" class="in_pic">')
    }
};
$.fn.SetValue = function (a) {
    switch ($(this).attr("ptype")) {
        case "menu":
            $(this).find(".list_icon:eq(" + a + ")").css(p.M1);
            $(this).find(".list_icon:eq(" + a + ")").html('<img src="img/' + a + '_focus.png" onerror="nofind();" class="in_pic">');
            break;
        case "select":
            $(this).find(".opt").hide();
            $(this).find(".opt:eq(" + parseInt(a) + ")").show();
            break;
        case "input":
            $(this).find(".item_value").html(a);
            break;
        case "pininput": {
            var len = a.toString().length;
            var str_val = '';
            for (var i = 0; i < len - 1; i++) {
                str_val += "*";
            }
            str_val += a[len - 1];
            a = str_val;
            $(this).find(".pincode_value").html(a);
        } break;
        case "pincode":
            a = a.toString().length;
            for (var b = "", c = 0; c < a; c++) b += "*";
            a = b;
            $(this).find(".item_value").html(a);
            break;
        case "checkbox":
            a ? $(this).find(".item_carea").html("&radic;") : $(this).find(".item_carea").html("");
            break;
        case "tclist":
            a = a.split("/");
            b = a[1].split("-");
            $(this).find(".item_check").css(p.V0);
            $(this).find(".item_area").css(p.V0);
            $(this).find(".time_area").css(p.V0);
            switch (parseInt(a)) {
                case 0:
                    $(this).find(".item_check").css(p.V1);
                    break;
                case 1:
                    $(this).find(".item_area").css(p.V1);
                    break;
                case 2:
                    $(this).find(".time_area:eq(0)").css(p.V1);
                    break;
                case 3:
                    $(this).find(".time_area:eq(1)").css(p.V1)
            }
            $(this).attr("pselect", parseInt(a[0]));
            "1" == b[0] ? $(this).find(".item_check").html("&radic;") : $(this).find(".item_check").html("");
            $(this).find(".item_value:eq(0)").html(b[1]);
            $(this).find(".item_value:eq(1)").html(b[2]);
            $(this).find(".item_value:eq(2)").html(b[3])
    }
};

function _(_) {
    var str = APP.get()._(_);
    return str;
};



function a() { this._a(); }
a.prototype._a = function () { this._ = []; this.__ = {}; };
a.prototype.__a = function (_, __) { this.__[_] = __; for (var __i = 0, __len = this._.length; __i < __len; __i++) { if (this._[__i] == _) { return; } } this._.push(_); };
a.prototype._a_ = function () { return this._; };
a.prototype.a_ = function (_) { return this.__[_]; };

function m() { this._a(); }
m.prototype._a = function () { this._ = []; };
m.prototype.__ = function (_) { this._.push(_); };
m.prototype._a_ = function () { this._.pop(); };
m.prototype._aa = function () { return this._[this._.length - 1]; };
m.prototype.a_ = function () { if (this._.length > 1) return this._[this._.length - 2]; else return ""; };

function APP() {
    this.clear();
    this.init();
    this.view_addBg();
}



APP.instance = null;
APP.get = function () { if (!APP.instance) APP.instance = new APP(); return APP.instance; };
APP.prototype.clear = function () {
    this._p = new a();
    this._m = new m();
    this._c = null;
};

APP.prototype.init = function () {
    this.gt = new Gettext();
    this.l_id = 'chn';
};

APP.prototype.setDomain = function (lang) {
    this.l_id = lang;
};

APP.prototype.getDomain = function (lang) {
    return this.l_id;
};

APP.prototype._ = function (msgid) {
    return this.gt.dgettext(this.l_id, msgid);
};




APP.prototype.AppTimer = function () {
    Ts.get();
};
APP.prototype.onkey = function (code) {
    if (this._c) {
        var __e = new QEvent(QEvent.KEYPRESS);
        __e.code = code;
        this._c.dispatchEvent(__e);
    }
};

APP.prototype.onkeyup = function (code) {
    if (this._c) {
        var __e = new QEvent(QEvent.KEYUP);
        __e.code = code;
        this._c.dispatchEvent(__e);
    }
};

APP.prototype.add = function (name, obj) {
    this._p.__a(name, obj);
};

APP.prototype.getPage = function (key, name) {
    var page = null;
    switch (key) {
        case p.CurPage: {
            page = this._c;
        } break;
        case p.Page: {
            page = this._p.a_(name);
        } break;
        case p.LastPage: {
            page = this._p.a_(this._m.a_());
        } break;
        default: { } break;
    }
    return page;
};
APP.prototype.APPCur = function () {
    return this.getPage(p.CurPage);
};
APP.prototype.APPGet = function (_) {
    return this.getPage(p.Page, _);
};
APP.prototype.BackToPlayer = function () {
    this._c = this._p.a_(this._m._aa());
    while (this._c.getName() != "player") {
        this._c.disappear();
        this._c.page_hide();
        this._m._a_();
        this._c = this._p.a_(this._m._aa());
        this._c.back();
    }
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

APP.prototype.Select_Do = function (_, __) {
    if (!this._p.a_(_)) { return; }
    if ((this._c) && (__ == 0)) { this._c.front(); }
    this._m.__(_);
    this._c = this._p.a_(_);
    this._c.enter();
};

APP.prototype.APPSelect = function (_, __) {
    if (!this._p.a_(_)) { return; }
    var _c = this._p.a_(_);
    if (_c.getPower()) {
        this.InputPin(_, __);
    }
    else {
        this.Select_Do(_, __);
    }
};

APP.prototype.exit = function (_, __) {
    this._c = this._p.a_(this._m._aa());
    if (this._c.getName() == _) {
        this._m._a_();
        this._c = this._p.a_(this._m._aa());
        if (__ == 1) { this._c.back(); }
    }
};
APP.prototype.view_addBg = function () { };
function page(a, b) {
    if ("undefined" == typeof EventDispatcher) throw Error("EventDispatcher class is missing.");
    "undefined" != typeof a && (this.isdebug = !1, this.clear(), this._app = APP.get(), this.l = this._app.getDomain(), this._n = a, this._power = false, this.sn = this._n[0] + this._n[this._n.length - 1], this._app.add(this._n, this), this._f = "", this.bb = this.init_data(), this.addbg(), this.init(), "pincode" == a || "messagebox" == a) && (this._power = !1);
    1 == b && this.enter()
};
page.prototype.clear = function () {
    EventDispatcher.initialize(this);
    this.addEventListener(QEvent.KEYPRESS, this, this.onkey).addEventListener(QEvent.KEYUP, this, this.onkeyup).addEventListener(p.AEVENT, this, this.area_specialevent).addEventListener(p.IEVENT, this, this.item_specialevent);
    this._b_ = new a();
    this._j_ = new a();
}
page.prototype.getPower = function () { return this._power; }
page.prototype.getName = function () { return this._n; }
page.prototype.debug = function () { if (this.isdebug) { var s = ""; for (var i = 0; i < arguments.length; i++) { s += arguments[i] + ","; } $.pxdebug("page:" + this._n, s); } }
page.prototype.init_data = function () { return {} };
page.prototype.get_data = function () { return this.bb };
page.prototype.addbg = function () { };
page.prototype.data_refresh = function () { };
page.prototype.page_show = function () {
    "spage" == $(p.k4 + this.sn).attr("class") && $(p.k4 + this.sn).parent().parent().show();
    $(p.k4 + this.sn).show();
    if (this.l != this._app.getDomain()) {
        this.language_refresh();
    }
    this.rfresh("enter");
};
page.prototype.language_refresh = function () {
    this.l = this._app.getDomain();
    this.addbg();
    this.data_refresh();
    Ts.rt();
};
page.prototype.page_hide = function () {
    $(p.k4 + this.sn).hide();
    "spage" == $(p.k4 + this.sn).attr("class") && $(p.k4 + this.sn).parent().parent().hide();
    this.rfresh("exit")
};
page.prototype.selectPage = function (a, b) { this._app.APPSelect(a, b) };
page.prototype.enter = function () { this.page_show(); this.appear() };
page.prototype.rfresh = function (c) {
    var e = this._b_._a_(),
        f = this,
        d = [];
    $.each(e, function (b, a) {
        b = f._b_.a_(a);
        b.obj_is_enable() && d.push(b)
    });
    $.each(d, function (b, a) {
        "list" == $(p.k4 + a.getName() + p.A_SW).find(".item:eq(" + a.getValue() + ")").attr("ptype") && ("enter" == c ? a.obj_doselect() : "exit" == c && a.obj_noselect())
    })
};
page.prototype.exit = function (flag) { this.disappear(); this.page_hide(); this._app.exit(this._n, flag); }
page.prototype.front = function () { this.disappear(); this.page_hide(); }
page.prototype.back = function () { this.page_show(); this.appear(); }
page.prototype.area_add = function (obj) { this._b_.__a(obj.getName(), obj); obj.addEventListener(p.EVENT, this, this.area_event); }
page.prototype.area_event = function (event) {
    var value = 0;
    event.type = p.AEVENT;
    if (!isNaN(event.value))
        value = event.value;
    if (event.cate == p.D0) {
        switch (event.kind) {
            case "DISPLAY_SELECT": {
                var __a_obj = this._b_.a_(event.name);
                $(p.k4 + event.name + p.A_SW).L(value);
                $(p.k4 + event.name + p.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
                this.bb[event.name] = value;
            } break;
            case "DISPLAY_SELECTBACK": {
                var __a_obj = this._b_.a_(event.name);
                $(p.k4 + event.name + p.A_SW).L(value);
                $(p.k4 + event.name + p.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_NOSELECT": {
                $(p.k4 + event.name + p.A_SW).Normal(value);
            } break;
            case "DISPLAY_ACTIVE": {
                var __a_obj = this._b_.a_(event.name);
                $(p.k4 + event.name + p.A_SW).Active(value);
                $(p.k4 + event.name + p.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_SHOW": {
                var __a_obj = this._b_.a_(event.name);
                $(p.k4 + event.name).show();
                $(p.k4 + event.name + p.A_SW).SetList(__a_obj._dx, __a_obj._dy, value);
            } break;
            case "DISPLAY_HIDE": {
                $(p.k4 + event.name).hide();
            } break;
        }
    }
    this._app.APPCur().getName() == this.getName() && this.dispatchEvent(event);
}
page.prototype.add = function (a) {
    void 0 != a.getName() && (this._j_.__a(a.getName(), a), this._b_.a_(a.getArea()) && this._b_.a_(a.getArea()) && this._b_.a_(a.getArea()).add(a), a.addEventListener(p.EVENT, this, this.item_event))
};
page.prototype.item_event = function (a) {
    switch (a.cate) {
        case p.O0:
            switch (a.kind) {
                case p.O6:
                case p.O7:
                case p.O8:
                case p.O9:
                case p.OO:
                case p.O4:
                case p.O5:
                    var b = a.name;
                    a.type = B.MOVE;
                    a.kind == p.O4 ? "" == this._f && (this._f = b) : a.kind == p.O5 && this._f == b && (this._f = "");
                    this._b_.a_(this._j_.a_(b).getArea()).dispatchEvent(a);
                    break;
                default:
                    a.type = p.IEVENT, this.dispatchEvent(a)
            }
            break;
        default:
            a.type = p.IEVENT, "DISPLAY" == a.cate && ("DISPLAY_SHOW" == a.kind && $(p.k4 + a.name).SetShow(a.value), "DISPLAY_SELECT" == a.kind && ($(p.k4 + a.name).SetValue(a.value), this.bb[a.name] = a.value)), this.dispatchEvent(a)
    }
};

page.prototype.getItems = function () { return this._j_; }
page.prototype.page_itemvalue_get = function (_) { return this._j_.__[_].getValue(); }
page.prototype.page_itemvalue_clean = function (_) { return this._j_.__[_].obj_clean(); }
page.prototype.onkey = function (a) {
    if ("" != this._f) this._j_.a_(this._f).onspecialkey(a);
    else {
        var d = this._b_._a_(),
            e = this,
            b = [];
        $.each(d, function (c, a) {
            c = e._b_.a_(a);
            c.obj_is_enable() && b.push(c)
        });
        $.each(b, function (c, b) {
            b.dispatchEvent(a)
        });
        this.onspecialkey(a)
    }
};

page.prototype.onkeyup = function (a) { if ("" != this._f) this._j_.a_(this._f).onspecialkey(a); else this.onspecialkeyup(a) };
page.prototype.PageExit = function (flag) { this.exit(flag); }

page.prototype.init = function () { }
page.prototype.appear = function () { }
page.prototype.disappear = function () { }
page.prototype.onspecialkey = function (event) { }
page.prototype.onspecialkeyup = function (event) { }
page.prototype.area_specialevent = function (event) { }
page.prototype.item_specialevent = function (event) { }

function kEvent(a, b, c, d, e) {
    QEvent.call(this, p.EVENT);
    "undefined" != typeof a && (this.name = a);
    "undefined" != typeof b && (this.itype = b);
    "undefined" != typeof c && (this.cate = c);
    "undefined" != typeof d && (this.kind = d);
    "undefined" != typeof e && (this.value = e)
};

function kobj(b, d, a, c, e, f, g) {
    if ("undefined" == typeof EventDispatcher) throw Error("EventDispatcher class is missing.");
    EventDispatcher.initialize(this);
    this.addEventListener(QEvent.KEYPRESS, this, this.onkey);
    this._page = b;
    this._n = a;
    this._type = c;
    "undefined" != typeof a && "" != a && (this.o = $(p.k4 + a), this.o.data(p.k0, b._name), this.o.data(p.k1, d), this.o.data(p.k2, a), this.o.data(p.k3, c), this.o.data(p.k5, ""), this.o.data(p.k6, p.D1), this.o.data(p.k7, p.T1), this.o.data(p.k8, p.P0))
};

kobj.HORIZONTAL = "hor";
kobj.VERTICAL = "ver";
kobj.prototype.init = function () {
    this.self_init();
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D1, this.o.data(p.k5)));
};
kobj.prototype.self_init = function () { };
kobj.prototype.getArea = function () { return this.o.data(p.k1); };
kobj.prototype.getName = function () { return this.o.data(p.k2); };
kobj.prototype.getControl = function () { return this.o.data(p.k7); };
kobj.prototype.obj_build = function () { this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D2, 0)) }
kobj.prototype.obj_hide = function () {
    this.o.data(p.k6, p.D1);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D1, 0))
}
kobj.prototype.obj_show = function () {
    this.o.data(p.k6, p.D2);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D2, this.o.data(p.k5)))
}
kobj.prototype.obj_noselect = function () {
    this.o.data(p.k8, p.P0);
    this.o.data(p.k6, p.D4);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D4, this.o.data(p.k5)))
}
kobj.prototype.obj_doselect = function () {
    this.o.data(p.k8, p.P1);
    this.o.data(p.k6, p.D3);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D7, this.o.data(p.k5)))
}
kobj.prototype.obj_doselect_act = function () {
    this.o.data(p.k8, p.P1);
    this.o.data(p.k6, p.D3);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D3, this.o.data(p.k5)))
}
kobj.prototype.obj_noactive = function () {
    this.o.data(p.k7, p.T2);
    this.o.data(p.k6, p.D3);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D7, this.o.data(p.k5)))
}
kobj.prototype.obj_active = function () {
    this.o.data(p.k7, p.T1);
    this.o.data(p.k6, p.D5);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D5, this.o.data(p.k5)))
}
kobj.prototype.obj_disable = function () {
    this.o.data(p.k7, p.T1);
}
kobj.prototype.obj_enable = function () {
    this.o.data(p.k7, p.T2);
}
kobj.prototype.obj_focusin = function () {
    this.o.data(p.k7, p.T3);
    this.o.data(p.k6, p.D6);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D6, this.o.data(p.k5)))
}
kobj.prototype.obj_focusout = function () {
    this.o.data(p.k7, p.T2);
    this.o.data(p.k6, p.D3);
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D3, this.o.data(p.k5)))
}
kobj.prototype.setValue = function (value) {
    this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D4, this.o.data(p.k5)))
    this.o.data(p.k5, value);
    if (this.obj_is_enable()) {
        this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D3, this.o.data(p.k5)))
    }
    else if (this.obj_is_yes()) {
        this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D5, this.o.data(p.k5)))
    }
    else {
        this.dispatchEvent(new kEvent(this._n, this._type, p.D0, p.D2, this.o.data(p.k5)))
    }

}

kobj.prototype.getValue = function () {
    return this.o.data(p.k5);
}
kobj.prototype.setValue_Only = function (value) {
    this.o.data(p.k5, value);
}
kobj.prototype.obj_out_type = function (out_flag) {
    this.dispatchEvent(new kEvent(this._n, this._type, p.O0, out_flag, 0))
}
kobj.prototype.obj_is_enable = function () {
    return this.o.data(p.k7) == p.T2;
};

kobj.prototype.obj_is_yes = function () {
    return this.o.data(p.k8) == p.P1;
};

kobj.prototype.obj_setselect = function (value) {
    this.o.data(p.k8, value);
}
kobj.prototype.getSelect = function () { return this.o.data(p.k8); };
kobj.prototype.obj_clean = function () { };

kobj.prototype.onkey = function (event) { }
kobj.prototype.onspecialkey = function (event) { }


B.MOVE = "AREA_MOVE";
B.DX = "dx";
B.DY = "dy";

B.SINGAL = "signal";
B.ROW = "row";
B.COL = "col";
B.GRID = "grid";



function B(f, b, c, d, e, a) {
    kobj.call(this, f, "", b, "area", c, d, e);
    this.cfg = a;
    "undefined" != typeof a && ("undefined" != typeof a.value && this.setValue(parseInt(a.value)), "undefined" != typeof a[B.DX] && (this._dx = parseInt(a[B.DX])), "undefined" != typeof a[B.DY] && (this._dy = parseInt(a[B.DY])), this._aa = B.GRID, 1 == this._dy && (this._aa = 1 == this._dx ? B.SINGAL : B.ROW), 1 == this._dx && (this._aa = 1 == this._dy ? B.SINGAL : B.COL));
    this._bb = [];
    "undefined" != typeof b && this.init();
    c == p.D2 ? this.obj_show() : this.obj_hide();
    d == p.T2 && this.obj_enable();
    this.obj_setselect(e)
}; B.prototype = new kobj;
B.prototype.self_init = function () {
    this._page.area_add(this);
    this.addEventListener(B.MOVE, this, this.move)
};
B.prototype.add = function (a) {
    this._bb.push(a)
};
B.prototype.getItems = function () {
    return this._bb
};
B.prototype.area_findfirst = function () {
    for (var a = 0; a < this._bb.length; a++) if (this._bb[a].obj_is_enable()) return a;
    return -1
};
B.prototype.area_findnext = function () {
    for (var a = this.getValue(), b = this._bb.length, c = 0; c < b; c++) if (this._bb[(a + c) % b].obj_is_enable()) return (a + c) % b;
    return a
};
B.prototype.area_findprev = function () {
    for (var a = this.getValue(), b = this._bb.length, c = 0; c < b; c++) if (this._bb[(a - c + b) % b].obj_is_enable()) return (a - c + b) % b;
    return a
};
B.prototype.move = function (a) {
    switch (a.kind) {
        case p.O6:
            this.obj_out_type(p.O6);
            break;
        case p.O5:
            this.obj_focusout();
            break;
        case p.O4:
            this.obj_focusin();
            break;
        default:
            switch (this._aa) {
                case B.GRID:
                    this.move_grid(a.kind);
                    break;
                case B.ROW:
                    this.move_row(a.kind);
                    break;
                case B.COL:
                    this.move_col(a.kind);
                    break;
                case B.SINGAL:
                    this.move_singal(a.kind)
            }
    }
};
B.prototype.move_grid = function (a) {
    switch (a) {
        case p.O7:
            this.setValue(GoUp(this._dx, this.getValue(), this._bb.length));
            break;
        case p.O8:
            this.setValue(GoDown(this._dx, this.getValue(), this._bb.length));
            break;
        case p.O9:
            this.setValue(GoLeft(this._dx, this.getValue(), this._bb.length));
            break;
        case p.OO:
            this.setValue(GoRight(this._dx, this.getValue(), this._bb.length))
    }
};
B.prototype.move_singal = function (a) {
    switch (a) {
        case p.O7:
        case p.O8:
        case p.O9:
        case p.OO:
            this.obj_out_type(a)
    }
};
B.prototype.move_row = function (a) {
    switch (a) {
        case p.O9:
            this.setValue(Decrease(this.getValue(), this._bb.length));
            break;
        case p.OO:
            this.setValue(Increase(this.getValue(), this._bb.length));
            break;
        case p.O7:
        case p.O8:
            this.obj_out_type(a)
    }
};
B.prototype.move_col = function (a) {
    switch (a) {
        case p.O7:
            this.setValue(Decrease(this.getValue(), this._bb.length));
            break;
        case p.O8:
            this.setValue(Increase(this.getValue(), this._bb.length));
            break;
        case p.O9:
        case p.OO:
            this.obj_out_type(a)
    }
};
B.prototype.onkey = function (a) {
    this.onselfkey(a);
    if (!(1 > this._bb.length)) {
        var b = this._bb[this.getValue()].getName();
        this._page.getItems().a_(b).dispatchEvent(a)
    }
};
B.prototype.onselfkey = function (a) { };
B.prototype.AreaCreate = function () {
    this.obj_build();
};
B.prototype.AreaSelect = function (a) {
    a < this._bb.length && this.setValue(a)
};

function C(e, f, a, g, b, c, d, h) {
    kobj.call(this, e, f, a, g, b, c, d);
    this.cfg = h;
    "undefined" != typeof a && this.init();
    b == p.D2 && this.obj_show();
    c == p.T2 && this.obj_enable();
    d == p.P1 && this.obj_doselect()
}
C.prototype.type = "item";
C.prototype.area = "";
C.prototype = new kobj;
C.prototype.self_init = function () {
    this.item_cfg_init();
    this._page.add(this)
};

C.prototype.item_cfg_init = function () { }

function D(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "input", e, f, g, d)
}
D.prototype = new C;
D.prototype.type = "input";
D.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = this.len, this.tmp = "0") : this.now = this.tmp.length), this.setValue(this.tmp)))
};
D.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
D.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.LEFT:
            1 <= this.now && (this.now-- , this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.setValue(this.tmp));
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
            this.now >= this.len && (this.now = 0, this.tmp = ""), this.tmp = this.tmp + "" + (a - KEYS.ZERO), this.now++ , this.setValue(this.tmp)
    }
};


function Y(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "password", e, f, g, d)
}
Y.prototype = new C;
Y.prototype.type = "password";
Y.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), this.now = 0, this.tmp = ""), this.setValue(this.tmp)))
};

Y.prototype.obj_clean = function () {
    this.tmp = "", this.now = 0;
};
Y.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
Y.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.LEFT:
            1 <= this.now && (this.now-- , this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.setValue(this.tmp));
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
            this.now < this.len && (this.tmp = this.tmp + "" + (a - KEYS.ZERO), this.now++ , this.setValue(this.tmp))
    }
};

function ChannelNum(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "channelnum", e, f, g, d)
}
ChannelNum.prototype = new C;
ChannelNum.prototype.type = "channelnum";
ChannelNum.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : "num" == a.format ? (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = this.len, this.tmp = "0") : (this.now = this.tmp.length, this.setValue(this.tmp))) : this.setValue(this.tmp))
};
ChannelNum.prototype.obj_clean = function () {
    this.tmp = "";
    this.now = 0
};
ChannelNum.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.ENTER:
            this.obj_out_type(p.O5);
            this.obj_out_type("OP_CHANEL_CHANGE");
            break;
        case KEYS.EXIT:
            this.obj_out_type(p.O5);
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
            this.now < this.len && (this.tmp = this.tmp + "" + a.code - KEYS.ZERO, this.now++ , this.setValue(this.tmp)), this.now >= this.len && (this.obj_out_type(p.O5), this.obj_out_type("OP_CHANEL_CHANGE"))
    }
};
ChannelNum.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
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
            this.obj_out_type(p.O4), this.now >= this.len ? (this.now = 0, this.tmp = "") : (this.tmp = this.tmp + "" + a - KEYS.ZERO, this.now++ , this.setValue(this.tmp))
    }
};

function E(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "netaddr", e, f, g, d)
}
E.prototype = new C;
E.prototype.type = "netaddr";
E.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = this.len, this.tmp = "0") : this.now = this.len), this.setValue(this.tmp)))
};
E.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
E.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.RIGHT:
            a = this.tmp.split(".");
            4 > a.length && (this.now = 4 * a.length, this.tmp += ".", this.setValue(this.tmp));
            break;
        case KEYS.LEFT:
            1 <= this.now && ("." == this.tmp[this.tmp.length - 1] && (this.now-- , this.tmp = this.tmp.substring(0, this.tmp.length - 1), a = this.tmp.split("."), this.now = 3 * a.length + a.length - 1), this.now-- , this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.setValue(this.tmp));
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
            this.now >= this.len && (this.now = 0, this.tmp = "");
            var b = this.tmp.split(".");
            if (!(25 == b[b.length - 1] && 5 < a - KEYS.ZERO)) {
                this.tmp = this.tmp + "" + (a - KEYS.ZERO);
                this.now++;
                a = this.tmp.split(".");
                b = a[a.length - 1];
                if (25 < b || 2 < b.length) 4 > a.length ? (this.now = 4 * a.length, this.tmp += ".") : this.now = this.len;
                this.setValue(this.tmp)
            }
    }
};

function F(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "datetime", e, f, g, d)
}
F.prototype = new C;
F.prototype.type = "datetime";
F.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = 0, this.tmp = "") : this.now = this.len), this.setValue(this.tmp)))
};
F.prototype.getMaxDate = function (a, b) {
    a = parseInt(a);
    b = parseInt(b, 10);
    return (new Date(a, b, 0)).getDate()
};
F.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
F.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.RIGHT:
            switch (this.now) {
                case 6:
                    a = this.tmp[this.tmp.length - 1];
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.tmp = this.tmp + "0" + a + "/";
                    this.now += 2;
                    this.setValue(this.tmp);
                    break;
                case 9:
                    a = this.tmp[this.tmp.length - 1];
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.tmp = this.tmp + "0" + a + "-";
                    this.now += 2;
                    this.setValue(this.tmp);
                    break;
                case 12:
                    a = this.tmp[this.tmp.length - 1];
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.tmp = this.tmp + "0" + a + ":";
                    this.now += 2;
                    this.setValue(this.tmp);
                    break;
                case 15:
                    a = this.tmp[this.tmp.length - 1], this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now += 1, this.setValue(this.tmp)
            }
            break;
        case KEYS.LEFT:
            if (1 <= this.now) {
                var b = this.tmp[this.tmp.length - 1];
                switch (b) {
                    case "/":
                        var c = this.tmp.split("/");
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                        3 == c.length ? this.now = 7 : 2 == c.length && (this.now = 4);
                        break;
                    case "-":
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                        this.now = 10;
                        break;
                    case ":":
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.now = 13
                }
                this.now--;
                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                this.setValue(this.tmp)
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
            if (!(this.now >= this.len)) {
                a -= KEYS.ZERO;
                this.tmp = this.tmp + "" + a;
                this.now++;
                if (11 > this.now) switch (b = this.tmp.split("/"), c = b[b.length - 1], b.length) {
                    case 1:
                        4 == c.length && (this.tmp += "/", this.now++);
                        break;
                    case 2:
                        if (1 == c.length) 1 < c && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a + "/", this.now += 2);
                        else if (2 == c.length) {
                            if (12 < c) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now--;
                                return
                            }
                            this.tmp += "/";
                            this.now++
                        }
                        break;
                    case 3:
                        var b = this.tmp.split("/"),
                            b = this.getMaxDate(b[0], b[1]),
                            e = parseInt(b / 10);
                        if (1 == c.length) parseInt(c) > e && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a + "-", this.now += 2);
                        else if (2 == c.length) {
                            if (parseInt(c) > b) {
                                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                this.now--;
                                return
                            }
                            this.tmp += "-";
                            this.now++
                        }
                } else if (12 == this.now || 13 == this.now) if (c = this.tmp.split("-"), c = c[c.length - 1], 1 == c.length) 2 < parseInt(c) && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a + ":", this.now += 2);
                else {
                    if (2 == c.length) if (23 < parseInt(c)) {
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                        this.now--;
                        break
                    } else this.tmp += ":", this.now++
                } else if (14 == this.now || 15 == this.now) if (c = this.tmp.split(":"), c = c[c.length - 1], 1 == c.length) 5 < parseInt(c) && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now++);
                else if (2 == c.length && 59 < parseInt(c)) {
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.now--;
                    break
                }
                this.setValue(this.tmp)
            }
    }
}; function G(a, b, c, d, e, f, g) {
    C.call(this, a, b, c, "date", d, e, f, g)
}
G.prototype = new C;
G.prototype.type = "date";
G.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = 0, this.tmp = "") : this.now = this.len), this.setValue(this.tmp)))
};
G.prototype.getMaxDate = function (a, b) {
    a = parseInt(a);
    b = parseInt(b, 10);
    return (new Date(a, b, 0)).getDate()
};
G.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(pxFrame.OP_EXIT)
    }
};
G.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {

        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.RIGHT:
            switch (this.now) {
                case 6:
                    a = this.tmp[this.tmp.length - 1];
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.tmp = this.tmp + "0" + a + "/";
                    this.now += 2;
                    this.setValue(this.tmp);
                    break;
                case 9:
                    a = this.tmp[this.tmp.length - 1], this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now += 1, this.setValue(this.tmp)
            }
            break;
        case KEYS.LEFT:
            if (1 <= this.now) {
                var b = this.tmp[this.tmp.length - 1];
                switch (b) {
                    case "/":
                        a = this.tmp.split("/"), this.tmp = this.tmp.substring(0, this.tmp.length - 1), 3 == a.length ? this.now = 7 : 2 == a.length && (this.now = 4)
                }
                this.now--;
                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                this.setValue(this.tmp)
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
            if (!(this.now >= this.len)) {
                a -= KEYS.ZERO;
                this.tmp = this.tmp + "" + a;
                this.now++;
                if (10 > this.now) {
                    var b = this.tmp.split("/"),
                        c = b[b.length - 1];
                    switch (b.length) {
                        case 1:
                            4 == c.length && (this.tmp += "/", this.now++);
                            break;
                        case 2:
                            if (1 == c.length) 1 < c && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a + "/", this.now += 2);
                            else if (2 == c.length) {
                                if (12 < c) {
                                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                    this.now--;
                                    return
                                }
                                this.tmp += "/";
                                this.now++
                            }
                            break;
                        case 3:
                            var b = this.tmp.split("/"),
                                b = this.getMaxDate(b[0], b[1]),
                                d = parseInt(b / 10);
                            if (1 == c.length) parseInt(c) > d && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now += 1);
                            else if (2 == c.length) {
                                if (parseInt(c) > b) {
                                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                                    this.now--;
                                    return
                                }
                                this.tmp += "-";
                                this.now++
                            }
                    }
                }
                this.setValue(this.tmp)
            }
    }
};

function H(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "time", e, f, g, d)
}
H.prototype = new C;
H.prototype.type = "time";
H.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this.type ? this.setValue(parseInt(a.value)) : ("num" == a.format && (this.old = a.value, this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = a.value.toString(), 0 == this.tmp ? (this.now = 0, this.tmp = "") : this.now = this.len), this.setValue(this.tmp)))
};
H.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
H.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.RIGHT:
            switch (this.now) {
                case 1:
                    a = this.tmp[this.tmp.length - 1];
                    this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                    this.tmp = this.tmp + "0" + a + ":";
                    this.now += 2;
                    this.setValue(this.tmp);
                    break;
                case 4:
                    a = this.tmp[this.tmp.length - 1], this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now += 1, this.setValue(this.tmp)
            }
            break;
        case KEYS.LEFT:
            if (1 <= this.now) {
                switch (this.tmp[this.tmp.length - 1]) {
                    case ":":
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.now = 2
                }
                this.now--;
                this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                this.setValue(this.tmp)
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
            if (!(this.now >= this.len)) {
                a -= KEYS.ZERO;
                this.tmp = this.tmp + "" + a;
                this.now++;
                if (1 == this.now || 2 == this.now) a = this.tmp.split("-"), a = a[a.length - 1], 1 != a.length && 2 == a.length && (this.tmp += ":", this.now++);
                else if (4 == this.now || 5 == this.now) {
                    var b = this.tmp.split(":"),
                        b = b[b.length - 1];
                    if (1 == b.length) 5 < parseInt(b) && (this.tmp = this.tmp.substring(0, this.tmp.length - 1), this.tmp = this.tmp + "0" + a, this.now++);
                    else if (2 == b.length && 59 < parseInt(b)) {
                        this.tmp = this.tmp.substring(0, this.tmp.length - 1);
                        this.now--;
                        break
                    }
                }
                this.setValue(this.tmp)
            }
    }
};

function I(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "checkbox", e, f, g, d)
}
I.prototype = new C;
I.prototype.type = "checkbox";
I.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && this.setValue(a.value)
};
I.prototype.onkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.setValue(!this.getValue());
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.LEFT:
            this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.obj_out_type(p.OO)
    }
};

function J(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "button", e, f, g);
    this.cfg = d
}
J.prototype = new C;
J.prototype.type = "button";
J.prototype.onkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.obj_out_type(p.O7);
            break;
        case KEYS.DOWN:
            this.obj_out_type(p.O8);
            break;
        case KEYS.LEFT:
            this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.obj_out_type(p.OO);
            break;
        case KEYS.RED:
            this.obj_out_type(p.UO);
            break;
        case KEYS.YELLOW:
            this.obj_out_type(p.U1);
            break;
        case KEYS.BLUE:
            this.obj_out_type(p.U2);
            break;
        case KEYS.GREEN:
            this.obj_out_type(p.U3);
            break;
    }
};

function K(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "select", e, f, g, d);
    "undefined" != typeof d && ("undefined" != typeof d.total && (this.total = parseInt(d.total)), "undefined" != typeof d.direction && (this.direction = d.direction))
}
K.prototype = new C;
K.prototype.item_cfg_init = function () {
    var a = this.cfg;
    "undefined" != typeof a && "undefined" != typeof a.value && ("select" == this._type ? this.setValue(parseInt(a.value)) : "num" == a.format ? (this.setValue(parseInt(a.value)), this.old = parseInt(a.value), this.len = a.len, this.max = a.max, this.min = a.min, this.tmp = parseInt(a.value), this.now = this.tmp.toString().length) : this.setValue(parseInt(a.value)))
};
K.prototype.select_increase = function () {
    this.setValue(Increase(this.getValue(), this.total))
};
K.prototype.select_decrease = function () {
    this.setValue(Decrease(this.getValue(), this.total))
};
K.prototype.select = function (a) {
    a < this.total && this.setValue(a)
};
K.prototype.onspecialkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
K.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.UP:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O7) : this.select_decrease();
            break;
        case KEYS.DOWN:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O8) : this.select_increase();
            break;
        case KEYS.LEFT:
            this.direction == kobj.HORIZONTAL ? this.select_decrease() : this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.direction == kobj.HORIZONTAL ? this.select_increase() : this.obj_out_type(p.OO);
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
            this.select(a - KEYS.ZERO)
    }
};

function L(a, b, c, e, f, g, d) {
    K.call(this, a, b, c, e, f, g, d)
}
L.prototype = new K;
L.prototype.onkey = function (a) {
    a = a.code;
    switch (a) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            this.obj_out_type(p.O3);
            break;
        case KEYS.UP:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O7) : this.select_decrease();
            break;
        case KEYS.DOWN:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O8) : this.select_increase();
            break;
        case KEYS.LEFT:
            this.direction == kobj.HORIZONTAL ? this.select_decrease() : this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.direction == kobj.HORIZONTAL ? this.select_increase() : this.obj_out_type(p.OO);
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
            this.select(a - KEYS.ZERO)
    }
};

function M(a, b, c, e, f, g, d) {
    C.call(this, a, b, c, "timecontrol", e, f, g, d);
    "undefined" != typeof d && ("undefined" != typeof d.total && (this.total = parseInt(d.total)), "undefined" != typeof d.direction && (this.direction = d.direction))
}
M.prototype = new C;
M.prototype.item_cfg_init = function () {
    var a = this.cfg;
    if ("undefined" != typeof a && "multiinput" == a.type) {
        this.team = this.cfg.dat;
        for (var a = a.value, b = [], c = 0; c < this.team.length; c++) b.push(this.team[c].value);
        this.setValue(a + "/" + b.join("-"))
    }
};
M.prototype.select_increase = function () {
    var a = this.getValue().split("/");
    this.set_id(Increase(a[0], this.total))
};
M.prototype.select_decrease = function () {
    var a = this.getValue().split("/");
    this.set_id(Decrease(a[0], this.total))
};
M.prototype.set_id = function (a) {
    var b = this.getValue().split("/");
    b[0] = a;
    this.setValue(b.join("/"))
};
M.prototype.set_value = function (a) {
    var b = this.getValue().split("/"),
        c = b[1].split("-");
    c[parseInt(b[0])] = a;
    this.setValue(b[0] + "/" + c.join("-"))
};
M.prototype.select_value_increase = function () {
    var a = this.getValue().split("/"),
        b = a[1].split("-"),
        a = parseInt(a[0]);
    this.set_value(Increase(b[a], this.mult_total))
};
M.prototype.select_value_decrease = function () {
    var a = this.getValue().split("/"),
        b = a[1].split("-"),
        a = parseInt(a[0]);
    this.set_value(Decrease(b[a], this.mult_total))
};
M.prototype.onspecialkey = function (a) {
    var b = this.getValue().split("/");
    b[1].split("-");
    b = parseInt(b[0]);
    switch (this.team[b].type) {
        case "num":
            this.onspecialkey_num(a, b);
            break;
        case "select":
            this.onspecialkey_select(a, b);
            break;
        case "time":
            this.onspecialkey_time(a, b)
    }
};
M.prototype.onspecialkey_select = function (a, b) {
    switch (a.code) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            this.obj_out_type(p.O5);
            break;
        case KEYS.UP:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O7) : this.select_value_decrease();
            break;
        case KEYS.DOWN:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O8) : this.select_value_increase();
            break;
        case KEYS.LEFT:
            this.direction == kobj.HORIZONTAL ? this.select_value_decrease() : this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.direction == kobj.HORIZONTAL ? this.select_value_increase() : this.obj_out_type(p.OO)
    }
};
M.prototype.onspecialkey_num = function (a, b) {
    switch (a.code) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            this.obj_out_type(p.O5)
    }
};
M.prototype.onspecialkey_time = function (a, b) {
    a = a.code;
    switch (a) {
        case KEYS.ENTER:
        case KEYS.EXIT:
            this.obj_out_type(p.O5);
            break;
        case KEYS.RIGHT:
            switch (this.mult_now) {
                case 1:
                    a = this.mult_tmp[this.mult_tmp.length - 1];
                    this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                    this.mult_tmp = this.mult_tmp + "0" + a + ":";
                    this.mult_now += 2;
                    this.set_value(this.mult_tmp);
                    break;
                case 4:
                    a = this.mult_tmp[this.mult_tmp.length - 1], this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1), this.mult_tmp = this.mult_tmp + "0" + a, this.mult_now += 1, this.set_value(this.mult_tmp)
            }
            break;
        case KEYS.LEFT:
            if (1 <= this.mult_now) {
                switch (this.mult_tmp[this.mult_tmp.length - 1]) {
                    case ":":
                        this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1), this.mult_now = 2
                }
                this.mult_now--;
                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                this.set_value(this.mult_tmp)
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
            this.mult_now >= this.mult_total && (this.mult_now = 0, this.mult_tmp = "");
            a -= KEYS.ZERO;
            this.mult_tmp = this.mult_tmp + "" + a;
            this.mult_now++;
            if (1 == this.mult_now || 2 == this.mult_now) if (b = this.mult_tmp.split("-"), b = b[b.length - 1], 1 == b.length) 2 < parseInt(b) && (this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1), this.mult_tmp = this.mult_tmp + "0" + a + ":", this.mult_now += 2);
            else {
                if (2 == b.length) if (23 < parseInt(b)) {
                    this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                    this.mult_now--;
                    break
                } else this.mult_tmp += ":", this.mult_now++
            } else if (4 == this.mult_now || 5 == this.mult_now) if (b = this.mult_tmp.split(":"), b = b[b.length - 1], 1 == b.length) 5 < parseInt(b) && (this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1), this.mult_tmp = this.mult_tmp + "0" + a, this.mult_now++);
            else if (2 == b.length && 59 < parseInt(b)) {
                this.mult_tmp = this.mult_tmp.substring(0, this.mult_tmp.length - 1);
                this.mult_now--;
                break
            }
            this.set_value(this.mult_tmp)
    }
};
M.prototype.onkey = function (a) {
    switch (a.code) {
        case KEYS.EXIT:
            this.obj_out_type(p.O6);
            break;
        case KEYS.ENTER:
            var b = this.getValue().split("/");
            a = b[1].split("-");
            b = parseInt(b[0]);
            switch (this.team[b].type) {
                case "checkbox":
                    a[b] = 1 - parseInt(a[b]);
                    this.set_value(a[b]);
                    break;
                case "num":
                case "select":
                case "time":
                    this.mult_tmp = a[b], this.mult_now = this.mult_total = this.team[b].total, this.obj_out_type(p.O4)
            }
            break;
        case KEYS.UP:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O7) : this.select_decrease();
            break;
        case KEYS.DOWN:
            this.direction == kobj.HORIZONTAL ? this.obj_out_type(p.O8) : this.select_increase();
            break;
        case KEYS.LEFT:
            this.direction == kobj.HORIZONTAL ? this.select_decrease() : this.obj_out_type(p.O9);
            break;
        case KEYS.RIGHT:
            this.direction == kobj.HORIZONTAL ? this.select_increase() : this.obj_out_type(p.OO)
    }
};


function SSD(a, b, c, d) {
    if (typeof EventDispatcher == 'undefined')
        throw new Error("EventDispatcher class is missing.");
    this._f_()._f__(a, b, c, d);
}
SSD.A_SW = " .asw";
SSD.D = "DISPLAY_";
SSD.C = "CONTROL_";
SSD.S = "SELECT_";
SSD.ID = "DISPLAY_SHOW";
SSD.IC = "CONTROL_ENABLE";
SSD.IS = "SELECT_NO";
SSD.Display = '<div class="lsw"><div class="item"  v-for="_ in lists":id="_.id" :ptype="_.type"><div v-if="_.type == \'mlist\'" class="text">{{ _.show }}</div><div v-if="_.type == \'list\'" v-bind:class="__.class" v-for="__ in _.show">{{ __.text }}<img v-show="__.show" v-if="__.icon" class="in_pic" v-bind:src="__.img" \></div><div v-if="_.type == \'menu\'" v-for="__ in _.options":id="__.id" class="litem"><div v-if="_.type == \'menu\'" class="list_icon"><img v-if="_.type == \'menu\'" class="in_pic" v-bind:src="__.img" onerror="nofind();"></div></div><div v-if="_.type == \'checkbox\'"  class="ititle">{{_.name}}</div><div v-if="_.type == \'input\'"  class="ititle">{{_.name}}</div><div v-if="_.type == \'pininput\'" class="pincode_value">{{_.value}}</div><div v-if="_.type == \'pincode\'"  class="ititle">{{_.name}}</div><div v-if="_.type == \'select\'"  class="ititle">{{_.name}}</div><div v-if="_.type == \'button\'"  class="ititle">{{_.name}}</div><div v-if="_.type == \'checkbox\'"  class="item_carea"></div><div v-if="_.type == \'input\'"  class="item_area"><div class="item_value">{{_.value}}</div></div><div v-if="_.type == \'pincode\'" class="item_area"><div class="item_value">{{_.value}}</div><div class="pincode_status"><img class="info_pic" src="img/correct.png" /></div></div><div v-if="_.type == \'select\'"  class="item_area"><div class="sel_left"></div><div class="item_value"><div v-for="__ in _.options" class="opt" :pvalue="__.value">{{__.show}}</div></div><div class="sel_right"></div></div></div></div>';
SSD.prototype._f_ = function () {
    EventDispatcher.initialize(this);
    return this;
}
SSD.prototype._f__ = function (a, b, c, d) {
    this._ = a;
    this.__ = b;
    this.___ = c;
    this.____ = d;
    this._____ = [{ "id": b + "_null", "type": "list", "show": [{ "class": "null", "text": "Null Data" }] }];
    $('#' + this.__ + SSD.A_SW).html(SSD.Display);
    this.d_ = this._f____({ "lists": [] });
    return this;
}


SSD.prototype._f___ = function () {
    var a = this.__,
        d = a._,
        c = a.__,
        b = a._____,
        g = a.___.status.split("_");
    a._d_ ? (a.do("noselect"), a.do("isenable") ? g[1] = "ENABLE" : g[1] = "DISABLE", $("#" + c + SSD.A_SW).find(p.L_SW).css("top", "0px")) : a.c = a.___.value;
    a._d_ = new B(d, c, SSD.D + g[0], SSD.C + g[1], SSD.S + g[2], a.___);
    if ("undefined" != typeof b && b && 0 < b.length) for (var e = 0; e < b.length; e++) {
        var f, h = b[e].value,
            k = b[e].len;
        f = b[e].id ? b[e].id : c + "_" + e;
        switch (b[e].type) {
            case "menu":
                new K(d, c, f, SSD.ID, SSD.IC, SSD.IS, { value: 0, total: b[e].options.length, direction: "hor" });
                break;
            case "button":
            case "list":
            case "mlist":
                new J(d, c, f, SSD.ID, SSD.IC, SSD.IS);
                break;
            case "select":
                new L(d, c, f, SSD.ID, SSD.IC, SSD.IS, { value: h, total: b[e].options.length, direction: "hor" });
                break;
            case "checkbox":
                new I(d, c, f, SSD.ID, SSD.IC, SSD.IS, { value: h });
                break;
            case "pininput": {
                new Y(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: 4 });
            } break;
            case "input":
                switch (b[e].format) {
                    case "num":
                        new D(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: k });
                        break;
                    case "ip":
                        new E(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: 15 });
                        break;
                    case "channelnum":
                        new ChannelNum(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: k });
                        break;
                    case "time":
                        new H(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: 5 });
                        break;
                    case "date":
                        new G(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: 10 });
                        break;
                    case "datetime":
                        new F(d, c, f, SSD.ID, SSD.IC, SSD.IS, { format: "num", value: h, len: 16 });
                        break;
                }break;
        }
    } else b.push("NULL"), new J(d, c, c + "_null", "DISPLAY_HIDE", "CONTROL_ENABLE", "SELECT_NO");
    "ENABLE" == g[1] && a.do("create");
    a.status = true;
    a.c < b.length ? a.do("select", a.c) : a.do("select", b.length - 1);
    "DISABLE" == g[1] && ("YES" == g[2] ? a.do("active") : a.do("noselect"));
    a.____ && a.____()
};
SSD.prototype._f____ = function (__) {
    var _ = new Vue({ el: '#' + this.__, data: __ });
    _._f_ = this._f___;
    _.__ = this;
    _._ = function (__) { this.lists = __; this.$nextTick(function () { this._f_(); }); }
    _._(this._____);
    return _;
}


SSD.prototype.refresh = function (a, b) {
    this.status = false;
    this._____ = a;
    "undefined" != typeof b ? (this.c = b, this.___.value = b) : this.c = 0;
    "undefined" != typeof a && a && 0 < a.length ? this.d_._(a) : this.d_._([{
        id: this.__ + "_null",
        type: "list",
        show: [{
            "class": "null",
            text: "Null Data"
        }]
    }]);
    delete a;
    return this;
};

SSD.prototype.temp = function () {
    this.status = false;
    this.c = 0;
    this.___.value = 0;
    this._____ = [{
        id: this.__ + "_null",
        type: "list",
        show: [{
            "class": "null",
            text: "Receiving Data"
        }]
    }];
    this.d_._(this._____);
    return this;
};




SSD.prototype.do = function (a, b) {
    var c = true, d = this._d_;
    switch (a) {
        case "create": { d.AreaCreate(); } break;
        case "active": { d.obj_active(); } break;
        case "noactive": { d.obj_noactive(); } break;
        case "noselect": { d.obj_noselect(); } break;
        case "disable": { d.obj_disable(); } break;
        case "enable": { d.obj_enable(); } break;
        case "show": { d.obj_show(); } break;
        case "hide": { d.obj_hide(); } break;
        case "select": { if (this.status) { d.AreaSelect(b); } } break;
        case "isenable": { c = d.obj_is_enable(); } break;
        case "getvalue": { c = d.getValue(); } break;
    }
    return c;
}