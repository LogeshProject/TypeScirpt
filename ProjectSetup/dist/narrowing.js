"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    else {
        return val + 4;
    }
}
function printAll(str) {
    if (str) {
        if (typeof str === "object") {
            for (const i in str) {
                console.log(str[i]);
            }
        }
    }
    else if (typeof str === 'string') {
        console.log(str);
    }
}
let str = ['a', 'b', 'c', 'd', 'e'];
let res2 = printAll(str);
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
