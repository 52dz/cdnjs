jQuery(document).ready(function($) {
    // 动态应用样式到复制按钮
    $('.copy-to-clipboard').css({
        'backgroundColor': '#F04494', // 主题颜色
        'color': '#ffffff', // 字体颜色
        'border': 'none', // 去除边框
        'padding': '8px 16px', // 内边距
        'textAlign': 'center', // 文本居中
        'textDecoration': 'none', // 去除文本装饰
        'display': 'inline-block', // 行内块级元素
        'fontSize': '14px', // 字体大小
        'margin': '4px 2px', // 外边距
        'cursor': 'pointer', // 鼠标样式为指针
        'borderRadius': '20px', // 边框圆角效果
        'boxShadow': 'none', // 取消阴影效果
        'transition': 'background-color 0.3s ease' // 背景颜色变化的过渡效果
    }).hover(function() {
        // 鼠标悬停时的样式
        $(this).css('backgroundColor', '#ff66a9'); // 悬停时的背景颜色
    }, function() {
        // 鼠标离开时的样式
        $(this).css('backgroundColor', '#F04494'); // 主题颜色
    });

    // 复制到剪贴板的功能
    $('.copy-to-clipboard').click(function() {
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val($(this).attr('data-copy-content')).select();
        document.execCommand("copy");
        $temp.remove();
        alert("内容已复制！");
    });
});
