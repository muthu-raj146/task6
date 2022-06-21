
// <li>
//     home
// </li>

// /* <ul id="Tea_item">
//                 <li>
//                     blacktea <span class="close">&times;</span>
//                 </li>
//             </ul> *

//     let textInput=document.getElementById("text_id");
//     let listUl=document.getElementById("Tea_item");

//     function addTea()
//     {
//         if(textInput.value.trim( )=="")
//         {
//             alert("Enter the value");
//         }
//         else
//         {
//             let liText=document.createElement("li");
//             let liItems=document.createTextNode(textInput.value.trim());
//             let textClose=document.createElement("span");

//             liText.appendChild(liItems);
//             listUl.appendChild(liText);
//             textClose.classList.add("close");

//             console.log();
          
//         }
// }

















let textInput=document.getElementById("text_id");
let listUl=document.getElementById("Tea_item");

function addTea()
{

    if(textInput.value.trim()===''){
        alert("Enter the value..")
    }
    else{
        let liText=document.createElement("li");
        let textNode=document.createTextNode(textInput.value.trim());
        let textClose=document.createElement("span");
        liText.appendChild(textNode);
        liText.appendChild(textClose);
        listUl.appendChild(liText);
       
        textClose.classList.add("close");
textClose.createclassname='close'
        textClose.innerHTML="&times";
        
        textClose.addEventListener('click', (e)=>{
            if(confirm("Are u Delete")==true){
        console.log(e.target.parentElement);
        let li=e.target.parentElement;
        li.parentElement.removeChild(li);}
        });
        textInput.value='';
        console.log(textInput.value.trim());
    }
    
}

















// let inputtext=document.getElementById("text_id");
// let items=document.getElementById("Tea_item");

// function addTea()
// {
//     if(inputtext.value.trim()==("")){
//         alert("enter the value")
//     }
//     else{
//         let li=document.createElement("li");
//         let litext=document.createTextNode(inputtext.value);
//         li.appendChild(litext);
//         items.prepend(li);
//         console.log(li);
//         inputtext.value='';
//     }
    

// }