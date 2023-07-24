<?php
/*
 * @Author: 程英明
 * @Date: 2023-03-25 11:13:17
 * @LastEditTime: 2023-03-25 16:12:14
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\http.php
 * QQ:504875043@qq.com
 */

$http = new Swoole\Http\Server("127.0.0.1", 9501);

$http->on("request", function ($request, $response) {
    // 设置路由，如果请求的是Vite打包后的静态文件，则代理返回文件内容
    $url = str_replace('#', '', $request->server['request_uri']);
    // 如果URL发生了变化，则重定向到新的URL
    if ($url !== $request->server['request_uri']) {
        $response->header('Location', $url);
        $response->status(301);
        $response->end();
        return;
    }
    if ($request->server['request_uri'] === '/') {
        // 读取index.html文件内容
        $content = file_get_contents(__DIR__ . '/dist/index.html');
        $response->header('Content-Type', 'text/html');
        $response->end($content);
    } else {
        // 读取其他静态文件内容
        $content = file_get_contents(__DIR__ . '/dist' . $request->server['request_uri']);
        // 根据文件类型设置Content-Type
        $content_type = '';
        if (preg_match('/\.css$/', $request->server['request_uri'])) {
            $content_type = 'text/css';
        } elseif (preg_match('/\.js$/', $request->server['request_uri'])) {
            $content_type = 'application/javascript';
        } elseif (preg_match('/\.(png|jpe?g|gif)$/', $request->server['request_uri'])) {
            $content_type = 'image/' . substr($request->server['request_uri'], strrpos($request->server['request_uri'], '.') + 1);
        }
        $response->header('Content-Type', $content_type);
        $response->end($content);
    }
});

$http->start();
