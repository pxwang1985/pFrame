/*  Timer   */
var str_year = ["年"];
var str_month = ["月"];
var str_date = ["日"];

/*  MainMenu   */
var str_mainmenu = ["節目表", "包月視訊", "隨選視訊", "郵件訊息", "線上直播", "系統設定", "多媒體播放", "錄影機"];
var str_secmenu0 = ["節目表"];
var str_secmenu1 = ["電影選單", "影片排行榜", "影片搜尋", "播放清單", "系統設定"];
var str_secmenu2 = ["電影選單", "影片排行榜", "影片搜尋", "播放清單", "系統設定"];
var str_secmenu3 = ["郵件列表"];
var str_secmenu4 = ["線上直播"];
var str_secmenu5 = ["頻道搜尋", "進階設定", "本機咨訊", "郵件列表", "聯繫我們"];
var str_secmenu6 = ["電影", "音樂", "圖片"];
var str_secmenu7 = ["已錄節目", "預約節目錄影", "預約時段錄影", "預約錄影清單"];
var son_mainmenu = [str_secmenu0, str_secmenu1, str_secmenu2, str_secmenu3, str_secmenu4, str_secmenu5, str_secmenu6, str_secmenu7];

var id_secmenu0 = ["epg"];
var id_secmenu1 = ["film", "film_rank", "film_search", "film_record", "film_setting"];
var id_secmenu2 = ["movie", "test", "movie_search", "movie_record", "movie_setting"];
var id_secmenu3 = ["mail"];
var id_secmenu4 = ["live"];
var id_secmenu5 = ["prosearch", "advset", "info", "mail", "contactus"];
var id_secmenu6 = ["media", "music", "pic"];
var id_secmenu7 = ["record", "epg", "ordertime", "order"];

var son_id_mainmenu = [id_secmenu0, id_secmenu1, id_secmenu2, id_secmenu3, id_secmenu4, id_secmenu5, id_secmenu6, id_secmenu7];

var ft_str = ["电源灯测试", "数码管测试", "前面板按键测试", "智能卡测试", "外界遥控器测试", "USB1 测试", "USB2 测试", "Tuner 1 测试锁频灯", "Tuner 2 测试HDMI", "Tuner 3 测试CVBS", "Tuner 4 测试S/PDIF", "IP 测试", "MAC 测试"];

var str_pic_s = "img/";
var str_pic_e = ".png";
var str_audio_lang = "語言";
var str_audio_left = "左声道";
var str_audio_right = "右声道";
var str_audio_streo = "立体声";
var str_audio_mix = "混合";

var str_age_general = "普通级";
var str_age_parental = "保护级";
var str_age_teenage12 = "辅导级12";
var str_age_teenage15 = "辅导级15";
var str_age_restricted = "限制级";
var str_age_adult = "成人";

var str_pincode_setting = "密碼設定";
var str_poweron_setting = "開機鎖";
var str_parent_setting = "年齡控制";
var str_time_setting = "時間控制";

var str_enter_oldpincode = "输入密码：";
var str_enter_newpincode = "请输入新密码：";
var str_enter_confirmpincode = "请确认新密码：";

var qam_cfg = [{ "id": 0, "value": "16QAM" }, { "id": 1, "value": "32QAM" }, { "id": 2, "value": "64QAM" }, { "id": 3, "value": "128QAM" }, { "id": 4, "value": "256QAM" }];

var str_film_title = "包月视讯>电影选单";
var str_movie_title = "点选视讯>电影选单";

var str_media_title = "多媒體播放>電影";
var str_music_title = "多媒體播放>音樂";
var str_pic_title = "多媒體播放>圖片";

var str_ps_title = "系統設定>頻道搜尋";
var str_ps_choose = [{ "id": "auto_search", "name": "自動搜尋" }, { "id": "manual_search", "name": "手動搜尋" }];


