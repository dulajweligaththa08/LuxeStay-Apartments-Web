import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav 
      className="glass" 
      style={{position:"fixed", width:"100%", padding:"15px 40px", zIndex:100}}
      initial={{y:-100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.6, ease:"easeOut"}}
    >
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <motion.div 
          className="gold-text" 
          style={{fontWeight:"700", fontSize:"22px", letterSpacing:"0.5px"}}
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
        >
          New Apartment
        </motion.div>

        <div className="desktop-menu">
          {[{to:"/", label:"Home"}, {to:"/about", label:"About"}, {to:"/inquiries", label:"Inquiries"}].map((link, i) => (
            <motion.div key={i} whileHover={{y:-2}} transition={{duration:0.2}}>
              <Link to={link.to}>{link.label}</Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mobile-toggle" 
          onClick={()=>setOpen(!open)}
          whileTap={{scale:0.9}}
        >
          ☰
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{opacity:0, y:-20, height:0}}
            animate={{opacity:1, y:0, height:"auto"}}
            exit={{opacity:0, y:-20, height:0}}
            transition={{duration:0.3}}
            className="glass"
            style={{marginTop:"10px", padding:"20px", display:"flex", flexDirection:"column", gap:"15px", overflow:"hidden"}}
          >
            {[{to:"/", label:"Home"}, {to:"/about", label:"About"}, {to:"/inquiries", label:"Inquiries"}].map((link, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, x:-20}}
                animate={{opacity:1, x:0}}
                transition={{delay:i*0.1}}
              >
                <Link to={link.to} onClick={()=>setOpen(false)}>{link.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
