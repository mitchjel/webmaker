(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-maker';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-heading/widget-heading.component */ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth-guard.service.clients */ "./src/app/services/auth-guard.service.clients.ts");
/* harmony import */ var _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user/user-list/user-list.component */ "./src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var _services_admin_guard_service_clients__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/admin-guard.service.clients */ "./src/app/services/admin-guard.service.clients.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__["PageListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _components_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeadingComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__["UserListComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_25__["SharedService"], _services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _services_admin_guard_service_clients__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service.clients */ "./src/app/services/auth-guard.service.clients.ts");
/* harmony import */ var _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user-list/user-list.component */ "./src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var _services_admin_guard_service_clients__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/admin-guard.service.clients */ "./src/app/services/admin-guard.service.clients.ts");
















// Import all other components here
var APP_ROUTES = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteListComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/new", component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteNewComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid", component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteEditComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page", component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page/new", component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page/:pid", component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__["PageEditComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page/:pid/widget", component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__["WidgetListComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page/:pid/widget/new", component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__["WidgetChooserComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/:uid/website/:wid/page/:pid/widget/:wgid", component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"], canActivate: [_services_auth_guard_service_clients__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user-list", component: _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], canActivate: [_services_admin_guard_service_clients__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]] }
    // so on
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Navigation Bar-->\r\n <nav class=\"navbar navbar-light fixed-top bg-light\">\r\n  <a class=\"color-red\" routerLink =\"/user/{{uid}}/website/{{wid}}/page\">\r\n    <i class=\"fas fa-chevron-left\"></i></a>\r\n  <a class=\"navbar-brand\" routerLink =\"/user/{{uid}}/website/{{wid}}/page/{{pid}} padding-left\">Edit page</a>\r\n  <button form = \"myForm\" class=\"color-red btn bg-transparent\" type = \"submit\" [disabled] = \"myForm.invalid\"> <i class=\"fas fa-check\"></i></button>\r\n\r\n  </nav>\r\n  <!--New page form-->\r\n  <div class=\"container\">\r\n      <form id= \"myForm\" #myForm = \"ngForm\" (ngSubmit) = \"update()\">\r\n          <div class=\"form-group\">\r\n              <label for =\"name\"><b>Name</b> </label>\r\n              <input class=\"form-control\" id=\"name\" type=\"text\" placeholder =\"Name of the blog post\" required name = \"name\" [(ngModel)] = \"page.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n                  <label for=\"title\"><b>Title</b> </label>\r\n                  <input class=\"form-control\" id=\"Title\" type=\"text\" placeholder=\"Title of the new page\" name = \"title\" [(ngModel)] = \"page.title\">\r\n          </div>                    \r\n          <a routerLink =\"/user/{{uid}}/website/{{wid}}/page\"class=\"btn btn-lg btn-warning\">Cancel</a>\r\n          <button type = \"button\" (click) = \"delete()\" class=\"btn btn-lg btn-danger float-right\">Delete</button>\r\n      </form>\r\n  </div>\r\n<!--Bottom page-->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n  <div class=\"full-width\" >\r\n      <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(activatedRoute, pageService, router) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
        this.page = {
            name: "",
            title: "",
            websiteId: ""
        };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params["wid"];
            _this.uid = params["uid"];
            _this.pid = params["pid"];
            _this.pageService.findPageById(_this.pid).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.pageService.updatePage(this.page).subscribe(function (page) {
            _this.router.navigate(["user", _this.uid, "website", _this.uid, "page"]);
        });
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.pid).subscribe(function (page) {
            _this.router.navigate(["user", _this.uid, "website", _this.uid, "page"]);
        });
    };
    PageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Navigation Bar-->\r\n <nav class=\"navbar navbar-light fixed-top bg-light\">\r\n  <a class=\"color-red\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n  <a class=\"navbar-brand\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Pages</a>\r\n  <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"> <i class=\"fas fa-plus\"></i></a>\r\n  </nav>\r\n<!--Lists-->\r\n<div class=\"container-fluid\">\r\n<ul class=\"list-group\">\r\n<li class=\"list-group-item\" *ngFor=\"let page of pages\">\r\n<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\r\n<a class=\"float-right \" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n</li>\r\n</ul>\r\n</div>\r\n<!--Footer-->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n<div class=\"full-width\" >\r\n  <a class=\"color-red float-right\" routerLink=\"/profile\"> <i class=\"fas fa-user\"></i></a>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.uid = params['uid'];
            _this.pageService.findPagesByWebsiteId(_this.wid).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_1__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--Navigation Bar-->\r\n   <nav class=\"navbar navbar-light fixed-top bg-light\">\r\n    <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page \"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <a class=\"navbar-brand padding-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/:pid\">New Page</a>\r\n    <button  [disabled] = \"myForm.invalid\" class=\"color-red btn bg-transparent\" form = \"myForm\" type = \"submit\"> <i class=\"fas fa-check\"></i></button>\r\n    </nav>\r\n    <!--New page form-->\r\n    <div class=\"container\">\r\n        <form id =\"myForm\" #myForm=\"ngForm\" (ngSubmit) = \"createPage()\">\r\n            <div class=\"form-group\">\r\n                <label for =\"name\"><b>Name</b> </label>\r\n                <input required name= \"name\" [(ngModel)] = \"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Name of the new page\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"title\"><b>Title</b> </label>\r\n                    <input name = \"title\" [(ngModel)] = \"title\" class=\"form-control\" id=\"Title\" type=\"text\" placeholder=\"Title of the new page\">\r\n            </div>               \r\n             <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"class=\"btn btn-lg btn-warning\">Cancel</a>\r\n            <button type = \"submit\" [disabled] = \"myForm.invalid\" class=\"btn btn-lg btn-success float-right\">Submit</button>\r\n        </form>\r\n    </div>\r\n<!--Bottom page-->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n    <div class=\"full-width\" >\r\n        <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(activatedRoute, pageService, router) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.uid = params['uid'];
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        var page = {
            name: this.name,
            title: this.title,
            websiteId: this.wid
        };
        this.pageService.createPage(page).subscribe(function (page) {
            _this.router.navigate(["user", _this.uid, "website", _this.wid, "page"]);
        });
    };
    PageNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <h1> Login</h1>\r\n  <form  (ngSubmit) = \"logIn()\" #myForm= \"ngForm\">  <!-- #myForm is angular way to create and ID-->\r\n   <div *ngIf =\"errorFlag\" class = \"alert alert-danger\"> Our records indicate that the username and password do not match. Please, try again. \r\n      please try again! </div>\r\n      <div class=\"form-group\"> \r\n        <input class=\"form-control\" required name = \"username\" [(ngModel)]= \"username\" type=\"text\" placeholder=\"username\" #userInput = \"ngModel\">\r\n      </div>\r\n      <div *ngIf =\"userInput.invalid && userInput.touched\" class =\"alert alert-warning\"> Username Field can not be empty! </div>\r\n  <div class=\"form-group\">\r\n      <input class=\"form-control\" required name = \"password\" [(ngModel)]= \"password\" type= \"password\" placeholder=\"password\" #passwordInput = \"ngModel\">\r\n  </div> \r\n  <div *ngIf =\"passwordInput.invalid && passwordInput.touched\" class =\"alert alert-warning\"> Password Field can not be empty! </div>\r\n  <button [disabled] = \"myForm.invalid\" type = \"submit\" class=\"btn btn-primary btn-block\">Login</button>\r\n\r\n  <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\r\n  </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        // How subscribe works on angular
        this.userService.login(this.username, this.password).subscribe(function (data) {
            _this.sharedService.user = data;
            _this.router.navigate(['/profile']);
        }, 
        // Otherwise
        function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Navbar -->\r\n <nav class=\"navbar navbar-dark bg-primary fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"/user/{{uid}}\"><b>Profile</b></a>\r\n  <button [disabled] = \"myForm.invalid\" class=\"btn bg-transparent color-white\" type =\"submit\" form = \"myForm\"><i class=\"fas fa-check\"></i></button> \r\n</nav>\r\n<!--form-->\r\n<div class=\"container\">\r\n<form #myForm = \"ngForm\" (ngSubmit)= \"update()\" id = \"myForm\">\r\n    <div *ngIf = \"userError\" class = \"alert.alert-danger\"> This username is already taken. Try another username</div>\r\n    <div *ngIf = \"successFlag\" class = \"alert.alert-success\"> Update successfully</div>\r\n   <!--Username-->\r\n    <div class=\"form-group\"> \r\n        <label><b>Username</b></label>\r\n        <input #userInput= \"ngModel\" required class=\"form-control\" [(ngModel)] = \"user.username\"  name = \"username\" placeholder =\" Enter Username....\">\r\n    </div>\r\n    <div *ngIf = \"userInput.invalid\" class = \"alert.alert-warning\"> Username can't be empty</div>\r\n     <!--Email Address-->\r\n     <div class =\"form-group\">\r\n           <label for = \"email\"><b>Email Address</b></label>\r\n           <input class=\"form-control\" name=\"email\"  [(ngModel)] = \"user.email\" placeholder =\" Enter Email Address...\">\r\n           <small id =\"emailHelp\" class = \"form-text text-muted\"> We'll never share your \r\n               email with anyone else. </small>\r\n      </div>\r\n     <!--First Name-->\r\n    <div class =\"form-group\">\r\n          <label for=\"firstName\"><b>First Name</b></label>\r\n          <input  class=\"form-control\" name =\"firstName\"  [(ngModel)] = \"user.firstName\" placeholder=\"First Name....\">\r\n    </div>\r\n     <!--Last Name-->\r\n     <div class=\"form-group\">\r\n          <label for=\"lastName\"><b>Last Name</b></label>\r\n        <input  class=\"form-control\"  name =\"lastName\" [(ngModel)]= \"user.lastName\" placeholder=\" Enter Last Name...\">\r\n     </div>\r\n     <!--Adding 2 Buttons-->\r\n     <a routerLink=\"/user/{{uid}}/website\"class=\"btn btn-primary btn-block\">\r\n        websites</a>\r\n      <button type=\"button\" (click)= \"logout()\" class=\"btn btn-danger btn-block\">Logout </button>\r\n      <br/>\r\n      <a *ngIf=\"user.admin\" class= \"btn btn-outline-dark\"\r\n       routerLink= \"/user-list\"> User List </a>\r\n    </form>\r\n    <div>\r\n<!--Footer-->\r\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\r\n <div class=\"full-width\" >\r\n     <a class=\"color-white float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // import UserService from Services

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.user = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.uid = this.user._id;
        this.oldUsername = this.user.username;
    };
    // implement an event handler bound to the logout 
    // button in the profile view and then send back user to login page
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.router.navigate(["login"]);
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        if (this.user.username === this.oldUsername) {
            this.userService.updateUser(this.user).subscribe(function (user) {
                _this.userError = false;
                _this.successFlag = true;
            });
        }
        else {
            this.userService.findUserByUsername(this.user.username).subscribe(function (data) {
                if (!data) {
                    _this.userService.updateUser(_this.user).subscribe(function (user) {
                        _this.userError = false;
                        _this.successFlag = true;
                    });
                }
                else {
                    _this.userError = true;
                    _this.successFlag = false;
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <h1> Register</h1>\r\n  <form (ngSubmit)= \"register()\" #myForm = \"ngForm\">\r\n      <div *ngIf = \"userError\"class = \"alert alert-danger\"> Username is already taken, please try another Username</div>\r\n      <div *ngIf = \"pwdError\" class = \"alert alert-danger\"> Passwords are not match! Please, try again</div>\r\n      <div class=\"form-group\"> \r\n            <input [(ngModel)] = \"username\" required name = \"username\"  class=\"form-control\" type=\"text\" placeholder=\"username\" #userInput = \"ngModel\">\r\n      </div>  \r\n    <div *ngIf = \"userInput.invalid && userInput.touched\" class =\"alert alert-warning\"> Username can not be empty    </div>\r\n  <div class =\"form-group\">\r\n  <input [(ngModel)] = \"password\"  required name = \"password\" class =\"form-control\" type = \"password\" placeholder=\"password please...\" #pwdInput = \"ngModel\">\r\n</div> \r\n<div *ngIf = \"pwdInput.invalid && pwdInput.touched\" class =\"alert alert-warning\"> Password can not be empty </div>\r\n  <div class = \"form-group\"> \r\n      <input [(ngModel)] = \"verifyPassword\" required name = \"verifyPassword\" class=\"form-control\" type = \"password\" placeholder=\"verify password please...\" #verifypwdInput = \"ngModel\">\r\n  </div>\r\n  <div *ngIf = \"verifypwdInput .invalid && verifypwdInput .touched\" class =\"alert alert-warning\"> Please, verify your password again </div>\r\n      <button type =\"submit\" [disabled]= \"myForm.invalid\" class=\"btn btn-primary btn-block\">Register</button>\r\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">cancel</a>\r\n  </form>\r\n</div>        "

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.password !== this.verifyPassword) {
            this.pwdError = true;
            this.userError = false;
        }
        else {
            this.pwdError = false;
            this.userService
                .findUserByUsername(this.username)
                .subscribe(function (data) {
                if (!data) {
                    var newUser = {
                        username: _this.username,
                        password: _this.password,
                        firstName: "",
                        lastName: "",
                        email: ""
                    };
                    _this.userService.register(newUser).subscribe(function (data) {
                        _this.sharedService.user = data;
                        _this.router.navigate(['profile']);
                    }, function (error) {
                        _this.userError = true;
                    });
                }
                else {
                    _this.userError = true;
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-list/user-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user-list/user-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-list/user-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<nav class=\"navbar navbar-dark bg-primary fixed-top row nav-height\">\r\n  <!-- Left Navigation Panel-->\r\n  <div class=\"col-4 d-none d-sm-block\">\r\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n  <a class=\"color-white padding-left\" routerLink=\"/user/{{uid}}/website/{{wid}}\">\r\n    <h5 class=\"display-inline\">Websites</h5></a>\r\n      <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"> <i class=\"fas fa-plus\"></i></a>\r\n  </div>\r\n      <!--Right Navigation Panel-->\r\n  <div class=\"col-sm-8\">\r\n        <a class=\"color-white d-sm-none\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n      <a class=\"color-white  padding-left\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><h5 class=\"display-inline\">Edit Website</h5></a>\r\n            <button class=\"color-white float-right btn bg-transparent\" form = \"myForm\"><i class=\"fas fa-check\"> </i> </button> \r\n  </div>\r\n  </nav>\r\n  <!--List & Form-->\r\n  <div class=\"row\">\r\n  <!-- left panel list-->\r\n  <div class=\"col-4 d-none d-sm-block\">\r\n  <div class=\"container-fluid\">   \r\n  <ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor = \"let website of websites\"> \r\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"> {{website.name}}</a> \r\n  <a class=\"float-right\"routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n </div>\r\n  <!-- rigt panel form-->\r\n <div class = \"col-sm-8\">\r\n     <div class = \"conatainer-fluid\">\r\n      <form id =\"myForm\" #myForm = \"ngForm\"  (ngSubmit) = \"update()\">\r\n            <div class = \"form-group\">\r\n                <label for=\"name\"> <b> Name</b> </label>\r\n     <input id = \"name\" class = \"form-control\" type=\"text\" placeholder = \"Name of website...\"\r\n     [(ngModel)] = \"website.name\" name = \"name\">\r\n</div>\r\n  <div class=\"form-group\">\r\n        <label for=\"description\"> <b>Description</b></label>   \r\n      <textarea [(ngModel)]= \"website.description\" name = \"description\" id=\"description\" rows=\"5\" class=\"form-control\" type=\"text\" placeholder=\"Description of your website\"></textarea>\r\n  </div> \r\n  <a routerLink=\"/user/{{uid}}/website\"class=\"btn btn-lg btn-warning\">Cancel</a>\r\n  <button type = \"button\" (click) = \"delete()\" class=\"btn btn-lg btn-danger float-right\">Delete</button>\r\n  </form>\r\n    </div>\r\n      </div>\r\n  <!--Footer-->\r\n  <nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\r\n        <div class=\"full-width\" >\r\n            <a class=\"color-white float-right\"routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n        </div>\r\n    </nav>         "

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.website = {
            name: "",
            description: "",
            developerId: ""
        };
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.websiteService.findWebsiteById(_this.wid).subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        var newWeb = {
            name: this.website.name,
            description: this.website.description,
            _id: this.wid,
            developerId: this.uid
        };
        this.websiteService.updateWebsite(newWeb).subscribe(function (website) {
            _this.router.navigate(["user", _this.uid, "website"]);
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid).subscribe(function (website) {
            _this.router.navigate(["user", _this.uid, "website"]);
        });
    };
    WebsiteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--Navbar-->\r\n  <nav class=\"navbar fixed-top navbar-dark bg-primary\">\r\n    <a class=\"color-white\" routerLink=\"/profile\"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <div class=\"left-width\">\r\n    <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\r\n    </div>\r\n    <a class=\"color-white\" routerLink=\"/user/{{uid}}/website/new\"> <i class=\"fas fa-plus\"></i></a>\r\n        </nav>\r\n        <!--website List-->\r\n        <div class=\"container-fluid\">\r\n        <ul class=\"list-group\">\r\n             <li class=\"list-group-item\" *ngFor = \"let website of websites\"> <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\"> {{website.name}}</a> \r\n                <a class=\"float-right\"routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n                 </li>\r\n        </ul>\r\n        </div>\r\n        <!--footer-->\r\n        <nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\r\n           <div class=\"full-width\" >\r\n               <a class=\"color-white float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n           </div>\r\n         </nav>"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<nav class=\"navbar navbar-dark bg-primary fixed-top row navbar-height\">\r\n  <!-- Left Navigation Panel-->\r\n  <div class=\"col-4 d-none d-sm-block\">\r\n  <a class=\"color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n      <a class=\"color-white padding-left\" routerLink=\"/user/{{uid}}/website/new\"><h5 class=\"display-inline\">Websites</h5></a>\r\n              <a class=\"color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"> <i class=\"fas fa-plus\"></i></a>\r\n  </div>\r\n              <!--Right Navigation Panel-->\r\n      <div class=\"col-sm-8\" >\r\n              <a class=\"color-white d-sm-none\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n     <a class=\"color-white  padding-left\" routerLink=\"/user/{{uid}}/website/new\"><h5 class=\"display-inline\">New Website</h5></a>\r\n    <button  type = \"submit\" [disabled] = \"myForm.invalid\" form =\"myForm\" class=\"color-white float-right btn bg-transparent\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-check\"></i></button> \r\n          </div>\r\n  </nav>\r\n          <!--List & Form-->\r\n          <div class=\"row\">\r\n              <!-- left panel list-->\r\n  \r\n          <div class=\"col-4 d-none d-sm-block\">\r\n  <div class=\"container-fluid\">   \r\n          <ul class=\"list-group\">\r\n                      <li class=\"list-group-item\" *ngFor = \"let website of websites\"> \r\n                          <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\"> {{website.name}}</a> \r\n                          <a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n                              </li> \r\n                         </ul>\r\n                  </div>\r\n          </div>\r\n          <!-- rigt panel form-->\r\n          <div class=\"col-sm-8\">\r\n              <div class=\"container-fluid\">\r\n              <form id = \"myForm\" #myForm = \"ngForm\"  (ngSubmit)= \"createWebsite()\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\"><b> Name</b></label>\r\n                      <input [(ngModel)] = \"name\" name = \"name\" id=\"name\" required class=\"form-control\" type=\"text\" placeholder=\"Name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"description\"> <b>Description</b></label>\r\n                  <textarea [(ngModel)] = \"description\" name = \"description\" id=\"description\" rows=\"10\" class=\"form-control\" type=\"text\" placeholder=\"Description of your website\"></textarea>\r\n              </div> \r\n              <a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-lg btn-warning\">Cancel</a>\r\n              <button class=\"btn btn-lg btn-success float-right\">  Submit </button> \r\n              </form>\r\n          </div>\r\n       </div>\r\n    </div>\r\n  <!--Footer-->\r\n  <nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\r\n      <div class=\"full-width\" >\r\n          <a class=\"color-white float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n      </div>\r\n      </nav>\r\n  "

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        var website = {
            name: this.name,
            description: this.description,
            developerId: this.uid
        };
        // Send those data to the data.services
        this.websiteService.createWebsite(website).subscribe(function (website) {
            _this.router.navigate(["user", _this.uid, "website"]);
        });
    };
    WebsiteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--Navigation bar-->\r\n   <nav class=\"navbar navbar-light fixed-top bg-light\">\r\n    <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <a class=\"navbar-brand padding-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\">Choose Widget</a>\r\n    \r\n    </nav>\r\n    <!--List of item for widget chooser-->\r\n    <div class=\"container\">\r\n        <ul class=\"list-group-flush\">\r\n<li class=\"list-group-item\"> <span  (click) = \"create('HEADING')\" class ='pointer' >Header</span></li>\r\n    <li class=\"list-group-item\"> <span (click) = \"create('LABEL')\" class = 'pointer'>Label</span></li>\r\n       <li class=\"list-group-item\"> <span (click) = \"create('HTML')\" class = 'pointer'>HTML</span></li>\r\n        <li class=\"list-group-item\"> <span (click) = \"create('TEXT INPUT')\" class = 'pointer'>Text Input</span>\r\n         <li class=\"list-group-item\"> <span (click) = \"create('LINK')\" class = 'pointer'>Link</span></li>\r\n<li class=\"list-group-item\"><span (click) = \"create('BUTTON')\" class = 'pointer' >Button</span></li>\r\n<li class=\"list-group-item\"><span (click) = \"create('IMAGE')\" class = 'pointer'>Image</span></li>\r\n<li class=\"list-group-item\"><span (click) = \"create('YOUTUBE')\" class = 'pointer'> Youtube</span></li>\r\n<li class=\"list-group-item\"><span (click) = \"create('DATA TABLE')\" class = 'pointer'>Data Table </span></li>\r\n<li class=\"list-group-item\"><span (click) = \"create('REAPETER')\" class = 'pointer'>Repeater</span></li>                     \r\n        </ul>\r\n\r\n    </div>\r\n <!--Bottom Navigation Bar and Icon -->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n    <div class=\"full-width\" >\r\n        <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.pid = params["pid"];
            _this.wid = params["wid"];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var widget = {
            widgetType: type,
            pageId: this.pid
        };
        this.widgetService.createWidget(widget).subscribe(function (widget) {
            _this.router.navigate([
                'user',
                _this.uid,
                'website',
                _this.wid,
                'page',
                _this.pid,
                'widget',
                widget._id
            ]);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div [ngSwitch] = \"widget.widgetType\">\r\n\r\n  <div *ngSwitchCase = \"'HEADING'\">\r\n    <app-widget-heading> </app-widget-heading>\r\n  </div>\r\n   <div *ngSwitchCase = \"'IMAGE'\">\r\n      <app-widget-image> </app-widget-image>\r\n    </div>\r\n    <div *ngSwitchCase = \"'YOUTUBE'\">\r\n        <app-widget-youtube> </app-widget-youtube>\r\n      </div> \r\n    </div>\r\n \r\n\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = {
            text: "",
            widgetType: "",
            size: 0,
            pageId: "",
            url: "",
            width: ""
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params["wgid"];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkaW5nL3dpZGdldC1oZWFkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--Navigation bar-->\r\n   <nav class=\"navbar navbar-light fixed-top bg-light\">\r\n    <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/\"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <a class=\"navbar-brand\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"> Edit Widget</a>\r\n    <button form= \"myForm\" class=\"float-right color-red btn bg-transparent\" ><i class=\"fas fa-check\"></i></button>  \r\n</nav>\r\n<!--List on the middle of the  edit widget-->\r\n<div class=\"container\"> \r\n    <form id = \"myForm\" #myForm = \"ngForm\" (ngSubmit)= \"update ()\">\r\n        <!--Text for the main page-->\r\n        <div class=\"form-group\">\r\n                <label for=\"text\"> <b>Text</b></label>\r\n                <input name = \"text\" [(ngModel)]= \"widget.text\" type=\"text\"  palceholder = \"Widget Text\"  id=\"text\" class=\"form-control\">\r\n            </div>\r\n            <!--Size for the main page-->\r\n            <div class=\"form-group\">\r\n                    <label for=\"size\"> <b>Size</b></label>\r\n                    <input name = \"size\" [(ngModel)]= \"widget.size\" type=\"number\" id=\"size\" class=\"form-control\" />\r\n                </div>\r\n    \r\n            <button type = \"button\" (click) = \"delete()\" class=\"btn btn-danger btn-block\" > Delete</button>\r\n    </form>\r\n</div>\r\n   \r\n <!--Bottom Navigation Bar and Icon -->\r\n\r\n<footer nav class=\"navbar navbar-light fixed-bottom bg-light\">\r\n    <div class=\"full-width\" >\r\n        <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeadingComponent", function() { return WidgetHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = {
            text: "",
            widgetType: "",
            pageId: ""
        };
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetHeadingComponent.prototype.update = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widget).subscribe(function (widget) {
            // navigate 
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetHeadingComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetHeadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-heading',
            template: __webpack_require__(/*! ./widget-heading.component.html */ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html"),
            styles: [__webpack_require__(/*! ./widget-heading.component.css */ "./src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--Navigation bar-->\r\n    <nav class=\" navbar navbar-light fixed-top bg-light\">\r\n      <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n      <a class=\"navbar-brand\" routerLink=\"/user/:uid/website/{{wid}}page/{{pid}}/widget/{{wgid}}\"> Edit Widget</a>\r\n      <button class=\"float-right color-red btn bg-transparent\" type =\"submit\" form =\"myForm\" (click)= \"update()\"><i class=\"fas fa-check\"></i></button>\r\n      \r\n  </nav>\r\n  <!--List on the middle of  edit widget-->\r\n  <div class=\"container\"> \r\n      <form id=\"myForm\" #myForm=\"ngForm\" (ngSubmit)=\"update()\">\r\n           <!--URL for the main page-->\r\n              <div class=\"form-group\">\r\n                      <label for=\"url\"> <b>URL</b></label>\r\n                      <input name= \"url\" placeholder=\"Image Url\"\r\n                       [(ngModel)]=\"widget.url\" name=\"url\"  type=\"text\" id=\"url\" class=\"form-control\"/>\r\n                  </div>\r\n                   <!--Width for the main page-->\r\n              <div class=\"form-group\">\r\n                      <label for=\"width\"> <b>Width</b></label>\r\n                      <input name =\"width\" placeholder=\"Image Width\" [(ngModel)]=\"widget.width\"  type=\"text\" id=\"width\" class=\"form-control\"/>\r\n                  </div>\r\n      \r\n              <button type=\"button\" (click)=\"delete ()\" class=\"btn btn-danger btn-block\"> Delete</button>\r\n      </form>\r\n  </div>\r\n     \r\n   <!--Bottom Navigation Bar and Icon -->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n      <div class=\"full-width\" >\r\n          <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n      </div>\r\n    </footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = {
            url: "",
            widgetType: "IMAGE",
            width: "",
            pageId: ""
        };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.uid = params["wid"];
            _this.uid = params["pid"];
            _this.uid = params["wgid"];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widget).subscribe(function (widget) {
            // navigate 
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--Navigation bar-->\r\n    <nav class=\" navbar navbar-light fixed-top bg-light\">\r\n            <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n            <a class=\"navbar-brand\" routerLink=\"/user/:uid/website/{{wid}}page/{{pid}}/widget/{{wgid}}\"> Edit Widget</a>\r\n            <button class=\"float-right color-red btn bg-transparent\"  form=\"myForm\" type=\"submit\"(click)= \"update()\"><i class=\"fas fa-check\"></i></button>\r\n        </nav>\r\n        <!--List on the middle of  edit widget-->\r\n        <div class=\"container\"> \r\n <form id=\"myForm\" #myForm=\"ngForm\" (ngSubmit)=\"update()\">\r\n                 <!--URL for the main page-->\r\n                    <div class=\"form-group\">\r\n                            <label for=\"url\"> <b>URL</b></label>\r\n                            <input name=\"url\" placeholder=\"Image Url\"\r\n                             [(ngModel)]=\"widget.url\"  type=\"text\" id=\"url\" class=\"form-control\"/>\r\n                        </div>\r\n                         <!--Width for the main page-->\r\n                    <div class=\"form-group\">\r\n             <label for=\"width\"> <b>Width</b></label>\r\n             <input name=\"width\" placeholder=\"Image Width\"\r\n                         [(ngModel)]=\"widget.width\"  type=\"text\" id=\"width\" class=\"form-control\"/>\r\n                        </div>\r\n    <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger btn-block\">Delete                    </button>\r\n    </form>\r\n        </div>\r\n         <!--Bottom Navigation Bar and Icon -->\r\n      <footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n            <div class=\"full-width\" >\r\n                <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n            </div>\r\n        </footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = {
            url: "",
            widgetType: "IMAGE",
            width: "",
            pageId: ""
        };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widget).subscribe(function (widget) {
            // navigate 
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate([
                "user",
                _this.uid,
                "website",
                _this.pid,
                "page",
                _this.pid,
                "widget"
            ]);
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navigation bar-->\r\n<nav class=\"navbar navbar-light fixed-top bg-light\">\r\n  <a class=\"color-red\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\r\n  <a class=\"color-black padding-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><b class=\"font-lg\">Widgets</b></a>\r\n  <a class = \"color-red icon-right\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><i  class=\"fas fa-plus\"></i></a>\r\n</nav>\r\n<!--Middle page Main Contents-->\r\n<div class=\"container-fluid\">\r\n  <!--Widgets -->\r\n  <div *ngFor = \"let widget of widgets\">\r\n    <!--Icons-->\r\n    <div class=\"absolute-right\">\r\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"> <i class=\"fas fa-cog\"></i></a>\r\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"> <i class=\"fas fa-bars\"></i></a>\r\n    </div>\r\n    <!--Contents-->\r\n    <div [ngSwitch] = \"widget.widgetType\">\r\n      <div *ngSwitchCase = \"'HEADING'\" >\r\n        <div [ngSwitch]= \"widget.size\">\r\n          <div *ngSwitchCase = \"1\">\r\n            <h1> {{widget.text}}</h1>  \r\n          </div>\r\n          <div *ngSwitchCase = \"2\">\r\n            <h2> {{widget.text}}</h2>\r\n          </div>  \r\n          <div *ngSwitchCase = \"3\">\r\n            <h3> {{widget.text}}</h3>  \r\n          </div>\r\n          <div *ngSwitchCase = \"4\">\r\n            <h4> {{widget.text}}</h4>  \r\n          </div>\r\n          <div *ngSwitchCase = \"5\">\r\n            <h5> {{widget.text}}</h5>  \r\n          </div>\r\n          <div *ngSwitchCase = \"6\">\r\n            <h6> {{widget.text}}</h6>  \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase = \"'IMAGE'\" > \r\n        <img [src]=\"widget.url\" [style.width]= \"widget.width\"/>\r\n      </div> \r\n      <div *ngSwitchCase=\"'YOUTUBE'\" > \r\n        <div class=\"embed-responsive embed-responsive-16by9\">       \r\n          <iframe [src]=\"parseYoutubeSource(widget.url)\" [style.width]=\"widget.width\" allowfullscreen></iframe>\r\n        </div>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Bottom Navigation Bar Footer-->\r\n<footer class=\"navbar navbar-light fixed-bottom bg-light\">\r\n  <div class=\"full-width\">\r\n    <a class=\"color-red float-right\" routerLink=\"/profile\"><i class=\"fas fa-user\"></i></a> \r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.pid = params["pid"];
            _this.wid = params["wid"];
            _this.widgetService.findWidgetsByPageId(_this.pid).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.parseYoutubeSource = function (src) {
        // Making sure of youtube video is secure or embeded
        var embedUrl = "https://www.youtube.com/embed/";
        var splitUrl = src.split('/');
        embedUrl += splitUrl[splitUrl.length - 1];
        // Telling bwroser that the url source is safe
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-guard.service.clients.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/admin-guard.service.clients.ts ***!
  \*********************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = /** @class */ (function () {
    function AdminGuard(userService) {
        this.userService = userService;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.userService.adminLoggedIn();
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.clients.ts":
/*!********************************************************!*\
  !*** ./src/app/services/auth-guard.service.clients.ts ***!
  \********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.Uurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Uurl;
    }
    PageService.prototype.createPage = function (page) {
        // Send post request to the server
        var url = this.Uurl + "/api/page";
        return this.http.post(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.Uurl + ("/api/website/" + websiteId + "/page");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.Uurl + "/api/page/" + pageId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService.prototype.updatePage = function (page) {
        var url = this.Uurl + "/api/page";
        return this.http.put(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.Uurl + "/api/page/" + pageId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.Uurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Uurl;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
    }
    // Implementation Login function
    UserService.prototype.login = function (username, password) {
        // use this to authenticate
        this.options.withCredentials = true;
        var url = this.Uurl + "/api/login";
        var user = {
            username: username,
            password: password
        };
        // Enable Cross_Origin features
        return this.http.post(url, user, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    // Log out Function Implementation
    UserService.prototype.logout = function () {
        var _this = this;
        this.options.withCredentials = true;
        var url = this.Uurl + "/api/logout";
        return this.http.post(url, "", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // Send user feedback log out
            _this.sharedService.user = 0;
            return res;
        }));
    };
    // Funct Register 
    UserService.prototype.register = function (user) {
        // this communication will be secured
        this.options.withCredentials = true;
        var url = this.Uurl + "/api/register";
        return this.http.post(url, user, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    // LoggedIn Function implementation
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http
            .post(this.Uurl + "/api/loggedIn", "", this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var user = res.json();
            // Check if user alredy logged In
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                // Otherwise send user to login page to authenticate
                _this.router.navigate(["/login"]);
                return false;
            }
        }));
    };
    // Admin Log in
    UserService.prototype.adminLoggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http
            .post(this.Uurl + "/api/loggedIn", "", this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var user = res.json();
            // Check if loggedIn user is admin user
            if (user !== 0 && user.adminLoggedIn) {
                return true;
            }
            else {
                // Otherwise send user to login page to authenticate
                _this.router.navigate(["/profile"]);
                return false;
            }
        }));
    };
    UserService.prototype.createUser = function (user) {
        // Send post request to the server
        var url = this.Uurl + "/api/user";
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.Uurl + "/api/user/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    // finding user by username
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.Uurl + "/api/user?username=" + username;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.Uurl + "/api/user?username=" + username + "&passsword=" + password;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.Uurl + "/api/user/";
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.Uurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Uurl;
    }
    WebsiteService.prototype.createWebsite = function (website) {
        // Send post request to the server
        var url = this.Uurl + "/api/website";
        return this.http.post(url, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.Uurl + ("/api/user/" + userId + "/website");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.Uurl + "/api/website/" + websiteId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService.prototype.updateWebsite = function (website) {
        var uUrl = this.Uurl + "/api/website";
        return this.http.put(uUrl, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var uUrl = this.Uurl + "/api/website/" + websiteId;
        return this.http.delete(uUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WebsiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.Uurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Uurl;
    }
    WidgetService.prototype.createWidget = function (widget) {
        // Send post request to the server
        var url = this.Uurl + "/api/widget";
        return this.http.post(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.Uurl + ("/api/page/" + pageId + "/widget");
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.Uurl + "/api/widget/" + widgetId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService.prototype.updateWidget = function (widget) {
        var url = this.Uurl + "/api/widget";
        return this.http.put(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.Uurl + "/api/widget/" + widgetId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    Uurl: "http://localhost:4100"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\willson\Desktop\webmaker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map