// initialisation des variables
// btn ajouter un contact
let ajoutBtn = document.getElementById("ajoutBtn");

// btn supprimmer un contact
let deleteBtn = document.getElementById("deleteBtn");

// btn modifier un contact
let updateBtn = document.getElementById("updateBtn");

// les variable du formulaire
let name = document.getElementById("name");
let prenomBtn = document.getElementById("prenom");
let pays = document.getElementById("pays");
let genre = document.getElementById("genre");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let profil = document.getElementById("profil");

// recuperer les données tapées dans le formulaire






// message : la liste est vide
let message = document.querySelector(".message");

// list de contacts
let listContact = document.querySelector(".contact-container");

// right container
let right = document.querySelector(".right");
let h2 = document.querySelector(".right h2");
let formulaire = document.querySelector("form");

// tableau pour sauvergarder les contacts
let contacts = [
    // {
    //     id : 1,
    //     nom : "Simisi",
    //     prenom : "Benny",
    //     pays : "RDC",
    //     genre : "Homme",
    //     email : "simisibenny@gmail.com",
    //     phone : "53876866",
    //     date : "11/12/1997",
    //     profil : "img3.jpeg"
    // }
];


// Afficher le formulaires enfin d'ajouter le contact
ajoutBtn.addEventListener("click", (e) =>{
    formulaire.style.opacity = "1";
    h2.style.opacity = "1";

    formulaire.innerHTML = `
    <div class="form-text">
        <label for="name">Nom</label>
        <input type="text" id="name" required>
        </div>
    <div class="form-text">
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" required>
    </div>
    <div class="form-text">
        <label for="pays">Pays</label>
        <select  id="pays" required>
            <option value="">Choisir un pays</option>
            <option value="rdc">RDC</option>
            <option value="angola">Angola</option>
            <option value="congo">Congo</option>
            <option value="russie">Russie</option>
            <option value="cote_ivoire">Côte d'ivoire</option>
            <option value="beni">Bénin</option>
            <option value="bresil">Brésil</option>
            <option value="tanzanie">Tanzanie</option>
        </select>
    </div>
    <div class="form-text">
        <label for="genre">Genre</label>
        <select  id="genre" required>
            <option value="">Choisir un genre</option>
            <option value="home">Homme</option>
            <option value="femme">Femme</option>
        </select>
    </div>
    <div class="form-text">
        <label for="emal">Email</label>
        <input type="email" id="email" required>
    </div>
    <div class="form-text">
        <label for="phone">Téléphone</label>
        <input type="text" id="phone" required>
    </div>
    <div class="form-text">
        <label for="date">Date de Naissance</label>
        <input type="date" id="date" required>
    </div>
    <div class="form-text">
        <label for="profil" id="file">
            <i class='bx bx-image-add'></i>
            Profil</label>
        <input type="file" id="profil" accept="image/*" required>
    </div>

    <div class="btn-group">
        <input type="submit" value="Ajouter un contact" id="submit">
        <input type="text" value="Annuler" id="reset">
    </div>
    `
})

// fonction qui lance les programme au lancement
function loaders(){

    // verifier si la liste est vide ou pas pour afficher ou non le message "la liste est vide"
    if(contacts.length == 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }

    // parcourir le tableau des contact pour ajouter les contacts dans l'interface qui leur est reservée
    for(let contact of contacts){
        
        let user = `
        <div class="contac-box">
            <div class="contact-details">
                <img src="${contact.profil}" class="img">
                <div class="contact-text">
                    <h2 class="name">${contact.nom} ${contact.prenom}</h2>
                    <h3 class="pays">${contact.pays}</h3>
                    <h3 class="numero">${contact.phone}</h3>
                    <h3 class="email">${contact.email}</h3>
                    <h3 class="genre">${contact.genre} (<span class="age">âge</span>)</h3>
                </div>
            </div>
            <div class="icons">
                <i class='bx bxs-edit-alt' id="updateBtn"></i>
                <i class='bx bxs-trash' id="deleteBtn"></i>
            </div>
        </div>
        `
        listContact.innerHTML += user;
    }
}


// appel de la fonction loaders
loaders()
