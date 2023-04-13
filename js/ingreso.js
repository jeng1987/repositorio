let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let evento_suma = document.getElementById("btn_operar");
let prueba = document.getElementById("btn_prueba");

let nueva_operacion;
class operaciones{
  constructor(){

  }
  sumar(a,b){
    let res = a + b;
    return res;
  }
  restar(a,b){
    let res = a - b;
    return res;
  }
  multiplicar(a,b){
    let res = a * b;
    return res;
  }
  dividir(a,b){
    let res = a / b;
    return res;
  }
  validacion_num1(){
    Swal.fire({
      icon: 'info',
      title: 'numero 1 ',
      text: `No puede ir vacio`    
    });
  }
  validacion_num2(){
    Swal.fire({
      icon: 'info',
      title: 'numero 2 ',
      text: `No puede ir vacio`    
    });
  }
}
evento_suma.addEventListener("click",() =>{
 
  nueva_operacion = new operaciones();
  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);
  let ope = operacion.value;
  console.log(ope);
  console.log("numero 1: "+num1 + " numero 2: "+num2);
  if(num1 === NaN || num2 === NaN){ 
  nueva_operacion.validacion_num1(num1); 
  nueva_operacion.validacion_num2(num2);    
  }else{
      ope === "suma" ? Swal.fire({
      icon: 'info',
      title: 'El resultado es',
      text: `${nueva_operacion.sumar(num1,num2)}`    
    }):ope === "resta" ? Swal.fire({
      icon: 'info',
      title: 'El resultado es',
      text: `${nueva_operacion.restar(num1,num2)}`    
    }):ope === "multiplicacion" ? Swal.fire({
      icon: 'info',
      title: 'El resultado es',
      text: `${nueva_operacion.multiplicar(num1,num2)}`    
    }):ope === "division" ? Swal.fire({
      icon: 'info',
      title: 'El resultado es',
      text: `${nueva_operacion.dividir(num1,num2)}`    
    }):Swal.fire({
      icon: 'info',
      title: 'El resultado es',
      text: `Operacion no encontrada`    
    })
  }
});

prueba.addEventListener("click", ()=>{
  alert("ejemplo");
})
  
