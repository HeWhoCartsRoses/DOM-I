const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};
function pseudo() {
  let img1 = document.querySelector('#logo-img');
  let img2 = document.querySelector('#cta-img');
  let img3 = document.querySelector('#middle-img');
  img1.src = 'img/logo.png';
  img2.src = 'img/header-img.png';
  img3.src = 'img/mid-page-accent.jpg';
  let head = siteContent.nav;
  let cta = siteContent.cta;
  let main = siteContent["main-content"];
  let con = siteContent.contact;
  let foot = siteContent.footer;
  let links = document.getElementsByTagName('a');
  Array.from(links).forEach(link => {
    link.textContent = (head[`nav-item-` + Array.from(links).indexOf(link)])
  });
  let title = document.getElementsByTagName('h1');
  let button = document.getElementsByTagName('button');
  title[0].textContent = (cta['h1'])
  button[0].textContent = (cta['button'])
  let vars = (Object.keys(main));
  vars.splice(4, 1)
  let body = document.querySelectorAll('.text-content h4, .text-content p');
  for (var i = 0; i < vars.length; i++) {
    body[i].textContent = (main[vars[i]])
  }
  let cont = document.querySelectorAll('.contact h4');
  cont[0].textContent = (con['contact-h4'])
  let arr = ['123 Way 456 Street Somewhere, USA', '1 (888) 888-8888', 'sales@greatidea.io']
  let info = document.querySelectorAll('.contact p');
  for (var i = 0; i < arr.length; i++) {
    info[i].textContent = (arr[i])
  }
  let foot2 = document.querySelectorAll('footer p');
  foot2[0].textContent = (foot['copyright'])
}
console.log(pseudo());