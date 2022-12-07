const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

btn1.addEventListener("click",hideShowCA);
btn2.addEventListener("click",hideShowCL);
btn3.addEventListener("click",hideShowPE);
btn4.addEventListener("click",hideShowLTL);
btn5.addEventListener("click",hideShowTang);
btn6.addEventListener("click",calPos);


function hideShowCA(){
    document.getElementById("caInputs").style.visibility = "visible";
    document.getElementById("totalCA").style.visibility = "visible";
    btn1.style.display = "none";
}

function hideShowCL(){
    document.getElementById("clInputs").style.visibility = "visible";
    document.getElementById("totalCL").style.visibility = "visible";
    btn2.style.display = "none";
}

function hideShowPE(){
    document.getElementById("peInputs").style.visibility = "visible";
    document.getElementById("totalPE").style.visibility = "visible";
    btn3.style.display = "none";
}

function hideShowLTL(){
    document.getElementById("ltlInputs").style.visibility = "visible";
    document.getElementById("totalLTL").style.visibility = "visible";
    btn4.style.display = "none";
}

function hideShowTang(){
    document.getElementById("tangInputs").style.visibility = "visible";
    document.getElementById("totalTang").style.visibility = "visible";
    btn5.style.display = "none";
}

function calPos(){
    const cash = Number(document.getElementById("Cash").value);
    const inventory = Number(document.getElementById("Inventory").value);
    const supplies = Number(document.getElementById("Supplies").value);
    const tempinvest1 = Number(document.getElementById("TempInvest1").value);
    const opCA = document.getElementById("outputCA");

    const totalCA = cash+inventory+supplies+tempinvest1;

    opCA.innerHTML = "$"+totalCA;

    const accpay = Number(document.getElementById("accPay").value);
    const notespay = Number(document.getElementById("notesPay").value);
    const intpay = Number(document.getElementById("intPay").value);
    const wages = Number(document.getElementById("wages").value);
    const accexp = Number(document.getElementById("accExp").value);
    const opCL = document.getElementById("outputCL");

    const totalCL =  accpay+notespay+intpay+wages+accexp;

    opCL.innerHTML = "$"+totalCL;

    const land = Number(document.getElementById("Land").value);
    const bi = Number(document.getElementById("bI").value);
    const equip = Number(document.getElementById("Equip").value);
    const tempinvest2 = Number(document.getElementById("TempInvest2").value);
    const opPE = document.getElementById("outputPE");

    const totalPE = land+bi+equip+tempinvest2;

    opPE.innerHTML = "$"+totalPE;

    const notesp = Number(document.getElementById("notesp").value);
    const bondsp = Number(document.getElementById("bondsp").value);
    const opLTL = document.getElementById("outputLTL");

    const totalLTL = notesp+bondsp;
    
    opLTL.innerHTML = "$"+totalLTL;

    const tname = Number(document.getElementById("tName").value);
    const gw = Number(document.getElementById("gW").value);
    const opTang = document.getElementById("outputTang");

    const totalTang = tname+gw;

    opTang.innerHTML = "$"+totalTang;

    const totalAS = totalCA+totalPE+totalTang;
    const roundedAS = Math.round((totalAS + Number.EPSILON) * 100) / 100;
    const taop = document.getElementById("taOP");
    taop.innerHTML = "$"+roundedAS;

    const totalLi = totalCL+totalLTL;
    const roundedLTL = Math.round((totalLi + Number.EPSILON) * 100) / 100;
    const tlop = document.getElementById("tlOP");
    tlop.innerHTML = "$"+roundedLTL;

    const totalPO = totalAS-totalLi;
    const roundedPO = Math.round((totalPO + Number.EPSILON) * 100) / 100;
    const tpop = document.getElementById("tpOP");
    tpop.innerHTML = "$"+roundedPO;



}
