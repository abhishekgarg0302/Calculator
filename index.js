function display(val){
    var input=document.getElementById('textarea').value;
    if((input==="0"||input==="")&&(val==='0'||val==="00"||val==='%'||val==='/'||val==='+'||val==='-'||val==='*')){
        return;
    }
    else
    document.getElementById('textarea').value+=val;
}
function del(){
    var input=document.getElementById('textarea').value;
    document.getElementById('textarea').value=input.slice(0,-1);
}
function clr(){
    document.getElementById('textarea').value="";
}
function calculate(){
    var input=document.getElementById('textarea').value;
    if(input==='0'||input==="")
        return;
    var answer=eval(input);
    document.getElementById('textarea').value=answer;
}