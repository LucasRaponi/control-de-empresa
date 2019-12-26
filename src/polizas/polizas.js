class Poliza {
    constructor(numero, date) {
        this.numero = numero;
        this.date = date;
        
        

        
    }
}


class UI {
    AddPolizas(poliza) {
        
        const listapolizas = document.getElementById("lista-polizas");
        const element = document.createElement("div");
      element.innerHTML = `
            <div class="card text-center mb-2">
                <div class="card-body">
                    <strong>Código</strong>: ${poliza.numero} 
                    <strong>Fecha</strong>: ${poliza.date} 
                    
                    
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    
                </div>
            </div>
        `;

        listapolizas.appendChild(element);
        this.resetForm();
              
    }

    resetForm() {
        document.getElementById("polizas-form").reset();

    }


DeletePolizas (element)  {
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



document.getElementById("polizas-form")
.addEventListener("submit", function (e) {
        
        const numero = document.getElementById("numero").value;
        const date = document.getElementById("date").value;
        
        

        const poliza = new Poliza(numero, date);

        const ui = new UI();
        if(numero === '' || date === '') {
            return ui.showMessage('Campos Incompletos', 'danger');
        }
        

        console.log(numero, date);

        ui.AddPolizas(poliza);
        ui.showMessage("Listo!", "success");
        ui.resetForm();
        e.preventDefault();
    });


    document.getElementById("lista-polizas").addEventListener("click", function(e) { 
    
    const ui = new UI();
    ui.DeletePolizas(e.target)


});