/*  AdvSetting*/
var str_advset_title = "系統設定>進階設定";
var str_adc_choose = [{ "id": "frq_set", "name": "頻率設定" }, { "id": "display_set", "name": "顯示設定" }, { "id": "video_set", "name": "影音設定" },
{ "id": "watch_set", "name": "收視控制" }, { "id": "factory_default", "name": "出廠設定" }, { "id": "net_set", "name": "網絡設定" }, { "id": "wifi_set", "name": "WiFi設定" },
{ "id": "channel_edit", "name": "編輯喜好頻道" }, { "id": "autooff_set", "name": "自動關機設定" },];

var str_channel_id = "频道号";
var str_channel_name = "频道名称";
var str_fav = "喜爱";
var str_lock = "频道锁";

var str_adf = ["主頻點(MHz):", "符碼率(Kbps):", "調製方式(QAM):", "確定"]

var str_add = ["語言", "功能表透明度", "訊息顯示時間", "確定"];


var str_info_title = "系統設定>本机资讯";
var str_info_choose = ["机上盒咨询", "频道资讯", "USB资讯", "CA设定", "系统升级"];
var str_info_ios_text = ["軟體版本：", "發布時間：", "內核版本：", "MAC："];
var str_info_ios_value = ["DHC-310-TWT-00.03.09", "2017-10-27", "3.10.8", "4:8:019:58:8"];
var str_info_ioch_text = ["VPID：", "PCR：", "APID：", "符號率：", "頻率："];
var str_info_ioch_value = ["65638", "65638", "0", "5218Kpbs", "358MHz"];
var str_no_usb = "無法找到外接存儲設備";
var str_info_iou_text = ["磁碟大小：", "可用空間：", "檔案系統："];
var str_info_iou_value = ["7373M", "6152M", "FAT32"];
var str_info_ioca_sub = ["CA狀態信息", "密碼設定", "成人級別設置", "授權信息", "子母卡喂養"];
var str_info_cainfo_text = ["智能卡號：", "智能卡版本：", "CA版本：", "觀看級別："];
var str_info_capin_text = ["輸入密碼：", "請輸入新密碼：", "請確認新密碼："];
var str_info_scard = "智能卡不存在，请插入智能卡！";
var str_inconsistent_pin = "兩次新密碼輸入不一致請重新輸入";
var str_save_pin_success = "密碼設定保存成功";
var str_save_pin_error = "密碼設定保存失敗";
var rating_cfg = [{ "id": 0, "value": "0" }, { "id": 1, "value": "1" }, { "id": 2, "value": "2" }, { "id": 3, "value": "3" }, { "id": 4, "value": "4" }, { "id": 5, "value": "5" }, { "id": 6, "value": "6" }, { "id": 7, "value": "7" }, { "id": 8, "value": "8" }, { "id": 9, "value": "9" }, { "id": 10, "value": "10" }];
var rating_sel = "選擇級別：";
var str_entitle = "普通授權信息";
var str_product = "產品";
var str_entitle_status = "授權狀態";
var str_entitle_date = "授權日期";
var str_insert_master = "請插入母卡，并按確定鍵！";
var str_insert_slaver = "請插入子卡，并按確定鍵！";
var str_read_master_error = "讀母卡卡數據錯誤，喂養失敗！";
var str_write_slaver_error = "寫子卡數據錯誤，喂養失敗！";
var str_slaver_master_success = "喂養成功！";
var str_no_entitle = "沒有授權";
var str_have_entitle = "授權正常";

var str_timecontrol = "时间控制";

/*  EPG */
var str_epg_title = "節目表";
var str_epg_info_title = "孤單又燦爛的神-鬼怪(2)";
var str_epg_info_text = "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十";
var MB_ORDER_title_str = "預約錄影";
var MB_ORDER_TYPE_str = "選擇錄影方式";
var MB_ORDER_TYPE0_str = "單一節目錄影";
var MB_ORDER_TYPE1_str = "整部節目錄影";
var str_record = "錄影";
var str_back = "返回";
var str_confirm = "確定";

