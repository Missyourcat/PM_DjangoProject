function showFlowchart(id) {

    var container = document.getElementById('index_show_fc');
    container.innerHTML = ''; // 清空容器内容

    // 获取流程图的URL
    var url = document.getElementById(id + '_FC').getAttribute('data-url');

    // 创建一个img元素并设置其src属性
    var img = document.createElement('img');
    img.src = url;
    img.alt = '流程图';

    // 将img元素添加到显示区域
    container.appendChild(img);
}


document.getElementById('download-template-btn').addEventListener('click', function() {
    // 获取静态文件的URL
    var url = this.getAttribute('data-url');

    // 创建一个隐藏的a标签并触发下载
    var a = document.createElement('a');
    a.href = url;
    a.download = '数据模板.xlsx'; // 设置下载文件的名称
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});