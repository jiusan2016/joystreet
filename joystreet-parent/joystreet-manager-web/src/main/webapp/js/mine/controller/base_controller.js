// 基础控制
app.controller('baseController', function($scope){
    // 初始化条件查询参数对象
    $scope.search = {};

    // 选择的数据
    $scope.selectIds = [];

    // 重新加载数据
    $scope.reloadList = function () {
        $scope.queryByPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage, $scope.search);
    }

    // 配置分页
    $scope.paginationConf = {
        currentPage : 1,
        itemsPerPage : 10,
        perPageOptions: [5,10,15,20,25,30],
        onChange: function () {
            $scope.reloadList();
        }
    };

    // 选择所有
    $scope.selectAll = function (event, cbname) {
        var cbs = document.getElementsByName(cbname);
        for(var i=0;i<cbs.length;i++){
            cbs[i].checked = event.target.checked;
        }
        if(event.target.checked){
            for(var i=0;i<$scope.list.length;i++){
                var id = $scope.list[i].id;
                if($scope.list.indexOf(id) == -1){
                    $scope.selectIds.push(id);
                }
            }
        }else{
            $scope.selectIds = [];
        }
    }

    // 选择单个
    $scope.updateSelection = function (checked, id){
        // 如果复选框为选中状态
        if(checked){
            $scope.selectIds.push(id);
        }else{
            // 获得ID在数组中的索引
            var index = $scope.selectIds.indexOf(id);
            if(index != -1){
                // 剔除
                $scope.selectIds.splice(index, 1);
            }
        }
    };
});