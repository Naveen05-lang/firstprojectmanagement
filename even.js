let array=[5,3,8,12,24,7,15,9];
let bag="";
for(let i=0;i<array.length;i++){
    if(array[i]%2!==0){  
        bag+=array[i]+" ";
    }
}
console.log(bag);