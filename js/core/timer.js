function TimeShow()
{ 
    TimeShow.RefreshTime();
    this.timehandle = setInterval(TimeShow.RefreshTime, 1000);

}

TimeShow.prototype.timehandle = null;
TimeShow.prototype.pname = null;

TimeShow.instance = null;

TimeShow.get = function ()
{
    if (!TimeShow.instance)
        TimeShow.instance = new TimeShow();

    return TimeShow.instance;
};


TimeShow.RefreshTime = function ()
{
    var myDate = new Date();
    //var day = myDate.getDay();
    //var ss = myDate.getSeconds();
	//var gzone = myDate.getTimezoneOffset() / 60;	
	//var week_str = "Sun,Mon,Tue,Wed,Thu,Fri,Sat";
    var date_str;
    var time_str;
    date_str = myDate.getUTCFullYear() + _("year");
    date_str += ("00" + (myDate.getUTCMonth() + 1)).slice(-2) + _("month");
    date_str += ("00" + myDate.getUTCDate()).slice(-2)+_("date");

    time_str = ("00" + myDate.getHours()).slice(-2) + ":";
    time_str += ("00" + myDate.getMinutes()).slice(-2);// + ":";
    //time_str += ("00" + ss).slice( - 2);	
	$(".timeshow").html(date_str + " " + time_str);
    myDate = null,date_str = null,time_str = null;
    console.log("TimeShow.RefreshTime");
}
