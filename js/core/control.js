
function ControlEvent(type) {
    QEvent.call(this, type);
}

ControlEvent.prototype = new QEvent;
ControlEvent.SEARCH_START = "SEARCH_START";
ControlEvent.SEARCH_STOP = "SEARCH_STOP";

ControlEvent.CHANNEL_ID = "CHANNEL_ID";
ControlEvent.CHANNEL_NUM = "CHANNEL_NUM";

ControlEvent.VOLUME_SET = "VOLUME_SET";
ControlEvent.VOLUME_MUTE = "VOLUME_MUTE";
ControlEvent.VOLUME_UNMUTE = "VOLUME_UNMUTE";

ControlEvent.TIMENOW_REFRESH = "TIMENOW_REFRESH";
ControlEvent.DATE_CHANGE = "DATE_CHANGE";

ControlEvent.SET_CHANGE = "SET_CHANGE";                     //执行更改
ControlEvent.SAVE_CHANGE = "SAVE_CHANGE";                   //保存设置


function ViewEvent(type) {
    QEvent.call(this, type);
}

ViewEvent.prototype = new QEvent;
ViewEvent.SEARCH_RESULT = "SEARCH_RESULT";                  //搜索种的结果显示
ViewEvent.SEARCH_ENTER = "SEARCH_ENTER";                    //进入搜索的页面显示处理

ViewEvent.SEARCH_EXIT = "SEARCH_EXIT";                      //退出搜索的页面显示处理 

ViewEvent.CHANGE_CH_INDEX = "CHANGE_CH_INDEX";              //Ch选择设置 频道列表的光标焦点
ViewEvent.REFRESH_DATE_LIST = "REFRESH_DATE_LIST";          //刷新时间列表
ViewEvent.RECEIVE_DATE_LIST = "RECEIVE_DATE_LIST";          //刷新时间列表
ViewEvent.REFRESH_CHANNEL_LIST = "REFRESH_CHANNEL_LIST";    //刷新频道列表
ViewEvent.RECEIVE_CHANNEL_LIST = "RECEIVE_CHANNEL_LIST";    //刷新频道列表
ViewEvent.REFRESH_EVENT_LIST = "REFRESH_EVENT_LIST";        //刷新事件列表
ViewEvent.RECEIVE_EVENT_LIST = "RECEIVE_EVENT_LIST";        //刷新事件列表
ViewEvent.REFRESH_SELECT_EVENT = "REFRESH_SELECT_EVENT";    //刷新当前事件信息
ViewEvent.REFRESH_NOW_EVENT = "REFRESH_NOW_EVENT";          //刷新当前事件信息





function Control() {
    if (typeof EventDispatcher == 'undefined')
        throw new Error("EventDispatcher class is missing.");
    this.init();
}
Control.instance = null;

Control.get = function () {
    if (!Control.instance)
        Control.instance = new Control();
    return Control.instance;
};

Control.prototype.init = function () {
    EventDispatcher.initialize(this);
    this.module = {};
    this.control_obj = {};

    Channel.get();
    EventList.get();
    Search.get();
}


Control.prototype.start = function () {
    var event_id = 0;
    var ch_list = Channel.get().getdata();
    var e = new ViewEvent(ViewEvent.REFRESH_CHANNEL_LIST);
    e.data = ch_list;
    this.dispatchEvent(e);

    var date_list = GetDatelist();
    var e = new ViewEvent(ViewEvent.REFRESH_DATE_LIST);
    e.data = date_list;
    this.dispatchEvent(e);

    var event_list = EventList.get().getdata();
    var e = new ViewEvent(ViewEvent.REFRESH_EVENT_LIST);
    e.data = event_list;
    e.index = EventList.get().getTimeIndex(event_list);    
    event_id = e.index;
    this.dispatchEvent(e);

    var a = new ViewEvent(ViewEvent.REFRESH_SELECT_EVENT);
    a.data = EventList.get().getOneEvent(event_id);
    a.index = event_id;
    this.dispatchEvent(a);
}

var deepCopy = function (source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
}

var cmp = function (x, y) {
    if (x === y) { return true; }
    if (!(x instanceof Object) || !(y instanceof Object)) { return false; }
    if (x.constructor !== y.constructor) { return false; }
    for (var p in x) {
        if (x.hasOwnProperty(p)) {
            if (!y.hasOwnProperty(p)) { return false; }
            if (x[p] === y[p]) { continue; }
            if (typeof (x[p]) !== "object") { return false; }
            if (!Object.equals(x[p], y[p])) { return false; }
        }
    }

    for (p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) { return false; }
    }
    return true;
};

