import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Inquiries() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await axios.post("http://localhost:5000/send", form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div style={{minHeight:"100vh", padding:"120px 40px 60px", maxWidth:"1400px", margin:"0 auto"}}>
      <motion.h1 
        className="gold-text" 
        style={{fontSize:"clamp(36px, 6vw, 48px)", textAlign:"center", marginBottom:"60px"}}
        initial={{opacity:0, y:30, scale:0.9}}
        animate={{opacity:1, y:0, scale:1}}
        transition={{duration:0.6}}
      >
        Get In Touch
      </motion.h1>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))", gap:"40px"}}>
        {/* Left - Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="glass" 
          style={{padding:"50px"}}
          initial={{opacity:0, x:-50, rotateY:90}}
          animate={{opacity:1, x:0, rotateY:0}}
          transition={{duration:0.8}}
        >
          <motion.h2 
            className="gold-text" 
            style={{fontSize:"28px", marginBottom:"30px"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
          >
            Send Inquiry
          </motion.h2>

          {["name", "email", "phone"].map((field, i) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              placeholder={field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Phone Number"}
              value={form[field]}
              onChange={e => setForm({...form, [field]: e.target.value})}
              required
              initial={{opacity:0, x:-20}}
              animate={{opacity:1, x:0}}
              transition={{delay:0.4 + i*0.1}}
              whileFocus={{scale:1.02, borderColor:"#d4af37"}}
            />
          ))}
          
          <motion.textarea 
            placeholder="Your Message" 
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
            required
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.7}}
            whileFocus={{scale:1.02, borderColor:"#d4af37"}}
          />

          <motion.button 
            type="submit" 
            className="gold-btn" 
            style={{width:"100%", marginTop:"10px", fontSize:"16px"}}
            disabled={status === "sending"}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.8}}
            whileHover={{scale:1.02, boxShadow:"0 0 30px rgba(212,175,55,0.6)"}}
            whileTap={{scale:0.98}}
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p 
                initial={{opacity:0, y:-10}} 
                animate={{opacity:1, y:0}} 
                exit={{opacity:0}}
                style={{marginTop:"15px", color:"#4ade80", textAlign:"center", fontWeight:600}}
              >
                ✓ Inquiry sent successfully!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p 
                initial={{opacity:0, y:-10}} 
                animate={{opacity:1, y:0}} 
                exit={{opacity:0}}
                style={{marginTop:"15px", color:"#f87171", textAlign:"center", fontWeight:600}}
              >
                ✗ Failed to send. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Right - Contact Cards */}
        <div style={{display:"flex", flexDirection:"column", gap:"25px"}}>
          {[
            {icon: MessageCircle, title:"WhatsApp", info:"+1 (555) 123-4567", color:"#25D366"},
            {icon: Phone, title:"Call Us", info:"+1 (555) 987-6543", color:"#d4af37"},
            {icon: Mail, title:"Email", info:"info@newapt.com", color:"#f5d77b"},
            {icon: MapPin, title:"Location", info:"123 Luxury Ave, City Center", color:"#d4af37"}
          ].map((contact, i) => {
            const IconComponent = contact.icon;
            return (
              <motion.div key={i} className="glass" style={{padding:"30px", display:"flex", alignItems:"center", gap:"20px", cursor:"pointer"}}
                initial={{opacity:0, x:50, rotateY:-90}} 
                animate={{opacity:1, x:0, rotateY:0}} 
                transition={{delay:i*0.15 + 0.3, duration:0.6}}
                whileHover={{scale:1.05, x:10, boxShadow:`0 10px 30px ${contact.color}33`}}>
                <motion.div 
                  style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                  animate={{rotate:[0, 10, -10, 0]}}
                  transition={{duration:2, repeat:Infinity, delay:i*0.5}}
                >
                  <IconComponent 
                    size={40} 
                    strokeWidth={1.5}
                    style={{
                      color:"#d4af37",
                      filter:"drop-shadow(0 0 15px rgba(212,175,55,0.8)) drop-shadow(0 0 30px rgba(212,175,55,0.4))"
                    }}
                  />
                </motion.div>
                <div>
                  <h3 className="gold-text" style={{fontSize:"20px", marginBottom:"5px"}}>{contact.title}</h3>
                  <p style={{opacity:0.8}}>{contact.info}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gold Divider */}
      <motion.div 
        style={{height:"2px", background:"linear-gradient(90deg, transparent, #d4af37, #f5d77b, transparent)", margin:"80px 0 40px", opacity:0.5}}
        initial={{scaleX:0}}
        whileInView={{scaleX:1}}
        viewport={{once:true}}
        transition={{duration:1}}
      />
    </div>
  );
}
