<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
//use CangDianPuEr\app\Http\Models\BiquService;
use Illuminate\Http\Request;
use Input;
use App\Biqu;


class BiquHaiyiController extends Controller
{
    //未激活
    const state_no_active = 1;
    //未使用（已激活）
    const state_no_used = 2;
    //已使用
    const state_used = 3;
    //已过期
    const state_exp = 4;
    //已作废
    const state_void = 5;

    //500元抵用券
    const type_active_500 = 1;
    //临时占用
    const type_active_tmp = 2;

    public function getCoupon(){
//        dd(1);
//        BiquService::biquToLogin();
        $biqu = new Biqu();
        $biqu->biquToSearch('18717838566');
//        $curl = new cURL;
//        $response = cURL::get('http://www.baidu.com');
////        dd($response);
//        var_dump($response->statusCode); // response status code integer (for example, 200)
//        var_dump($response->statusText); // full response status (for example, '200 OK')
//        echo $response->body;
//        var_dump($response->headers); // array of headers
//        var_dump($response->info); // array of curl info
        exit;

    }


}
