function validateForm(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var pincode = document.getElementById("pincode").value;
    var address = document.getElementById("address").value;
    
    if(fname.value =="" ||lname.value =="" ||contact.value =="" ||email.value =="" ||pincode.value =="" ||address.value =="" )
    {
        alert("No blank values allowed");
        return false;
    }
    else{
true;
    }
}
form.addEventListener('submit',function(event){
event.preventDefault()
var fname=document.getElementById('fname').value
})
