
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-300 text-lg">
            Secure Digital Voting System - Powered by Advanced Cryptography & Blockchain Technology
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Ensuring democratic integrity through technological innovation
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
