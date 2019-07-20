function isEven(n){
    return n % 2 === 0;
}    

const input = document.getElementById("number-input");
const btn = document.getElementById("btn");
const result = document. getElementById("result"); 

btn.onclick = () => {
    const num = Number(input.value);
    result.textContent = `${num} is ${isEven(num) ? "even" : "odd"}`;
}
        

    
