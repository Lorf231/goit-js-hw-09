import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css               */const e=document.querySelector(".feedback-form"),m="feedback-form-state";let a={email:"",message:""};const o=localStorage.getItem(m);if(o)try{a=JSON.parse(o),e.email.value=a.email||"",e.message.value=a.message||""}catch(t){console.error("Error parsing saved form data:",t)}e.addEventListener("input",t=>{const{name:r,value:s}=t.target;a[r]=s.trimStart(),localStorage.setItem(m,JSON.stringify(a))});e.addEventListener("submit",t=>{t.preventDefault();const r=e.email.value.trim(),s=e.message.value.trim();if(r===""||s===""){alert("Fill please all fields");return}console.log("Submitted form data:",{email:r,message:s}),localStorage.removeItem(m),a={email:"",message:""},e.reset()});
