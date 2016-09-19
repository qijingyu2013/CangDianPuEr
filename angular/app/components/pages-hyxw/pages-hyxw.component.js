class PagesHyxwController {
  constructor ($scope) {
    'ngInject'
    $scope.directory = [
      {id:0, imgArr:[
        {imgSrc: 'img/index/l1.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'}
      ]},
      {id:1, imgArr:[
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'}
      ]},
      {id:2, imgArr:[
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'}
      ]},
      {id:3, imgArr:[
        {imgSrc: 'img/index/l4.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'}
      ]}
    ];
    $scope.myInterval = 1000;//循环间隔 3s
    $scope.noWrapSlides = false;
    $scope.noTransition = false;
    $scope.active = 0;
    //$scope.totop = function()
    //{
    //  //javascript:
    //  window.scrollTo(0,0);
    //
    //}
  }

  $onInit () {}
}

export const PagesHyxwComponent = {
  templateUrl: './views/app/components/pages-hyxw/pages-hyxw.component.html',
  controller: PagesHyxwController,
  controllerAs: 'vm',
  bindings: {}
}
