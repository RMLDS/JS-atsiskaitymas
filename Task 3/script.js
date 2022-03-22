/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let generate = () => {
    fetch (ENDPOINT)
        .then(res => res.json())
        .then(data => {
            const p = document.getElementById("message");
            p.remove();
            data.forEach(user => {
                document.getElementById("output").innerHTML += `
                    <div class="card">
                        <img src="${user.avatar_url}" alt="Avatar">
                        <h4>${user.login}</h4> 
                    </div>
                `;
            });
        })
        .catch(err => document.getElementById("output").innerHTML += `
        <div>${err}</div>
        `);
};

document.getElementById("btn").addEventListener("click", generate);