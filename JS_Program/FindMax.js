/* 2. Find the Maximum Number in an Array
Question: Write a JavaScript program to find the largest number in an array.
 Example Input: [4, 9, 2, 7, 6]
 Expected Output: 9
 Explanation: Initialize max with the first element, then loop through the rest and compare.
 
 */


 let a=[4,9,2,7,6]
 let max = a[0];

for(let i=0;i<a.length;i++)
{
    if(a[i]>max)
    {
        max=a[i]
    }
}
console.log(max);

