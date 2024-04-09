const search= document.getElementById('search');
const bars = document.getElementById('bars');
const click = document.getElementById('timetable');
const input = document.querySelector('#input')
const close= document.querySelector('.close')
const nav = document.querySelector('.nav');
const closeNav= document.querySelector('.close-nav')
const timetable =document.querySelector('.term')
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('.form')
const fees = document.querySelector('.fees')
const academics = document.querySelector('.academics');
 const report = document.querySelector('.report');
 const aboutBtn = document.querySelector('.aboutBtn')
 const registerBtn = document.querySelector('.registerBtn')
 const feesBtn =  document.querySelector('.feesBtn')
 const academicsBtn =  document.querySelector('.academicsBtn')
const reportBtn =  document.querySelector('.reportBtn')
const doubleclick = document.querySelector('body')
const small = document.querySelector('small')
const submitForm = document.getElementById('submitF')
const viewResult = document.getElementById("viewR")
const submitSuggestion = document.getElementById("submitS")







search.addEventListener("click", () =>{
    search.classList.add('active');
    input.classList.add('active');
    close.classList.add('active');
    
    
});
close.addEventListener("click",()=>{
search.classList.remove('active');
input.classList.remove('active');
close.classList.remove('active')
})

bars.addEventListener("mouseover", ()=>{
bars.classList.add('active');
nav.classList.add('active');

})

closeNav.addEventListener("click", ()=>{
    bars.classList.remove('active');
    nav.classList.remove('active')
})

click.addEventListener("mouseover", () =>{
timetable.classList.add('active')
})

timetable.addEventListener("mouseout", () =>{
    timetable.classList.remove('active');
    
    
})




aboutBtn.addEventListener("click",()=>{
    wrapper.classList.add('active');   
    small.classList.add('active')
})


registerBtn.addEventListener("click",()=>{
    form.classList.add('active')
    small.classList.add('active')
})

academicsBtn.addEventListener("click",()=>{
    academics.classList.add('active')
    small.classList.add('active')
})
feesBtn.addEventListener("click", ()=>{
    fees.classList.add('active');
    small.classList.add('active')
})
reportBtn.addEventListener("click", ()=>{
    report.classList.add('active')
    small.classList.add('active')
});


window.addEventListener("dblclick",()=>{
    report.classList.remove('active')
    academics.classList.remove('active')
    fees.classList.remove('active')
    form.classList.remove('active')
    wrapper.classList.remove('active')
    small.classList.remove('active')

})

submitForm.addEventListener("click", () =>{
    form.innerHTML= `<p class="Thanks">Thanks for registering with us</p>
        <strong class="email">An email will be sent too. Check the email for your child's entrance exam</strong>` 
} )

viewResult.addEventListener("click",()=>{
    academics.innerHTML =`<p class="results">Child's result is sent to your email...</p>`
})

submitSuggestion.addEventListener("click",()=>{
    report.innerHTML = `<p class="response">Report/Suggestion received. Response will be relayed soon....</p>`
})



// const myForm = document.getElementById('myForm')
// myForm.addEventListener("submit, function(event) {
//     const fathername = document.getElementById('fathername')
//     const nameChild = document.getElementById('child')
//     const age = document.getElementById('age')
//     const fathercontact = document.getElementById('fathercontact')
//     const motherName = document.getElementById('mothername')
//     const mothercontact = document.getElementById('mothercontact')
//     const sponsorName = document.getElementById('sponsorname')
//     const sponsporContact = document.getElementById('sponsorcontact')
    
//     if (nameChild.value.trim() === ''){
//         nameChild.innerHTML ="Enter child's name"
//         event.preventDefault()
//     }
//     else if (age.value.trim() === ''){
//         age.innerHTML = "Enter child's age"
//         event.preventDefault()
//     }
//     else if (fathername.value.trim() === ''){
//         fathername.innerHTML = "Please fill in..."
//     }
//      else if (fathercontact.value.trim() === ''){
//         fathercontact.innerHTML = "Please fill in..."
//         event.preventDefault()
//     }
//     else if (motherName.value.trim === ''){
//         motherName.innerHTML = "Please fill in..."
//         event.preventDefault()
//     }
//     else if (mothercontact.value.trim() === ''){
//         mothercontact.innerHTML = "Please fill in..."
//         event.preventDefault()
//     }
//     else if (sponsorName.value.trim() === ''){
//         sponsorName.innerHTML = "Please fill in..."
//         event.preventDefault()
//     }
//      else if (sponsporContact.value.trim === ''){
//         sponsporContact.innerHTML = "Please fill in..."
//         event.preventDefault()
//     }
//     else{
//         form.innerHTML= `<p class="Thanks">Thanks for registering with us</p>
//         <strong class="email">An email will be sent too. Check the email for your child's entrance exam</strong>`
//     }
//     }")
