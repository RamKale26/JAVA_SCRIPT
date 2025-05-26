/*Question: Copy all elements of one array to another using a loop.
 Example Input: [5, 10, 15]
 Expected Output: [5, 10, 15]
 Explanation: Use a loop to assign each element from the original array to a new one.
 */

 let a=[5,10,20]
 let b=[]

 for(let i=0;i<a.length;i++)
 {
    b[i]=a[i]
 }
 console.log(b)