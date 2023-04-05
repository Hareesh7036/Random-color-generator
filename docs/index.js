const main_container=document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const varcode=RandomColor();
    const color_box = document.createElement("div");
    color_box.classList.add("color-container");
    color_box.style.backgroundColor=varcode;
    color_box.innerText=varcode;
    main_container.appendChild(color_box);
    color_box.title="click to copy color code!"
    color_box.onclick=()=>{
        navigator.clipboard.writeText(varcode)
        color_box.textContent="copied!";
        document.body.style.backgroundColor=varcode
        setTimeout(()=>{
            color_box.textContent=varcode;
            document.body.style.backgroundColor="#fff";
        },1000);
    }

    
}

function RandomColor(){
    const chars="0123456789abcdef";
    let color_code="#";
    const colorcodeLength=6;


    for (let index = 0; index < colorcodeLength; index++) {
        const code =Math.floor(Math.random() *chars.length);
        color_code+=chars[code]
        
    }
    return color_code

}


