document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        document.querySelector(".bar").classList.add("bar-ready");
        document.querySelector(".jumbo-title").classList.add("jumbo-title-ready");
        document.querySelector(".lead").classList.add("lead-ready");
    }
});

(function(){
    emailjs.init("user_We81RgxANFr6lOQvkkgdi");

    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
 })();


 function onSubmit(token) {

 }

 function sendMail(){
    document.querySelector('.contactform-submit').value = "Enviando..."
    var templateParams = {
        from_name: document.querySelector('#nome').value,
        emailname: document.querySelector('#email').value,
        to_name: 'Enssure',
        message_html: document.querySelector('#mensagem').value
    };
     
    emailjs.send('gmail', 'template_GfPemw7o', templateParams)
    .then(function(response) {
        document.querySelector('.contactform-submit').value = "Enviado!"
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        document.querySelector('.contactform-submit').value = "Falha ao enviar"
        console.log('FAILED...', error);
    });
 }