
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, BarChart, Vote } from "lucide-react";

const FeaturesSection = () => {
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

  const features = [
    {
      icon: Shield,
      title: "Biometric Authentication",
      description: "Multi-factor authentication with fingerprint and facial recognition",
      detail: "Government-grade biometric verification ensures only authorized voters can participate",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "Homomorphic Encryption",
      description: "Client-side encryption with privacy-preserving computation",
      detail: "Votes are encrypted before transmission and remain encrypted during tallying",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Eye,
      title: "Blockchain Verification",
      description: "Immutable ledger with zero-knowledge proofs",
      detail: "Every vote is recorded on blockchain with cryptographic proof of integrity",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Anti-Coercion Tokens",
      description: "Time-limited tokens prevent vote buying and coercion",
      detail: "Dynamic tokens with expiration ensure votes cannot be influenced or purchased",
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart,
      title: "Verifiable Mixnets",
      description: "Independent audit through cryptographic mixing",
      detail: "Third-party verification through mixnet protocols ensures election integrity",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Vote,
      title: "Vote Change Window",
      description: "Secure vote modification within time limits",
      detail: "Voters can change their vote within a secure time window to prevent coercion",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Advanced Security Features
          </span>
        </h2>
        <p className="text-xl text-gray-600">
          Built with cutting-edge cryptographic technology for maximum security and transparency
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Card className="text-center h-full backdrop-blur-sm bg-white/80 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`h-16 w-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{feature.detail}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
