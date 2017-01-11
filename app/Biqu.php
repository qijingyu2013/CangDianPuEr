<?php
/**
 * Created by PhpStorm.
 * User: 123
 * Date: 2016-09-27
 * Time: 17:22
 */

namespace App;

use Illuminate\Database\Eloquent\Model;
use anlutro\cURL\Laravel\cURL;

class Biqu extends Model
{
    protected $table = 'biqu_coupon';
    protected $fillable = ['title', 'content'];
    protected $dates = ['created_at', 'updated_at'];

    protected $biqu_userName = 'biqu888';
    protected $biqu_password = '123456';
    protected $biqu_loginCode = '';
    protected $biqu_loginName = 'biqu888';
    protected $biqu_loginId = '1091';
    protected $biqu_uuid = '';
    protected $biqu_userSession = '1091';
    protected $biqu_JSessionId = '';
    protected $biqu_biqu

    public function biquToLogin(){
//        $response = cURL::get('https://admin.bo-ll.com:3719/login.html');
////        dd($response);
//        var_dump($response->statusCode); // response status code integer (for example, 200)
//        var_dump($response->statusText); // full response status (for example, '200 OK')
//        echo $response->body;
//        var_dump($response->headers); // array of headers
//        var_dump($response->info); // array of curl info
        $request = cURL::newRequest('post',
            'https://admin.bo-ll.com:3719/adminstock/login',
            ['userName' => $this->biqu_userName,
            'password' => $this->biqu_password
        ]);
        $response = $request->send();
        $unprocessedCookie = $response->headers['set-cookie'];
        $arr = explode( ';', $unprocessedCookie);
        $arr2 = explode( '=', $arr[0]);
        $this->biqu_JSessionId = $arr2[1];
        var_dump($response->statusCode); // response status code integer (for example, 200)
        var_dump($response->statusText); // full response status (for example, '200 OK')
        echo $response->body;
        var_dump($response->headers); // array of headers
        var_dump($response->info);
    }
    /*
     * 查询流水
     */
    public function biquToSearchList($telephone){
        $this->biquToLogin();
//        https://admin.bo-ll.com:3719/adminstock/user/269/selectUser?tele=18717838566&userSession=1091&page=1&rows=20
        $url = 'https://admin.bo-ll.com:3719/adminstock/user/269/selectUser?tele='.$telephone.'&userSession=1091&page=1&rows=20';
        $cookie = 'JSESSIONID='.$this->biqu_JSessionId.'; uSession='.$this->biqu_userSession.'; loginName='.$this->biqu_userName.'; loginId='.$this->biqu_loginId;
        $request = cURL::newRequest('get',
            $url,[])
            ->setHeader('Cookie', $cookie);
        $response = $request->send();
        var_dump($response->statusCode); // response status code integer (for example, 200)
        var_dump($response->statusText); // full response status (for example, '200 OK')
        echo $response->body;
        var_dump($response->headers); // array of headers
        var_dump($response->info); //
        exit;
    }
    /*
     * 查询订单
     */
    public function biquToSearchOrder($telephone){
        $this->biquToLogin();

    //        https://admin.bo-ll.com:3719/adminstock/user/269/selectUser?tele=18717838566&userSession=1091&page=1&rows=20
        $url = 'https://admin.bo-ll.com:3719/adminstock/futuresOrder/171/loadScoreFuturesOrderList?tele='.$telephone.'&startCreateDate=2016-09-01+21%3A00%3A00&userSession=1091&page=1&rows=20'.$telephone.'&userSession=1091&page=1&rows=20';
        $cookie = 'JSESSIONID='.$this->biqu_JSessionId.'; uSession='.$this->biqu_userSession.'; loginName='.$this->biqu_userName.'; loginId='.$this->biqu_loginId;
        $request = cURL::newRequest('get',
            $url,[])
            ->setHeader('Cookie', $cookie);
        $response = $request->send();
        var_dump($response->statusCode); // response status code integer (for example, 200)
        var_dump($response->statusText); // full response status (for example, '200 OK')
        echo $response->body;
        var_dump($response->headers); // array of headers
        var_dump($response->info); //
        exit;
    }
}