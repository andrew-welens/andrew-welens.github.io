(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 title=\"{{developer}}\">{{ appTitle }}</h1>\r\n\r\n\t<app-todos></app-todos>\r\n\t<app-todo-form></app-todo-form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo-form/todo-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo-form/todo-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <input\r\n    class=\"form-control\"\r\n    [(ngModel)]=\"title\"\r\n    (keydown.enter)=\"addTodo()\"\r\n    type=\"text\" placeholder=\"Add todo title..\">\r\n  <button\r\n    class=\"btn btn-outline-danger\"\r\n    (click)=\"addTodo()\">\r\n    Add ToDo\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todos/todos.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todos/todos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\r\n\r\n  <div class=\"filter\">\r\n    <input class=\"input-group\" type=\"text\" placeholder=\"Filter todo by title...\" [(ngModel)]=\"searchString\">\r\n  </div>\r\n\r\n  <ul *ngIf=\"todosService.todos.length; else noTodos\">\r\n    <li *ngFor=\"let todo of todosService.todos | todosFilter:searchString; let i = index\">\r\n      <span [class.done]=\"todo.completed\">\r\n        <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"onChange(todo.id)\">\r\n        <strong>{{i + 1}}</strong> {{ todo.title }}\r\n      </span>\r\n\r\n      <small>{{todo.date | date:'medium'}}</small>\r\n\r\n      <button class=\"rm\" (click)=\"removeTodo(todo.id)\">&times;</button>\r\n    </li>\r\n  </ul>\r\n\r\n  <ng-template #noTodos>\r\n    <p style=\"text-align: center;\">No todos now!</p>\r\n  </ng-template>\r\n</div>\r\n<p *ngIf=\"loading\">Loading....</p>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 3rem;\n  width: 800px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\nh1 {\n  position: relative;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  color: #eeeeee;\n  margin-bottom: 1rem;\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 900;\n  text-transform: uppercase;\n  border: 4px solid #fafafa;\n  padding: 15px;\n  box-shadow: 10px 10px 5px 0px rgba(50, 50, 50, 0.75);\n}\n\nh1:before {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  background-color: #fff;\n  content: \"\";\n  height: 2px;\n  width: 15px;\n  color: #000;\n}\n\nh1:after {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  background-color: #fff;\n  content: \"\";\n  height: 2px;\n  width: 15px;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbmRyZXdcXERlc2t0b3BcXFdPUktcXGFuZ3VsYXItdG9kby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBR0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZmFmYWZhO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBjb2xvcjogI2VlZWVlZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmYWZhZmE7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XG59XG5oMTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59XG5oMTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'First ng app';
        this.developer = 'Andrew Welens';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo-form/todo-form.component.ts");
/* harmony import */ var _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/todos-filter.pipe */ "./src/app/shared/todos-filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"],
                _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_6__["TodoFormComponent"],
                _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["TodosFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/todos-filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/todos-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: TodosFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosFilterPipe", function() { return TodosFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodosFilterPipe = /** @class */ (function () {
    function TodosFilterPipe() {
    }
    TodosFilterPipe.prototype.transform = function (todos, search) {
        if (search === void 0) { search = ''; }
        if (!search.trim()) {
            return todos;
        }
        return todos.filter(function (todo) {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    };
    TodosFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'todosFilter'
        })
    ], TodosFilterPipe);
    return TodosFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/todos.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/todos.service.ts ***!
  \*****************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TodosService = /** @class */ (function () {
    function TodosService(http) {
        this.http = http;
        this.todos = [];
    }
    TodosService.prototype.fetchTodos = function () {
        var _this = this;
        return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (todos) { return _this.todos = todos; }));
    };
    TodosService.prototype.onToggle = function (id) {
        var idx = this.todos.findIndex(function (t) { return t.id === id; });
        this.todos[idx].completed = !this.todos[idx].completed;
    };
    TodosService.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (t) { return t.id !== id; });
    };
    TodosService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/app/todo-form/todo-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\ndiv input {\n  flex-basis: 80%;\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  padding: 0 0.5rem;\n}\ndiv button {\n  color: #fafafa;\n  font-weight: 900;\n  margin-left: 45px;\n  border: 2px solid tomato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1mb3JtL0M6XFxVc2Vyc1xcQW5kcmV3XFxEZXNrdG9wXFxXT1JLXFxhbmd1bGFyLXRvZG8vc3JjXFxhcHBcXHRvZG8tZm9ybVxcdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdG9tYXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5kaXYgaW5wdXQge1xuICBmbGV4LWJhc2lzOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5kaXYgYnV0dG9uIHtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0b21hdG87XG59Il19 */"

/***/ }),

