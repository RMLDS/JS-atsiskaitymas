/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch (ENDPOINT)
    .then(res => res.json())
    .then(data => data.forEach(maker => {
        document.getElementById("output").innerHTML += `
            <div>
                <h3>${maker.brand}</h3>
                <p>Modeliai:${maker.models.map(model => {
                    return " " + model;
                })}</p>
            </div>
            `;
            })
    )
    .catch(err => console.log("Error:", err));