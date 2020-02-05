const btnMenu=document.getElementById("btn__menu"),navMenu=document.getElementById("nav__menu"),navLogo=document.querySelector(".nav__logo"),navIcons=document.querySelectorAll(".nav__icon");btnMenu.addEventListener("click",()=>{navMenu.classList.toggle("toggle-menu"),btnMenu.classList.toggle("spin-menuBtn"),navLogo.classList.toggle("toggle-menuIcon"),navIcons.forEach(icon=>{icon.classList.toggle("toggle-menuIcon")})});class Products{}class Storage{}class UI{toggleCart(){cartDOM.classList.toggle("toggleCart"),cartOverlay.classList.toggle("toggleOverlay")}setupAPP(){cartBtn.addEventListener("click",this.toggleCart),closeCartBtn.addEventListener("click",this.toggleCart)}}const client=contentful.createClient({space:"dsfbqtjs2w7x",accessToken:"nGCoarI8AWuvW7D6RQNLtKDiALXngKQ47RYb5P8ELRo"}),cartBtn=document.getElementById("nav__icon--cart"),cartMarker=document.getElementById("cart__marker"),closeCartBtn=document.getElementById("cart__closeBtn"),emptyCartBtn=document.getElementById("cart__btn--empty"),cartDOM=document.getElementById("cart"),cartOverlay=document.getElementById("cart__overlay"),cartTotal=document.getElementById("cart__total"),cartContent=document.getElementById("cart__content"),productsDOM=document.getElementById("produtos__gallery");let cart=[],buttonsDOM=[];document.addEventListener("DOMContentLoaded",()=>{new Products;(new UI).setupAPP()});const formDOM=document.getElementById("form"),name=document.getElementById("nome"),email=document.getElementById("email"),subject=document.getElementById("assunto"),msg=document.getElementById("mensagem");let hasError=!1,formError=!0;const resetBtn=document.getElementById("form__btn--cancelar"),submitBtn=document.getElementById("form__btn--enviar");class MyForm{validate(){Name.validate(),Email.validate(),Subject.validate(),Message.validate()}fieldIsEmpty(field,error,errorMsg){0===field.value.length?(error.innerHTML=errorMsg,hasError=!0,formError=!0):this.clearErrors(error)}fieldIsTooShort(charlength,field,error,errorMsg){field.value.length<charlength?(error.innerHTML=errorMsg,hasError=!0,formError=!0):this.clearErrors(error)}borderColor(field){hasError?field.style.borderColor="crimson":(field.style.borderColor="white",field.addEventListener("focus",()=>{field.style.borderColor="rgb(72, 138, 224)"}),field.addEventListener("blur",()=>{field.style.borderColor="white"}))}clearErrors(error){error.innerHTML="&nbsp",hasError=!1,formError=!1}reset(){const inputs=document.querySelectorAll("input"),textarea=document.querySelector("textarea");document.querySelectorAll(".erro").forEach(error=>{this.clearErrors(error)}),inputs.forEach(input=>{this.borderColor(input)}),this.borderColor(textarea),form.reset()}}const myForm=new MyForm,mainContainer=document.querySelector("main");mainContainer.classList.contains("contato")&&(formDOM.addEventListener("submit",event=>{event.preventDefault()}),resetBtn.addEventListener("click",()=>{confirm("Tem certeza de que quer limpar o formulário?")&&myForm.reset()}),submitBtn.addEventListener("click",()=>{myForm.validate(),formError||setTimeout(()=>{alert("Mensagem enviada!"),myForm.reset()},500)}),setTimeout(()=>{Name.onBlur(),Email.onBlur(),Subject.onBlur(),Message.onBlur(),Message.resizeTextarea()},100));class Email{static validate(){const error=document.getElementById("erro--email");myForm.fieldIsEmpty(email,error,"Digite seu email"),hasError||/\S+@\S+\.\S+/.test(email.value)||(error.innerHTML="Email inválido",hasError=!0,formError=!0),myForm.borderColor(email)}static onBlur(){email.addEventListener("blur",()=>{this.validate()})}}class Message{static validate(){const error=document.getElementById("erro--mensagem");myForm.fieldIsEmpty(msg,error,"Digite sua mensagem"),hasError||myForm.fieldIsTooShort(20,msg,error,"Sua mensagem é muito curta."),myForm.borderColor(msg)}static resizeTextarea(){msg.addEventListener("focus",()=>{msg.setAttribute("rows","10")})}static onBlur(){msg.addEventListener("blur",()=>{this.validate(),!msg.value&&msg.setAttribute("rows","1")})}}class Name{static validate(){const error=document.getElementById("erro--nome");myForm.fieldIsEmpty(name,error,"Digite seu nome"),hasError||myForm.fieldIsTooShort(3,name,error,"Nome deve conter pelo menos 3 letras"),myForm.borderColor(name)}static onBlur(){name.addEventListener("blur",()=>{this.validate()})}}class Subject{static validate(){const error=document.getElementById("erro--assunto");myForm.fieldIsEmpty(subject,error,"Digite um assunto"),myForm.borderColor(subject)}static onBlur(){subject.addEventListener("blur",()=>{this.validate()})}}