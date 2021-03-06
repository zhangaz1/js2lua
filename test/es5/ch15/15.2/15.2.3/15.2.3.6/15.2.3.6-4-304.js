/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-304.js
 * @description Object.defineProperty - 'O' is an Arguments object, 'name' is an index named data property of 'O' but not defined in [[ParameterMap]] of 'O', and 'desc' is data descriptor, test updating multiple attribute values of 'name' (10.6 [[DefineOwnProperty]] step 3)
 */


function testcase() {
        return (function () {
            Object.defineProperty(arguments, "0", {
                value: 20,
                writable: false,
                enumerable: false,
                configurable: false
            });
            return dataPropertyAttributesAreCorrect(arguments, "0", 20, false, false, false);
        }());
    }
runTestCase(testcase);
