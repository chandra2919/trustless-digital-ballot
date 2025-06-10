
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Vote, Shield, Users, BarChart, Lock, Eye } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto mb-8 h-24 w-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <Vote className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Secure Digital Voting System
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Experience the future of democratic participation with blockchain-secured, 
              cryptographically-protected voting that ensures privacy, verifiability, and transparency.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => navigate("/login")}
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  <Vote className="mr-2 h-5 w-5" />
                  Start Voting
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => navigate("/results")}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                >
                  <BarChart className="mr-2 h-5 w-5" />
                  View Results
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
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
          {[
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
          ].map((feature, index) => (
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

      {/* Quick Access Section */}
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
            {[
              { icon: Vote, label: "Cast Your Vote", path: "/login", color: "from-blue-500 to-blue-600" },
              { icon: BarChart, label: "Live Results", path: "/results", color: "from-green-500 to-green-600" },
              { icon: Shield, label: "Admin Dashboard", path: "/admin", color: "from-purple-500 to-purple-600" },
              { icon: Eye, label: "Audit Trail", path: "/audit", color: "from-red-500 to-red-600" }
            ].map((item, index) => (
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
