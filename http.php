<?php
/*
 * @Author: 程英明
 * @Date: 2023-03-25 11:13:17
 * @LastEditTime: 2023-07-25 09:17:08
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\http.php
 * QQ:504875043@qq.com
 */

$http = new Swoole\Http\Server("127.0.0.1", 9501);

$http->set(array(
    // 'reactor_num'   => 2,     // 线程数
    'worker_num'    => 1,     // 进程数
    // 'backlog'       => 128,   // 设置Listen队列长度
    // 'max_request'   => 50,    // 每个进程最大接受请求数
    // 'dispatch_mode' => 1,     // 数据包分发策略
    // 'daemonize' => false,
    // 'open_tcp_keepalive' => true,
    // 'tcp_keepidle' => 60, //4s没有数据传输就进行检测
    // 'tcp_keepinterval' => 1, //1s探测一次
    // 'tcp_keepcount' => 5, //探测的次数，超过5次后还没回包close此连接
    'heartbeat_idle_time'      => 60, // 表示一个连接如果60秒内未向服务器发送任何数据，此连接将被强制关闭
    'heartbeat_check_interval' => 60,  // 表示每60秒遍历一次
    // 'task_enable_coroutine' => true,
    // 'task_worker_num' => 4,

));

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
