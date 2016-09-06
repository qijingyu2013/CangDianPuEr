class PagesAsszfspController {
  constructor ($sce,$scope,$timeout) {
    'ngInject'

    //var controller = this;
    $scope.state = null;
    $scope.API = null;
    $scope.currentVideo = 0;

    $scope.onPlayerReady = function(API) {
      $scope.API = API;
      $scope.setVideo(2);
    };

    $scope.onCompleteVideo = function() {
      $scope.isCompleted = true;

      $scope.currentVideo++;

      if ($scope.currentVideo >= $scope.videos.length) $scope.currentVideo = 0;

      $scope.setVideo($scope.currentVideo);
    };

    $scope.videos = [
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://200000761.vod.myqcloud.com/200000761_5045f2d6470811e6822b41c42bccfe5c.f30.mp4"), type: "video/mp4"
          }
        ]
      },
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://200000761.vod.myqcloud.com/200000761_68e75f80470a11e69249c905011f5f65.f30.mp4"), type: "video/mp4"}
        ]
      },
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://200000761.vod.myqcloud.com/200000761_62fa65103dc611e69249c905011f5f65.f30.mp4"), type: "video/mp4"}
        ]
      },
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://200000761.vod.myqcloud.com/200000761_d148e1fa3dc511e69249c905011f5f65.f30.mp4"), type: "video/mp4"}
        ]
      }
    ];

    $scope.config = {
      preload: "none",
      autoHide: true,
      autoHideTime: 3000,
      autoPlay: false,
      sources: $scope.videos[0].sources,
      theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
      },
      plugins: {
        poster: "http://www.videogular.com/assets/images/videogular.png"
      }
    };

    $scope.setVideo = function(index) {
      $scope.API.stop();
      $scope.currentVideo = index;
      $scope.config.sources = $scope.videos[index].sources;
      $timeout($scope.API.play.bind($scope.API), 100);
    };

  }

  $onInit () {}
}

export const PagesAsszfspComponent = {
  templateUrl: './views/app/components/pages-asszfsp/pages-asszfsp.component.html',
  controller: PagesAsszfspController,
  controllerAs: 'vm',
  bindings: {}
}
