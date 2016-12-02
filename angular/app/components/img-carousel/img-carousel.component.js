class ImgCarouselController {
  constructor ($scope, API) {
    'ngInject'
    this.API = API
    $scope.directory = [];
    function truncate (input, chars, breakOnWord) {
      if (isNaN(chars)) return input;
      if (chars <= 0) return '';
      if (input && input.length > chars) {
        input = input.substring(0, chars);

        if (!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if (lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        }else{
          while(input.charAt(input.length-1) === ' '){
            input = input.substr(0, input.length -1);
          }
        }
        return input + '…';
      }
      return input;
    };

    let dataRows = this.API.service('teacollections', this.API.all('informs'));
    var dataRowLists = dataRows.getList();

    dataRows.getList().then(function(res) {
      var tmpArr = [];
      var tmpi = 0;
      var tmpj = 0;
      var total = res.length-1;
      angular.forEach(res, function(data,index,array){
        var tobj={imgSrc:data.img, imgCls:'img-responsive img-custom-3', text:truncate ( data.title, 8, true)};
        tmpArr.push(tobj);
        tmpi++;

        if(tmpi>2){
          tmpi=0;

          $scope.directory.push({id:tmpj, imgArr:tmpArr});
          tmpj++;
          tmpArr = [];
        }else if (total == index){
          $scope.directory.push({id:tmpj, imgArr:tmpArr});
        }
      });
      console.log($scope.directory);

    });

    var element = angular.element("#carousel-hyxw");

    element.addClass("carousel-indicators-display-none");
    $scope.myInterval = 3000;//循环间隔 3s
    $scope.noWrapSlides = false;
    $scope.noTransition = false;
    $scope.noPause = false;
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

