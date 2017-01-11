<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBiquCouponTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('biqu_coupon', function (Blueprint $table) {
            $table->increments('id');
            $table->string('biquno');//币趣帐号
            $table->string('coupon');//优惠券
            $table->integer('state');//状态 1.未激活 2.未使用（已激活） 3.已使用 4.已过期 5.已作废
            $table->integer('type');//类型 1.满足交易条件送500元抵用券
            $table->timestamp('expstart');//有效期开始时间
            $table->timestamp('expend');//有效期结束时间
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('biqu_coupon');
    }
}
