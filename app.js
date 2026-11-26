const NUMERO_WHATSAPP = "573010209614";
const NOMBRE_ASESORA = "Aiskiel";

const planes = [
  {
    id: "tigo-solo-500",
    titulo: "Tigo Solo Internet 500 Megas",
    operador: "Tigo",
    tipo: "Solo Internet",
    estratoGrupo: "1-3",
    precio: "$62.826",
    unidad: "/mes (Galaxion)",
    destacado: true,
    imagen: "tigo-solo-internet.jpg",
    detalle: "Internet Hogar 500 Megas Tigo. Promoción Galaxion."
  },
  {
    id: "fusion-900-fibra",
    titulo: "Oferta Fusión Tigo + Movistar 900 Megas",
    operador: "Movistar",
    tipo: "Solo Internet",
    estratoGrupo: "1-3",
    precio: "$63.000",
    unidad: "COP/mes",
    destacado: true,
    imagen: "tigo-movistar-fusion.jpg",
    detalle: "900 Megas de Fibra con velocidad simétrica (900 Mb/s)."
  },
  {
    id: "tigo-full-duo-89"
    titulo: "Full Tigo Dúo",
    operador: "Tigo",
    tipo: "Dúo",
    estratoGrupo: "1-3",
    precio: "$89.900",
    unidad: "/mes",
    destacado: true,
    imagen: "tigo-doble-completo.jpg",
    detalle: "Internet 500 o 900 Megas + Plan Móvil Ilimitado + Paramount+."
  },
  {
    id: "tigo-duo-tv-109",
    titulo: "Tigo Dúo Internet + TV",
    operador: "Tigo",
    tipo: "Dúo",
    estratoGrupo: "1-3",
    precio: "$109.155",
    unidad: "/mes",
    destacado: false,
    imagen: "tigo-duo-internet.jpg",
    detalle: "Internet 500 o 900 Megas + TV Avanzada con 1 Deco."
  },
  {
    id: "tigo-full-trio-119",
    titulo: "Full Tigo Trío",
    operador: "Tigo",
    tipo: "Trío",
    estratoGrupo: "4-6",
    precio: "$119.900",
    unidad: "/mes",
    destacado: true,
    imagen: "tigo-full-trio.jpg",
    detalle: "Internet 500 o 900 Megas + TV Avanzada (1 Deco) + Plan Móvil Ilimitado + Telefonía Ilimitada + HBO Max."
  },
  {
    id: "tigo-triple-play-119",
    titulo: "Tigo Triple Play",
    operador: "Tigo",
    tipo: "Trío",
    estratoGrupo: "4-6",
    precio: "$119.900",
    unidad: "/mes",
    destacado: false,
    imagen: "tigo-triple-play.jpg",
    detalle: "Internet 500 o 900 Megas + TV Avanzada (1 Deco) + Telefonía Ilimitada."
  },
  {
    id: "claro-sencillo-79",
    titulo: "Claro Sencillo (500 / 900 Megas)",
    operador: "Claro",
    tipo: "Solo Internet",
    estratoGrupo: "1-3",
    precio: "$79.900",
    unidad: "/mes (Inst. $52.000)",
    destacado: true,
    imagen: "claro-sencillo-79.jpg",
    detalle: "500 Megas HFC / 900 Megas FTTH + Prime Video + Universal en Claro video. Campaña PCAM 1002 (CODA CPR6)."
  },
  {
    id: "claro-sencillo-89",
    titulo: "Claro Sencillo + 1 App a elegir",
    operador: "Claro",
    tipo: "Solo Internet",
    estratoGrupo: "1-3",
    precio: "$89.900",
    unidad: "/mes (Inst. Gratis)",
    destacado: false,
    imagen: "claro-sencillo-89.jpg",
    detalle: "500 Megas HFC / 900 Megas FTTH + 1 App (Netflix, Win Play, Prime Video, Max o Disney+) + Universal en Claro video. Campaña PCAM 1002."
  },
  {
    id: "claro-doble-104",
    titulo: "Claro Doble Play + 1 App",
    operador: "Claro",
    tipo: "Dúo",
    estratoGrupo: "1-3",
    precio: "$104.900",
    unidad: "/mes (Inst. $25.000)",
    destacado: false,
    imagen: "claro-doble-104.jpg",
    detalle: "Internet 500 HFC / 900 FTTH + TV Intermedia + 1 App a elegir + Universal en Claro video. Campaña PCAM 1001."
  },
  {
    id: "claro-doble-109",
    titulo: "Claro Doble Play + 1 App (Plus)",
    operador: "Claro",
    tipo: "Dúo",
    estratoGrupo: "4-6",
    precio: "$109.900",
    unidad: "/mes (Inst. $25.000)",
    destacado: false,
    imagen: "claro-doble-109.jpg",
    detalle: "Internet 500 HFC / 900 FTTH + TV Intermedia + 1 App + McAfee + Universal en Claro video. Campaña PCAM 1001."
  },
  {
    id: "claro-doble-119",
    titulo: "Claro Doble Play + 2 Apps",
    operador: "Claro",
    tipo: "Dúo",
    estratoGrupo: "4-6",
    precio: "$119.900",
    unidad: "/mes (Inst. $25.000)",
    destacado: true,
    imagen: "claro-doble-119.jpg",
    detalle: "Internet 500 HFC / 900 FTTH + TV Intermedia + 2 Apps a elegir + McAfee + Universal en Claro video. Campaña PCAM 1001."
  },
  {
    id: "claro-triple-106",
    titulo: "Claro Triple Play + 1 App",
    operador: "Claro",
    tipo: "Trío",
    estratoGrupo: "1-3",
    precio: "$106.900",
    unidad: "/mes (Inst. $25.000)",
    destacado: false,
    imagen: "claro-triple-106.jpg",
    detalle: "Internet 500 HFC / 900 FTTH + TV Intermedia + Telefonía Fija + 1 App + Universal en Claro video. Campaña PCAM 1001."
  },
  {
    id: "claro-triple-111",
    titulo: "Claro Triple Play + 1 App (Plus)",
    operador: "Claro",
    tipo: "Trío",
    estratoGrupo: "4-6",
    precio: "$111.900",
    unidad: "/mes (Inst. $25.000)",
    destacado: false,
    imagen: "claro-triple-111.jpg",
    detalle: "Internet 500 HFC / 900 FTTH + TV Intermedia + Telefonía Fija + 1 App + McAfee + Universal en Claro video. Campaña PCAM 1001."
  }
];

