async function getJsonGeral() {

    let inputGeral = document.getElementById('busca').value;
    let url = "https://superheroapi.com/api.php/3566192166773131/search/" + inputGeral;

    const response = await fetch(url);

    //Chamada a .json(): interpreta o conteúdo recebido na resposta como dados no formato json.
    const json = await response.json();
    for (let personagem of json.results) {
        if ((personagem.name == inputGeral) && (personagem.biography.publisher == "DC Comics" || personagem.biography.publisher == "Superman Prime One-Million" || personagem.biography.publisher == "Batman II" || personagem.biography.publisher == "Black Racer" || personagem.biography.publisher == "Nightwing")) {


            function exibirImgGeral(json) {

                //buscando a tag <img> no html:
                let imagem = document.getElementById("hero-imagem");
                //mostrando imagem da busca geral:
                imagem.src = personagem.image.url;
                imagem.alt = `Imagem do personagem: ${personagem.name}`;
            }

            function exibirPowerStatsGeral(json) {
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
            }

            function exibirBiografiaGeral(json) {
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
            }

            function mostrarInfoBioHidden() {
                //mostrando elementos:
                let infoRow = document.getElementById("info-row");
                infoRow.style.display = 'inline-block';
                let biographyRow = document.getElementById("biography-row");
                biographyRow.style.display = 'inline-block';
            };

            exibirImgGeral(json);
            exibirPowerStatsGeral(json)
            exibirBiografiaGeral(json);
            mostrarInfoBioHidden();

            console.log(json.results);
        }

    };
};

let botaoGeral = document.getElementById("btn-buscar");
botaoGeral.addEventListener('click', getJsonGeral);