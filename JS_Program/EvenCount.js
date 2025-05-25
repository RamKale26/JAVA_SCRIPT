/*3. Count Even Numbers in an Array
Question: Write a program to count the number of even numbers in an array.
 Example Input: [2, 5, 6, 9, 8]
 Expected Output: 3
 Explanation: Use a loop to check each number with num % 2 === 0.
 */


 let a=[2,5,6,9,8]
 let count=0;
 for(let no of a){
    if(no%2==0)
        count++
 }
 console.log("Count is :"+count)