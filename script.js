// 🔥 Seleccionamos todos los meses
const meses = document.querySelectorAll(".mes");

// 🔥 Seleccionamos links del menú
const links = document.querySelectorAll(".menu a");

// 👉 Función para mostrar un mes
function mostrarMes(id){
    
    // ocultar todos
    meses.forEach(mes => {
        mes.classList.remove("activo");
    });

    // mostrar el seleccionado
    const seleccionado = document.getElementById(id);
    if(seleccionado){
        seleccionado.classList.add("activo");
    }
}

// 👉 Evento click en el menú
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href").replace("#","");
        
        mostrarMes(id);

        // 🔥 efecto visual activo en menú
        links.forEach(l => l.classList.remove("seleccionado"));
        link.classList.add("seleccionado");
    });
});