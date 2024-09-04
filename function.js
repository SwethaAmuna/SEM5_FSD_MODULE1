// Old version function
function oldVersion() {
    console.log("Hi I am old function");
}
oldVersion();

// New version function
const newVersion = () => {
    console.log("Hi I am Function");
}
newVersion();

// Old function with return
function oldFunction2(no1) {
    return no1 + 10;
}
console.log(oldFunction2(30));

// New function with return
const newVersion2 = no1 => no1 + 10;
console.log(newVersion2(20));