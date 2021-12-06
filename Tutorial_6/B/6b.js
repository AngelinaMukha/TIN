function makeParagraph(){
    const newP=document.createElement("p");
    newP.innerText="Hello, what is the time?";
    document.body.appendChild(newP);
}
setTimeout(makeParagraph, 5000);