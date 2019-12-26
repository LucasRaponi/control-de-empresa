class Vacaciones {
    constructor(name, inicio, fin, year) {
        this.name = name;
        this.inicio = inicio;
        this.fin = fin;
        this.year = year;

        
    }
}


class UI {
    AddVacaciones(vacaciones) {
        
        const listavacaciones = document.getElementById("lista-vacaciones");
        const element = document.createElement("div");
      element.innerHTML = `
            <div class="card text-center mb-2">
                <div class="card-body">
                    <strong>Empleado</strong>: ${vacaciones.name} 
                    <strong>Inicio </strong>: ${vacaciones.inicio} 
                    <strong>Fin </strong>: ${vacaciones.fin} 
                    <strong>Año</strong>: ${vacaciones.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    
                </div>
            </div>
        `;

        listavacaciones.appendChild(element);
        this.resetForm();
              
    }

    resetForm() {
        document.getElementById("vacaciones-form").reset();

    }


DeleteVacaciones (element)  {
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



document.getElementById("vacaciones-form")
.addEventListener("submit", function (e) {
        
        const name = document.getElementById("name").value;
        const inicio = document.getElementById("inicio").value;
        const fin = document.getElementById("fin").value;
        const year = document.getElementById("year").value;

        const vacaciones = new Vacaciones(name, inicio, fin, year);

        const ui = new UI();
        if(name === '' || inicio === '' || fin == '' || year === '' ) {
            return ui.showMessage('Campos Incompletos', 'danger');
        }
        

        console.log(name, inicio, fin, year);

        ui.AddVacaciones(vacaciones);
        ui.showMessage("Listo!", "success");
        ui.resetForm();
        e.preventDefault();
    });


    document.getElementById("lista-vacaciones").addEventListener("click", function(e) { 
    
    const ui = new UI();
    ui.DeleteVacaciones(e.target)


});