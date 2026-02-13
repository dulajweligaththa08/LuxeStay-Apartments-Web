import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{padding:"140px 40px 80px", maxWidth:"1400px", margin:"0 auto", position:"relative"}}>
        {/* Background Video */}
        <div style={{
          position:"absolute",
          top:0,
          left:"-40px",
          right:"-40px",
          bottom:0,
          zIndex:0,
          overflow:"hidden",
          borderRadius:"20px",
          pointerEvents:"none"
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            style={{width:"100%", height:"100%", objectFit:"cover", opacity:0.6, pointerEvents:"none"}}
          >
            <source src="/about-hero.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Overlay */}
        <div style={{
          position:"absolute",
          top:0,
          left:"-40px",
          right:"-40px",
          bottom:0,
          background:"rgba(13, 15, 20, 0.4)",
          zIndex:1
        }} />
        
        <motion.div
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8}}
          style={{position:"relative", zIndex:2}}
        >
          <h1 className="gold-text" style={{fontSize:"clamp(42px, 6vw, 64px)", marginBottom:"24px", fontWeight:700, letterSpacing:"0.5px"}}>
            About Us
          </h1>
          <p style={{fontSize:"clamp(16px, 2vw, 20px)", lineHeight:1.8, opacity:0.85, maxWidth:"800px", marginBottom:"16px"}}>
            Redefining luxury living with world-class apartments and unparalleled service that exceeds expectations.
          </p>
          <p style={{fontSize:"14px", opacity:0.5, letterSpacing:"1px"}}>
            Rainbow Apartment • Luxury Living
          </p>
        </motion.div>
      </section>

      {/* Why Choose Rainbow */}
      <section style={{padding:"80px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          style={{textAlign:"center", marginBottom:"60px"}}
        >
          <h2 className="gold-text" style={{fontSize:"clamp(32px, 5vw, 48px)", marginBottom:"20px", fontWeight:700}}>
            Why Choose Rainbow?
          </h2>
          <p style={{fontSize:"16px", opacity:0.7, maxWidth:"700px", margin:"0 auto", lineHeight:1.8}}>
            Experience the perfect blend of luxury, security, and convenience in every aspect of your living space.
          </p>
        </motion.div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"30px"}}>
          {[
            {
              title:"Luxury Finishes",
              desc:"Every detail is crafted with premium materials and sophisticated design to create an atmosphere of elegance and comfort."
            },
            {
              title:"24/7 Security",
              desc:"Advanced surveillance systems, trained security personnel, and controlled access ensure your safety and peace of mind."
            },
            {
              title:"Prime Location",
              desc:"Strategically positioned in the heart of the city with easy access to business districts, shopping, and entertainment."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{padding:"40px"}}
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.15, duration:0.6}}
              whileHover={{y:-8, boxShadow:"0 20px 40px rgba(212,175,55,0.2)"}}
            >
              <h3 className="gold-text" style={{fontSize:"24px", marginBottom:"16px", fontWeight:600}}>
                {item.title}
              </h3>
              <p style={{lineHeight:1.8, opacity:0.8, fontSize:"15px"}}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{padding:"80px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(450px, 1fr))", gap:"40px"}}>
          <motion.div
            className="glass"
            style={{padding:"50px"}}
            initial={{opacity:0, x:-40}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            whileHover={{boxShadow:"0 20px 40px rgba(212,175,55,0.15)"}}
          >
            <h2 className="gold-text" style={{fontSize:"32px", marginBottom:"24px", fontWeight:700}}>
              Our Mission
            </h2>
            <p style={{lineHeight:1.8, opacity:0.85, fontSize:"15px"}}>
              To provide exceptional living experiences through meticulously designed spaces, premium amenities, 
              and unparalleled service that exceeds the expectations of our discerning residents.
            </p>
          </motion.div>

          <motion.div
            className="glass"
            style={{padding:"50px"}}
            initial={{opacity:0, x:40}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            whileHover={{boxShadow:"0 20px 40px rgba(212,175,55,0.15)"}}
          >
            <h2 className="gold-text" style={{fontSize:"32px", marginBottom:"24px", fontWeight:700}}>
              Our Vision
            </h2>
            <p style={{lineHeight:1.8, opacity:0.85, fontSize:"15px"}}>
              To be the most sought-after luxury residential brand, setting new standards in quality, 
              innovation, and lifestyle excellence while creating communities where residents truly feel at home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities & Services */}
      <section style={{padding:"80px 40px", maxWidth:"1400px", margin:"0 auto"}}>
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          style={{textAlign:"center", marginBottom:"60px"}}
        >
          <h2 className="gold-text" style={{fontSize:"clamp(32px, 5vw, 48px)", marginBottom:"20px", fontWeight:700}}>
            Amenities & Services
          </h2>
          <p style={{fontSize:"16px", opacity:0.7, maxWidth:"700px", margin:"0 auto", lineHeight:1.8}}>
            World-class facilities designed to enhance your lifestyle and provide ultimate convenience.
          </p>
        </motion.div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"30px"}}>
          {[
            {video:"/hospital.mp4", img:"/hospital.jpg", icon:"", title:"On-site Hospital", desc:"24-hour medical facility"},
            {video:"/mart.mp4", img:"/mart.jpg", icon:"", title:"Mart & Essentials", desc:"Premium grocery store"},
            {video:"/cafe.mp4", img:"/cafe.jpg", icon:"", title:"Cafe & Lounge", desc:"Artisan coffee lounge"},
            {video:"/gym.mp4", img:"/gym.jpg", icon:"", title:"Modern Gym", desc:"State-of-the-art fitness center"}
          ].map((amenity, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{overflow:"hidden", cursor:"pointer"}}
              initial={{opacity:0, scale:0.9}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{delay:i*0.1, duration:0.5}}
              whileHover={{y:-8, boxShadow:"0 20px 40px rgba(212,175,55,0.2)"}}
            >
              <motion.div
                style={{height:"220px", background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(21,24,34,0.8))", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute", pointerEvents:"none"}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                >
                  <source src={amenity.video} type="video/mp4" />
                </video>
                <img
                  src={amenity.img}
                  alt={amenity.title}
                  style={{width:"100%", height:"100%", objectFit:"cover", position:"absolute", display:"none"}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span style={{fontSize:"56px", display:"none", zIndex:1}}>
                  {amenity.icon}
                </span>
              </motion.div>
              <div style={{padding:"24px", textAlign:"center"}}>
                <h3 className="gold-text" style={{fontSize:"20px", marginBottom:"8px", fontWeight:600}}>
                  {amenity.title}
                </h3>
                <p style={{fontSize:"14px", opacity:0.7}}>
                  {amenity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding:"100px 40px", background:"rgba(0,0,0,0.3)", position:"relative"}}>
        <div style={{position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:"80%", height:"1px", background:"linear-gradient(90deg, transparent, #d4af37, transparent)", opacity:0.5}}></div>
        
        <motion.div
          style={{maxWidth:"900px", margin:"0 auto", textAlign:"center"}}
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
        >
          <h2 className="gold-text" style={{fontSize:"clamp(32px, 5vw, 48px)", marginBottom:"20px", fontWeight:700}}>
            Ready to Experience Luxury Living?
          </h2>
          <p style={{fontSize:"16px", opacity:0.7, marginBottom:"40px", lineHeight:1.8, maxWidth:"600px", margin:"0 auto 40px"}}>
            Contact us today to schedule a private tour and discover your perfect home.
          </p>
          
          <div style={{display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap"}}>
            <Link to="/inquiries">
              <motion.button
                className="gold-btn"
                style={{fontSize:"15px", padding:"14px 36px", textTransform:"uppercase", letterSpacing:"1px"}}
                whileHover={{scale:1.05, boxShadow:"0 0 35px rgba(212,175,55,0.6)"}}
                whileTap={{scale:0.98}}
              >
                Send Inquiry
              </motion.button>
            </Link>
            <motion.button
              className="glass"
              style={{padding:"14px 36px", borderRadius:"999px", fontWeight:600, cursor:"pointer", fontSize:"15px", textTransform:"uppercase", letterSpacing:"1px"}}
              whileHover={{scale:1.05, backgroundColor:"rgba(255,255,255,0.1)"}}
              whileTap={{scale:0.98}}
            >
              WhatsApp Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
