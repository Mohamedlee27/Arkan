let submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let date = document.getElementById('date').value;
    let maleGender = document.getElementById('male').value;
    let femaleGender = document.getElementById('female').value;

    let akanName = document.getElementById('name');

    let birthday = date;
let dateOfBirth = new Date(birthday);
let dayOfWeek = dateOfBirth.getDay();

console.log(dayOfWeek);

if(maleGender){
    akanName.innerHTML = "Your name is:" + maleNames[dayOfWeek];

}

if(femaleGender){
    akanName.innerHTML = "Your name is: " + femaleNames[dayOfWeek];
}
});