const resenas = [
  {
    nombre: "Juliana Montoya",
    iniciales: "JM",
    ubicacion: "Robledo · Estrato 3",
    plan: "Full Tigo Dúo",
    estrellas: 5,
    comentario: "Aiskiel me explicó claro el valor mensual antes de agendar y la instalación quedó lista al día siguiente. Muy buena conexión para teletrabajo."
  },
  {
    nombre: "Carlos Andrés Hincapié",
    iniciales: "CH",
    ubicacion: "Bello · Estrato 3",
    plan: "Claro Sencillo $79.900",
    estrellas: 5,
    comentario: "Revisó cobertura en mi dirección rápido y me ayudó a activar Prime Video sin enredos. Trato amable y respuestas directas por WhatsApp."
  },
  {
    nombre: "Natalia Vélez",
    iniciales: "NV",
    ubicacion: "Laureles · Estrato 4",
    plan: "Claro Doble Play + 2 Apps",
    estrellas: 5,
    comentario: "Me gustó que detallara bien las condiciones del plan y las apps incluidas. Todo el proceso por WhatsApp fue muy ágil."
  },
  {
    nombre: "Sebastián Cardona",
    iniciales: "SC",
    ubicacion: "Envigado · Estrato 4",
    plan: "Oferta Fusión 900 Megas",
    estrellas: 5,
    comentario: "La velocidad de subida y bajada se mantiene estable en la casa. Buen seguimiento desde que pedí información hasta que instalaron."
  }
];

const estadoFiltros = {
  soloDestacados: false,
  operador: "Todos",
  tipo: "Todos",
  estrato: "Todos"
};

let planActual = null;

const gridPlanes = document.getElementById("grid-planes");
const gridResenas = document.getElementById("grid-resenas");
const btnDestacados = document.getElementById("btn-destacados");

const modalSolicitud = document.getElementById("modal-solicitud");
const cerrarSolicitud = document.getElementById("cerrar-solicitud");
const formSolicitud = document.getElementById("form-solicitud");
const planSeleccionadoTexto = document.getElementById("plan-seleccionado-texto");

const modalQuienes = document.getElementById("modal-quienes");
const btnQuienesSomos = document.getElementById("btn-quienes-somos");
const cerrarQuienes = document.getElementById("cerrar-quienes");
const btnEntendidoQuienes = document.getElementById("btn-entendido-quienes");

const modalFlyer = document.getElementById("modal-flyer");
const cerrarFlyer = document.getElementById("cerrar-flyer");
const imagenFlyerGrande = document.getElementById("imagen-flyer-grande");

