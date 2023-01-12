//Create An Function Which Can Take Any Number Of Parameters And Do Addition Of All And Then Return The Result To Result Variable And After That Show The Result Using  Console
function Addition(){
   let Result =0;
   for(let i=0;i<arguments.length;i++) {
   Result +=arguments[i];

}
return Result;
}
console.log(Addition(4,5,10))
console.log(Addition(8,9,14))

