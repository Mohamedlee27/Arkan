let submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let date = document.getElementById('date').value;
    let maleGender = document.getElementById('male')
    let femaleGender = document.getElementById('female')

    let akanName = document.getElementById('name');

    let birthday = date;
let dateOfBirth = new Date(birthday);
let dayOfWeek = dateOfBirth.getDay();

console.log(dayOfWeek);

if(maleGender.checked == true){
    akanName.innerHTML = "Your name is:" + maleNames[dayOfWeek];

}

else if(femaleGender.checked == true){
    akanName.innerHTML = "Your name is: " + femaleNames[dayOfWeek];
}

}); 