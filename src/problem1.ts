{
    //1.  Write a TypeScript function sumArray that takes an array of numbers  and returns the sum of all elements in the array.

    function sumArray(num: number[]):number{
         return num.reduce((a,c)=>a+c,0);
    }
   
    console.log(sumArray([3,5]));

}