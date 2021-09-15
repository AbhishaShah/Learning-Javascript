
// recursively call countdown function to print from 10
function countDown(value,fn,delay=1000){
    fn(value);
    return value > 0 
    ? setTimeout(() => countDown(value-1,fn,delay) , delay)
    : value;
  }
  
  const log = countDown(10, value=>console.log(value));
  
  
// used recursion to iterate deeply into an object to retrieve a nested value:
  const abhiData = { type: "person", data: {
      gender: "female",
      info: {
        id: 22,
        fullname: {
          first: "Abhi",
          last: "Shah"
        }
  } }
  };
  
const findvalue = (fields,obj = {}) => {
    const [first,...remaining] = fields.split(".");
     return remaining.length
     ? findvalue(remaining.join("."),obj[first])
     : obj[first];
}
  
console.log(findvalue("type",abhiData)); // person
console.log(findvalue("data.info.fullname.first",dan)); // Abhi