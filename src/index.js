module.exports = function longestConsecutiveLength(array)
{
function comparer(a, b)
{
if (a > b) return (1);
if (a < b) return (-1);
}
array.sort(comparer);
r=1;m=0;
for(i=0;i< array.length; i++)
{
if (array[i]+1==array[i+1])
{
r=1;
while (array[i]+1==array[i+1] || array[i]==array[i+1])
{
if (array[i]+1==array[i+1] )
r++;
i++;
}
i--;
}
if (m<r)m=r;
}
return(m);
}

