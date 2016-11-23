class PagesCzsOneController {
  constructor ($scope, $compile, API, $stateParams) {
    'ngInject'
    this.API = API
    // this.$state = $state

      let dataRowId = $stateParams.dataRowId
      let dataRow = API.service('inform-show', API.all('informs'))
      dataRow.one(dataRowId).get()
          .then((response) => {
          this.dataRes = API.copy(response)
    // trustHtml
    console.log(this.dataRes.data.title);
          $scope.title = this.dataRes.data.title;
          $scope.content = this.dataRes.data.content;
          // $scope.article.htmlStr = '<p style="color:red;font-size=18px;">sdfsfsdfsdf</p>';
      })
  }

  $onInit () {}

}

export const PagesCzsOneComponent = {
  templateUrl: './views/app/components/pages-czs-one/pages-czs-one.component.html',
  controller: PagesCzsOneController,
  controllerAs: 'vm',
  bindings: {}
}
