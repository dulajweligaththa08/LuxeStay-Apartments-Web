import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Hospital, ShoppingCart, Coffee, Dumbbell, Waves } from "lucide-react";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(err => console.log('Video play error:', err));
    };

    video.addEventListener('loadeddata', playVideo);
    
    return () => {
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={{height:"100vh", display:"flex", alignItems:"center", padding:"0 40px", position:"relative", overflow:"hidden"}}>
        {/* Background Video */}
        <div style={{
          position:"absolute",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          zIndex:0,
          pointerEvents:"none"
        }}>
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            loop
            autoPlay
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width:"100%",
              height:"100%",
              objectFit:"cover",
              opacity:0.3,
              pointerEvents:"none"
            }}
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Overlay */}
        <div style={{
          position:"absolute",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          background:"rgba(13, 15, 20, 0.00008)",
          zIndex:1
        }} />
        
        <motion.div
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{duration:1, ease:"easeOut"}}
          style={{maxWidth:"700px", zIndex:2}}
        >
          <motion.h1 
            className="gold-text" 
            style={{fontSize:"clamp(36px, 6vw, 64px)", marginBottom:"20px", lineHeight:1.2}}
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.3, duration:0.8}}
          >
            Experience Luxury Living
          </motion.h1>
          <motion.p 
            style={{fontSize:"clamp(16px, 2vw, 20px)", lineHeight:"1.8", marginBottom:"40px", opacity:0.9}}
            initial={{opacity:0}}
            animate={{opacity:0.9}}
            transition={{delay:0.6, duration:0.8}}
          >
            Discover premium apartments with world-class amenities in the heart of the city.
          </motion.p>
          <motion.div 
            style={{display:"flex", gap:"20px", flexWrap:"wrap"}}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.9, duration:0.6}}
          >
            <motion.button 
              className="gold-btn"
              whileHover={{scale:1.05, boxShadow:"0 0 30px rgba(212,175,55,0.6)"}}
              whileTap={{scale:0.95}}
            >
              View Apartments
            </motion.button>
            <motion.button 
              className="glass" 
              style={{padding:"12px 28px", borderRadius:"999px", fontWeight:600, cursor:"pointer"}}
              whileHover={{scale:1.05, backgroundColor:"rgba(255,255,255,0.1)"}}
              whileTap={{scale:0.95}}
            >
              WhatsApp Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Row */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"30px"}}>
          {[{num:"20+", text:"Luxury Units"}, {num:"24/7", text:"Security"}, {num:"Prime", text:"Locations"}].map((stat, i) => (
            <motion.div key={i} className="glass" style={{padding:"40px", textAlign:"center"}}
              initial={{opacity:0, y:50, scale:0.9}} 
              whileInView={{opacity:1, y:0, scale:1}} 
              viewport={{once:true, margin:"-50px"}}
              transition={{delay:i*0.15, duration:0.5}}
              whileHover={{scale:1.05, boxShadow:"0 15px 35px rgba(212,175,55,0.3)"}}>
              <motion.h2 
                className="gold-text" 
                style={{fontSize:"42px", marginBottom:"10px"}}
                initial={{scale:0}}
                whileInView={{scale:1}}
                viewport={{once:true}}
                transition={{delay:i*0.15+0.3, type:"spring", stiffness:200}}
              >
                {stat.num}
              </motion.h2>
              <p style={{fontSize:"18px", opacity:0.8}}>{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Living */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.h2 
          className="gold-text" 
          style={{fontSize:"clamp(32px, 5vw, 42px)", textAlign:"center", marginBottom:"50px"}}
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          Signature Living
        </motion.h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"30px"}}>
          {[
            {title:"Premium Interiors", desc:"Exquisitely designed spaces with high-end finishes and modern aesthetics."},
            {title:"Prime Locations", desc:"Strategically located in the most sought-after neighborhoods."},
            {title:"Private & Secure", desc:"24/7 security with advanced surveillance and access control systems."}
          ].map((item, i) => (
            <motion.div key={i} className="glass" style={{padding:"40px"}}
              initial={{opacity:0, scale:0.9, rotateY:90}} 
              whileInView={{opacity:1, scale:1, rotateY:0}} 
              viewport={{once:true}}
              transition={{delay:i*0.15, duration:0.6}}
              whileHover={{y:-10, boxShadow:"0 20px 40px rgba(212,175,55,0.25)"}}>
              <h3 className="gold-text" style={{fontSize:"24px", marginBottom:"15px"}}>{item.title}</h3>
              <p style={{lineHeight:1.8, opacity:0.85}}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Apartments */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.h2 
          className="gold-text" 
          style={{fontSize:"clamp(32px, 5vw, 42px)", textAlign:"center", marginBottom:"50px"}}
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
        >
          Featured Apartments
        </motion.h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"30px"}}>
          {[
            {name:"Skyline Suite", location:"Downtown District", img:"/apt1.png"},
            {name:"Garden Villa", location:"Green Valley", img:"/apt2.png"},
            {name:"Penthouse Elite", location:"City Center", img:"/apt3.png"}
          ].map((apt, i) => (
            <motion.div key={i} className="glass" style={{overflow:"hidden", cursor:"pointer"}}
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.2, duration:0.6}}
              whileHover={{y:-10, boxShadow:"0 20px 40px rgba(212,175,55,0.3)"}}>
              <motion.div 
                style={{height:"250px", background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(21,24,34,0.8))", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
              >
                <img 
                  src={apt.img} 
                  alt={apt.name}
                  style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute"}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <motion.span 
                  style={{fontSize:"48px", display:"none", zIndex:1}}
                  animate={{rotate:[0, 5, -5, 0]}}
                  transition={{duration:2, repeat:Infinity, repeatDelay:3}}
                  className="gold-text"
                >
                  🏢
                </motion.span>
              </motion.div>
              <div style={{padding:"25px"}}>
                <h3 className="gold-text" style={{fontSize:"22px", marginBottom:"8px"}}>{apt.name}</h3>
                <p style={{opacity:0.7, marginBottom:"20px"}}>{apt.location}</p>
                <motion.button 
                  className="gold-btn" 
                  style={{width:"100%"}}
                  whileHover={{scale:1.02}}
                  whileTap={{scale:0.98}}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.h2 
          className="gold-text" 
          style={{fontSize:"clamp(32px, 5vw, 42px)", textAlign:"center", marginBottom:"50px"}}
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
        >
          Exceptional Amenities
        </motion.h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:"25px"}}>
          {[
            {icon: Hospital, name:"Hospital", img:"/hospital.jpg"},
            {icon: ShoppingCart, name:"Mart", img:"/mart.jpg"},
            {icon: Coffee, name:"Cafe", img:"/cafe.jpg"},
            {icon: Dumbbell, name:"Gym", img:"/gm.jpg"},
            {icon: Waves, name:"Infinity Pool", img:"/pool.jpg"}
          ].map((amenity, i) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div key={i} className="glass" style={{overflow:"hidden", cursor:"pointer"}}
                initial={{opacity:0, scale:0}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once:true}}
                transition={{delay:i*0.1, type:"spring", stiffness:200}}
                whileHover={{scale:1.05, boxShadow:"0 10px 25px rgba(212,175,55,0.3)"}}>
                <motion.div 
                  style={{height:"180px", background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(21,24,34,0.8))", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}
                  whileHover={{scale:1.05}}
                  transition={{duration:0.3}}
                >
                  <img 
                    src={amenity.img} 
                    alt={amenity.name}
                    style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute"}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.icon-fallback').style.display = 'flex';
                    }}
                  />
                  <motion.div
                    className="icon-fallback"
                    style={{display:"none", zIndex:1, alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}
                    animate={{y:[0, -10, 0]}}
                    transition={{duration:2, repeat:Infinity, delay:i*0.2}}
                  >
                    <IconComponent 
                      size={64} 
                      strokeWidth={1.5}
                      style={{
                        color:"#d4af37",
                        filter:"drop-shadow(0 0 20px rgba(212,175,55,0.8)) drop-shadow(0 0 40px rgba(212,175,55,0.5))"
                      }}
                    />
                  </motion.div>
                </motion.div>
                <div style={{padding:"20px", textAlign:"center"}}>
                  <p style={{fontSize:"16px", fontWeight:600}}>{amenity.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About Preview */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.div 
          className="glass" 
          style={{padding:"60px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"50px", alignItems:"center"}}
          initial={{opacity:0, scale:0.95}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <motion.div
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.2}}
          >
            <h2 className="gold-text" style={{fontSize:"clamp(28px, 4vw, 38px)", marginBottom:"20px"}}>About New Apartments</h2>
            <p style={{lineHeight:1.8, opacity:0.85, marginBottom:"30px"}}>
              We redefine luxury living with our meticulously crafted apartments that blend elegance, comfort, and modern convenience.
            </p>
            <Link to="/about">
              <motion.button 
                className="gold-btn"
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            style={{height:"300px", background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(21,24,34,0.8))", borderRadius:"20px", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}
            initial={{opacity:0, x:30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.3}}
            whileHover={{scale:1.05}}
          >
            <img 
              src="/about-preview.jpg" 
              alt="Rainbow Apartments"
              style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute"}}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <motion.span 
              style={{fontSize:"80px", display:"none", zIndex:1}}
              animate={{rotate:[0, 10, -10, 0]}}
              transition={{duration:3, repeat:Infinity}}
            >
              🌈
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section style={{padding:"60px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.h2 
          className="gold-text" 
          style={{fontSize:"clamp(32px, 5vw, 42px)", textAlign:"center", marginBottom:"50px"}}
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
        >
          What Residents Say
        </motion.h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"30px"}}>
          {[
            {quote:"Living here has been an absolute dream. The amenities are world-class!", name:"Sarah Johnson"},
            {quote:"The attention to detail and luxury finishes exceeded all my expectations.", name:"Michael Chen"},
            {quote:"Best decision I ever made. The location and security are unmatched.", name:"Emily Rodriguez"}
          ].map((test, i) => (
            <motion.div key={i} className="glass" style={{padding:"35px"}}
              initial={{opacity:0, y:30, rotateX:90}} 
              whileInView={{opacity:1, y:0, rotateX:0}} 
              viewport={{once:true}}
              transition={{delay:i*0.2, duration:0.6}}
              whileHover={{y:-5, boxShadow:"0 15px 30px rgba(212,175,55,0.2)"}}>
              <p style={{fontSize:"16px", lineHeight:1.8, marginBottom:"20px", fontStyle:"italic", opacity:0.9}}>"{test.quote}"</p>
              <p className="gold-text" style={{fontWeight:600}}>— {test.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding:"80px 40px", textAlign:"center"}}>
        <motion.div 
          initial={{opacity:0, scale:0.9}} 
          whileInView={{opacity:1, scale:1}} 
          viewport={{once:true}}
          transition={{duration:0.8}}
        >
          <motion.h2 
            className="gold-text" 
            style={{fontSize:"clamp(32px, 5vw, 48px)", marginBottom:"30px"}}
            animate={{scale:[1, 1.02, 1]}}
            transition={{duration:2, repeat:Infinity}}
          >
            Ready to Experience Luxury?
          </motion.h2>
          <motion.button 
            className="gold-btn" 
            style={{fontSize:"18px", padding:"15px 40px"}}
            whileHover={{scale:1.1, boxShadow:"0 0 40px rgba(212,175,55,0.6)"}}
            whileTap={{scale:0.95}}
            animate={{y:[0, -5, 0]}}
            transition={{duration:2, repeat:Infinity}}
          >
            Call Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