var str_epg_day = ["Sun.","Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat."];
var str_epg_fir = ["6/11 星期日", "6/12 星期一", "6/13 星期二", "6/14 星期三", "6/15 星期四", "6/16 星期五", "6/17 星期六"];
var str_epg_sec = ["19 Discovery", "20 动物星球频道", "21 天外天日本台", "22 CN卡通频道", "23 Disney迪士尼"];
var str_epg_cnew = ["1 AAA", "2 BBB", "3 CCC", "4 DDD", "5 EEE", "6 FFF", "7 GGG"];
var str_epg_event = ["06:00-07:00 李 金 平 新 聞 分 析 （重 播）", "07:00-07:30 馬心志英語教室 入籍英語教學", "07:30-08:00 半 點 養 生 坊", "08:00-08:30 晨 間 新 聞", "08:30-09:00 健 身 舞 广 场 舞", "9:00-10:00 兰 轩 时 间 赵少康时间 文茜的異想世界", "10:00-11:00 早晨的公園 现场节目 新聞大掃描", "11:00-12:00 健康知識家 健康樂活密碼 頂級名醫主講"];
var str_mail_title = "郵件訊息>郵件列表";
var str_maill_status = "正常 系統通知";
var str_maill_title = "標題 ";
var str_mail_message = "郵件訊息";
var str_mail_list = "郵件列表";
var str_mail_content = "郵件內容";
var str_mail_status = ["未读", "已读"];
var str_PLAYER_INFO = "介绍";
var str_PLAYER_AUDIO = "双语切换";
var str_reclist_title = "錄影機>已錄節目";
var str_orderlist_title = "錄影機>預約錄影清單";
var str_ordertime_title = "錄影機>預約時段錄影";
var str_factorytest_title = "工厂测试";
var str_timerdebug_title = "定时器测试";

var MB_SEARCH_title_str = "頻道搜尋";
var MB_SEARCH_Save_str = "保存節目";
var MB_SEARCH_TYPE0_str = "是";
var MB_SEARCH_TYPE1_str = "否";

var POWER_str = "待机";
var ENTER_str = "OK";
var MENU_str = "菜单";
var UP_str = "上";
var DOWN_str = "下";
var LEFT_str = "左";
var RIGHT_str = "右";

var MB_SEARCH_TYPE_str = "搜索中，停止搜索";
var MB_SEARCH_FAILED_str = "搜索失败，停止搜索";
var MB_ERROR_MESSAGE_str = "错误讯息";
var MB_ERROR_CONTEXT_str = "节目未授权，请洽天外天有限公司，电话:02-88885888";
var MB_NOLIST_str = "正在获取影片列表，请等待";
var CONFIRM_str = "确定";

var FAILED_str = "失败";
var SUCCESS_str = "成功";

var MB_LOADER_title_str = "系統升級";
var MB_LOADER_text_str = "是否執行系統升級？";

var MB_SETTING_title_str = "系统设置";
var MB_SETTING_MAINFRQ_str = "保存主频点修改";
var MB_SETTING_CHEDIT_str = "保存節目編輯修改";
var MB_SETTING_AUTOOFF_str = "保存自動關機修改";
var MB_SETTING_AV_str = "保存影音修改";
var MB_SETTING_NET_str = "保存網絡修改";
var MB_SETTING_FACTORYDEF_str = "恢复出厂设置";
var MB_SETTING_UPDATE_str = "系统升级";
var MB_SETTING_REBOOT_str = "升级完成,重新起机";

var PE_ENTER_PINCODE_str = "輸入密碼";
var PE_PINCODE_ERROR_str = "密码输入错误,";
var PE_PINCODE_TIME_str = "次,";

var MB_RECING_title_str = "節目錄製";
var MB_RECING_stop_str = "是否停止正在的錄製節目？";

var TV_str = "電視節目";
var RADIO_str = "廣播節目";
var ALL_PROGRAM_str = "所有節目";
var INPUT_FRQ_str = "輸入頻率(MHz)";
var SQMBL_str = "符碼率(Kbps)";
var QAM_str = "調製方式(QAM)";

