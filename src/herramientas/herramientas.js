class Herramienta {
    constructor(code, date, name) {
        this.code = code;
        this.date = date;
        this.name = name;
        

        
    }
}


class UI {
    AddHerramientas(herramienta) {
        
        const listaherramientas = document.getElementById("lista-herramientas");
        const element = document.createElement("div");
      element.innerHTML = `
            <div class="card text-center mb-2">
                <div class="card-body">
                    <strong>Código</strong>: ${herramienta.code} 
                    <strong>Fecha</strong>: ${herramienta.date} 
                    <strong>Prestado a </strong>: ${herramienta.name} 
                    
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    
                </div>
            </div>
        `;

        listaherramientas.appendChild(element);
        this.resetForm();
              
    }

    resetForm() {
        document.getElementById("herramientas-form").reset();

    }


DeleteHerramienta (element)  {
    if(element.name === "delete") {

        element.parentElement.parentElement.remove();
        this.showMessage('Información eliminada', 'info');
    }

} 

showMessage(message, cssClass)  { 
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));


    // SHOWING IN DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);

}

}

// DOM 



document.getElementById("herramientas-form")
.addEventListener("submit", function (e) {
        
        const code = document.getElementById("code").value;
        const date = document.getElementById("date").value;
        const name = document.getElementById("name").value;
        

        const herramienta = new Herramienta(code, date, name);

        const ui = new UI();
        if(code === '' || date === '' || name == '') {
            return ui.showMessage('Campos Incompletos', 'danger');
        }
        

        console.log(code, date, name);

        ui.AddHerramientas(herramienta);
        ui.showMessage("Listo!", "success");
        ui.resetForm();
        e.preventDefault();
    });


    document.getElementById("lista-herramientas").addEventListener("click", function(e) { 
    
    const ui = new UI();
    ui.DeleteHerramienta(e.target)


});