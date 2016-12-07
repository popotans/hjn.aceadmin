function iFrameHeight(id) {
    var ifm = document.getElementById(id);
    var subWeb = document.frames ? document.frames[id].document : ifm.contentDocument;
    if (ifm != null && subWeb != null) {
        ifm.height = subWeb.body.scrollHeight + 50;
        //  ifm.width = subWeb.body.scrollWidth;
    }
}
var addTabs = function (options) {
    //var rand = Math.random().toString();
    //var id = rand.substring(rand.indexOf('.') + 1);
    id = "tab_" + options.id;
    var iframeid = 'if_' + id;
    window.location.hash = options.id + '!' + 'title' + "!" + options.url;// encodeURI(options.title)
    var url = window.location.protocol + '//' + window.location.host;
    options.url = url + options.url;

    $(".active").removeClass("active");
    //如果TAB不存在，创建一个新的TAB
    if (!$("#" + id)[0]) {
        //固定TAB中IFRAME高度
        mainHeight = $(document.body).height() - 90;
        
        //  if (mainHeight < 700) mainHeight = 700;
        //创建新TAB的title
        title = '<li role="presentation" id="tab_' + id + '"><a href="#' + id + '" aria-controls="' + id + '" role="tab" data-toggle="tab">' + options.title;
        //是否允许关闭
        if (options.close) {
            title += ' <i class="glyphicon glyphicon-remove" tabclose="' + id + '"></i>';
        }
        title += '</a></li>';
        //是否指定TAB内容
        if (options.content) {
            content = '<div role="tabpanel" class="tab-pane" id="' + id + '">' + options.content + '</div>';
        } else {//没有内容，使用IFRAME打开链接
            content = '<div role="tabpanel" class="tab-pane" id="' + id + '"><iframe id="' + iframeid + '" src="' + options.url + '" width="100%" height="' + mainHeight +
                    '" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="auto" allowtransparency="yes" onload="iFrameHeight(\'' + iframeid + '\')"></iframe></div>';
        }
        //加入TABS
        $(".nav-tabs").append(title);
        $(".tab-content").append(content);
    }
    //激活TAB
    $("#tab_" + id).addClass('active');
    $("#" + id).addClass("active");
};
var closeTab = function (id) {
    //如果关闭的是当前激活的TAB，激活他的前一个TAB
    if ($("li.active").attr('id') == "tab_" + id) {
        $("#tab_" + id).prev().addClass('active');
        $("#" + id).prev().addClass('active');
    }
    //关闭TAB
    $("#tab_" + id).remove();
    $("#" + id).remove();
};
$(function () {
    mainHeight = $(document.body).height() - 45;
    $('.main-left,.main-right').height(mainHeight);
    $("[addtabs]").click(function () {
        addTabs({ id: $(this).attr("id"), title: $(this).attr('title'), close: true });
    });

    $(".nav-tabs").on("click", "[tabclose]", function (e) {
        id = $(this).attr("tabclose");
        closeTab(id);
    });

    $(".mitem").each(function () {
        $(this).click(function () {
            var id = "tab_" + $(this).attr('id');
            var iframeid = 'if_' + id;
            window.location.hash = iframeid + '!' + options.url;
        });
    });

    function loadtabfromHash(hashStr) {
        var arr = hashStr.split("!");
        var hrefid = arr[0];
        var title = decodeURI(arr[1]);
        var url = arr[2];
      //  alert(hrefid + "title="+title+" url=" + url);
        addTabs({ id: hrefid, title: title, close: true, url: url });
    }

    window.onhashchange = function () {
        //var hashStr = location.hash.replace("#", "");
        //loadtabfromHash(hashStr);
    }

    var hashStr = location.hash.replace("#", "");
    if (hashStr != null && hashStr.length != 0 && hashStr.indexOf('!') > -1) {
        loadtabfromHash(hashStr);
    }

});