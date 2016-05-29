var kuzdowiczPage = angular.module('kuzdowiczPage', ['ngRoute']);

kuzdowiczPage.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/Home.html'
    })
    .when('/bio', {
        templateUrl: 'templates/Bio.html'
    })
   .when('/programmer', {
       templateUrl: 'templates/programmer/Portfolio.html'
   }).when('/musician', {
       templateUrl: 'templates/musician/Music.html'
   })
    .when('/contact', {
        templateUrl: 'templates/Contact.html'
    });

});


$(document).ready(function () {
    
    setActiveClassOnNavOnPageLoad();
  

    $('#navMenu li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});

function setActiveClassOnNavOnPageLoad() {
    var urlHash = window.location.hash;
    if (urlHash == '#/') {
        $('#navMenu a:eq(0)').parent().addClass('active').siblings().removeClass('active');
        return;
    }
    $('#navMenu a').each(function () {
        var thisHref = this.href;
        if (thisHref.indexOf(urlHash) != -1) {
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
    });
}