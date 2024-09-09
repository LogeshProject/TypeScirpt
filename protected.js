"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company() {
        this.member_id = 1234;
        this.member_name = "Logesh";
        this.company_name = "CocoLoco";
    }
    return Company;
}());
var Cilent = /** @class */ (function (_super) {
    __extends(Cilent, _super);
    function Cilent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cilent.prototype.changeMemberName = function (name) {
        this.member_name = name;
    };
    return Cilent;
}(Company));
var cilent = new Cilent();
cilent.changeMemberName("Abin");
var company = new Company();
console.log(company.company_name);
