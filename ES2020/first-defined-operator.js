let options = {
    name:"",
    position:null,
    score:0,
    salary:undefined,
    country:"canada",
    isPR:false
}

console.log(options.name ?? "Untitled"); // ""
console.log(options.name || "Untitled"); // Untitled

console.log(options.position ?? "N/A"); // "N/A"
console.log(options.position || "N/A");// "N/A"

console.log(options.score ?? 100); // 0
console.log(options.score || 100);// 100

console.log(options.salary ?? "Not defined"); // Not defined
console.log(options.salary || "Not defined"); // Not defined

console.log(options.country ?? "India"); // canada
console.log(options.country || "India");// canada

console.log(options.isPR ?? true); // false
console.log(options.isPR || true);// true