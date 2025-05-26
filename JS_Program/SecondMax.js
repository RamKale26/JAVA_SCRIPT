/*Question:
 Given an array of integers, find the second largest number.
 Example:
 Input: [10, 40, 30, 20] → Output: 30
Explanation:
 Loop through the array, keep track of the largest and second-largest values using variables.
 */

 
let a=[10,20,80,70,80,40,50];
let largest=0;
let slargest=0;
for(let i=0;i<a.length;i++)
{	
	if(a[i]>largest)
	{
		slargest=largest;
		largest=a[i];
	}
	else if(a[i]>slargest  && a[i]!=largest)
	{
		slargest=a[i];
	}
}
console.log(slargest);
