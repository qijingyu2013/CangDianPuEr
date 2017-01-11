class WeixinsBiquHaiyiserviceController {
  constructor ($scope) {
    'ngInject'
      $scope.title = "海逸专用";
  //
  }

  $onInit () {}
}

export const WeixinsBiquHaiyiserviceComponent = {
  templateUrl: './views/app/components/weixins-biqu-haiyiservice/weixins-biqu-haiyiservice.component.html',
  controller: WeixinsBiquHaiyiserviceController,
  controllerAs: 'vm',
  bindings: {}
}
