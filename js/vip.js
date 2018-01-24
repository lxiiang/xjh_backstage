
function xuanxiangka(btn,list) {
    $(btn).each(function (i,e) {
        e.index=i;
        $(e).click(function () {
            $(btn).removeClass("mui-btn-blue");
            $(this).addClass("mui-btn-blue");
            $(list).hide();
            $(list).eq(i).show();
        })
    })
    $(".baobiao_list").css("width","100%")
}
xuanxiangka(".vip_btn",".vip_list");
xuanxiangka(".chongzhi_btn",".chongzhi_list");
xuanxiangka(".baobiao_btn",".baobiao_list");