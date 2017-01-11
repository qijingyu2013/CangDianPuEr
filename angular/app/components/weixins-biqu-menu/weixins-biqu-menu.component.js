class WeixinsBiquMenuController {
  constructor ($scope) {
    'ngInject'
      $scope.title = "首 页";
  //
  }

  $onInit () {}
}

export const WeixinsBiquMenuComponent = {
  templateUrl: './views/app/components/weixins-biqu-menu/weixins-biqu-menu.component.html',
  controller: WeixinsBiquMenuController,
  controllerAs: 'vm',
  bindings: {}
}
