$(document).ready(function(){

    // variable formulaire pour le cacher
    let form = $("#formulaire");
    let formH2 = $("#formH2");

    // cacher le formulaire au chargement de la page
    form.hide();
    formH2.hide();

    // Variable btn ajouter pour ajouter un contact
    let btnAjout = $("#ajoutBtn");

    // Ajout d'un event pour afficher le formulaire cacher
    btnAjout.on("click", () =>{
        form.show();
        formH2.show();
    });

    // message : la liste est vide
    let message = $(".message");
    message.hide();

    // list de contacts
    let listContact = $(".contact-container");

    // tableau pour sauvergarder les contacts
    let contacts = [

    ];

    // déclaration des variable pour récuperer les entrées du formulaire

    let nameInput = $("#name");
    let prenomInput = $("#prenom");
    let paysInput = $("#pays");
    let genreInput = $("#genre");
    let emailInput = $("#email");
    let phoneInput = $("#phone");
    let dateInput = $("#date");
    let profilInput = $("#profil");

    let submitBtn = $('#submit');
    console.log(submitBtn);


    // écouter l'event click sur le button d'envoye du formulaire
    submitBtn.on("click", (e) =>{

        e.preventDefault();
        let valName = nameInput.val();
        let valPrenom = prenomInput.val();
        let valGenre = genreInput.val();
        let valPays = paysInput.val();
        let valEmail = emailInput.val();
        let valPhone = phoneInput.val();
        let valDate = dateInput.val();
        let valProfil = profilInput.val();
        
        // création d'un nouveau contact
        let newContat = {
            id : 1,
            nom : valName,
            prenom : valPrenom,
            pays : valPays,
            genre : valGenre,
            email : valEmail,
            phone : valPhone,
            date : valDate,
            profil : valProfil
        }
        contacts.push(newContat);

        loaders();

    });

    console.log(contacts);


    function loaders(){

        // verifier si la liste est vide ou pas pour afficher ou non le message "la liste est vide"
        if(contacts.length == 0){
            message.show();
        }else{
            message.hide();
        }

        // vider la liste avant l'ajout
        listContact.html("");
    
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
            listContact.append(user);
        }
    }




    // appel de la fonction loaders
    loaders()
});

