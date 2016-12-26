var service = angular.module('mlist.services', []);
service.factory('mlJsonp', function ($rootScope) {

    // 计数器变量
    var count = 0;

    // url:jsonp访问的url，callback
    // callback：访问成功后，用于传递数据的函数，应该能够接受一个data对象：callback(data)
    return function (url, callback) {
        var funcName = 'callback' + count++;
        // 替换回调函数的名字
        var newUrl = url.replace('JSON_CALLBACK', funcName);
        console.log(newUrl);
        // 把回调函数放到window上
        window[funcName] = function (data) {
            callback(data);
            $rootScope.$apply();
            document.body.removeChild(scriptEl);
        };
        var scriptEl = document.createElement('script');
        scriptEl.src = newUrl;
        document.body.appendChild(scriptEl);
    }
});