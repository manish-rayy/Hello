1.Prime problem
let c=0
let a=19;
for(i=1;i<=19;i++){
     if(a%i==0){
     c=c+1
    }
 }
if(c==2){
console.log("Yes")
}
else{
console.log("No")
}


2.Palindrome
let a="masai";
let b="";
for(i=a.length-1;i>0;i--){
    b=b+a[i];
 }
let c=0
for(j=0;j<a.length;j++){
     if(a[j]==b[j]){
       c=c+1
      }    
}
if(c>0){
console.log("Yes")
}
else{
console.log("No")