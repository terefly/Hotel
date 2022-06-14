export default function accountMenuTougle() {
    let name = 'Юлий';
    let lastname = 'Цезарь';

    const contaier = document.querySelector('.page-header_login-container');

    contaier.classList.toggle('logedIn')

    contaier.innerHTML = (contaier.classList.contains('logedIn')) ? `<div class="page-header_name-container" ><a href="#">${name} ${lastname}</a></div>` : '<div class="page-header_buttons-container"><button class="btn btn__white" href="#">войти</button><button class="btn btn__purple" href="#">зарегистрироваться</button></div>';
}
