var l1=[];
var l2=[];
var l3=[];
var l4=[];
var l5=[];
var l6=[];
var l7=[];

var n=1;
var x=0;

function AddStudent(){
    var row=document.getElementById('view');
    var newrow=row.insertRow(n);

    l1[x]=document.getElementById('name').value;
    l2[x]=document.getElementById('phone').value;
    l3[x]=document.getElementById('email').value;
    l4[x]=document.getElementById('state').value;
    l5[x]=document.getElementById('city').value;
    l6[x]=document.getElementById('gen').value;
    l7[x]=document.getElementById('course').value;

    var c1=newrow.insertCell(0);
    var c2=newrow.insertCell(1);
    var c3=newrow.insertCell(2);
    var c4=newrow.insertCell(3);
    var c5=newrow.insertCell(4);
    var c6=newrow.insertCell(5);
    var c7=newrow.insertCell(6);


    c1.innerHTML=l1[x];
    c2.innerHTML=l2[x];
    c3.innerHTML=l3[x];
    c4.innerHTML=l4[x];
    c5.innerHTML=l5[x];
    c6.innerHTML=l6[x];
    c7.innerHTML=l7[x];

    n++;
    x++;
}