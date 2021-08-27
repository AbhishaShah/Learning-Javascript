let user = {
    name:"Shah",
    age:27,
    position:"Developer"
}

delete user.position; // true => deletes property position

delete user.address; // true => does nothing (Its not property still returns true, not an error)

delete user.toString; // true => does nothing (Its inherited property still returns true, not an error)

delete 1; // true => does nothing


// In strict mode, all these deletions throw TypeError instead of returning false

delete Object.prototype; // false => Property is not configurable

var x = 1; // declare global variable
delete globalThis.x; // false

function f() {}
delete f; // false


globalThis.y = 1; // Create a configurable global property (no let or var)
delete globalThis.y; // true