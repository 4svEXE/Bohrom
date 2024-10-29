import{u as d,r as w,c as E,a as r,j as e,I as F,F as _,b as l,E as c,B as I,n as o,d as i,e as L}from"./index-C6C1bs5q.js";var m={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M=()=>{const{t:s}=d(),[x,h]=w.useState(!1),p=m.VITE_EMAILJS_SERVICE_ID||"service_k3lakun",g=m.VITE_EMAILJS_TEMPLATE_ID||"template_msxc9d5",f=m.VITE_EMAILJS_USER_ID||"_i9RtJHIWkF2VHusS",n="emailSendLimit",j=3,u=E({name:r().required(s("errors.required")),email:r().email(s("errors.invalidEmail")).required(s("errors.required")),phone:r().required(s("errors.required")),message:r()}),b=()=>{const a=JSON.parse(window.localStorage.getItem(n)||"{}"),t=new Date().toLocaleDateString();return a.date===t?a.count<j:!0},N=()=>{const a=JSON.parse(window.localStorage.getItem(n)||"{}"),t=new Date().toLocaleDateString();a.date===t?a.count+=1:(a.date=t,a.count=1),window.localStorage.setItem(n,JSON.stringify(a))},v=async(a,t)=>{if(!b()){o.error(s("contactForm.limitExceeded")),t.setSubmitting(!1),i("Error: contactForm.limitExceeded");return}try{await L.send(p,g,{from_name:a.name,to_name:"BOHROM",message:a.message,phone:a.phone,email:a.email},f),i("message: "+JSON.stringify({from_name:a.name,to_name:"BOHROM",message:a.message,phone:a.phone,email:a.email})),N(),t.resetForm(),h(!0),o.success(s("contactForm.successMessage"))}catch(S){o.error(s("contactForm.errorMessage")),i("error: "+S)}finally{t.setSubmitting(!1)}};return e.jsxs("div",{className:"w-full items-end",children:[e.jsx(F,{reverseOrder:!1,containerClassName:"z-100 mb-20",position:"bottom-center",toastOptions:{duration:2e5}}),x?e.jsxs("div",{className:"success-message",children:[e.jsx("h3",{children:s("contactForm.successTitle")}),e.jsx("p",{children:s("contactForm.successDescription")}),e.jsx("img",{className:"mt-10",src:"/assets/img/why-us/3.svg",alt:"Excellent Customer Service"})]}):e.jsx(_,{initialValues:{name:"",email:"",phone:"",message:""},validationSchema:u,onSubmit:v,children:a=>e.jsxs("form",{className:"contact-form gap-10",onSubmit:a.handleSubmit,children:[e.jsx("h3",{className:"mb-8",children:s("contactForm.getFeedback")}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"name",children:s("contactForm.nameLabel")}),e.jsx(l,{type:"text",id:"name",name:"name",placeholder:s("contactForm.namePlaceholder")}),e.jsx(c,{name:"name",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",children:s("contactForm.emailLabel")}),e.jsx(l,{type:"email",id:"email",name:"email",placeholder:s("contactForm.emailPlaceholder")}),e.jsx(c,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"phone",children:s("contactForm.phoneLabel")}),e.jsx(l,{type:"text",id:"phone",name:"phone",placeholder:s("contactForm.phonePlaceholder")}),e.jsx(c,{name:"phone",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"message",children:s("contactForm.messageLabel")}),e.jsx(l,{as:"textarea",id:"message",name:"message",rows:4,placeholder:s("contactForm.messagePlaceholder")}),e.jsx(c,{name:"message",component:"div",className:"error-message"})]}),e.jsxs("p",{className:"info mt-2",children:[s("contactForm.infoText")," ",e.jsx("a",{href:"pdf/file.pdf",target:"_blank",children:s("contactForm.confid")})]}),e.jsx(I,{text:s("contactForm.submitButton"),className:"mt-8 w-full flex justify-center",type:"submit",disabled:a.isSubmitting,isLoading:a.isSubmitting,onClick:()=>a.handleSubmit()})]})})]})},y=()=>{const{t:s}=d();return e.jsxs("section",{className:"Contacts",children:[e.jsx("img",{className:"map",src:"/assets/img/Map.svg",alt:s("footer.altLogo")}),e.jsxs("div",{className:"md:grid-cols-2 grid grid-cols-1 gap-20",children:[e.jsx("div",{className:"col-span-1 flex flex-col items-center",children:e.jsxs("div",{className:"col-span-1 flex flex-col gap-10 w-full",children:[e.jsx("h2",{className:"w-full md:text-start text-center mb-4",children:s("footer.contacts")}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h6",{children:s("footer.email")}),e.jsx("a",{href:`mailto:${s("var.email")}`,children:s("var.email")})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h6",{children:s("workingHours")}),e.jsxs("p",{children:[s("workingHoursText")," — ",e.jsx("span",{children:s("workingHours24")})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h6",{children:s("footer.phone")}),e.jsx("a",{href:`tel:${s("var.tel")}`,children:s("var.tel")})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h6",{children:"IČO:"}),e.jsx("p",{children:"22060910"})]}),e.jsxs("div",{className:"flex gap-3 flex-wrap justify-center md:justify-start m-auto w-[80%] md:w-full",children:[e.jsx("a",{href:`tel:${s("var.tel")}`,className:"Btn telegram",children:e.jsx("img",{src:"/assets/icons/phone.svg",width:"40px",alt:"phone"})}),e.jsx("a",{href:"https://t.me/+420775473171",className:"Btn telegram",children:e.jsx("img",{src:"/assets/icons/tg.svg",width:"40px",alt:"Telegram"})}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61567518533792",className:"Btn facebook",children:e.jsx("img",{src:"/assets/icons/fb.svg",width:"40px",alt:"Facebook"})}),e.jsx("a",{href:"https://m.me/bohrom.stehovani",className:"Btn messenger",children:e.jsx("img",{src:"/assets/icons/fb_msgr.svg",width:"40px",alt:"Messenger"})}),e.jsx("a",{href:"viber://chat?number=%2B420775473171",className:"Btn viber",children:e.jsx("img",{src:"/assets/icons/viber.svg",width:"40px",alt:"Viber"})}),e.jsx("a",{href:"https://wa.me/420775473171",className:"Btn whatsapp",children:e.jsx("img",{src:"/assets/icons/whatsap.svg",width:"40px",alt:"WhatsApp"})})]})]})}),e.jsx("div",{className:"col-span-1 flex flex-col items-end md:w-[75%]",id:"contact-form",children:e.jsx(M,{})})]})]})};export{y as default};
