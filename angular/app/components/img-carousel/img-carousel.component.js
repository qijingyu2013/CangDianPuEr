class ImgCarouselController {
  constructor ($scope) {
    'ngInject'

    $scope.directory = [
      {id:0, imgSrc: 'img/index/l1.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:1, imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:2, imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:3, imgSrc: 'img/index/l4.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:4, imgSrc: 'img/index/l5.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:5, imgSrc: 'img/index/l6.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:6, imgSrc: 'img/index/l7.jpg', imgCls: 'img-responsive img-custom-3'},
      {id:7, imgSrc: 'img/index/l8.jpg', imgCls: 'img-responsive img-custom-3'}
    ];
    $scope.myInterval = 3000;//循环间隔 3s
    $scope.noWrapSlides = false;
    $scope.noTransition = false;
    $scope.active = 0;


  }

  $onInit () {}
}

export const ImgCarouselComponent = {
  templateUrl: './views/app/components/img-carousel/img-carousel.component.html',
  controller: ImgCarouselController,
  controllerAs: 'vm',
  bindings: {}
}

