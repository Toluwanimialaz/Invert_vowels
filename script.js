
var button=document.getElementById("button");



function puush(rt){
    let onearr=[];
    for(var i=0;i<rt.length;i++){
        onearr.push(rt[i]);
    }
    return onearr
}




button.addEventListener("click",function (){
    var cst=document.getElementById("blank").value.toLowerCase();
    let dupe=puush(cst);
    let arr=[];
    let arr1=[];
    for(var i=0;i<dupe.length;i++){
        let item=dupe[i];
        if(item==="a"||item==="e"||item==="i"||item==="o"||item==="u"){
            let prop=i;
            arr.push(item);
            arr1.push(prop);
        }

    }
    for(var s=0;s<arr.length;s++){
        dupe.splice(arr1[s],1,arr[arr.length-(s+1)])
    }
    var newWord=dupe.join('');
    document.getElementById("tag").textContent=newWord;
    return newWord
})

