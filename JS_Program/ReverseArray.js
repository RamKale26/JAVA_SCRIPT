/*4. Reverse an Array
Question: Write a program to reverse the elements of an array without using built-in functions.
 Example Input: [1, 2, 3, 4]
 Expected Output: [4, 3, 2, 1]
 Explanation: Loop from the end of the array to the beginning and store in a new array.
 */

 let arr=[9,2,55,4,6]
 let arr1=[]
 let k=0;
 for(let i=arr.length-1;i>=0;i--)
 {
    arr1[k++]=arr[i];
 }
 console.log(arr1)

