let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");

let count=0
let turno=true

 const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkWinner()
        if(count ===9 && !iswinner){
        gameDraw()
        }
    });
  } );

  const gameDraw=()=>{
    msg.innerText=`game is withdrawed`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
  const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes();
};

const  checkWinner=()=>{
for(let pattern of winPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val)
            return true;
        }
    }
}
};


resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