Control.prototype.Search = function (event) {

}

Control.prototype.Channel = function (event) {

}

Control.prototype.Date = function (event) {

}

Control.prototype.Event = function (event) {

}

Control.prototype.Data = function (event) {

}



Control.prototype.Do = function (event) {
    var page = event.page;
    var action = event.action;
    var params = event.params;
    if (typeof this.control_obj[action] == 'undefined') {
        this.control_obj[action] = new Array();
    }
    var alist = this.control_obj[action];
    var alen = alist.length;
    switch (alen) {
        case 0: {
            var aobj = { "page": page, "action": action, "status": "start", "params": params };
            alist.push(aobj);
            switch (action) {
                case "ch_change": {

                    console.log("Control.prototype.Do", alist[0]);
                    Channel.get().start(alist[0]);
                } break;
                case "event_change": {
                    EventList.get().start(alist[0]);
                } break;
                case "event_timer": {
                    EventList.get().start_null(alist[0]);
                    EventList.get().finish();
                } break;

                case "event_select": {
                    EventList.get().start_null(alist[0]);
                    EventList.get().finish();
                } break;

                case "search": {
                    Search.get().start(alist[0]);
                } break;
            }

        } break;
        case 1: {
            var ing_p = alist[0].params;
            if (cmp(ing_p, params)) { return; }
            else {
                alist.push({ "page": page, "action": action, "status": "wait", "params": params });
                //Req_Abort();
            }
        } break;
        case 2: {
            var ing_p = alist[0].params;
            if (cmp(ing_p, params)) { alist.pop(); return; }
            else {
                alist[1] = { "page": page, "action": action, "status": "wait", "params": params };
                //Req_Abort();
            }
        } break;
    }
}


Control.prototype.Action = function (params) {
    switch (params.action) {
        case "ch_change": {

        } break;
        case "date_change": {

        } break;

    }
}

Control.prototype.Cb = function (event) {
    var page = event.page;
    var action = event.action;
    var params = event.params;
    var status = event.status;
    var alist = this.control_obj[action];
    switch (status) {
        case "searchexit": {
            var e = new ViewEvent(ViewEvent.SEARCH_EXIT);
            this.dispatchEvent(e);
            delete (e);
        } break
        case "searching": {
            switch (action) {
                case "search": {
                    var e = new ViewEvent(ViewEvent.SEARCH_RESULT);
                    e.data = event.cb;
                    this.dispatchEvent(e);
                    delete (e);
                } break;
            }


        } break;

        case "stating": {
            switch (action) {
                case "ch_change": {
                } break;
                case "event_change": {
                    var e = new ViewEvent(ViewEvent.RECEIVE_EVENT_LIST);
                    this.dispatchEvent(e);
                    delete (e);
                } break;
            }


        } break;

        case "finish": {
            switch (action) {
                case "ch_change": {
                    var e = new ViewEvent(ViewEvent.CHANGE_CH_INDEX);
                    e.ch_id = params.ch;
                    e.page = page;
                    this.dispatchEvent(e);
                    if (e.page == "epg") {
                        var cmd = { "page": e.page, "action": "event_change", "params": { "ch": e.ch_id } };
                        Control.get().Do(cmd);
                    }

                }
                    break;
                case "event_change": {
                    var e = new ViewEvent(ViewEvent.REFRESH_EVENT_LIST);
                    e.data = EventList.get().getdata();
                    e.index = EventList.get().getTimeIndex(e.data);
                    this.dispatchEvent(e);
                } break;

                case "event_timer": {
                    var e = new ViewEvent(ViewEvent.REFRESH_SELECT_EVENT);
                    var data = EventList.get().getdata();
                    e.index = EventList.get().getTimeIndex(data);
                    if (e.index != 0) {                        
                        e.page = page;
                        e.data = EventList.get().getOneEvent(e.index);
                        console.log("event_timer:",e)
                        this.dispatchEvent(e);
                    }
                } break;

                case "event_select": {
                    var e = new ViewEvent(ViewEvent.REFRESH_SELECT_EVENT);
                    e.index = params.ev;
                    e.page = page;
                    e.data = EventList.get().getOneEvent(e.index);
                    this.dispatchEvent(e);
                } break;
            }
            alist.shift();
            if (alist.length > 0) {
                alist[0]["status"] = "start";
                switch (action) {
                    case "ch_change": {
                        Channel.get().start(alist[0]);
                    }
                        break;
                    case "event_change": {
                        EventList.get().start(alist[0]);
                    } break;
                }

            }
        } break;
        case "abort": {
            alist.shift();
            if (alist.length > 0) {
                alist[0]["status"] = "start";
                switch (action) {
                    case "ch_change": {
                        Channel.get().start(alist[0]);
                    }
                        break;
                    case "event_change": {
                        EventList.get().start(alist[0]);
                    } break;
                }

            }
        } break;
    }
}



