class PagesAflssybController {
  constructor ($scope) {
    'ngInject'
    $scope.directory=[
      {imgSrc:'img/index/l1.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l2.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l3.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l4.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l5.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l6.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l7.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l8.jpg',imgCls: 'img-responsive img-custom-3'}

    ];
  }

  $onInit () {}
}

export const PagesAflssybComponent = {
  templateUrl: './views/app/components/pages-aflssyb/pages-aflssyb.component.html',
  controller: PagesAflssybController,
  controllerAs: 'vm',
  bindings: {}
}
