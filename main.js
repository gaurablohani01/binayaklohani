let date = new Date();
let year = date.getFullYear();
let year_html = document.body.querySelector('.year');
let yeara=document.body.querySelector('.yeara');
year_html.innerHTML = `${year}`;
yeara.innerHTML = `${year}`;
