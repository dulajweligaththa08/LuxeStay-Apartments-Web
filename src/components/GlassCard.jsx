import { motion } from "framer-motion";

export default function GlassCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(212,175,55,0.2)" }}
      className="glass"
      style={{ padding: "30px", margin: "20px 0" }}
    >
      {children}
    </motion.div>
  );
}