/***/ "./src/app/todo-form/todo-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.ts ***!
  \**************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todos.service */ "./src/app/shared/todos.service.ts");



var TodoFormComponent = /** @class */ (function () {
    function TodoFormComponent(todosService) {
        this.todosService = todosService;
        this.title = '';
    }
    TodoFormComponent.prototype.ngOnInit = function () {
    };
    TodoFormComponent.prototype.addTodo = function () {
        var todo = {
            title: this.title,
            id: Date.now(),
            completed: false,
            date: new Date()
        };
        this.todosService.addTodo(todo);
        this.title = '';
    };
    TodoFormComponent.ctorParameters = function () { return [
        { type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }
    ]; };
    TodoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-form',
            template: __webpack_require__(/*! raw-loader!./todo-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-form/todo-form.component.html"),
            styles: [__webpack_require__(/*! ./todo-form.component.scss */ "./src/app/todo-form/todo-form.component.scss")]
        })
    ], TodoFormComponent);
    return TodoFormComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.scss":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 1rem;\n  background-color: transparent;\n}\nul li {\n  position: relative;\n  color: #fafafa;\n  font-family: \"Roboto\";\n  font-size: 24px;\n  font-weight: 400;\n  border: 1.5px solid #cfcfcf;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n}\nul li input {\n  margin-right: 1rem;\n}\nul li small {\n  position: absolute;\n  right: 40px;\n  bottom: 5px;\n  font-size: 0.8rem;\n}\n.done {\n  text-decoration: line-through;\n  color: #cccccc;\n}\n.rm {\n  border-radius: 50%;\n  background: red;\n  color: #fff;\n  font-size: 1rem;\n  border: none;\n  width: 20px;\n  height: 20px;\n  transition: 0.3s all;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rm:hover {\n  background: #cc0000;\n}\n.filter {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 1rem;\n  height: 30px;\n}\n.filter input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvQzpcXFVzZXJzXFxBbmRyZXdcXERlc2t0b3BcXFdPUktcXGFuZ3VsYXItdG9kby9zcmNcXGFwcFxcdG9kb3NcXHRvZG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDRCxnQkFBQTtFQUNBLDZCQUFBO0FDQ0Q7QURDRTtFQUNBLGtCQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0YsZUFBQTtFQUNBLGdCQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQU47QURLQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0E7RUFFRSxrQkFBQTtFQUNBLGVBRlE7RUFHUixXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKRjtBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGxpIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRvbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4ucm0ge1xyXG4gICRjb2xvcjogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkY29sb3IsIDEwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG51bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2NmY2ZjZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG51bCBsaSBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbnVsIGxpIHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZG9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLnJtIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucm06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2MwMDAwO1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGhlaWdodDogMzBweDtcbn1cbi5maWx0ZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todos.service */ "./src/app/shared/todos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TodosComponent = /** @class */ (function () {
    function TodosComponent(todosService) {
        this.todosService = todosService;
        this.loading = true;
        this.searchString = '';
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todosService.fetchTodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(800))
            .subscribe(function () {
            _this.loading = false;
        });
    };
    TodosComponent.prototype.onChange = function (id) {
        this.todosService.onToggle(id);
    };
    TodosComponent.prototype.removeTodo = function (id) {
        this.todosService.removeTodo(id);
    };
    TodosComponent.ctorParameters = function () { return [
        { type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }
    ]; };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/todos/todos.component.scss")]
        })
    ], TodosComponent);
    return TodosComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Andrew\Desktop\WORK\angular-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map