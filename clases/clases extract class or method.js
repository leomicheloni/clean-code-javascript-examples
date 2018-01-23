//// Clases, extract clases, mantain SRP
// Mal
function Receipt() {
    this.aDiscounts = [];
    this.aItemTotals = [];
}
Receipt.prototype.calculateGrandTotal = function () {
    var nSubTotal = 0,
        nTax,
        nTotal,
        nLenTotals = this.aItemTotals.length,
        nItemValue,
        nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue;
    for (nTotal = 0; nTotal < nLenTotals; nTotal++) {
        nItemValue = this.aItemTotals[nTotal];
        nSubTotal += nItemValue;
    }
    if (nLenDiscounts > 0) {
        for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
            nDiscountValue = this.aDiscounts[nDiscount];
            nSubTotal -= nDiscountValue;
        }
    }
    nTax = nSubTotal * 0.065;
    nSubTotal += nTax;
    return nSubTotal
};
// Bien
function Receipt() {
    this.aDiscounts = [];
    this.aItemTotals = [];
}
Receipt.prototype.calculateGrandTotal = function () {
    var nSubTotal = this.calculateSubtotal();
    nSubTotal = this.calculateDiscounts(nSubTotal);
    nSubTotal = this.calculateTax(nSubTotal);
    return nSubTotal;
};
Receipt.prototype.calculateTax = function (nSubTotal) {
    var nTax = nSubTotal * 0.065;
    nSubTotal += nTax;
    return nSubTotal;
};
Receipt.prototype.calculateDiscounts = function (nSubTotal) {
    var nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue;
    if (nLenDiscounts) {
        for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
            nDiscountValue = this.aDiscounts[nDiscount];
            nSubTotal -= nDiscountValue;
        }
    }
    return nSubTotal;
};
Receipt.prototype.calculateSubtotal = function () {
    var nSubTotal = 0,
        nTotal,
        nLenTotals = this.aItemTotals.length,
        nItemValue;
    for (nTotal = 0; nTotal < nLenTotals; nTotal++) {
        nItemValue = this.aItemTotals[nTotal];
        nSubTotal += nItemValue;
    }
    return nSubTotal;
};

// Mal
function CustomerService() {    
}
CustomerService.prototype.calculateOrderDiscount = function (aProducts, oCustomer) {
    // do work
};
CustomerService.prototype.isValidCustomer = function (oCustomer, oOrder) {
    // do work
};
CustomerService.prototype.gatherOrderErrors = function (aProducts, oCustomer) {
    // do work
};
CustomerService.prototype.register = function (oCustomer) {
    // do work
};
CustomerService.prototype.forgotPassword = function (oCustomer) {
    // do work
};
// Bien
function CustomerRegistrationService() {    
}
CustomerRegistrationService.prototype.register = function () {
    // do work
};
CustomerRegistrationService.prototype.forgotPassword = function () {
    // do work
};
function CustomerOrderService() {
}
CustomerOrderService.prototype.calculateOrderDiscount = function (aProducts, oCustomer) {
    // do work
};
CustomerOrderService.prototype.isValidCustomer = function (oCustomer, oOrder) {
    // do work
};
CustomerOrderService.prototype.gatherOrderErrors = function (aProducts, oCustomer) {
    // do work
};
