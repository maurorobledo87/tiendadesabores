
//declaro variables
let nombre = '';
let edad = '';


    //guardo datos del usuario
    nombre =  document.getElementById('validationDefault01'); 
    edad =   document.getElementById('validationDefault02'); 

    let datosUsuario = document.getElementById("enviarForm");
    datosUsuario.addEventListener("click", enviarDatos);

    let recuperoName;
    let recuperoEdad;

    // aplicando promesas 
    const eventoFuturo = (res) => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          res ? resolve('Eres mayor!') : reject('Eres menor. No puedes comprar alcohol.')
        }, 2000);
      })
    }

    function enviarDatos(e){
      e.preventDefault();
      // datos del formulario usando event
      datosUsuario = e.target
      localStorage.setItem('name', JSON.stringify(nombre.value));
      recuperoName = JSON.parse(localStorage.getItem('name'))
      
      localStorage.setItem('age', JSON.stringify(edad.value));
      recuperoEdad = JSON.parse(localStorage.getItem('age'));

      console.log(recuperoName + " " + recuperoEdad);
      
      // document.getElementById('saludo').innerHTML = "Ingresaste los siguientes datos: " + recuperoName + " " + recuperoEdad;

      if(recuperoEdad >= 18){
        eventoFuturo(true)
          .then( (response) => {
            // console.log(response)
            Toastify({
              text: response,
              duration: 3500,
              gravity: 'bottom',
              position: 'center',
              className: 'toastt'  
            }).showToast();
          });
      } else {
        eventoFuturo(false)
          .catch( (error) => {
            // console.log(error)
            Toastify({
              text: error,
              duration: 3500,
              gravity: 'bottom',
              position: 'center',
              className: 'toast2'  
            }).showToast();
          });
      }
    }     


    // manipulo h1 y h2 usando inner y class
    let titulo = document.getElementById("pepe");
    titulo.innerHTML = '<h1>Tienda de sabores</h1>';
    titulo.className = 'titulos';

    let titulo2 = document.getElementById('conta');
    titulo2.className = 'titulos';
    
    // modifique ul por medio de className
    let contaNOS =  document.getElementById('ul');
    contaNOS.className = 'ul';

     // cree un elemento
    let texto = document.createElement('div');
    texto.innerHTML = '<h2>Nuestros Productos</h2>';
    texto.className = 'titulos';
    
    let contenedor1 = document.getElementById("div-nav");
    contenedor1.append(texto);    

    //manipulo el form y se ve resultado por html
    let mail = document.getElementById("email").value ;
    let s = document.getElementById("text").value;


    fetch('/data.json')
      .then( (res) => res.json() )
      .then( (data) => {
        data.forEach((producto) => {
          let caja = document.createElement("div");
          caja.innerHTML = `<div id="producto${producto.id}" class="product">
          <img src="${producto.img}">
          <p class="nombre-produ">${producto.nombre}</p>
          <button id="btn${producto.id}" class="button-55" >Agregar al carrito</button>
          </div>`;
          
          document.getElementById("contenedor").append(caja);
                
          document.getElementById(`btn${producto.id}`).addEventListener("click", guardarProductoEnLS);
          let cajaCarro = document.getElementById('mostrarCarro');
          let carrito = document.createElement("div");
              
          function guardarProductoEnLS(){
            let new_data = producto.nombre;
            let new_data2 = producto.precio;
            let new_data3 = producto.img;
  
            if(localStorage.getItem(`data`) == null){
                localStorage.setItem(`data`, `[]`);
                
            }
            
            let old_data = JSON.parse(localStorage.getItem(`data`));
            old_data.push(new_data, new_data2, new_data3);
            
            localStorage.setItem(`data`, JSON.stringify(old_data));
            
            carrito.innerHTML =
              `<div id="item-carrito${producto.id}" class="producto-carrito">
                  <img src="${producto.img}" alt="${producto.nombre}" class="foto-carrito">
                  <p class="item-carrito">${producto.nombre}</p>
                  <p class="item-carrito">$${producto.precio}.-</p>
                  </div>`;
      
                cajaCarro.append(carrito);
          
          }
          
          function show(){
            // si hay datos en el LS 
            if(localStorage.getItem(`data`) != null){
                console.log(JSON.parse(localStorage.getItem(`data`)));
                
                // carro.style.display = "block";
            }
          }
          let btnCarro = document.getElementById('btncarrito');
          btnCarro.addEventListener('click',show);

        })
      });      
        
    // eventos del mouse en botones "contacto" y "nosotros"
    let boton3 = document.getElementById("btnContacto")
    boton3.onclick = () => {console.log("Click contacto")}
    boton3.onmousemove = () => {console.log("moveConta")}

    let boton4 = document.getElementById("btnNosotros")
    boton4.onclick = () => {console.log("Click nosotros")}
    boton4.onmousemove = () => {console.log("moveNos")}

 
// eventos del teclado keyup y keydown en el form

    let input1 = document.getElementById("email")
    let input2 = document.getElementById("text")
    input1.onkeyup = () => {console.log("keyUp")}
    input2.onkeydown = () => {console.log("keyDown")}

 // evento teclado change
   
    let inputA  = document.getElementById("email");
    let inputB  = document.getElementById("text");
    inputA.onchange = () => {console.log("valor1")};
    inputB.onchange = () => {console.log("valor2")};


    // evento submit en el form

    let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", validarFormulario);

     //cree variables para llamar al padre del imput 
    let padre1 = document.getElementById('div-form');
    let padre2 = document.getElementById('div-form2');

    function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");

     // datos del formulario usando event
   
    miFormulario = e.target
    //Obtengo el valor del segudo hijo 
    console.log(padre1.children[1].value); 
    //Obtengo el valor del segundo hijo 
    console.log(padre2.children[1].value);  
    }
