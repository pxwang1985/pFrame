function Ts() {
    Ts.rt();
    this.th = setInterval("Ts.rt()", 1000);
    this.do = 0;

}

Ts.prototype.th = null;

Ts.i = null;

Ts.get = function () {
    if (!Ts.i)
        Ts.i = new Ts();

    return Ts.i;
};


Ts.rt = function () {
    var a = new Date();
    var b;
    var c;
    b = a.getUTCFullYear() + _("year");
    b += ("00" + (a.getUTCMonth() + 1)).slice(-2) + _("month");
    b += ("00" + a.getUTCDate()).slice(-2) + _("date");

    c = ("00" + a.getHours()).slice(-2) + ":";
    c += ("00" + a.getMinutes()).slice(-2);// + ":";
    //c += ("00" + ss).slice( - 2);	
    $(".timeshow").html(b + " " + c);
    if(a.getMinutes()%2==0){
        if(this.do == 0)
        {            
            this.do = 1;
            var event = { "page": "app", "action": "event_timer", "params": {} };
            Control.get().Do(event);
        }
        
    }
    else
    {
        this.do = 0;
    }
    a = null, b = null, c = null;

    

    
}
