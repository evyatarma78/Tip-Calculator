const para = document.querySelector("#result > p");
let txt = "";
const printToResult = (key)=>{
    if (txt == 0) {
        txt = "";
        txt += key;
        para.innerHTML = txt;
    }

    else {
        txt += key;
        para.innerHTML = txt;
    }

}

const showResult = () =>{
    
    
    
    if (typeof eval(txt)) {
        let final = eval(txt);
        txt = final;
        para.innerHTML = final;
    }

    else {
        para.innerHTML = "ERROR";
    }

}

const clearResult = () => {
    txt = "0";
    para.innerHTML = txt;
}