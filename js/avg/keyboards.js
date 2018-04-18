function KeyBoard(app, show) {
    page.call(this, app, "keyboard", show)
}





KeyBoard.keymap = [14, 14, 13, 12, 1];
KeyBoard.keymin = [0, 14, 28, 41, 53, 54];
KeyBoard.KeyArray = [];
KeyBoard.langs = ["eng", "tw"];

KeyBoard.Display = '<div id="keyboard"><div v-for="i in lists":class="i.t">{{i.v}}<span v-if="i.t == \'symbol\'" v-for="oi in i.o":class="oi.s">{{oi.v}}</span></div>';

KeyBoard.Create_KeyBoard = function () {
    APP.get().APPGet("keyboard").set();
}

KeyBoard.prototype = new page();


KeyBoard.prototype.init = function () {
    this.kb_snd = new SND("kdi", KeyBoard.Display, KeyBoard.Create_KeyBoard);
    this.set_mod("tw");
};

KeyBoard.prototype.addbg = function () {

}


KeyBoard.prototype.set_mod = function (type) {
    this.kid = 0;
    switch (type) {
        case "eng":
            {
                this.keymod = ENG_KeyBoard;
                this.lan_id = 0;
            }
            break;
        case "tw":
            {
                this.keymod = TW_KeyBoard;
                this.lan_id = 1;
            }
            break;
    }

    KeyBoard.KeyArray = [];
    for (var i = 0; i < this.keymod.length; i++) {
        KeyBoard.KeyArray.push.apply(KeyBoard.KeyArray, this.keymod[i]);
    }
    this.kb_snd.refresh(KeyBoard.KeyArray);
}


KeyBoard.prototype.change_mod = function () {
    this.lan_id = 1 - this.lan_id;
    var type = KeyBoard.langs[this.lan_id];

    switch (type) {
        case "eng":
            {
                this.keymod = ENG_KeyBoard;
                this.lan_id = 0;
            }
            break;
        case "tw":
            {
                this.keymod = TW_KeyBoard;
                this.lan_id = 1;
            }
            break;
    }

    KeyBoard.KeyArray = [];
    for (var i = 0; i < this.keymod.length; i++) {
        KeyBoard.KeyArray.push.apply(KeyBoard.KeyArray, this.keymod[i]);
    }
    this.kb_snd.refresh(KeyBoard.KeyArray);
}


KeyBoard.prototype.set = function () {
    this.shift = false;
    this.capslock = false;
    this.key_value = "";
    $("#keyboard").find("div:eq(" + this.kid + ")").css({
        "background-color": "rgb(228,106,0)"
    });

}

KeyBoard.prototype.appear = function () {}
KeyBoard.prototype.disappear = function () {}
KeyBoard.prototype.findline = function () {
    var i = 0;
    for (var i = 0; i < KeyBoard.keymin.length; i++) {
        if ((this.kid >= KeyBoard.keymin[i]) && (this.kid < KeyBoard.keymin[i + 1])) {
            break;
        }
    }
    console.log("findline", i);
    return i;
}

