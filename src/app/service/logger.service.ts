import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class Logger {

    constructor() { }

    writeCount(count: number) {
        console.log(count);
    }

    getTime() {
        // console.log("logger-getTime()");
        return new Date();
    }

    getName() {
        return "Sanskar tanmor;"
    }

    
}