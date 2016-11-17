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

//Route::group(['middleware' => ['api']], function ($api) {
////    Route::get('/', 'IndexController@index');
//    $api->get('/api/informs/dtinforms', 'InformController@getDtinforms');
//});

Route::group(['middleware' => ['service']], function ($api) {
//    Route::get('/', 'IndexController@index');
    $api->get('/service/informs/dtinforms', 'InformController@getDtinforms');
});

//$api->group(['middleware' => ['web']], function ($api) {
////    $api->controller('informs', 'InformController');
//    $api->get('/informs/dtinforms', 'InformController@getDtinforms');
//});