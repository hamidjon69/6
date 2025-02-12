let user="Users Cards";

let users=[
    {
        logo:"twitter.png",
        name:"twitter",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },
    {
        logo:"Instagram.png",
        name:"instagram",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },
    {
        logo:"youtube.png",
        name:"you tube",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },
    {
        logo:"facebook.png",
        name:"facebook",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },
    {
        logo:"watsapp.png",
        name:"watsapp",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },
    {
        logo:"telegram.png",
        name:"telegram",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        more:"Learn More"
    },

]
let containerEl=document.querySelector(".container");
for(let i=0; i<users.length;i++){
    //   console.log(users[i]);

    let objEl=document.createElement("li");
    objEl.innerHTML=users[i].name;
    containerEl.appendChild(objEl);
    objEl.style.listStyle="none";

    let butEl=document.createElement("button");
    butEl.innerHTML="Learn more";
    objEl.appendChild(butEl);
    
    containerEl.style.display="flex";
    

    // butEl.addEventListener("click",()=>{
    //     console.log(users[i]);
        
        
    // });

    let modEl=document.querySelector(".modal");
    let backEl=document.querySelector(".back_modal");
    
    butEl.addEventListener("click",()=>{
        modEl.style.display="block";
        modEl.innerHTML=users[i].name;
       backEl.style.display="block";

    })
    backEl.addEventListener("click",()=>{
        modEl.style.display="none";
        backEl.style.display="none";

    })
};





//let newEl=document.createElement("h2");
//     newEl.innerHTML="head 2";

