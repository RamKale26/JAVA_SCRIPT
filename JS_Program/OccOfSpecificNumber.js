/*Question: Count how many times a specific number appears in an array.
 Example Input: [1, 2, 3, 2, 4, 2], number = 2
 Expected Output: 3
 Explanation: Use a loop and increase count each time the number is found.
 */

 let a=[1,2,3,2,4,2,5]
 let count=0
 let b=2

 for(let i=0;i<a.length;i++)
 {
    if(a[i]==b){
        count++
    }
 }
 console.log(count)