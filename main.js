let date = new Date();
let year = date.getFullYear();
let year_html = document.body.querySelector('.year');
year_html.innerHTML = `${year}`;
