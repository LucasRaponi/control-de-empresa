class Concurso {
    constructor(number, open, name, cityname) {
        this.number = number;
        this.open = open;
        this.name = name;
        this.cityname = cityname;

        
    }
}


class UI {
    AddConcursos(concurso) {
        
        const listaconcursos = document.getElementById("lista-concursos");
        const element = document.createElement("div");
      element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Numero de concurso</strong>: ${concurso.number} 
                    <strong>Fecha de apertura </strong>: ${concurso.open} 
                    <strong>Nombre destinatario </strong>: ${concurso.name} 
                    <strong>Lugar destinado</strong>: ${concurso.cityname}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    
                </div>
            </div>
        `;

        listaconcursos.appendChild(element);
        this.resetForm();
              
    }

    resetForm() {
        document.getElementById("concursos-form").reset();

    }


DeleteConcurso (element)  {
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



document.getElementById("concursos-form")
.addEventListener("submit", function (e) {
        
        const number = document.getElementById("number").value;
        const open = document.getElementById("open").value;
        const name = document.getElementById("name").value;
        const cityname = document.getElementById("cityname").value;

        const concurso = new Concurso(number, open, name, cityname);

        const ui = new UI();
        if(number === '' || open === '' || name == '' || cityname === '' ) {
            return ui.showMessage('Campos Incompletos', 'danger');
        }
        

        console.log(number, open, name, cityname);

        ui.AddConcursos(concurso);
        ui.showMessage("Listo!", "success");
        ui.resetForm();
        e.preventDefault();
    });


    document.getElementById("lista-concursos").addEventListener("click", function(e) { 
    
    const ui = new UI();
    ui.DeleteConcurso(e.target)


});