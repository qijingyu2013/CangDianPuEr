class WeixinsBiquGetticketController {
  constructor ($scope) {
    'ngInject'
      $scope.title = "领取优惠券";
  //
  }

  $onInit () {}
}

export const WeixinsBiquGetticketComponent = {
  templateUrl: './views/app/components/weixins-biqu-getticket/weixins-biqu-getticket.component.html',
  controller: WeixinsBiquGetticketController,
  controllerAs: 'vm',
  bindings: {}
}
