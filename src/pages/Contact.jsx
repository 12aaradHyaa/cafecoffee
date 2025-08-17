import React , { useRef }  from "react";
import { motion, useInView } from "framer-motion";



const Contact = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });

  const locationRef = useRef(null);
  const isLocationInView = useInView(locationRef, {
    once: true,
    threshold: 0.3,
  });

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[50vh] w-full bg-[#161916]">
        <motion.div
          ref={heroRef}
          className="flex flex-col items-center w-[90vw] rounded-2xl h-[40vh] justify-center bg-[#F5E6D3]"
          initial={{ x: -300, opacity: 0 }}
          animate={
            isHeroInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-2 text-[#5D4E37]">
            Get in Touch with De Globe Café
          </h1>
          <h2 className="text-3xl text-center font-medium mt-4 font-serif text-[#A0522D]">
            We love hearing from our customers! <br /> Whether you have a
            question, feedback, or simply want to say hello, <br /> feel free to
            reach out.🍵
          </h2>
        </motion.div>
      </div>

      <section className="flex flex-col items-center justify-center w-full h-[90vh] bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-4 w-[85vw] h-full mt-12 mx-auto text-[#F5E6D3]">
          <h1 className="text-5xl font-bold mb-4 text-center text-[#A0522D]">
            Visit Us at Our Two Locations
          </h1>
          <p className="text-center text-3xl font-medium font-serif text-[#F5E6D3]">
            Come, Be a Part of Our Story!
          </p>
          <p className="text-center text-3xl font-medium font-serif text-[#F5E6D3]">
            Whether you're here for a quick chai break or an evening of
            conversations over coffee, <br />
            De Globe Café welcomes you with open arms.
          </p>
          <p className="text-center text-3xl font-medium font-serif text-[#c5a880]">
            <b> Opening Hours -</b> Monday – Sunday: 10:00 AM – 11:00 PM
          </p>
        </div>

        <div
          ref={locationRef}
          className="flex items-center gap-4 mb-10 justify-center w-[85vw] h-full mt-12 mx-auto"
        >
          <motion.div
            className="flex flex-col items-center justify-center bg-[#F5E6D3] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]"
            initial={{ x: -200, opacity: 0 }}
            animate={
              isLocationInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-3xl font-semibold text-[#5D4E37]">De Globe Café 🥐</h1>
            <p className="text-center font-serif text-2xl font-normal text-[#6F4E37]">
              Hazratganj (Near LIC Office)
            </p>
            <p className="text-center font-serif text-2xl font-normal text-[#A0522D]">
              Maqbara Rd, opposite LIC Office, Bank of Baroda, <br />{" "}
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center bg-[#F5E6D3] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]"
            initial={{ x: 200, opacity: 0 }}
            animate={
              isLocationInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           
            <h1 className="text-3xl font-semibold text-[#5D4E37]">De Globe Café 🥐</h1>
            <p className="text-center font-serif text-2xl font-normal text-[#6F4E37]">
              Hazratganj (Behind Prince Market)
            </p>
            <p className="text-center font-serif text-2xl font-normal text-[#A0522D]">
              Chitrhar Building, behind Prince Market, Nawal Kishor Road,
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-[50vh] bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-4 w-[85vw] h-full mt-12 mx-auto text-[#F5E6D3]">
          <h1 className="text-5xl font-bold mb-4 text-center text-[#A0522D]">
            Connect With Us on Social Media
          </h1>
          <p className="text-center text-3xl font-medium font-serif text-[#F5E6D3]">
            Stay updated with our latest offers, events, and new additions to
            the menu!
          </p>
          <p className="text-center text-3xl font-medium font-serif text-[#c5a880]">
            Follow Us Now
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-[85vw] h-[60vh] mt-12 mb-16 mx-auto">
          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/deglobecafe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#F5E6D3] rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img 
            className="w-16 h-16"
            src="/insta.svg" />
            <h3 className="text-[#5D4E37] text-3xl font-bold">@deglobecafe</h3>
          </a>

          {/* Facebook Card */}
          <a 
            href="https://www.facebook.com/deglobecafe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#F5E6D3] rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/icons8-facebook.svg" className="w-16 h-16"/>
            <h3 className="text-[#5D4E37] text-3xl font-bold">@deglobecafe</h3>
          </a>

          {/* Google Card */}
          <a 
            href="https://www.google.com/search?sxsrf=AHTn8zqkbqOW2Etc-RVmZTmxaewZzadOow:1743617914603&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&kgs=cc9db314593d27d3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#F5E6D3] rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/google-icon.svg" 
              className="w-16 h-16" 
              alt="Google Icon"
              onError={(e) => {
                console.log('Google icon failed to load');
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23EA4335' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%23FBBC05' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23EA4335' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%2334A853' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E";
              }}
            />
            <h3 className="text-[#5D4E37] text-3xl font-bold">@deglobecafe</h3>
          </a>
        </div>
      </section>

    </main>
  );
};

export default Contact;