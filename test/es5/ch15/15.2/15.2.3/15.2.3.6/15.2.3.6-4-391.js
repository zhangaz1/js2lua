/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-391.js
 * @description ES5 Attributes - [[Value]] attribute of data property is an Error object
 */


function testcase() {
        var obj = {};
        var errObj = new Error();

        Object.defineProperty(obj, "prop", {
            value: errObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === errObj && desc.value === errObj;
    }
runTestCase(testcase);
