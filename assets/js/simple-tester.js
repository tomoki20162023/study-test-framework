function Assertion() {
	console.debug(arguments.length, ":", arguments);
}
// Test Premitive Type
// 特殊な値を検査する
Assertion.prototype.isUndefined = function (actual) {
	return actual === undefined;
};
Assertion.prototype.isDefined = function (actual) {
	return actual !== undefined;
};
Assertion.prototype.isNull = function (actual) {
	return actual === null;
};
Assertion.prototype.isNaN = function (actual) {
	return Number.isNaN(actual);
};
Assertion.prototype.isTrue = function (actual) {
	return actual === true;
};
Assertion.prototype.isFalse = function (actual) {
	return actual === false;
};
Assertion.prototype.equal = function (actual, expected) {
	return actual == expected;
};
Assertion.prototype.strictEqual = function (actual, expected) {
	return actual === expected;
};
// Test Composite Type
// オブジェクトから継承されているインスタンスの検査
Assertion.prototype.isArray = function (actual) {
	return Array.isArray(actual);
};

// actual, expected

function TesterIt() {
	console.debug(arguments.length, ":", arguments);
	let result = 0;
	let i = 0;
	while (i++ < arguments.length) {
		if (arguments[i] instanceof Function) {
			result += !!arguments[i]();
		}
	}
	this._result = result;

	this.showResult();
}
TesterIt.prototype.showResult = function () {
	console.debug("Result = ", this._result);
};
