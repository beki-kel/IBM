let username = document.getElementById('name').value;
let age = document.getElementById('age').value;
let email = document.getElementById('email').value;
let job = document.getElementById('job').value;
let designation = document.getElementById('designation').value;
let productType = document.getElementById('productType').value;
let feedback = document.getElementById('feedbackText').value;
let submitButton=document.getElementById('submitBtn'); 

function submitFeedback () { 
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML =email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback')
}

submitButton.onclick=submitFeedback

document.addEventListener('keydown',function (event){
    if(event.key === 'Enter'){
        submitFeedback()
    }
})
