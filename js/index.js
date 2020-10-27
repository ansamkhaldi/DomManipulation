const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

const navList =document.querySelectorAll('.container a');
   navList[0].textContent = siteContent.nav['nav-item-1'];
   navList[1].textContent = siteContent.nav['nav-item-2'];
   navList[2].textContent = siteContent.nav['nav-item-3'];
   navList[3].textContent = siteContent.nav['nav-item-4'];
   navList[4].textContent = siteContent.nav['nav-item-5'];
   navList[5].textContent = siteContent.nav['nav-item-6'];
   
   navList.forEach(e => e.style.color = 'green'); 
   
   //Add <a> <img> </a> to nav
/*    var myNode = document.querySelector('nav');
   var myA = document.createElement('a');
   var myImg = document.createElement('img');
       myImg.setAttribute("src", siteContent.nav['img-src']);
       myImg.setAttribute("width", "80");
       myImg.setAttribute("height", "40");
       myImg.setAttribute("alt", "logowebsite");
   var nodes = [myA, myImg];
   for(var i=0; i<nodes.length; i++) {
       myNode.appendChild(nodes[i]);

       for(var j=0; j<1; j++){
           nodes[j].appendChild(nodes[j+1]);
       }
   }
  console.log(myNode); */
  //for image line 29
  const image=document.querySelector('header img');
  image.setAttribute("src", siteContent.nav['img-src']);
  

  //for class cta in section line 37
  const CTA= document.querySelector('.cta-text h1');
   CTA.textContent=siteContent.cta['h1'];

   const textButton = document.getElementsByTagName("button")[0];
   textButton.textContent = siteContent.cta['button'] ;

   //for image line 42
  const imageCTA=document.querySelector('#cta-img');
  imageCTA.setAttribute("src", siteContent.cta['img-src']);


   //for class main-content in section line 45
   const H4text=document.querySelectorAll('.text-content h4');
   console.log(H4text);
   H4text[0].textContent=siteContent['main-content']['features-h4'];
   H4text[1].textContent=siteContent['main-content']['about-h4'];
   H4text[2].textContent=siteContent['main-content']['services-h4'];
   H4text[3].textContent=siteContent['main-content']['product-h4'];
   H4text[4].textContent=siteContent['main-content']['vision-h4'];
   
   const Ptext=document.querySelectorAll('.text-content p');
   console.log(Ptext);
   Ptext[0].textContent=siteContent['main-content']['features-content'];
   Ptext[1].textContent=siteContent['main-content']['about-content'];
   Ptext[2].textContent=siteContent['main-content']['services-content'];
   Ptext[3].textContent=siteContent['main-content']['product-content'];
   Ptext[4].textContent=siteContent['main-content']['vision-content'];
     //for image line 57
  const middleImg=document.querySelector('#middle-img');
  middleImg.setAttribute("src", siteContent['main-content']['middle-img-src']);



  //for the section line 80
  const H4Contact=document.querySelector('.contact h4');
  H4Contact.textContent=siteContent.contact['contact-h4'];

  const PContact=document.querySelectorAll('.contact p');
  PContact[0].textContent=siteContent.contact['address'];
  PContact[1].textContent=siteContent.contact['phone'];
  PContact[2].textContent=siteContent.contact['email'];
 
  //for the footer

  const Footer = document.querySelector('footer p');
  Footer.textContent = siteContent.footer.copyright;