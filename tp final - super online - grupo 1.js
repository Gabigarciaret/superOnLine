let productos = [];

let productoEditando = -1;

/* AGREGAR PRODUCTO */

function agregarProducto(){

    let nombreIngresado = document.getElementById("nombre").value.trim();

    let nombre = nombreIngresado.toLowerCase();

    let precio =
        document.getElementById("precio").value;

    let mensaje =
        document.getElementById("mensaje");

    let boton =
        document.getElementById("btnAgregar");

    /* VALIDACIONES */

    if(nombre === "" || precio === ""){

        mensaje.textContent =
            "Complete todos los campos";

        mensaje.style.color = "red";

        return;
    }

    if(precio <= 0){

        mensaje.textContent =
            "El precio debe ser mayor a 0";

        mensaje.style.color = "red";

        return;
    }

    /* NOMBRE IMAGEN */
    let nombreImagen = nombre
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-");

    /* OBJETO PRODUCTO */

    let producto = {

        nombre: nombre,

        precio: precio,

        imagen: `imagenes/${nombreImagen}.jpg`
    };

    /* AGREGAR*/

    if(productoEditando === -1){

        productos.push(producto);

        mensaje.textContent =
            "Producto agregado correctamente";

    }  

    mensaje.style.color = "green";

    limpiarFormulario();

    mostrarProductos();
}

/* MOSTRAR PRODUCTOS */

function mostrarProductos(){

    let contenedor =
        document.getElementById("contenedorProductos");

    contenedor.innerHTML = "";

    productos.forEach(function(producto, index){

        contenedor.innerHTML += `

            <div class="col-lg-4 col-md-6 mb-4">

                <div 
                    class="card h-100 shadow card-producto"

                    onmousemove="moverLupa(event, this)"

                    onmouseleave="ocultarLupa()">

                    <img
                        src="${producto.imagen}"

                        class="card-img-top"

                        alt="${producto.nombre}"

                        onerror="this.onerror=null;
                        this.src='imagenes/sin-imagen.jpg';">

                    <div class="card-body text-center">

                        <h3 class="card-title">

                            ${producto.nombre}

                        </h3>

                       <p class="precio">

                            $${producto.precio}

                        </p>

                        <button
                            class="btn btn-warning"

                            onclick="editarProducto(${index})">

                            Editar

                        </button>

                        <button
                            class="btn btn-danger"

                            onclick="eliminarProducto(${index})">

                            Eliminar

                        </button>

                    </div>

                </div>

            </div>
        `;
    });
}





/* LIMPIAR */

function limpiarFormulario(){

    document.getElementById("nombre").value = "";

    document.getElementById("precio").value = "";

}

   
/* LUPA */

function moverLupa(event, card){

    let lupaCard =
        document.getElementById("lupaCard");

    lupaCard.style.display = "block";

    lupaCard.innerHTML = card.innerHTML;

    lupaCard.style.left =
        event.clientX + 30 + "px";

    lupaCard.style.top =
        event.clientY - 180 + "px";
}

function ocultarLupa(){

    document.getElementById("lupaCard").style.display =
        "none";
}

