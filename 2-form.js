import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state";let a={email:"",message:""};const m=localStorage.getItem(l);if(m)try{a=JSON.parse(m),e.email.value=a.email||"",e.message.value=a.message||""}catch(t){console.error("Error parsing saved form data:",t)}e.addEventListener("input",t=>{const{name:r,value:s}=t.target;a[r]=s.trimStart(),localStorage.setItem(l,JSON.stringify(a))});e.addEventListener("submit",t=>{t.preventDefault();const r=e.email.value.trim(),s=e.message.value.trim();if(r===""||s===""){alert("Fill please all fields");return}console.log("Submitted form data:",{email:r,message:s}),localStorage.removeItem(l),a={email:"",message:""},e.reset()});
//# sourceMappingURL=2-form.js.map
