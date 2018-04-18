var fs = require('fs');
var file = "cfg/page.json";
var result = JSON.parse(fs.readFileSync(file));
var page_path = "js/avg/"

var bases = ["js/base/jquery-3.2.1.min.js", "js/base/vue.min.js", "js/base/Gettext.js"];
var systems = ["js/system/str.js", "js/system/system.js"];
var cores = ["js/core/EventDispatcher.js", "js/core/page.js", "js/core/control.js", "js/core/timer.min.js"];
var pages = new Array();

var pos = ["langs/zh_CN.po", "langs/en.po"];


function CreateJs(path, element) {
    var str = '';
    var ClassName = element.name;

    ClassName = ClassName.toLowerCase();
    ClassName = ClassName.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    console.log(ClassName);
    var js_temp = 'function ' + ClassName + '(app, show) {\n	page.call(this, app, "' + element.name + '", show);\n}\n';


    if ((element.tree) && (element.tree.length > 0)) {
        for (var i = 0; i < element.tree.length; i++) {
            var sname = element.tree[i].sn;
            js_temp += ClassName + '.' + sname.toUpperCase() + ' = "' + sname + '";\n';
        }
    }
    js_temp += ClassName + '.PAGE_MAX = 7;\n' + ClassName + '.prototype = new page();\n' +
        ClassName + '.prototype.init = function () {\n';

    if ((element.tree) && (element.tree.length > 0)) {
        for (var i = 0; i < element.tree.length; i++) {
            var name = element.tree[i].name;
            var sname = element.tree[i].sn;
            var status = element.tree[i].show.toUpperCase() + "_" + element.tree[i].control.toUpperCase() + "_YES" ;
            js_temp += 'this.' + name + '_dat = this.set' + name + '();\n' +
                'this.' + name + '_snd = new SSD(this, ' + ClassName + '.' + sname.toUpperCase() + ', { "value": 0, "dx": 1, "dy": ' + ClassName + '.PAGE_MAX, "status": "'+ status +'" });\n' +
                'this.' + name + '_snd.refresh(this.' + name + '_dat);\n';
        }
    }
    js_temp += '};\n';


    js_temp += ClassName + '.prototype.addbg = function () {\n';
    js_temp += 'var str = \'<div class="heads"><div class="title">\'+str_epg_title+\'</div><div class="timeshow"></div><div class="time_icon"></div></div><div class="hor_line"></div><div class="test"></div>\';\n'
    js_temp += '$("#' + element.sn + ' .pbg").html(str);\n';
    js_temp += 'str = "";\n';
    js_temp += 'for (var i = 0; i < ' + ClassName + '.PAGE_MAX; i++) {\n';
    js_temp += 'str += \'<div class="item_bg"></div>\';\n}\n';

    if ((element.tree) && (element.tree.length > 0)) {
        for (var i = 0; i < element.tree.length; i++) {
            js_temp += '$("#' + element.tree[i].sn + ' .abg").html(str);\n';
        }
    }
    js_temp += '$("#' + element.sn + ' .abg").html(str);\n';
    js_temp += '};\n'

    if ((element.tree) && (element.tree.length > 0)) {
        for (var i = 0; i < element.tree.length; i++) {
            js_temp += ClassName + '.prototype.set'+element.tree[i].name+' = function () {\n';
            js_temp += 'var '+element.tree[i].name+'_dat = new Array();\n';
            js_temp += 'var old_dat = this.get_data();\n';    
            js_temp += 'for (var i = 0; i < 15; i++) {\n';
            js_temp += 'var d_obj = {"id":"'+element.tree[i].sn+'_"+i, "type": "list", "show": [] };\n';
            js_temp += 'd_obj.show.push({ "class": "fstatus", "icon": true, "show": true, "img": "img/dir.gif" });	\n';
            js_temp += 'd_obj.show.push({ "class": "text", "text": "Path name:=======" }); \n';
            js_temp += element.tree[i].name +'_dat.push(d_obj);\n';           
            js_temp += '}\n';
            js_temp += '//checkbox ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_checkbox", "type": "checkbox", "name": "Checkbox", "value": true});\n';
            js_temp += '//select ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_language", "type": "select", "name": "Select", "value": 0, "options": [{ "id": 0, "value": "English","show":_("en") }, { "id": 1, "value": "Chinese","show":_("chn") }, { "id": 2, "value": "Janpanese","show":_("jp") }]});\n';
            js_temp += '//button ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_fir", "type": "button", "name": "Confirm" });\n';
            js_temp += '//input ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_number", "type": "input", "name": "Input Num  len:3", "value": 57, "len": 3, "format": "num" });\n';
            js_temp += '//close pincode ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_pincode", "type": "input", "name": "Pincode", "value": "0000", "len": 4, "format": "pincode" });\n';
            js_temp += '//datetime ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_datetime", "type": "input", "name": "Date Time", "value": "2017/09/12-12:24", "len": 3, "format": "datetime" });\n';
            js_temp += '//close date ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_date", "type": "input", "name": "Date", "value": "2017/09/12", "len": 3, "format": "date" });\n';
            js_temp += '//time ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_time", "type": "input", "name": "Time", "value": "12:57", "format": "time" });\n';
            js_temp += '//ip ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_ip", "type": "input", "name": "IP", "value": "192.168.30.168", "len": 3, "format": "ip" });\n';
            js_temp += '//close channelnum ' + element.tree[i].name +'_dat.push({ "id": "'+element.tree[i].sn+'_channelnum", "type": "input", "name": "ChannelNum", "value": 57, "len": 3, "format": "channelnum" });\n';
            
            js_temp += 'return '+element.tree[i].name+'_dat;\n';
            js_temp += '}\n';
        }
    }

    js_temp += ClassName + '.prototype.area_specialevent = function (event) {\n';
    js_temp += 'var cate = event.cate;\n';
    js_temp += 'var kind = event.kind;\n';
    js_temp += 'var value = event.value;\n';
    js_temp += 'var name = event.name;\n';
    js_temp += 'if (cate == "OP_EVENT") {\n';
    js_temp += 'if (kind == "OP_OUT") {\n';
    js_temp += 'this.PageExit(1)\n';
    js_temp += '}\n';
    js_temp += '}\n';
    js_temp += '}\n';


    js_temp += ClassName + '.prototype.item_specialevent = function (event) {\n';
    js_temp += 'var cate = event.cate;\n';
    js_temp += 'var kind = event.kind;\n';
    js_temp += 'var value = event.value;\n';
    js_temp += 'var name = event.name;\n';

    js_temp += 'if (cate == "OP_EVENT") {\n';
    js_temp += 'if (kind == "OP_DO") {\n';
    js_temp += '$("#' + element.sn + ' .test").html(name + " Press OK " + this.page_itemvalue_get(name));';
    js_temp += '}\n';
    js_temp += '}\n';

    js_temp += 'if (cate == "DISPLAY") {\n';
    js_temp += 'if (kind == "DISPLAY_SELECT") {\n';
    js_temp += '$("#' + element.sn + ' .test").html(name + " Change Value " + this.page_itemvalue_get(name));';
    js_temp += '}\n';
    js_temp += '}\n';

    js_temp += '}\n';

    js_temp += ClassName + '.prototype.onspecialkey = function (event) {\n';
    js_temp += 'var code = event.code;\n';
    js_temp += 'switch (code) {\n';
    js_temp += '}\n';
    js_temp += '}\n';






    fs.writeFile('new/' + path, js_temp, {
        flag: 'w',
        encoding: 'utf-8',
        mode: '0666'
    }, function (err) {
        if (err) {
            console.log("文件写入失败")
        } else {
            console.log("文件写入成功");
        }
    });
}

