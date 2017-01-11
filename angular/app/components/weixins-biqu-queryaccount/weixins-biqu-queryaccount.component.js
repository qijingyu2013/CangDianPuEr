class WeixinsBiquQueryaccountController {
  constructor ($scope) {
    'ngInject'
      $scope.title = "查询优惠券";
  //
  }

  $onInit () {}
}

export const WeixinsBiquQueryaccountComponent = {
  templateUrl: './views/app/components/weixins-biqu-queryaccount/weixins-biqu-queryaccount.component.html',
  controller: WeixinsBiquQueryaccountController,
  controllerAs: 'vm',
  bindings: {}
}
