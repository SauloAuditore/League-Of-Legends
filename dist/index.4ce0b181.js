const e=document.querySelector("#listaChampions"),t={Assassin:"Asesino",Fighter:"Luchador",Mage:"Mago",Marksman:"Tirador",Support:"Soporte",Tank:"Tanque",Bruiser:"Luchador",Specialist:"Especialista"};function a(t){Object.values(t).forEach(t=>{let a=document.createElement("div");a.classList.add("champion"),a.innerHTML=`
            <div class="champion-img">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${t.id}_0.jpg" 
                     alt="${t.name}">
            </div>
            <div class="champion-info">
                <h2 class="champion-name">${t.name}</h2>
                <p class="champion-title">${t.title}</p>
                <p class="champion-story">${t.blurb}</p>
            </div>
        `,e.append(a)})}fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(e=>e.json()).then(n=>{a(n.data),function(n){let o=new Set;Object.values(n).forEach(e=>{e.tags.forEach(e=>o.add(e))});let c=document.querySelector("#botonesTags");o.forEach(o=>{let s=document.createElement("button");s.textContent=t[o]||o,s.addEventListener("click",()=>(function(t,n){let o=Object.values(n).filter(e=>e.tags.includes(t));e.innerHTML="",a(o)})(o,n)),c.append(s)});let s=document.createElement("button");s.textContent="Ver todos",s.addEventListener("click",()=>a(n)),c.append(s)}(n.data)});
//# sourceMappingURL=index.4ce0b181.js.map
