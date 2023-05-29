// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test("(858)345-9981 is a valid phone number", () => {
    expect(functions.isPhoneNumber("(858)345-9981")).toBe(true);
})
test("858-345-9981 is a valid phone number", () => {
    expect(functions.isPhoneNumber("858-345-9981")).toBe(true);
})
test("1 is not a valid phone number", () => {
    expect(functions.isPhoneNumber("1")).toBe(false);
})
test("8583459981 is not a valid phone number", () => {
    expect(functions.isPhoneNumber("8583459981")).toBe(false);
})

//isEmail
test("a1yao@ucsd.edu is a valid email", () => {
    expect(functions.isEmail("a1yao@ucsd.edu")).toBe(true);
})
test("seanchen2222@gmail.com is a valid email", () => {
    expect(functions.isEmail("seanchen2222@gmail.com")).toBe(true);
})
test("a1yao@ucsd is not a valid email", () => {
    expect(functions.isEmail("a1yao@ucsd")).toBe(false);
})
test("hello is a valid email", () => {
    expect(functions.isEmail("hello")).toBe(false);
})

//isStrongPassword
test("abcde is a strong password", () => {
    expect(functions.isStrongPassword("abcde")).toBe(true);
})
test("a12314 is a strong password", () => {
    expect(functions.isStrongPassword("a12314")).toBe(true);
})
test("1234 is not a strong password", () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
})
test("a is a strong password", () => {
    expect(functions.isStrongPassword("a")).toBe(false);
})

//isDate
test("01/01/2001 is a date", () => {
    expect(functions.isDate("01/01/2001")).toBe(true);
})
test("12/31/1000 is a date", () => {
    expect(functions.isDate("12/31/1000")).toBe(true);
})
test("01/01/01 is not a date", () => {
    expect(functions.isDate("01/01/01")).toBe(false);
})
test("1/01/2001 is not a date", () => {
    expect(functions.isDate("1/01/2001")).toBe(true);
})

//isHexColor
test("E06910 is a HexColor", () => {
    expect(functions.isHexColor("E06910")).toBe(true);
})
test("0B5 is a HexColor", () => {
    expect(functions.isHexColor("0B5")).toBe(true);
})
test("! is not a HexColor", () => {
    expect(functions.isHexColor("!")).toBe(false);
})
test("abcd not is a HexColor", () => {
    expect(functions.isHexColor("abcd")).toBe(false);
})