function GetDatelist() {
    var week_dat = new Array();
    for (var i = 0, timestamp = new Date().getTime(); i < 7; i++ , timestamp += 24 * 60 * 60 * 1000) {
        var myDate = new Date(timestamp);
        var y = myDate.getUTCFullYear();
        var m = myDate.getUTCMonth() + 1;
        var d = myDate.getUTCDate();
        var day = myDate.getDay();
        delete (myDate);
        var new_date = { "month": m, "date": d, "day": day };
        week_dat.push(new_date);
    }
    return week_dat;
}




function Action() {
    if (typeof EventDispatcher == 'undefined')
        throw new Error("EventDispatcher class is missing.");
}



Action.prototype.init = function () {
    EventDispatcher.initialize(this);
    this.self_init();
}


Action.prototype.start = function (cfg) {
    console.log("Action.prototype.start", cfg);
    this.cfg = deepCopy(cfg);
    this.cfg["status"] = "stating";
    this.self_start(this.cfg["params"]);
    Control.get().Cb(this.cfg);
}

Action.prototype.start_null = function (cfg) {
    console.log("Action.prototype.start", cfg);
    this.cfg = deepCopy(cfg);
    this.cfg["status"] = "stating";
    Control.get().Cb(this.cfg);
}


Action.prototype.abort = function (event) {
    this.cfg["status"] = "abort";
    this.self_abort();
    Control.get().Cb(this.cfg);
}

Action.prototype.finish = function (event) {
    this.cfg["status"] = "finish";
    this.self_finish();
    Control.get().Cb(this.cfg);
}

Action.prototype.self_init = function () { }
Action.prototype.self_start = function (event) {
}
Action.prototype.self_abort = function (event) {
}
Action.prototype.self_finish = function (event) {
}
Action.prototype.cb = function (event) {
    this.self_cb();
}
Action.prototype.self_cb = function (event) {
}

function Channel() {
    Action.call();
    Channel.instance = this;
    this.init();
}
Channel.TIME = 1000;
Channel.prototype.t_test;

Channel.prototype = new Action();
Channel.prototype.last_ch = -1;
Channel.instance = null;

Channel.get = function () {
    if (!Channel.instance)
        Channel.instance = new Channel();
    return Channel.instance;
};


Channel.DoFinish = function () {
    console.log("Channel.DoFinish");
    Channel.get().finish();
};


Channel.prototype.self_init = function () {
    //DVB_Player Init;
}

Channel.prototype.getdata = function () {
    var Channellist = [];
    for (var i = 0; i < 16; i++) {
        var fav = false, lock = false;
        if (i % 2 == 0) { fav = true; lock = false; }
        else { fav = false; lock = true; }

        var new_ch = { "ch_id": i + 1, "ch_name": "Ch_name:" + (i + 1), "fav": fav, "lock": lock };
        Channellist.push(new_ch);
    }
    return Channellist;
}

Channel.prototype.self_start = function (cfg) {
    console.log("self_start");
    this.new_ch = cfg.ch;
    if (this.last_ch == this.new_ch) {
        this.abort();
        return;
    }
    /*
    switch (cfg.action) {
        case "id": {

        } break;
        case "num": {

        } break;
    }*/
    console.log(this.new_ch);
    if (this.new_ch == 1) {
        this.InputPin();
    }
    else {
        this.self_start_do();
    }


    return;
}

Channel.prototype.self_start_do = function () {
    clearTimeout(this.t_test);
    this.t_test = setTimeout('Channel.DoFinish()', Channel.TIME);
    return;
}

