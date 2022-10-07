var count=0;
var val=0, totl=0;
while(count<5)
{
    val = prompt(" Enter the marks");
    totl=totl+parseInt(val);
    count++;
}
document.write("The Total marks obtained are: "+totl);