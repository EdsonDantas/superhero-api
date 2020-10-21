
//Gerando personagens aleatoriamente para compor a vitrine
async function gerarVitrine() {
    //var lista_links = [];
    let contador = 0;
    while (contador < 15) { //loop nosso de cada dia. gera quantos personagens eu quiser. Ideal que sejam 5 por row.
        contador++;
        let url = "https://superheroapi.com/api.php/3566192166773131/" + getRandomId();

        let response = await fetch(url);
        let json = await response.json();

        function getRandomId() {
            let randomId = Math.round(Math.random() * 730);
            return randomId;
        };

        //criando os elementos para abrigar as imagens

        let divImagem = document.createElement('div');
        divImagem.className = 'div-imagem';

        let imagem = document.createElement('img');
        imagem.src = json.image.url;
        imagem.alt = json.name;
        imagem.title = json.name;
        imagem.id = contador;
        imagem.className = "img-item";


        //Atribuindo o evento click às imagens para gerar os cards com infos.
        imagem.onclick = infoHeroVitrine;


        //Nó na div principal que está dentro da Section class='vitrine'.
        document.getElementById("div-vitrine").appendChild(divImagem)
        divImagem.appendChild(imagem);

        //gerando as infos para os persogans da vitrine: quando clicado. 
        async function infoHeroVitrine() {

            let linkVitrine = "https://superheroapi.com/api.php/3566192166773131/search/" + json.name;
            //Nó na div principal que está dentro da Section class='vitrine'.
            console.log(linkVitrine);
            const response = await fetch(linkVitrine);
            const jsonV = await response.json();

            console.log(jsonV.results);

            for (let personagem of jsonV.results) {
                if (personagem.name == json.name) {
                    function exibirImgGeral() {

                        //buscando a tag < img > no html:
                        let imagem1 = document.getElementById("hero-imagem");
                        //mostrando imagem da busca geral:
                        imagem1.style.backgroundColor = "black"
                        imagem1.src = personagem.image.url;
                        imagem1.alt = `Imagem do personagem: ${personagem.name}`;
                        imagem1.title = personagem.name
                    };


                    function exibirPowerStatsGeral() {
                        //Buscando os Elementos <li>:
                        let nome = document.getElementById("nome");
                        let combate = document.getElementById("combate");
                        let durabilidade = document.getElementById("durabilidade");
                        let inteligencia = document.getElementById("inteligencia");
                        let poder = document.getElementById("poder");
                        let forca = document.getElementById("forca");

                        //mostrando info do personagem na busca geral:
                        nome.innerHTML = `${personagem.name}`;
                        combate.innerHTML = `Combate: ${personagem.powerstats.combat}`;
                        durabilidade.innerHTML = `Durabilidade: ${personagem.powerstats.durability}`;
                        inteligencia.innerHTML = `Inteligência: ${personagem.powerstats.intelligence}`;
                        poder.innerHTML = `Poder: ${personagem.powerstats.power}`
                        forca.innerHTML = `Força: ${personagem.powerstats.strength}`
                    };


                    function mostrarInfoBioHidden() {
                        //mostrando elementos:
                        let infoRow = document.getElementById("info-row");
                        infoRow.style.display = 'inline-block';
                        let biographyRow = document.getElementById("biography-row");
                        biographyRow.style.display = 'inline-block';

                        //escondendo elementos
                        let vitrine = document.querySelector(".vitrine");
                        vitrine.style.display = 'none';
                    };

                    function exibirBiografiaGeral() {
                        //buscando os elementos para biografia:
                        let tituloBio = document.getElementById("titulo-bio");
                        let nomeBio = document.getElementById("nome-bio");
                        let aparicaoBio = document.getElementById("aparicao-bio");
                        let aliadosBio = document.getElementById("aliados-bio");
                        let localBio = document.getElementById("local-bio");
                        let conexoesBio = document.getElementById("conexoes-bio");
                        let editoraBio = document.getElementById("editora-bio");

                        //mostrando biografia do personagem na busca geral:
                        tituloBio.innerHTML = "BIOGRAFIA";
                        nomeBio.innerHTML = `<span>Nome:</span> ${personagem.biography['full-name']}.`;
                        aparicaoBio.innerHTML = `<span>1º Aparição:</span> ${personagem.biography['first-appearance']}.`;
                        aliadosBio.innerHTML = `<span>Aliados:</span> ${personagem.biography.aliases}.`
                        localBio.innerHTML = `<span>Local de Nascimento:</span> ${personagem.biography['place-of-birth']}.`
                        conexoesBio.innerHTML = `<span>Conexões:</span> ${personagem.connections['group-affiliation']}.`
                        editoraBio.innerHTML = `<span>Editora:</span> ${personagem.biography.publisher}.`
                    };

                    function mostrarInfoBioHidden() {
                        //mostrando elementos:
                        let infoRow = document.getElementById("info-row");
                        infoRow.style.display = 'inline-block';
                        let biographyRow = document.getElementById("biography-row");
                        biographyRow.style.display = 'inline-block';

                        //escondendo elementos
                        let vitrine = document.querySelector(".vitrine");
                        vitrine.style.display = 'none';
                    };

                    exibirImgGeral();
                    exibirPowerStatsGeral();
                    exibirBiografiaGeral();
                    mostrarInfoBioHidden();
                };//if

            };//for

        };//async teste

    };//while


};//asyn vitrine

gerarVitrine();