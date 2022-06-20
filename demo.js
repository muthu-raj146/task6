
// <li>
//     home
// </li>
let inputtext=document.getElementById("text_id");
let items=document.getElementById("Tea_item");

function addTea()
{
let li=document.createElement("li");
let litext=document.createTextNode(inputtext.value);
li.appendChild(litext);
items.prepend(li);
console.log(li);
}