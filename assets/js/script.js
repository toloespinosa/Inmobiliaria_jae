const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Camper para montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Lleva este camper a lo mas alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: "Retiro de Montaña",
        src: "https://3826222.fs1.hubspotusercontent-na1.net/hub/3826222/hubfs/casa-lujo.jpg",
        descripcion: "Vive la tranquilidad y las vistas espectaculares en este encantador apartamentode mpontaña.",
        ubicacion: "123 Alpine Trail, Mountain View, CO 80808",
        habitaciones: 3,
        banos: 2,
        costo: 18000,
        smoke: true,
        pets: false
    },
    {
        nombre: "Vista Panorámica",
        src: "https://images2-mega.cdn.mdstrm.com/meganoticias/2023/04/05/_410666_1_642d8a0e30bdb.jpg",
        descripcion: "Este moderno apartamento ofrece comodidad y vistas panorámicas desde lo alto de una majestuosa montaña.",
        ubicacion: "456 Summit Drive, Peaksville, WA 98502",
        habitaciones: 7,
        banos: 4.5,
        costo: 16000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Refugio en la Cumbre",
        src: "https://wiggot.com/wp-content/uploads/2020/10/propiedades-de-lujo.jpeg",
        descripcion: "Perfecto para los amantes de la naturaleza, este apartamento ofrece paz y vistas impresionantes de las montañas.",
        ubicacion: "789 High Ridge Road, Eagle Crest, UT 84790",
        habitaciones: 10,
        banos: 7,
        costo: 14000,
        smoke: true,
        pets: true
    }
    
    // Añade más propiedades según sea necesario
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },

    {
        nombre: "Chalet Familiar",
        src: "https://images.trvl-media.com/lodging/19000000/18950000/18940400/18940337/f228eda4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        descripcion: "Espacioso chalet familiar en alquiler, perfecto para vacaciones en la montaña con seres queridos",
        ubicacion: "555 Mountain Retreat Lane, Alpine Valley, WA 98001",
        habitaciones: 4,
        banos: 3,
        costo: 3000,
        smoke: false,
        pets: true
    }
    ,

    {
        nombre: "Cabaña Rústica",
        src: "https://casasprefabricadaschile.cl/wp-content/uploads/2020/08/cabaña-de-madera-1024x682.jpg",
        descripcion: "Acogedora cabaña rústica disponible para alquiler, rodeada de naturaleza y con hermosas vistas a la montaña",
        ubicacion: "321 Pine Forest Lane, Timberland, OR 97001",
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento Moderno",
        src: "https://hips.hearstapps.com/hmg-prod/images/apartamento-de-diseno-moderno14-1641571843.jpg",
        descripcion: "Moderno apartamento en alquiler con acabados de lujo y vistas espectaculares de las montañas",
        ubicacion: "654 Mountain View Blvd, Hillside, CO 80203",
        habitaciones: 3,
        banos: 2,
        costo: 2500,
        smoke: true,
        pets: false
    },
    {
        nombre: "Estudio en la Montaña",
        src: "https://images.adsttc.com/media/images/593a/4d67/e58e/ce93/7c00/01f4/newsletter/SRA-MH-OMG-HD-21.jpg?1496993101",
        descripcion: "Acogedor estudio en alquiler, ideal para una escapada tranquila con impresionantes vistas a la montaña",
        ubicacion: "987 Summit Ridge Road, High Peak, NM 87501",
        habitaciones: 1,
        banos: 1,
        costo: 900,
        smoke: false,
        pets: true
    }
    
    // Añade más propiedades según sea necesario
];

function obtenerPrimerasTresPropiedades(propiedades) {
    return propiedades.slice(0, 3);
}


function renderizarPropiedades(propiedades, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    propiedades.forEach(propiedad => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('venta-container')) {
        const primerasTresVenta = obtenerPrimerasTresPropiedades(propiedades_venta);
        renderizarPropiedades(primerasTresVenta, 'venta-container');
    }
    if (document.getElementById('alquiler-container')) {
        const primerasTresAlquiler = obtenerPrimerasTresPropiedades(propiedades_alquiler);
        renderizarPropiedades(primerasTresAlquiler, 'alquiler-container');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('venta-full')) {
        renderizarPropiedades(propiedades_venta, 'venta-full');
    }
    if (document.getElementById('alquiler-full')) {
        renderizarPropiedades(propiedades_alquiler, 'alquiler-full');
    }
});