Channel.prototype.self_nolock = function () {
    this.last_ch = -1;
    this.abort();
    return;
}


Channel.prototype.InputPin = function () {
    var o = {};
    o.title_str = "Input Password";
    o.context_str = "";
    o.params = {};
    $("#pe .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    Pincode.get().set(o);
    Pincode.get().addEventListener(QEvent.PE_CORRECT, this, this.self_start_do);
    Pincode.get().addEventListener(QEvent.PE_ERROR, this, this.self_nolock);
    APP.get().APPSelect("pincode", 1);
}

Channel.prototype.self_abort = function () {
    console.log("self_abort");
    this.last_ch = -1;
    clearTimeout(this.t_test);
}

Channel.prototype.self_finish = function () {
    console.log("self_finish");
    this.last_ch = this.new_ch;
    clearTimeout(this.t_test);
}

Channel.prototype.self_cb = function (event) {

}




function EventList() {
    Action.call();
    EventList.instance = this;
    this.init();
}
EventList.prototype = new Action();
EventList.instance = null;

EventList.TIME = 1000;
EventList.prototype.t_test;

EventList.prototype.last_ch = -1;
EventList.prototype.new_ch = -1;

EventList.prototype.last_date = -1;
EventList.prototype.new_date = -1;


EventList.get = function () {
    if (!EventList.instance)
        EventList.instance = new EventList();
    return EventList.instance;
};


EventList.DoFinish = function () {
    EventList.get().finish();
};


EventList.prototype.self_init = function () {
    //DVB_Player Init;
}

EventList.prototype.getOneEvent = function (id) {
    var i = id;

    var sh = ("00" + (parseInt(i / 2))).slice(-2);
    var sm = ("00" + (parseInt(i % 2) * 30)).slice(-2);
    var eh = ("00" + (parseInt((i + 1) / 2))).slice(-2);
    var em = ("00" + (parseInt((i + 1) % 2) * 30)).slice(-2);
    var e_obj = { "event_id": i + 1, "event_name": "Date: " + (this.last_date + 1) + " Ch:" + (this.last_ch + 1) + " Event: " + ("00" + (i)).slice(-2) + "/" + 48, "event_time": sh + ":" + sm + "-" + eh + ":" + em, "order": true, "rec": true };
    return e_obj;
}

EventList.prototype.getdata = function () {
    var eventlist = [];
    //var myDate = new Date();
    //var ss = myDate.getSeconds();
    //delete (myDate);
    var date_len = 48;
    var date_dat = new Array();
    for (var i = 0; i < date_len; i++) {
        var sh = ("00" + (parseInt(i / 2))).slice(-2);
        var sm = ("00" + (parseInt(i % 2) * 30)).slice(-2);
        var eh = ("00" + (parseInt((i + 1) / 2))).slice(-2);
        var em = ("00" + (parseInt((i + 1) % 2) * 30)).slice(-2);
        var e_obj = { "event_id": i + 1, "event_name": "Date: " + (this.last_date + 1) + " Ch:" + (this.last_ch + 1) + " Event: " + ("00" + (i)).slice(-2) + "/" + date_len, "event_time": sh + ":" + sm + "-" + eh + ":" + em, "order": true, "rec": true };
        eventlist.push(e_obj);
    }
    return eventlist;
}
EventList.prototype.getTimeIndex = function (eventlist) {
    if ((0 < this.last_date) || (eventlist.length < 1)) {
        return 0;
    }
    else {
        var myDate = new Date();
        var h = myDate.getHours();
        var m = myDate.getMinutes();
        delete (myDate);
        var len = eventlist.length;
        for (var i = 0; i < len; i++) {
            var a = eventlist[i].event_time.split("-");
            var b = a[0].split(":");
            var eh = parseInt(b[0]);
            var em = parseInt(b[1]);
            var c = a[1].split(":");
            var eeh = parseInt(c[0]);
            var eem = parseInt(c[1]);
            if (eeh > h) {
                return i;
            }
            else if (h == eeh) {
                if (m < eem) {
                    return i;
                }
            }
        }

    }
    return 0;
}

EventList.prototype.self_start = function (cfg) {
    if ((typeof cfg != 'undefined') && (typeof cfg["ch"] != 'undefined')) {
        this.new_ch = cfg.ch;
    }
    if ((typeof cfg != 'undefined') && (typeof cfg["date"] != 'undefined')) {
        this.new_date = cfg.date;
    }
    if ((this.new_ch == this.last_ch) && (this.new_date == this.last_date)) {
        this.abort();
        return;
    }
    clearTimeout(this.t_test);
    this.t_test = setTimeout('EventList.DoFinish()', EventList.TIME);
    return;
}

EventList.prototype.self_abort = function (event) {
    clearTimeout(this.t_test);
}

EventList.prototype.self_finish = function () {
    this.last_ch = this.new_ch;
    this.last_date = this.new_date;
    clearTimeout(this.t_test);
}

EventList.prototype.self_cb = function (event) {

}




function Search() {
    Action.call();
    Search.instance = this;
    this.init();
}
Search.FINISHTIME = 6000;
Search.CBTIME = 1000;
Search.prototype.t_f;
Search.prototype.t_c;

Search.prototype = new Action();
Search.instance = null;

Search.get = function () {
    if (!Search.instance)
        Search.instance = new Search();
    return Search.instance;
};


Search.DoFinish = function () {
    var event = { "type": "Search Finish" }
    Search.get().self_cb(event);
    Search.get().self_save();
};

Search.DoCB = function () {
    var event = { "type": "New Channel Searched " }
    Search.get().self_cb(event);
};


Search.prototype.self_init = function () {
    //DVB_Player Init;
}

Search.prototype.getdata = function () {
}

Search.prototype.self_start = function (cfg) {
    if ((typeof cfg != 'undefined') && (typeof cfg["do"] != 'undefined')) {
        this.do = cfg.do;
    }

    switch (this.do) {
        case "start": {
            this.interupt = false;
            clearTimeout(this.t_f);
            clearTimeout(this.t_c);
            this.t_f = setTimeout('Search.DoFinish()', Search.FINISHTIME);
            this.t_c = setInterval('Search.DoCB()', Search.CBTIME);
            var event = { "type": "Starting Search " };
            Search.get().self_cb(event);
            this.finish();
        } break;
        case "stop": {
            this.finish();
            this.self_stop();
        } break;
    }

    return;
}

Search.prototype.self_stop = function () {
    this.interupt = true;
    this.MB_Interupt();
}

Search.prototype.stop_do = function () {
    clearTimeout(this.t_f);
    clearTimeout(this.t_c);
    var event = { "type": "Stop Search ?" };
    Search.get().self_cb(event);
    this.cfg["status"] = "searchexit";
    Control.get().Cb(this.cfg);
}

Search.prototype.self_save = function () {
    clearTimeout(this.t_f);
    clearTimeout(this.t_c);
    if (this.interupt) {
        APP.get().exit("messagebox");
    }

    var event = { "type": "Save.... " };
    Search.get().self_cb(event);
    this.MB_Save();
}

Search.prototype.save_do = function () {
    this.cfg["status"] = "searchexit";
    Control.get().Cb(this.cfg);
}


Search.prototype.self_cb = function (event) {
    this.cfg["status"] = "searching";
    this.cfg["cb"] = event;
    Control.get().Cb(this.cfg);
}



Search.prototype.MB_Interupt = function () {
    var o = {};
    o.title_str = "Title Name";
    o.context_str = "Are you sure to Interupt";
    o.defchoose = 0;
    o.dispear = 0;
    o.choose = new Array();
    o.choose.push("Yes");
    o.choose.push("No");
    //o.choose.push("Cancel");
    $("#mx .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    MessageBox.get().set(o);
    MessageBox.get().addEventListener(QEvent.MB_0, this, this.stop_do);
   
    APP.get().APPSelect("messagebox", 1)
}

Search.prototype.MB_Save = function () {
    var o = {};
    o.title_str = "Title Name";
    o.context_str = "Save Program";
    o.defchoose = 0;
    o.dispear = 0;
    o.choose = new Array();
    o.choose.push("Confirm");
    //o.choose.push("Cancel");
    $("#mx .pbg").html('<div class="gbg"></div><div class="group"></div><div class="gsw"><div class="mx_head"><div class="mx_title">' + o.title_str + '</div></div><div class="mx_context">' + o.context_str + '</div></div>');
    MessageBox.get().set(o);
    MessageBox.get().addEventListener(QEvent.MB_0, this, this.save_do);
    APP.get().APPSelect("messagebox", 1)
}