KeyBoard.prototype.onspecialkey = function (event) {
    var code = event.code;
    switch (code) {
        case KEYS.EXIT:
            {
                this.PageExit(1);
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
                $("#keyboard").find("div:eq(" + this.kid + ")").css({
                    "background-color": "#cacaca"
                });
                if (this.capslock) {
                    if ($("#keyboard").find("div:eq(" + this.kid + ")").hasClass('capslock')) {
                        $("#keyboard").find("div:eq(" + this.kid + ")").css({
                            "background-color": "#0177bf"
                        });
                    }
                }
                var new_val = code - KEYS.ZERO;
                if (new_val == 0) {
                    new_val = 10;
                }
                this.kid = new_val;
                $("#keyboard").find("div:eq(" + this.kid + ")").css({
                    "background-color": "rgb(228,106,0)"
                });
            }
            break;
        case KEYS.LEFT:
            {
                var line = this.findline();
                if (line < 4) {
                    var line = this.findline();
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "#cacaca"
                    });
                    if (this.capslock) {
                        if ($("#keyboard").find("div:eq(" + this.kid + ")").hasClass('capslock')) {
                            $("#keyboard").find("div:eq(" + this.kid + ")").css({
                                "background-color": "#0177bf"
                            });
                        }
                    }
                    var id = this.kid - KeyBoard.keymin[line];
                    this.kid = $.dec(id, 1, KeyBoard.keymap[line]) + KeyBoard.keymin[line];
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "rgb(228,106,0)"
                    });
                }
            }
            break;
        case KEYS.RIGHT:
            {
                var line = this.findline();
                if (line < 4) {
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "#cacaca"
                    });
                    if (this.capslock) {
                        if ($("#keyboard").find("div:eq(" + this.kid + ")").hasClass('capslock')) {
                            $("#keyboard").find("div:eq(" + this.kid + ")").css({
                                "background-color": "#0177bf"
                            });
                        }
                    }
                    var id = this.kid - KeyBoard.keymin[line];
                    this.kid = $.inc(id, 1, KeyBoard.keymap[line]) + KeyBoard.keymin[line];
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "rgb(228,106,0)"
                    });
                }
            }
            break;

        case KEYS.UP:
            {
                var line = this.findline();
                if (line > 0) {
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "#cacaca"
                    });
                    if (this.capslock) {
                        if ($("#keyboard").find("div:eq(" + this.kid + ")").hasClass('capslock')) {
                            $("#keyboard").find("div:eq(" + this.kid + ")").css({
                                "background-color": "#0177bf"
                            });
                        }
                    }
                    var id = this.kid - KeyBoard.keymin[line];
                    this.kid = (id >= KeyBoard.keymap[line] ? 0 : id) + KeyBoard.keymin[line - 1];
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "rgb(228,106,0)"
                    });
                }
            }
            break;

        case KEYS.DOWN:
            {
                var line = this.findline();
                if (line < 4) {
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "#cacaca"
                    });
                    if (this.capslock) {
                        if ($("#keyboard").find("div:eq(" + this.kid + ")").hasClass('capslock')) {
                            $("#keyboard").find("div:eq(" + this.kid + ")").css({
                                "background-color": "#0177bf"
                            });
                        }
                    }
                    var id = this.kid - KeyBoard.keymin[line];
                    var new_val = 0;
                    console.log("id", id, "max", KeyBoard.keymap[line + 1]);
                    if (id >= (KeyBoard.keymap[line + 1])) {
                        new_val = KeyBoard.keymap[line + 1] - 1;
                    } else {
                        new_val = id;
                    }
                    console.log("new_val", new_val);
                    this.kid = new_val + KeyBoard.keymin[line + 1];
                    $("#keyboard").find("div:eq(" + this.kid + ")").css({
                        "background-color": "rgb(228,106,0)"
                    });
                }
            }
            break;

        case KEYS.ENTER:
            {
                var key_val = $("#keyboard").find("div:eq(" + this.kid + ")");
                var character = key_val.html();

                if (key_val.hasClass('left-shift') || key_val.hasClass('right-shift')) {
                    $('.letter').toggleClass('uppercase');
                    $('.symbol span').toggle();
                    $('.left-shift').html("Shift &uarr;");
                    $('.right-shift').html("Shift &uarr;");
                    this.shift = true;
                    return;
                }
                if (key_val.hasClass('lang')) {
                    if (this.shift) {
                        this.shift = false;
                        $('.letter').toggleClass('uppercase');
                        $('.symbol span').toggle();
                        $('.left-shift').html("Shift");
                        $('.right-shift').html("Shift");
                    }
                    this.change_mod();
                    return;
                }


                if (key_val.hasClass('capslock')) {
                    if (this.shift) {
                        this.shift = false;
                        $('.letter').toggleClass('uppercase');
                        $('.symbol span').toggle();
                        $('.left-shift').html("Shift");
                        $('.right-shift').html("Shift");
                    }
                    $('.letter').toggleClass('uppercase');
                    this.capslock = !this.capslock;
                    return;
                }
                if (key_val.hasClass('delete')) {
                    this.key_value = this.key_value.substr(0, this.key_value.length - 1);
                    console.log("this.key_value", this.key_value);
                    return false;
                }


                if (key_val.hasClass('return')) {
                    //character = "\n";
                    return;
                }

                if (key_val.hasClass('symbol')) character = $('span:visible', key_val).html();
                if (key_val.hasClass('space')) character = ' ';
                if (key_val.hasClass('tab')) character = "\t";

                // Uppercase letter
                if (key_val.hasClass('uppercase')) character = character.toUpperCase();

                // Remove shift once a key is clicked.
                if (this.shift === true) {
                    $('.symbol span').toggle();
                    $('.letter').toggleClass('uppercase');
                    this.shift = false;
                    $('.left-shift').html("Shift");
                    $('.right-shift').html("Shift");
                }
                this.key_value = this.key_value + character;
                console.log("this.key_value", this.key_value);

            }
            break;





    }
};