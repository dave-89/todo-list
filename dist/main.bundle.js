webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete {\n    background-color: #f44336;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>Items to buy</h1>\n    <input class=\"new-todo\" placeholder=\"Item description\" autofocus=\"\" \n    [(ngModel)]=\"newTodo.description\" \n    (keyup.enter)=\"addItem()\">\n  </header>\n  <section class=\"main\" *ngIf=\"items.length > 0\">\n    <ul class=\"todo-list\">\n      <li *ngFor=\"let item of items\" [class.completed]=\"item.done\">\n        <div class=\"view\">\n          <input class=\"toggle\" type=\"checkbox\" (click)=\"markAsDone(item)\" [checked]=\"item.done\">\n          <label>{{item.description}}</label>\n          <button class=\"delete\" (click)=\"deleteItem(item)\">Delete</button>\n          <!-- <input class=\"edit-item\" placeholder=\"edit text\" ng-value=\"edited\" [(ngModel)]=\"edited\">\n          <button class=\"edit-button\" (click)=\"editItem(item, edited)\">Edit</button> -->\n        </div>\n      </li>\n    </ul>\n  </section>\n  <footer class=\"footer\" *ngIf=\"items.length > 0\">\n    <span class=\"todo-count\"><strong>{{not_done}}</strong> {{items.length == 1 ? 'item' : 'items'}} left</span>\n  </footer>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_service__ = __webpack_require__("../../../../../src/app/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item__ = __webpack_require__("../../../../../src/app/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__item__["a" /* Item */]();
    }
    ;
    AppComponent.prototype.markAsDone = function (item) {
        this.itemService.toggleStatusById(item.id);
    };
    AppComponent.prototype.editItem = function (item, edited) {
        console.log('New value ' + edited);
        this.itemService.editItemById(item.id, edited);
        console.log('Current items: ' + JSON.stringify(this.getItems()));
    };
    AppComponent.prototype.addItem = function () {
        this.itemService.addItem(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__item__["a" /* Item */]();
    };
    AppComponent.prototype.deleteItem = function (item) {
        this.itemService.deleteItemById(item.id);
    };
    AppComponent.prototype.getItems = function () {
        return this.itemService.getItems();
    };
    Object.defineProperty(AppComponent.prototype, "items", {
        get: function () {
            return this.getItems();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "not_done", {
        get: function () {
            return this.getItems().filter(function (item) { return !item.done; }).length;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__item_service__["a" /* ItemService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__item_service__["a" /* ItemService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = (function () {
    function ItemService(http) {
        var _this = this;
        this.http = http;
        this.items = [];
        this.http.get('/api/list')
            .map(function (res) { return res.json(); })
            .subscribe(function (val) {
            _this.items = val;
            console.log('Loading initial items: ', _this.items);
        });
    }
    ItemService.prototype.addItem = function (item) {
        var _this = this;
        if (this.items.length > 0) {
            item.id = this.items[this.items.length - 1].id + 1;
        }
        else {
            item.id = 0;
        }
        this.http.put('/api/add', item)
            .map(function (res) { return res.json(); })
            .subscribe(function (val) {
            _this.items = val;
            console.log('Updating items: ', _this.items);
        });
        return this;
    };
    ItemService.prototype.editItemById = function (id, edited) {
        this.items
            .find(function (item) { return item.id == id; })
            .description = edited;
        return this;
    };
    ItemService.prototype.deleteItemById = function (id) {
        var _this = this;
        this.http.post('/api/delete', { id: id })
            .map(function (res) { return res.json(); })
            .subscribe(function (val) {
            _this.items = val;
            console.log('Updating items: ', _this.items);
        });
        return this;
    };
    ItemService.prototype.toggleStatusById = function (id) {
        var _this = this;
        this.http.post('/api/mark', { id: id })
            .map(function (res) { return res.json(); })
            .subscribe(function (val) {
            _this.items = val;
            console.log('Updating items: ', _this.items);
        });
        return this;
    };
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(values) {
        if (values === void 0) { values = {}; }
        this.description = '';
        this.done = false;
        Object.assign(this, values);
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map