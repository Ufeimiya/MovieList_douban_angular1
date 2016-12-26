var config = angular.module('mlist.services.config', []);
config.factory('mlConfig', function () {
    var countPerPage = 12;
    return {
        // 为什么要用函数来返回countPerPage呢？
        // 为了不让人随便改变countPerPage的值，所以对它做一个封装，这样就是只读的了。
        getCountPerPage: function () {
            return countPerPage;
        }
    }
});