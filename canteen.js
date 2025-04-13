function bill(){
    var coffee = parseInt(document.getElementById("coffee").value)*15;
    var tea = parseInt(document.getElementById("tea").value)*15;
    var idli = parseInt(document.getElementById("idli").value)*25;
    var dosa = parseInt(document.getElementById("dosa").value)*50;
    var tomatobath = parseInt(document.getElementById("tomatobath").value)*40;
    var pakoda = parseInt(document.getElementById("pakoda").value)*20;

    var total = coffee + tea + idli + dosa + tomatobath + pakoda;
     
    var tbill = document.getElementById("bill"); 
    tbill.innerHTML = "your total amount will be:" +"  "+total;

}