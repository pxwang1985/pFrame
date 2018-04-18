function Searchresult(app, show) {
    page.call(this, app, "searchresult", show);
}
Searchresult.PAGE_MAX = 7;
Searchresult.prototype = new page();
Searchresult.prototype.init = function () {
    this.control = Control.get();
	this.control.addEventListener(ViewEvent.SEARCH_RESULT, this, this.search_result);
    this.control.addEventListener(ViewEvent.SEARCH_EXIT, this, this.search_exit);
};


Searchresult.prototype.search_result = function (event) {
    var html = $("#st .psw").html();
    $("#st .psw").html(html + "</br>"+event.data.type);

}

Searchresult.prototype.search_exit = function (event) {
    this.PageExit(1);
}

Searchresult.prototype.addbg = function () {
    var str = '<div class="heads"><div class="title">' + "Search Result" + '</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div>';
    $("#st .pbg").html(str);
    str = "";
    for (var i = 0; i < Searchresult.PAGE_MAX; i++) {
        str += '<div class="item_bg"></div>';
    }
    $("#st .abg").html(str);
};
Searchresult.prototype.area_specialevent = function (event) {
}
Searchresult.prototype.item_specialevent = function (event) {
}
Searchresult.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:{
            var event = { "page": this.getName(), "action": "search", "params": {"do":"stop"} };			
			Control.get().Do(event);
        }break;
    }
}
