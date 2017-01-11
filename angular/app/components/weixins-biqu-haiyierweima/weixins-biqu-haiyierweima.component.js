class WeixinsBiquHaiyierweimaController {
  constructor ($scope) {
    'ngInject'
      $scope.title = "二维码";
  //
  }

  $onInit () {}
}

export const WeixinsBiquHaiyierweimaComponent = {
  templateUrl: './views/app/components/weixins-biqu-haiyierweima/weixins-biqu-haiyierweima.component.html',
  controller: WeixinsBiquHaiyierweimaController,
  controllerAs: 'vm',
  bindings: {}
}
