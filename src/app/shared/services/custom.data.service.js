var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorNotifierService } from './error.notifier.service';
export let ServiceNameService = class ServiceNameService extends Http {
    constructor(backend, defaultOptions, errorService) {
        super(backend, defaultOptions);
        this.errorService = errorService;
    }
    request(url, options) {
        console.log('Before the request...');
        return super.request(url, options)
            .catch((err) => {
            this.errorService.notifyError(err);
            return Observable.empty();
        })
            .retryWhen(error => error.delay(500))
            .timeout(2000, new Error('delay exceeded'))
            .finally(() => {
            console.log('After the request...');
        });
    }
    get(url, options) {
        console.log('Before the request...');
        return super.get(url, options)
            .catch((err) => {
            if (err.status === 400 || err.status === 422) {
                return Observable.throw(err);
            }
            else {
                this.errorService.notifyError(err);
                return Observable.empty();
            }
        })
            .retryWhen(error => error.delay(500))
            .timeout(2000, new Error('delay exceeded'))
            .finally(() => {
            console.log('After the request...');
        });
    }
    post(url, body, options) {
        console.log('Before the request...');
        return super.post(url, body, options)
            .catch((err) => {
            if (err.status === 400 || err.status === 422) {
                return Observable.throw(err);
            }
            else {
                this.errorService.notifyError(err);
                return Observable.empty();
            }
        })
            .finally(() => {
            console.log('After the request...');
        });
    }
};
ServiceNameService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ConnectionBackend, RequestOptions, ErrorNotifierService])
], ServiceNameService);
