/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("#submit-btn").addEventListener("click", e => {
    e.preventDefault();
    const kg = document.getElementById("search").value;
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    document.getElementById("output").innerHTML = `
        <div>
            <h2>Svarais</h2>
            <h4>${lb} lb</h4>
        </div>
        <div>
            <h2>Gramais</h2>
            <h4>${g} g</h4>
        </div>
        <div>
            <h2>Uncijomis</h2>
            <h4>${oz} oz</h4>
        </div>
    `;
});