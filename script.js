const container = document.querySelector(".container");

for(let i = 0; i < (16*16); i++){
    const square = document.createElement("div");
    square.classList.add('square');
    container.append(square);

    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = "lightblue";
    });

}

const button = document.querySelector(".btn");

button.addEventListener("click", ()=>{
    let size = prompt("How many squares per side?");
    size = parseInt(size);

    container.innerHTML = "";

    if (size >= 100){
        alert("Enter a number less than 100: ");
        return;
    }else{
        for (let i = 0; i < (size*size); i++){
            const square = document.createElement("div");
            square.classList.add('square');
            square.style.height = `${640 / size}px`;
            square.style.width = `${640 / size}px`;

            square.addEventListener("mouseover", ()=>{
                square.style.backgroundColor = "lightblue";
            });

            container.append(square);
        }
    }
})



