import { motion as _motion } from "framer-motion";
import { Schools } from "../../assets/images";

function CustomerHome() {
  return (
    <div className="container mt-28">
      {/* Animated heading */}
      <_motion.p
        className="text-5xl font-medium text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-purple-dark">Khách hàng</span> của chúng tôi
      </_motion.p>

      {/* Animated image */}
      <_motion.img
        src={Schools}
        alt="Schools"
        className="mt-14"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export default CustomerHome;