function renderizarResenas() {
  if (!gridResenas) return;

  gridResenas.innerHTML = resenas
    .map((item) => {
      const estrellasTexto = "★".repeat(item.estrellas);
      return `
        <article class="tarjeta-resena">
          <div>
            <div class="resena-top">
              <span class="resena-estrellas" aria-label="${item.estrellas} de 5 estrellas">${estrellasTexto}</span>
              <span class="resena-plan-tag">${item.plan}</span>
            </div>
            <p class="resena-texto" style="margin-top: 10px;">“${item.comentario}”</p>
          </div>
          <div class="resena-autor">
            <span class="resena-avatar">${item.iniciales}</span>
            <div>
              <div class="resena-nombre">${item.nombre}</div>
              <div class="resena-ubicacion">${item.ubicacion}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderizarPlanes() {
  if (!gridPlanes) return;

  const filtrados = planes.filter((plan) => {
    if (estadoFiltros.soloDestacados && !plan.destacado) return false;
    if (estadoFiltros.operador !== "Todos" && plan.operador !== estadoFiltros.operador) return false;
    if (estadoFiltros.tipo !== "Todos" && plan.tipo !== estadoFiltros.tipo) return false;
    if (estadoFiltros.estrato !== "Todos" && plan.estratoGrupo !== estadoFiltros.estrato) return false;
    return true;
  });

  if (filtrados.length === 0) {
    gridPlanes.innerHTML = "<p>No hay planes con esa combinación de filtros. Prueba tocando 'Todos'.</p>";
    return;
  }

  gridPlanes.innerHTML = filtrados
    .map(
      (plan) => `
      <article class="tarjeta-plan ${plan.operador.toLowerCase()}">
        <div>
          <div class="tarjeta-img-contenedor" data-img="${plan.imagen}" data-titulo="${plan.titulo}">
            <img src="${plan.imagen}" alt="${plan.titulo}" loading="lazy" />
            <span class="badge-ver-flyer">Ver flyer</span>
          </div>
          <div class="tarjeta-cuerpo">
            <div class="tarjeta-etiquetas">
              <span class="tag">${plan.operador}</span>
              <span class="tag">${plan.tipo}</span>
              <span class="tag">Estrato ${plan.estratoGrupo}</span>
            </div>
            <h3 class="tarjeta-titulo">${plan.titulo}</h3>
            <div class="tarjeta-precio">${plan.precio} <span>${plan.unidad}</span></div>
            <p class="tarjeta-detalle">${plan.detalle}</p>
          </div>
        </div>
        <div class="tarjeta-cuerpo">
          <button type="button" class="btn-primario btn-solicitar" data-id="${plan.id}">
            Solicitar plan
          </button>
        </div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".btn-solicitar").forEach((btn) => {
    btn.addEventListener("click", () => {
      const encontrado = planes.find((p) => p.id === btn.dataset.id);
      abrirSolicitud(encontrado);
    });
  });

  document.querySelectorAll(".tarjeta-img-contenedor").forEach((cont) => {
    cont.addEventListener("click", () => {
      if (imagenFlyerGrande && modalFlyer) {
        imagenFlyerGrande.src = cont.dataset.img;
        imagenFlyerGrande.alt = cont.dataset.titulo;
        modalFlyer.classList.remove("oculto");
      }
    });
  });
}

function abrirSolicitud(plan) {
  planActual = plan;
  if (planSeleccionadoTexto && plan) {
    planSeleccionadoTexto.textContent = `Plan elegido: ${plan.titulo} (${plan.precio} ${plan.unidad})`;
  }
  if (modalSolicitud) {
    modalSolicitud.classList.remove("oculto");
  }
}

if (btnDestacados) {
  btnDestacados.addEventListener("click", () => {
    estadoFiltros.soloDestacados = !estadoFiltros.soloDestacados;
    btnDestacados.classList.toggle("activo", estadoFiltros.soloDestacados);
    renderizarPlanes();
  });
}

document.querySelectorAll(".grupo-filtro[data-filtro]").forEach((grupo) => {
  const tipoFiltro = grupo.dataset.filtro;
  const botones = grupo.querySelectorAll(".chip");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");
      estadoFiltros[tipoFiltro] = boton.dataset.valor;
      renderizarPlanes();
    });
  });
});

if (cerrarSolicitud && modalSolicitud) {
  cerrarSolicitud.addEventListener("click", () => modalSolicitud.classList.add("oculto"));
}
if (cerrarFlyer && modalFlyer) {
  cerrarFlyer.addEventListener("click", () => modalFlyer.classList.add("oculto"));
}
if (btnQuienesSomos && modalQuienes) {
  btnQuienesSomos.addEventListener("click", () => modalQuienes.classList.remove("oculto"));
}
if (cerrarQuienes && modalQuienes) {
  cerrarQuienes.addEventListener("click", () => modalQuienes.classList.add("oculto"));
}
if (btnEntendidoQuienes && modalQuienes) {
  btnEntendidoQuienes.addEventListener("click", () => modalQuienes.classList.add("oculto"));
}

if (formSolicitud) {
  formSolicitud.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("campo-nombre")?.value.trim() || "";
    const cedula = document.getElementById("campo-cedula")?.value.trim() || "";
    const celular = document.getElementById("campo-celular")?.value.trim() || "";
    const direccion = document.getElementById("campo-direccion")?.value.trim() || "";
    const estrato = document.getElementById("campo-estrato")?.value || "";
    const barrio = document.getElementById("campo-barrio")?.value.trim() || "";
    const ciudad = document.getElementById("campo-ciudad")?.value.trim() || "";

    const infoPlan = planActual
      ? `${planActual.titulo} (${planActual.precio} ${planActual.unidad})`
      : "Plan por confirmar";

    const mensaje = [
      `Hola ${NOMBRE_ASESORA}, quiero solicitar este plan:`,
      `• Plan: ${infoPlan}`,
      `• Nombre: ${nombre}`,
      `• Cédula: ${cedula}`,
      `• Celular: ${celular}`,
      `• Dirección: ${direccion}`,
      `• Estrato: ${estrato}`,
      `• Barrio: ${barrio}`,
      `• Ciudad: ${ciudad}`
    ].join("\n");

    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  });
}

renderizarPlanes();
renderizarResenas();
