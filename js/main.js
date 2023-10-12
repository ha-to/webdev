//Show current active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
    })

    // Send email from form
function sendEmail(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let meassage =document.getElementById("message").value;
    let body = "Name: " + name + "<br> Email: " + email + "<br> Phone: " + phone + "<br> Message: " + meassage;

    Email.send({
    SecureToken:"0fc916d8-1cf8-4d2a-851f-ed737731b1f7",
    To : "totouhentai@gmail.com",
    From : "totouhentai@gmail.com",
    Subject : "Yoga - New meaasage",
    Body : body
}).then(
message => alert(message)
); 
}

// Service tabs selection

let tabMem = document.getElementById("tabs-membership");
let tabPri = document.getElementById("tabs-private");
let tabCor = document.getElementById("tabs-corporate");

let contentMem = document.getElementById("tabs-content-membership");
let contentPri = document.getElementById("tabs-content-private");
let contentCor = document.getElementById("tabs-content-corporate");

function openMem(){
    contentMem.style.transform = "translateX(0)";
    contentPri.style.transform = "translateX(100%)";
    contentCor.style.transform = "translateX(100%)";
    contentMem.style.position = "relative";
    contentPri.style.position = "absolute";
    contentCor.style.position = "absolute";

    tabMem.style.color = "#446818";
    tabPri.style.color = "#000";
    tabCor.style.color = "#000";


}
function openPri(){
    contentMem.style.transform = "translateX(100%)";
    contentPri.style.transform = "translateX(0)";
    contentCor.style.transform = "translateX(100%)";
    contentMem.style.position = "absolute";
    contentPri.style.position = "relative";
    contentCor.style.position = "absolute";

    tabMem.style.color = "#000";
    tabPri.style.color = "#446818";
    tabCor.style.color = "#000";

}
function openCor(){
    contentMem.style.transform = "translateX(100%)"
    contentPri.style.transform = "translateX(100%)";
    contentCor.style.transform = "translateX(0)";
    contentMem.style.position = "absolute";
    contentPri.style.position = "absolute";
    contentCor.style.position = "relative";

    tabMem.style.color = "#000";
    tabPri.style.color = "#000";
    tabCor.style.color = "#446818";

}
