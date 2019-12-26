class Adelanto {
    constructor(name, fecha, monto) {
        this.name = name;
        this.fecha = fecha;
        this.monto = monto;
        

        
    }
}


class UI {
    AddAdelanto(adelanto) {
        
        const listaadelantos = document.getElementById("lista-adelantos");
        const element = document.createElement("div");
      element.innerHTML = `
            <div class="card text-center mb-2">
                <div class="card-body">
                    <strong>Empleado</strong>: ${adelanto.name} 
                    <strong>Fecha </strong>: ${adelanto.fecha} 
                    <strong>Monto </strong>: ${adelanto.monto} 
                  
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    
                </div>
            </div>
        `;

        listaadelantos.appendChild(element);
        this.resetForm();
              
    }

    resetForm() {
        document.getElementById("adelantos-form").reset();

    }


DeleteAdelanto (element)  {
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



document.getElementById("adelantos-form")
.addEventListener("submit", function (e) {
        
        const name = document.getElementById("name").value;
        const fecha = document.getElementById("fecha").value;
        const monto = document.getElementById("monto").value;
        

        const adelanto = new Adelanto(name, fecha, monto);

        const ui = new UI();
        if(name === '' || fecha === '' || monto == '' ) {
            return ui.showMessage('Campos Incompletos', 'danger');
        }
        

        console.log(name, fecha, monto);

        ui.AddAdelanto(adelanto);
        ui.showMessage("Listo!", "success");
        ui.resetForm();
        e.preventDefault();
    });


    document.getElementById("lista-adelantos").addEventListener("click", function(e) { 
    
    const ui = new UI();
    ui.DeleteAdelanto(e.target)


});