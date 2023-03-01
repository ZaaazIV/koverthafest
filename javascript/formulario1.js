const $form = document.querySelector('#form');
const $buttomMailto =document.querySelector('#trucazo');

$form.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefault() //previene que el formulario recargue la pagina
    const form = new FormData(this);
    //console.log(form.get('name'));
    $buttomMailto.setAttribute('href',`mailto:phantomdancemx@gmail.com?subject=${form.get('name')} - ${form.get('email')}&body=${form.get('info')} `);
    $buttomMailto.click();
};