import appCmnBgr from "./../assets/bgr001.jpg";

export const appTitle = "GANNY";
export const appDescription = "";
export const appAbout = "";
export const appLogo = "";
export const footerDescription = "இதுவும் கடந்து போகும்";
export const footerTitle =
  "I am not currently looking for freelance opportunities, <br/> but my inbox is always open to collaborate with ambitious  people;<br/>  just say hi, will get in touch!.";
export const footerCopyRightContent =
  "All rights reserved <br/> Ganesan Karuppaiya";
export const CommonBackgroundImage = appCmnBgr;

export const headerMenu = [
  {
    id: 2,
    name: "About",
    link: "/about",
    loadContent: {}
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    loadContent: {
      postType: "service",
      postClass: "col-md-6 col-sm-12 col-xs-12",
      showDesc: true
    }
  },
  {
    id: 4,
    name: "Projects",
    link: "/my-works",
    loadContent: {
      postType: "projects",
      postClass: "col-md-6 col-sm-12 col-xs-12",
      showDesc: false
    }
  },
  {
    id: 5,
    name: "Blog",
    link: "/journal",
    titleContent: { title: "post", thumbnail_images: { url: "" } },
    loadContent: {
      postType: "posts",
      postClass: "col-md-6 col-sm-12 col-xs-12",
      showDesc: true
    }
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
    loadContent: {}
  }
];

export const footerLinks = [
  {
    id: 1,
    name: "Graphic Design and branding",
    link: "/page/service",
    loadContent: {}
  },
  {
    id: 2,
    name: "User Interface Designing",
    link: "/service",
    loadContent: {}
  },
  {
    id: 3,
    name: "User Experience Products",
    link: "/service",
    loadContent: { postType: "service" }
  }
];
export const connectionLinks = [
  {
    id: 1,
    name: "ganesank@live.com",
    link: "mailto:ganesank@live.com"
  },
  {
    id: 2,
    name: "+91 994 373 2416",
    link: "tel:+919943732416"
  }
];
export const socialLinks = [
  {
    name: "github",
    id: 2,
    title: "ganesankar",
    icon: "fa-github",
    elink: "https://github.com/ganesankar"
  },
  {
    name: "linkedIn",
    id: 3,
    title: "ganesankar",
    icon: "fa-linkedin",
    elink: "https://in.linkedin.com/in/ganesankar"
  },
  {
    name: "instagram",
    id: 4,
    title: "ganesankar",
    icon: "fa-instagram",
    elink: "https://www.instagram.com/ganesankar/"
  },
  {
    name: "twitter",
    id: 5,
    title: "ganesankar",
    icon: "fa-twitter",
    elink: "http://twitter.com/ganesankar"
  },
  {
    name: "facebook",
    id: 6,
    title: "ganesankars",
    icon: "fa-facebook",
    elink: "http://facebook.com/ganesankars"
  },

  {
    name: "skype",
    id: 9,
    title: "ganesan.intech",
    icon: "fa-skype",
    elink: "skype:ganesan.intech"
  }
];
export const ServiceThings = [
  {
    id: "01",
    color: "primary",
    name: "Designing and Branding",
    img:
      "http://ganny.in/wp-content/uploads/2016/12/logo-degning-vectr-banner.jpg",
    values:
      "Every great design starts with an simple idea and best way to present an idea is to visualise it. It makes your idea alive. In many cases, visualisation helps to understand the story of the business idea."
  },
  {
    id: "02",
    color: "info",
    name: "UI/ UX Development",
    img:
      "http://ganny.in/wp-content/uploads/2016/12/websites-degning-banner.jpg",
    values:
      "It’s very important that all the fundamental parts are well defined and working This is where problem solving meets visual impact. I’ll unite products and users, design and experiences."
  },
  {
    id: "03",
    color: "warning",
    name: "Rich Web Products",
    img:
      "http://ganny.in/wp-content/uploads/2016/12/custome-webdevelopments-banner.jpg",
    values:
      "It doesn’t stop with design. I can develop your product from visual concept to fully functional website with defined standards."
  }
];

export const recentTech = [
  {
    id: 1,
    title: "JavaScript (ES6+)",
    elink: ""
  },
  {    
    id: 2,
    title: "HTML &amp; (S)CSS",
    elink: ""
  },
  {    
    id: 3,
    title: "ReactJS",
    elink: ""
  },
  {    
    id: 4,
    title: "Angular",
    elink: ""
  },
  {    
    id: 5,
    title: "VueJS",
    elink: ""
  },
  {    
    id: 6,
    title: "BackboneJS",
    elink: ""
  },
  {    
    id: 7,
    title: "NodeJS",
    elink: ""
  },
  {    
    id: 8,
    title: "ExpressJS",
    elink: ""
  },
  {    
    id: 9,
    title: "Lambda ServerLess",
    elink: ""
  },
  {    
    id: 10,
    title: "MongoDB",
    elink: ""
  },
  {    
    id: 11,
    title: "GraphQL",
    elink: ""
  },
  {    
    id: 12,
    title: "DynamoDb",
    elink: ""
  },
];
