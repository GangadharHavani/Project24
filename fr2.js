var count=0;
var val=0, totl=0;
for(count=0;count<5;count++)
{
    val = prompt(" Enter the marks");
    totl=totl+parseInt(val);
}
document.write("The Total marks obtained are: "+totl);