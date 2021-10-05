 /* Projects section*/
 function tagMyProjectsF(){
   document.getElementById("tagMyProjects").style.animationName = "topF";    
   document.getElementById("myProjects").style.animationName = "slideF"; 
 }
 function tagMyProjectsR(){
   document.getElementById("tagMyProjects").style.animationName = "topR"; 
   document.getElementById("myProjects").style.animationName = "slideR";  
 }


 /* everything with skill sectionn */

 function tagSkillsF(){
   document.getElementById("tagSkills").style.animationName = "topF";    
   document.getElementById("Skills").style.animationName = "slideF";
 }

 function tagSkillsR() {
   document.getElementById("tagSkills").style.animationName = "topR"; 
   document.getElementById("Skills").style.animationName = "slideR"; 
   }

 function ss(){
   var x=document.getElementById("skillSlide");
   var y=document.getElementById("eduWorkSlide");
   var z=document.getElementById("contactsSlide");
   if(x.style.animationName===("seeMySkills") && y.style.animationName===("seeMyEduWork") && z.style.animationName===("seeMyContacts")){
     document.getElementById("skillSlide").style.animationName = "seeMySkills";
     document.getElementById("eduWorkSlide").style.animationName = "hideMyEduWork";
     document.getElementById("contactsSlide").style.animationName = "hideMyContacts";
    }
   else if(x.style.animationName===("seeMySkills") && y.style.animationName===("seeMyEduWork")) {
      document.getElementById("skillSlide").style.animationName = "seeMySkills";

     document.getElementById("eduWorkSlide").style.animationName = "hideMyEduWork";   }  
   else if (x.style.animationName===("seeMySkills")){  
     document.getElementById("skillSlide").style.animationName = "hideMySkills";
    }   
   else{  
     document.getElementById("skillSlide").style.animationName = "seeMySkills";
   }
    
 }
 /* Education-Work section  */

 function tagEduWorkF(){
   document.getElementById("tagEduWork").style.animationName = "topF";    
   document.getElementById("education-work").style.animationName = "slideF"; 

 }
 function tagEduWorkR(){
   document.getElementById("tagEduWork").style.animationName = "topR"; 
   document.getElementById("education-work").style.animationName = "slideR";  
 }

 function se(){
   var x=document.getElementById("skillSlide");
   var y=document.getElementById("eduWorkSlide");
   var z=document.getElementById("contactsSlide");

   if(y.style.animationName===("seeMyEduWork") && z.style.animationName===("seeMyContacts")){
     document.getElementById("contactsSlide").style.animationName = "hideMyContacts";
    }
   else if(y.style.animationName===("seeMyEduWork")){  
     document.getElementById("eduWorkSlide").style.animationName = "hideMyEduWork";   }   
   else{  
     document.getElementById("eduWorkSlide").style.animationName = "seeMyEduWork";
   }

   var x=document.getElementById("skillSlide");
   if(x.style.animationName===("seeMySkills") && y.style.animationName===("hideMyEduWork")){  
      document.getElementById("skillSlide").style.animationName = "hideMySkills";

    }   
   else{  
      document.getElementById("skillSlide").style.animationName = "seeMySkills";

   }

 }

 /* Contacts section*/
 function tagContactsF(){
   document.getElementById("tagContacts").style.animationName = "topF";    
   document.getElementById("myContacts").style.animationName = "slideF"; 

 }
 function tagContactsR(){
   document.getElementById("tagContacts").style.animationName = "topR"; 
   document.getElementById("myContacts").style.animationName = "slideR";  
 }

 function sc(){
   var z=document.getElementById("contactsSlide");
   if(z.style.animationName===("seeMyContacts")){  
     document.getElementById("contactsSlide").style.animationName = "hideMyContacts";
    }   
   else{  
     document.getElementById("contactsSlide").style.animationName = "seeMyContacts";
   }
   var y=document.getElementById("eduWorkSlide")

   if(y.style.animationName===("seeMyEduWork") && z.style.animationName===("hideMyContacts")){  
     document.getElementById("eduWorkSlide").style.animationName = "hideMyEduWork";   }   
   else{  
     document.getElementById("eduWorkSlide").style.animationName = "seeMyEduWork";
   }

   var x=document.getElementById("skillSlide")
   if(x.style.animationName===("seeMySkills") && y.style.animationName===("hideMyEduWork") && z.style.animationName===("hideMyContacts")){  
      document.getElementById("skillSlide").style.animationName = "hideMySkills";

    }   
   else{  
      document.getElementById("skillSlide").style.animationName = "seeMySkills";

   }


 }

 function sp(){
   var x=document.getElementById("skillSlide");
   var y=document.getElementById("eduWorkSlide");
   var z=document.getElementById("contactsSlide");

   document.getElementById("skillSlide").style.animationName = "hideMySkills";
   document.getElementById("eduWorkSlide").style.animationName = "hideMyEduWork";  
   document.getElementById("contactsSlide").style.animationName = "hideMyContacts";
 }


function enterChev(){ 
    document.getElementById("listA").style.animationName = "fade";
  setTimeout(() => {
    document.getElementById("listA").style.display = "none";
    document.getElementById("listB").style.display = "block";
    document.getElementById("listB").style.animationName = "fadeReverse";
  }, 500);
}

function exitChev(){
    document.getElementById("listB").style.animationName = "fade";
    setTimeout(() => {
      document.getElementById("listB").style.display = "none";
      document.getElementById("listA").style.display = "block";
      document.getElementById("listA").style.animationName = "fadeReverse";
    }, 500);
}
