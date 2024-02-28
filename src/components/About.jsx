 import React from "react";

 const About = () => {
   return (
     <div
       name="about"
       className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
     >
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
         <div className="pb-8">
           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
             About
           </p>
         </div>

         <p className="text-xl mt-20">
           Welcome Visitor, I am Sanket Singh Godara belongs to
           Bharatpur,Rajasthan.currently, persuing Btech From Dr B R Ambedkar
           National Institute Of Technology,Jalandhar Punjab in Electronics and
           communication department. As a full stack developer,I love to work on
           web application using technologies like React, Tailwind,
           nodejs,expressjs and MongoDb.
         </p>

         <br />

         <p className="text-xl">
           I have done an internship as a frontend developer in which i worked
           on a User interface desgining of the website. My skills are mentioned
           below and projects as well. my soft skills are
           Leadership,Team-work,time-management and good communication. some of
           my favourite courses are DBMS,Operating system,Oops,Data structure.
           my hobbies are : cricket,Boxing,gym and travelling.
         </p>
         <p className="text-2xl pt-2">
           Please check my github profile and also you can download my resume from sidebar.
         </p>
       </div>
     </div>
   );
 };

 export default About;
