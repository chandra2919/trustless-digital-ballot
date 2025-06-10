
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Vote, BarChart, Shield, Eye } from "lucide-react";

const QuickAccessSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const quickAccessItems = [
    { icon: Vote, label: "Cast Your Vote", path: "/login", color: "from-blue-500 to-blue-600" },
    { icon: BarChart, label: "Live Results", path: "/results", color: "from-green-500 to-green-600" },
    { icon: Shield, label: "Admin Dashboard", path: "/admin", color: "from-purple-500 to-purple-600" },
    { icon: Eye, label: "Audit Trail", path: "/audit", color: "from-red-500 to-red-600" }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Quick Access
            </span>
          </h2>
          <p className="text-xl text-gray-600">Access different parts of the voting system</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickAccessItems.map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigate(item.path)}
                variant="outline"
                className={`h-28 flex-col gap-3 w-full border-0 bg-gradient-to-r ${item.color} text-white hover:opacity-90 shadow-lg`}
              >
                <item.icon className="h-8 w-8" />
                <span className="font-semibold">{item.label}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QuickAccessSection;