var SEARCH_PROGRESS_str = "搜索進度";
var UPDATE_PROGRESS_str = "升级進度";
var SINGAL_STRENG = "信號強度";
var SINGAL_QUITY = "信號質量";
var str_order_num = "序號";
var str_state = "狀態";
var str_title = "標題";
var str_receipt_time = "接收時間";
var str_read = "閱讀";
var str_delete_all = "全部刪除";
var str_delete = "刪除";
var str_mail = [{ "id": 1, "status": "正常", "title": "系統通知", "time": "2017-09-21 13:31", "content": "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十" }, { "id": 2, "status": "正常", "title": "系統通知", "time": "2017-09-21 13:41", "content": "22222222222222222222222222222" }, { "id": 3, "status": "正常", "title": "系統通知", "time": "2017-09-21 13:51", "content": "33333333333333333333333333" }, { "id": 4, "status": "正常", "title": "系統通知", "time": "2017-09-21 14:31", "content": "44444444444444444444444444444" }, { "id": 5, "status": "正常", "title": "系統通知", "time": "2017-09-21 15:31", "content": "55555555555555555555555555555555555" }, { "id": 6, "status": "正常", "title": "系統通知", "time": "2017-09-21 16:00", "content": "66666666666666666666666666666666666666" }];
var str_prompt_info = "提示資訊";
var str_delete_allmail = "確認刪除全部郵件嗎？";
var str_delete_onemail = "確認刪除下述郵件嗎？";

var str_ca_err_e01 = "E01 請插入CA模塊";
var str_ca_err_e02 = "E02 未知的CA";
var str_ca_err_e03 = "E03 CA初始化失敗";
var str_ca_err_e04 = "E04 請插入智能卡";
var str_ca_err_e05 = "E05 系統不識別此卡";
var str_ca_err_e06 = "E06 智能卡失敗";
var str_ca_err_e07 = "E07 正在檢測智能卡";
var str_ca_err_e08 = "E08 CA EEPROM 錯誤";
var str_ca_err_e09 = "E09 智能卡存儲區錯誤";
var str_ca_err_e10 = "E10 ";
var str_ca_err_e11 = "E11 機卡不匹配";
var str_ca_err_e12 = "E12 請餵養智能卡";
var str_ca_err_e13 = "E13 沒有有效節目";
var str_ca_err_e14 = "E14 沒有授權";
var str_ca_err_e15 = "E15 接收到授權";
var str_ca_err_e16 = "E16 當前節目加密";
var str_ca_err_e17 = "E17 當前節目加密";
var str_ca_err_e18 = "E18 ";
var str_ca_err_e19 = "E19 CAT格式錯誤";
var str_ca_err_e20 = "E20 無運營商授權";
var str_ca_err_e21 = "E21 PMT格式錯誤";
var str_ca_err_e22 = "E22 當前節目加密";
var str_ca_err_e23 = "E23 正在解擾";
var str_ca_err_e24 = "E24 無本區域授權";
var str_ca_err_e25 = "E25 ";
var str_ca_err_e26 = "E26 系統不認識當前節目";
var str_ca_err_e27 = "E27 當前系統不在運行";
var str_ca_err_e28 = "E28 智能卡鎖定";
var str_ca_err_e29 = "E29 ";
var str_ca_err_e30 = "E30 智能卡不在工作期";
var str_ca_err_e31 = "E31 父母鎖控制";
var str_ca_err_e32 = "E32 國家代碼沒有授權";
var str_ca_err_e33 = "E33 沒有收到授權數據";
var str_ca_err_e34 = "E34 非授權機頂盒";
var str_ca_err_e35 = "E35 沒有信號";
var str_ca_err_e36 = "E36 ";
var str_pvr_err_conflict = "預約時間衝突";
var str_pvr_err_full = "預約隊列已滿";
var str_pvr_err_overtime = "預約時間已過期";
var str_pvr_err_usb_invalid = "未發現存儲設備";
var str_pvr_err_no_space = "存儲設備沒有足夠空間";
var str_pvr_err_exist = "節目已經預約";
var str_pvr_err_fail = "預約失敗";
var str_tuner_unlock = "無信號";
var str_program_interrupt = "節目中斷";

var str_parent_lock = "父母鎖";
var str_channel_lock = "節目鎖";
var str_ca_lock = "CA成人級別鎖";
