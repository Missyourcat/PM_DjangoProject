document.addEventListener('DOMContentLoaded', function() {
    // 获取所有一级菜单项
    const dropdowns = document.querySelectorAll('.has-dropdown > a');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();

            const submenu = this.nextElementSibling;

            // 关闭其他下拉菜单
            document.querySelectorAll('.hide_ul_2').forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('show');
                }
            });

            submenu.classList.toggle('show'); // 切换当前二级菜单的显示状态
        });
    });

    // 处理三级菜单显示
    const subdropdowns = document.querySelectorAll('.has-subdropdown > a');

    subdropdowns.forEach(subdropdown => {
        subdropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const subsubmenu = this.nextElementSibling;

            // 关闭其他三级菜单
            document.querySelectorAll('.hide_ul_3').forEach(menu => {
                if (menu !== subsubmenu) {
                    menu.classList.remove('show');
                }
            });

            subsubmenu.classList.toggle('show'); // 切换当前三级菜单的显示状态
        });
    });

    // 点击页面其他地方关闭所有下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            document.querySelectorAll('.hide_ul_2, .hide_ul_3').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});
