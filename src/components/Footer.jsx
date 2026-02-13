import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="glass" 
      style={{padding:"50px 40px", marginTop:"80px", borderTop:"1px solid rgba(212,175,55,0.3)"}}
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.6}}
    >
      <div style={{maxWidth:"1400px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"40px"}}>
        {/* Brand Info */}
        <motion.div
          initial={{opacity:0, x:-30}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{delay:0.2}}
        >
          <h3 className="gold-text" style={{fontSize:"26px", fontWeight:"700", marginBottom:"15px", letterSpacing:"0.5px"}}>
           New Apartments
          </h3>
          <p style={{lineHeight:1.8, opacity:0.8, fontSize:"14px"}}>
            Experience luxury living at its finest. Premium apartments with world-class amenities in prime locations.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.3}}
        >
          <h4 className="gold-text" style={{fontSize:"18px", marginBottom:"15px"}}>Quick Links</h4>
          <ul style={{listStyle:"none", lineHeight:2, opacity:0.8, fontSize:"14px"}}>
            {["Home", "About Us", "Apartments", "Contact"].map((item, i) => (
              <motion.li 
                key={i}
                style={{cursor:"pointer", transition:"0.3s"}} 
                whileHover={{x:5, color:"#d4af37"}}
                onMouseEnter={e=>e.target.style.color="#d4af37"} 
                onMouseLeave={e=>e.target.style.color="white"}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{opacity:0, x:30}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{delay:0.4}}
        >
          <h4 className="gold-text" style={{fontSize:"18px", marginBottom:"15px"}}>Contact</h4>
          <ul style={{listStyle:"none", lineHeight:2, opacity:0.8, fontSize:"14px"}}>
            <motion.li whileHover={{x:5}}> +1 (555) 123-4567</motion.li>
            <motion.li whileHover={{x:5}}> info@newapt.com</motion.li>
            <motion.li whileHover={{x:5}}> 123 Luxury Ave, City Center</motion.li>
            <motion.li whileHover={{x:5}}> Mon-Sat: 9AM - 6PM</motion.li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        style={{borderTop:"1px solid rgba(255,255,255,0.1)", marginTop:"40px", paddingTop:"30px", textAlign:"center"}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{delay:0.6}}
      >
        <p style={{opacity:0.6, fontSize:"14px"}}>
          © 2026 New Apartments. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}
