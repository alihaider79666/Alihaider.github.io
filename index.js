// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
// }

// const serviceID = "service_ledltk6";
// const templateID = "template_qshu03d";


// emailjs.send(serviceID,templateID,params)
// .then(
//     res=>{
//         document.getElementById("name").value = "",
//         document.getElementById("email").value = "",
//         document.getElementById("message").value = "",
//         console.log(res);

//         alert("your message sent sucess")
//     })

//     .catch((err)=> console.log(err));
//     ;



// Your sendMail function here
async function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceID = "service_ledltk6";
    const templateID = "template_qshu03d";

    try {
        const response = await emailjs.send(serviceID, templateID, params);
        console.log(response);

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Your message was sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending your message. Please try again later.");
    }
}
