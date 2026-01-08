//メニューボタンの設定
const btn = document.querySelector('.btn-menu'); 
const nav = document.querySelector('.main-nav'); 
btn.addEventListener('click', () => { nav.classList.toggle('open-menu'); 
  const img = btn.querySelector('img'); if (nav.classList.contains('open-menu')) { 
    img.src = 'images/close.svg'; 
  }else { 
    img.src = 'images/menu.svg'; 
  } 
}); 
