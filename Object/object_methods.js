let user = {
    firstname:"Joe",
    lastname:"Dowe",
    age:27,
    address: {
        street:"101, Flamingo dr",
        city:"Mountain view",
        country:"USA"
    }
  }

// hasOwnProperty(): checks of own property only
user.hasOwnProperty("address"); // true
user.hasOwnProperty("salary"); //false
user.hasOwnProperty("toLocaleString"); // false => inherited property

// "in" will return true for inherited property check
 "toLocaleString" in user; // true

// propertyIsEnumerable(): checks of own property and enumerable attribiute true value
user.propertyIsEnumerable("address"); // true
user.propertyisEnumerable("toString"); //false => inherited property

let today = new Date();
today.toString(); // "Fri Aug 27 2021 16:07:28 GMT-0400 (Eastern Daylight Time)"
today.toLocaleString(); // "8/27/2021, 4:07:53 PM"
today.valueOf(); // 1630094873551
