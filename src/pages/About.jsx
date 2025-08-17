import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  
  // Refs for new animations
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, threshold: 0.2 });

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[40vh] w-full bg-[#161916]">
        <motion.div 
          ref={heroRef}
          className="flex flex-col items-center w-[90vw] rounded-2xl h-[35vh] justify-center bg-[#F5E6D3]"
          initial={{ x: -300, opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-2 text-[#5D4E37]">
            About De Globe Café
          </h1>
          <h2 className="text-2xl font-medium mt-2 font-serif text-[#A0522D]">
            Brewing Stories, One Cup at a Time🍵
          </h2>
        </motion.div>
      </div>

      <section className="w-full h-[90vh] bg-[#161916] flex items-center justify-center">
        <div ref={storyRef} className="flex flex-col w-[83vw] h-full mt-32 justify-start text-[#F5E6D3]">
          <h3 className="text-4xl font-semibold mb-4 text-left border-b-1 border-[#c5a880] py-4 text-[#A0522D]">
            From Adversity to Legacy: The De Globe Cafe Story
          </h3>
          <div className="text-xl text-[#F5E6D3] font-serif flex flex-col gap-4">
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              In 2019, De Globe Cafe opened its doors in the heart of
              Hazratganj, Lucknow, replacing a Mughal-theme restaurant with a
              fresh, global-inspired <br /> café experience. The response was
              heartwarming—guests loved our warm ambiance, handcrafted
              beverages, and thoughtfully curated menu. The <br /> future looked
              bright.
            </motion.p>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              But then, the Covid-19 pandemic changed everything. India went
              into lockdown. Streets were empty, businesses shut down overnight,
              and <br /> uncertainty loomed. Many cafes and restaurants were
              forced to close permanently, but we made a decision—we would not
              let our team struggle.
            </motion.p>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              With no revenue coming in, we still ensured timely rent payments
              and full salaries for our staff, because they were our family. It
              was tough. It <br /> was uncertain. But we believed in our people
              and our passion. When the world reopened, our community stood by
              us. Slowly, but steadily, we rebuilt what we had started.
            </motion.p>
            <motion.p
            initial={{ x: -200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Today, De Globe Cafe is not just a café—it's a story of
              resilience, hope, and passion. Our coffee and tea are now among
              the most loved in Hazratganj, a testament to the journey we
              undertook. Every sip you take here is brewed with the struggles,
              dreams, and unwavering spirit that <br /> kept us going.
            </motion.p>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              Welcome to De Globe Cafe—a place where every cup tells a story.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section - Moved to Middle */}
      <section className="w-full bg-[#161916] py-20 flex items-center justify-center">
        <div className="flex flex-col items-center w-[85vw] text-[#F5E6D3]">
          <h1 className="text-4xl font-semibold mb-8 text-center border-b-1 border-[#c5a880] py-4 text-[#A0522D]">
            What Makes Us Special? 🎀
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-3xl font-bold text-[#6F4E37]">Signature Brews</h1>
              <p className="text-xl font-serif text-[#F5E6D3]">
                From our famous Chai Kulhad to perfectly brewed Cold Coffee, every sip is crafted to perfection.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-3xl font-bold text-[#6F4E37]">Unmatched Quality</h1>
              <p className="text-xl font-serif text-[#F5E6D3]">
                We use premium ingredients, ensuring a taste that lingers long after your last sip.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-3xl font-bold text-[#6F4E37]">A Cozy Escape</h1>
              <p className="text-xl font-serif text-[#F5E6D3]">
                Whether it's a quick chai break or hours of conversation, our café is designed for comfort.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-3xl font-bold text-[#6F4E37]">Customer First Approach</h1>
              <p className="text-xl font-serif text-[#F5E6D3]">
                Your experience matters. We serve with passion, ensuring every visit feels special.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;