const $menuButton = document.querySelector('.profile__menu_button_JS');
const $menuList = document.querySelector('.profile__menu_list_JS');

const $popupClose = document.querySelector('.close-popup_JS');
const $popup      = document.querySelector('.popup');

const $inputAddComment  = document.querySelector('.main-popup-panel_header_comment__add-comment_input');
const $submitAddComment = document.querySelector('.main-popup-panel_header_comment__add-comment_submit');

const $likeActive = document.querySelector('.like-active');
if($likeActive){
    $likeActive.classList.remove('far');
    $likeActive.classList.add('fas');
}


let showedMenu = false;
let showedPopup = false;


$inputAddComment.addEventListener('input', (e) => {
    if(e.target.value){
        $submitAddComment.classList.add('active-button')
    }else{
        $submitAddComment.classList.remove('active-button')
    }
})


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('profile__menu_button_JS')){
        $menuList.classList.toggle("hide");
    }else{
        $menuList.classList.add("hide");
    }

    if(e.target.classList.contains('close-popup_JS') || e.target.classList.contains('popup')){
        $popup.classList.remove("popup-active");
        showedPopup = !showedPopup;
    }

    if(e.target.parentElement.classList.contains('main-galery_item')){
        console.log(e.target.parentElement.dataset.id)
    }





    
    if(!showedPopup){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'auto';
    }
})