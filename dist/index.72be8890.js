const listaChampions = document.querySelector("#listaChampions");
const API_URL = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
const tagsEnEspanol = {
    "Assassin": "Asesino",
    "Fighter": "Luchador",
    "Mage": "Mago",
    "Marksman": "Tirador",
    "Support": "Soporte",
    "Tank": "Tanque",
    "Bruiser": "Luchador",
    "Specialist": "Especialista"
};
fetch(API_URL).then((response)=>response.json()).then((data)=>{
    mostrarChampions(data.data);
    mostrarBotonesTags(data.data);
});
function mostrarChampions(champions) {
    Object.values(champions).forEach((champion)=>{
        const div = document.createElement("div");
        div.classList.add("champion");
        div.innerHTML = `
            <div class="champion-img">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg" 
                     alt="${champion.name}">
            </div>
            <div class="champion-info">
                <h2 class="champion-name">${champion.name}</h2>
                <p class="champion-title">${champion.title}</p>
                <p class="champion-story">${champion.blurb}</p>
            </div>
        `;
        listaChampions.append(div);
    });
}
function mostrarBotonesTags(champions) {
    const tags = new Set();
    Object.values(champions).forEach((champion)=>{
        champion.tags.forEach((tag)=>tags.add(tag));
    });
    const botonesContainer = document.querySelector("#botonesTags");
    tags.forEach((tag)=>{
        const button = document.createElement("button");
        button.textContent = tagsEnEspanol[tag] || tag; // Usar la traducción si existe, sino mostrar el nombre original
        button.addEventListener("click", ()=>filtrarChampionsPorTag(tag, champions));
        botonesContainer.append(button);
    });
    const verTodosButton = document.createElement("button");
    verTodosButton.textContent = "Ver todos";
    verTodosButton.addEventListener("click", ()=>mostrarChampions(champions));
    botonesContainer.append(verTodosButton);
}
function filtrarChampionsPorTag(tag, champions) {
    const filteredChampions = Object.values(champions).filter((champion)=>champion.tags.includes(tag));
    listaChampions.innerHTML = "";
    mostrarChampions(filteredChampions);
}

//# sourceMappingURL=index.72be8890.js.map
