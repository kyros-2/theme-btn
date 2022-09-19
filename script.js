const buttonTheme = document.querySelector('div.switch'),
themeIcon = document.querySelector('#themeIcon'),
themeCheck = document.querySelector('input[name="theme"]');

buttonTheme.addEventListener('click', function (){
    themeCheck.click();
    if (themeCheck.checked){
        themeIcon.style.transform = 'translateX(30px)';
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        cssVar();
    } else {
        themeIcon.style.transform = 'translateX(0)';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        document.documentElement.style = null;
    }
})

function cssVar(){
    document.documentElement.style.setProperty('--background-body', '#1f1f1f');
    document.documentElement.style.setProperty('--background-themeIcon', '#cccccc');
    document.documentElement.style.setProperty('--color-themeIcon', '#2c2c2c');
}