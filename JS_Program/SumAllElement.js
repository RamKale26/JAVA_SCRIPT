/* 1. Sum of All Elements in an Array
Question: Write a JavaScript program to find the sum of all elements in an array.
 Example Input: [1, 2, 3, 4, 5]
 Expected Output: 15
 Explanation: Use a for loop to iterate through each element and add it to a sum variable.
 */


let a=[1,2,3,4,5]
let sum=0;
for(let ar of a)
{
    sum=sum+ar
}
console.log(sum)