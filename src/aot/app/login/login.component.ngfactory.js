/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/login/login.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_LoginComponent_Host = null;
var _View_LoginComponent_Host0 = (function (_super) {
    __extends(_View_LoginComponent_Host0, _super);
    function _View_LoginComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginComponent_Host0, renderType_LoginComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('hpt-login', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LoginComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LoginComponent_0_4 = new import3.LoginComponent();
        this._appEl_0.initComponent(this._LoginComponent_0_4, [], compView_0);
        compView_0.create(this._LoginComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LoginComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LoginComponent) && (0 === requestNodeIndex))) {
            return this._LoginComponent_0_4;
        }
        return notFoundResult;
    };
    _View_LoginComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LoginComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_LoginComponent_Host0;
}(import1.AppView));
function viewFactory_LoginComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginComponent_Host === null)) {
        (renderType_LoginComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_LoginComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var LoginComponentNgFactory = new import9.ComponentFactory('hpt-login', viewFactory_LoginComponent_Host0, import3.LoginComponent);
var styles_LoginComponent = [];
var renderType_LoginComponent = null;
var _View_LoginComponent0 = (function (_super) {
    __extends(_View_LoginComponent0, _super);
    function _View_LoginComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginComponent0, renderType_LoginComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    return _View_LoginComponent0;
}(import1.AppView));
export function viewFactory_LoginComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginComponent === null)) {
        (renderType_LoginComponent = viewUtils.createRenderComponentType('c:/Users/sshrestha/Source/Repos/Hamilton Plate Tracker Spa/src/app/login/login.component.ts class LoginComponent - inline template', 0, import8.ViewEncapsulation.None, styles_LoginComponent, {}));
    }
    return new _View_LoginComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=login.component.ngfactory.js.map