<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/**
 * website
 */
Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'IndexController@index');
});

/*
 * json
 */
Route::group(['middleware' => ['service']], function ($api) {
//    $api->controller('informs', 'InformController');
    $api->get('/service/informs/dtinforms', 'InformController@getDtinforms');
    $api->get('/service/informs/inform-show/{id}', 'InformController@getDtinformsShow');
    $api->get('/service/informs/teaknowledges', 'InformController@getTeaknowledges');
    $api->get('/service/informs/teacultures', 'InformController@getTeacultures');
    $api->get('/service/informs/teacollections', 'InformController@getTeacollections');
    $api->get('/service/informs/tradeannouncements', 'InformController@getTradeannouncements');
    $api->get('/service/informs/traderules', 'InformController@getTraderules');
});

/*
 * weixin
 */
Route::group(['middleware' => ['weixin']], function ($api) {
//    $api->post('/biqu/haiyi/getcoupon', 'Weixin\BiquHaiyiController@getcoupon');
    $api->get('/biqu/haiyi/getcoupon', 'BiquHaiyiController@getcoupon');
});

/*
 * mobile
 */
Route::group(['middleware' => ['mob']], function () {
    Route::get('/mob', 'MobController@index');
});