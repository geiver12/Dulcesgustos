

 a=0;
 b=0;
 function addIngrediente(){
    a++;
    var row=document.createElement('section');
    row.setAttribute('class','row');
    row.setAttribute('id','ingrediente_'+a);
    row.innerHTML='<section id="ingrediente_'+a+' "class=" form-group  col-3 m-0 p-0 d-flex d-block align-items-center"><input type="text" name="ingrediente" class="ml-2 form-control" id="ingrediente'+a+'" placeholder="Harina/Azucar/Etc" required></section><section id="ingrediente_'+a+' "class="form-group col-3 m-0 p-0  d-flex d-block align-items-center"><input type="text" name="cantidad" class="ml-2 form-control" id="cantidad'+a+'" placeholder="10/20/100/500/1/Etc" required></section><section id="ingrediente_'+a+' "class="form-group col-3 m-0 p-0  justify-content-end d-flex d-block align-items-center"><select  name="medida" class="ml-2  custom-select" id="medida'+a+'" required><option value="1" selected>unid</option><option value="2">gr</option><option value="3">ml</option><option value="4">oz</option><option value="5">cdita</option><option value="6">cda</option><option value="7">taza</option></select></section>';
    document.getElementById('ingred').appendChild(row);
}



function delIngrediente(){

    if(a>0){
        var eli=document.getElementById('ingrediente_'+a);
        if(eli!=null)
        eli.remove();
        a--;
    }
    
}

function addPasos(){
    b++;
    var col=document.createElement('section');
    col.setAttribute('class','col-12');
    col.setAttribute('id','paso_'+b);
    col.innerHTML='<label id="paso_"'+b+' for="paso'+b+'" class="form-check-label pl-1">PASO '+b+':</label><textarea class="form-control" name="paso'+b+'" id="paso'+b+'" required></textarea>'
    document.getElementById('pasos-receta').appendChild(col);
}

function delPasos(){

    if(b>0){
        var eli=document.getElementById('paso_'+b);
        if(eli!=null)
        eli.remove();
        b--;
    }
    
}


$(function(){
    $('[data-toggle="tooltip"]').tooltip();
   
  $("button").click(function () {
    $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
  });
})

