/*13. Find All Pairs with a Given Sum
Question:
 Find all pairs in an array whose sum is equal to a target value.
 Example:
 Input: arr = [1, 3, 2, 2, 4, 0], sum = 4
 Output: [[1,3],[2,2],[4,0]]
Explanation:
 Use two nested loops to check if any pair adds up to the target.
 */

 let a=[1,2,3,2,4,0]
 let b=[]
 let sum=4
 let count=0
 
 for(let i=0;i<a.length;i++)
 {
    for (let j = i + 1; j < a.length; j++)               //for(let j=0;j<a.length;j++) it's allow dupliectae element means shhow multipal option
    {
     if(a[i]+a[j]==sum){
        b[count]=[a[i],a[j]]
        count++
    }
 }
}
 console.log(b)