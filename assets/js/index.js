$(document).ready(function(){
    $('a').click(function(event){
        console.log(this,this.hash)
      if(this.hash !== ""){
        event.preventDefault();//los events también tienen comportamientos predefinidos en esta linea se le está diciendo que no haga así sino como se quiere//
        var hash = this.hash;
        $('html,body').animate({//animate hace el scroll//
          scrollTop: $(hash).offset().top
        },800,function(){
          window.location.hash = hash
        })
      }
    })
  })