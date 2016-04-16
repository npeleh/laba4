!function(){"use strict";angular.module("lab4",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngRoute","ui.bootstrap","toastr"])}(),function(){"use strict";function a(){var a=this;a.myInterval=5e3,a.noWrapSlides=!1,a.active=0,a.slides=[{image:"assets/slides/1.jpg",text:"some text",id:1},{image:"assets/slides/2.jpg",text:"some text",id:2},{image:"assets/slides/3.jpg",text:"some text",id:3},{image:"assets/slides/4.jpg",text:"some text",id:4}],a.planets=[{image:"assets/planets/1.jpg",price:225.75,is_bouth:!1},{image:"assets/planets/2.jpg",price:125.75,is_bouth:!1},{image:"assets/planets/3.jpg",price:2225.5,is_bouth:!1},{image:"assets/planets/4.jpg",price:4342.2,is_bouth:!1},{image:"assets/planets/5.jpg",price:453.22,is_bouth:!1},{image:"assets/planets/6.jpg",price:688.6,is_bouth:!1}],a.sum_price=0,a.buy=function(e){a.sum_price=a.sum_price+a.planets[e].price,a.planets[e].is_bouth=!0}}angular.module("lab4").controller("MainController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("lab4").run(a)}(),function(){"use strict";function a(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}a.$inject=["$routeProvider"],angular.module("lab4").config(a)}(),function(){"use strict";angular.module("lab4").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,e){a.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}a.$inject=["$logProvider","toastrConfig"],angular.module("lab4").config(a)}(),angular.module("lab4").run(["$templateCache",function(a){a.put("app/main/main.html",'<div id=main><div class=navbar-wrapper><div class=container><nav class="navbar navbar-inverse navbar-static-top"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>Planets Market</a></div><div id=navbar class="navbar-collapse collapse"><ul class="nav navbar-nav"><li class=active><a href=#>Home</a></li><li><a href=#about>About</a></li><li><a href=#contact>Contact</a></li><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown role=button aria-haspopup=true aria-expanded=false>Dropdown <span class=caret></span></a><ul class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li class=dropdown-header>Nav header</li><li><a href=#>Separated link</a></li><li><a href=#>One more separated link</a></li></ul></li></ul></div></div></nav></div></div><!-- Carousel\n  ================================================== --><div class=container><uib-carousel active=main.active interval=main.myInterval no-wrap=main.noWrapSlides><uib-slide ng-repeat="slide in main.slides track by $index" index=$index><img ng-src={{slide.image}} style=margin:auto><div class=carousel-caption><h4>Slide {{slide.id}}</h4><p>{{slide.text}}</p></div></uib-slide></uib-carousel></div><!-- Marketing messaging and featurettes\n  ================================================== --><!-- Wrap the rest of the page in another container to center all the content. --><div class=container><!-- Three columns of text below the carousel --><div class="row marketing"><div class=col-lg-4 ng-repeat="planet in main.planets track by $index"><img class=img-circle ng-src={{planet.image}} alt="Generic placeholder image"><h2 class=text-center>Heading</h2><p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p><p class=text-center><button ng-hide={{planets[$index].is_bouth}} ng-click=main.buy($index) class="btn btn-default">Buy</button> <button ng-show={{planets[$index].is_bouth}} class="btn btn-default btn-success"><span class="glyphicon glyphicon-ok" aria-hidden=true></span></button> {{planet.price | currency}}</p></div><!-- /.col-lg-4 --><div class="text-center jumbotron">{{main.sum_price}}</div></div><!-- /.row --><!-- FOOTER --><footer><p class=pull-right><a href=#>Back to top</a></p><p>© 2015 Company, Inc. · <a href=#>Privacy</a> · <a href=#>Terms</a></p></footer></div><!-- /.container --></div>')}]);
//# sourceMappingURL=../maps/scripts/app-1b5cff7bee.js.map