import { NavHeaderComponent } from './app/components/nav-header/nav-header.component'
import { NavBarComponent } from './app/components/nav-bar/nav-bar.component'
/**
 *  index
 */

import { ImgCarouselComponent } from './app/components/img-carousel/img-carousel.component'
import { PagesCyxwComponent } from './app/components/pages-cyxw/pages-cyxw.component'
import { PagesHyxwComponent } from './app/components/pages-hyxw/pages-hyxw.component'
import { PagesHzjgComponent } from './app/components/pages-hzjg/pages-hzjg.component'

//import { ImgListComponent } from './app/components/img-list/img-list.component'
//import { VideoListComponent } from './app/components/video-list/video-list.component'
//import { ImgChangeComponent } from './app/components/img-change/img-change.component'
/**
 *  page
 */
import { NavHeaderpageComponent } from './app/components/nav-headerpage/nav-headerpage.component'
import { PagesAfjjComponent } from './app/components/pages-afjj/pages-afjj.component'
import { PagesZxjjComponent } from './app/components/pages-zxjj/pages-zxjj.component'
import { PagesZxdtComponent } from './app/components/pages-zxdt/pages-zxdt.component'

import { PagesQywhComponent } from './app/components/pages-qywh/pages-qywh.component'
import { PagesJylnComponent } from './app/components/pages-jyln/pages-jyln.component'
import { PagesGsjsComponent } from './app/components/pages-gsjs/pages-gsjs.component'
import { PagesGsywComponent } from './app/components/pages-gsyw/pages-gsyw.component'
import { PagesGszzComponent } from './app/components/pages-gszz/pages-gszz.component'

angular.module('app.components')
    .component('navHeader', NavHeaderComponent)
    .component('navBar', NavBarComponent)
    /**
     *  index
     */
    .component('imgCarousel', ImgCarouselComponent)
    .component('pagesCyxw', PagesCyxwComponent)
    .component('pagesHyxw', PagesHyxwComponent)
    .component('pagesHzjg', PagesHzjgComponent)
    //.component('imgList', ImgListComponent)
    //.component('videoList', VideoListComponent)
    //.component('imgChange', ImgChangeComponent)
    /**
     *  page
     */
    .component('navHeaderpage', NavHeaderpageComponent)
    .component('pagesAfjj', PagesAfjjComponent)
    .component('pagesZxjj', PagesZxjjComponent)
    .component('pagesZxdt', PagesZxdtComponent)

    .component('pagesQywh', PagesQywhComponent)
    .component('pagesJyln', PagesJylnComponent)
    .component('pagesGsjs', PagesGsjsComponent)
    .component('pagesGsyw', PagesGsywComponent)
    .component('pagesGszz', PagesGszzComponent)

