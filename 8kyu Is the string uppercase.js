String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};


"Hello".isUpperCase(); // false
"HELLO".isUpperCase(); // true
