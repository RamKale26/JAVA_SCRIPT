/*8. Check if All Elements are Positive
Question: Write a program to check if all elements in an array are positive numbers.
 Example Input: [5, 3, 8, 0, -1]
 Expected Output: false
 Explanation: Loop through and return false if any element is less than 0.
 */

 let a=[5,3,7,0,4]

 let isPositive=true;
 for(let i=0;i<a.length;i++)
 {
    if(a[i]<0)
    {
        isPositive=false;
        break;
    }
 }
 console.log(isPositive)