function CreateTree(tree) {
    var str = '';
    tree.forEach(function (element) {
        var t = '';
        switch (element.type) {
            case "view":
                {
                    t = 'v';
                }
                break;
            case "vpage":
            case "spage":
            case "fpage":
            case "page":
                {
                    var a = page_path + element.name + ".js"
                    CreateJs(a, element)
                    pages.push(a);

                    t = 'p';
                }
                break;
            case "area":
                {
                    t = 'a';
                }
                break;
        }

        str += '<div id="' + element.sn + '" class="' + element.class + '" ptype="' + element.type + '">\n';
        str += '<div class="' + t + 'bg"></div>\n';
        str += '<div class="' + t + 'sw">\n';

        switch (element.type) {
            case "view":
            case "page":
            case "vpage":
            case "area":
                {
                    if (element.tree)
                        str += CreateTree(element.tree)
                }
                break;
        }
        str += '</div>\n</div>\n';
    }, this);
    return str;
}


var s = CreateTree(result.tree);

var hea = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n' +
    '<html xmlns="http://www.w3.org/1999/xhtml" lang="en">\n' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
    '<head>\n' +
    '<title>pxwangTest</title>\n' +
    '<link rel="stylesheet" type="text/css" href="css/style.css" />\n';
var ss = '';
for (var i = 0; i < bases.length; i++) {
    ss += '<script type="text/javascript" src="' + bases[i] + '"></script>\n'
}
for (var i = 0; i < systems.length; i++) {
    ss += '<script type="text/javascript" src="' + systems[i] + '"></script>\n'
}
for (var i = 0; i < cores.length; i++) {
    ss += '<script type="text/javascript" src="' + cores[i] + '"></script>\n'
}
for (var i = 0; i < pages.length; i++) {
    ss += '<script type="text/javascript" src="' + pages[i] + '"></script>\n'
}
ss += '<script type="text/javascript" src="js/index.js"></script>\n';

for (var i = 0; i < pos.length; i++) {
    ss += '<link rel="gettext" type="application/x-po" href="'+pos[i]+'" />\n'
}



var htt = hea + ss + '</head>\n<body>\n<div class="app">\n' + s + '</div>\n</body>\n</html>';
fs.writeFile('index.html', htt, {
    flag: 'w',
    encoding: 'utf-8',
    mode: '0666'
}, function (err) {
    if (err) {
        console.log("文件写入失败")
    } else {
        console.log("文件写入成功");
    }
})