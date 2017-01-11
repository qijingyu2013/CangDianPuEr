<?php
/**
 * Created by PhpStorm.
 * User: 123
 * Date: 2016-09-27
 * Time: 17:22
 */

namespace CangDianPuEr\app\Http\Models;

use Illuminate\Database\Eloquent\Model;
//use anlutro\cURL\Laravel\cURL;

class BiquService extends Model
{
    protected $table = 'biqu_coupon';
    protected $fillable = ['title', 'content'];
    protected $dates = ['created_at', 'updated_at'];

    public function biquToLogin(){
        dd(1);
//        $response = cURL::get('http://www.baidu.com');
////        dd($response);
//        var_dump($response->statusCode); // response status code integer (for example, 200)
//        var_dump($response->statusText); // full response status (for example, '200 OK')
//        echo $response->body;
//        var_dump($response->headers); // array of headers
//        var_dump($response->info); // array of curl info
//        exit;
    }
}