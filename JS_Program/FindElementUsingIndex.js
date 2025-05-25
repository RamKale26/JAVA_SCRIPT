/*6. Find the Index of a Specific Element
Question: Write a program to find the index of a specific number in an array.
 Example Input: [3, 5, 7, 9], search for 7
 Expected Output: 2
 Explanation: Use a loop to compare each element with the given number.
 */

 let a=[3,5,7,9]
 let index=-1;
 let sk=9;

 for(let i=0;i<a.length;i++)
    {
      if(a[i]==sk){
         index=i
         break
      }
    }
    console.log(index)