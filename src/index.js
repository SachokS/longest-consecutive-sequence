module.exports = function longestConsecutiveLength(array)
{
function comparer(a, b)
{
if (a > b) return (1);
if (a < b) return (-1);
}
array.sort(comparer);
a=1;m=0;
for(a=0;a< array.length; a++)
{
if (array[i]+1==array[i+1])
{
a=1;
while (array[i]+1==array[i+1] || array[i]==array[i+1])
{
if (array[i]+1==array[i+1] )
  a++;

i++;

}
i--;
}
if (m<a)m=a;
}
return(m);
}
