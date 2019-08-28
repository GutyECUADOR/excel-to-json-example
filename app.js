$( document ).ready(function() {
   
    $('#xlfile').change(function(e){
        if (this.value) { //Comprobar que existen archivo seleccionado
            var reader = new FileReader();
            let archivo = this.files[0];
            reader.readAsArrayBuffer(archivo);
            reader.onload = function(e) {
                    var data = new Uint8Array(reader.result);
                    var workbook = XLSX.read(data,{type:'array'});
                
                /* DO SOMETHING WITH workbook HERE */
                    var first_sheet_name = workbook.SheetNames[0];
                    /* Get worksheet */
                    var worksheet = workbook.Sheets[first_sheet_name];
                    let results = (XLSX.utils.sheet_to_json(worksheet,{raw:true}));

                    console.log(results);

                    results.forEach(function(element) {
                        if (element.codigo) {
                            console.log('Consultar');
                        }
                    });
            }
        }

        
        
        
    });

});
