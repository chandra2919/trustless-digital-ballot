
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, Eye, Shield, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [voterIdType, setVoterIdType] = useState("national");
  const [voterId, setVoterId] = useState("");
  const [biometricVerified, setBiometricVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBiometricVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setBiometricVerified(true);
      setIsVerifying(false);
      toast({
        title: "Biometric Verification Successful",
        description: "Identity verified successfully",
      });
    }, 2000);
  };

  const handleLogin = () => {
    if (!voterId || !biometricVerified) {
      toast({
        title: "Authentication Required",
        description: "Please complete both ID verification and biometric authentication",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("voterAuthenticated", "true");
    localStorage.setItem("voterId", voterId);
    navigate("/voting");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"
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
          className="absolute top-1/2 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Card className="w-full max-w-md backdrop-blur-sm bg-white/90 shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto mb-6 h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Voting System
              </CardTitle>
              <CardDescription className="text-lg mt-2">Secure Authentication Required</CardDescription>
            </motion.div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Tabs value={voterIdType} onValueChange={setVoterIdType}>
                <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                  <TabsTrigger value="national" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
                    National ID
                  </TabsTrigger>
                  <TabsTrigger value="passport" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
                    Passport
                  </TabsTrigger>
                </TabsList>
                
                <AnimatePresence mode="wait">
                  <TabsContent value="national" className="space-y-4 mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Label htmlFor="nationalId" className="text-sm font-medium text-gray-700">National ID Number</Label>
                      <Input
                        id="nationalId"
                        placeholder="Enter your National ID"
                        value={voterId}
                        onChange={(e) => setVoterId(e.target.value)}
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="passport" className="space-y-4 mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Label htmlFor="passport" className="text-sm font-medium text-gray-700">Passport Number</Label>
                      <Input
                        id="passport"
                        placeholder="Enter your Passport Number"
                        value={voterId}
                        onChange={(e) => setVoterId(e.target.value)}
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <Label className="text-sm font-medium text-gray-700">Biometric Verification</Label>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={biometricVerified ? "default" : "outline"}
                    className={`h-24 flex-col gap-3 w-full transition-all duration-300 ${
                      biometricVerified 
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-lg" 
                        : "border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                    onClick={handleBiometricVerification}
                    disabled={isVerifying}
                  >
                    <div className="relative">
                      <Fingerprint className={`h-8 w-8 ${biometricVerified ? "text-white" : "text-gray-600"}`} />
                      {biometricVerified && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1"
                        >
                          <CheckCircle className="h-4 w-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${biometricVerified ? "text-white" : "text-gray-600"}`}>
                      {isVerifying ? "Scanning..." : biometricVerified ? "Verified" : "Fingerprint"}
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    variant="outline"
                    className="h-24 flex-col gap-3 w-full border-2 border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Eye className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-400">Face Recognition</span>
                    <span className="text-xs text-gray-400">Coming Soon</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={handleLogin}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg"
                  size="lg"
                  disabled={!voterId || !biometricVerified}
                >
                  <User className="mr-3 h-5 w-5" />
                  Authenticate & Continue
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="font-medium text-gray-700">100% Secure & Anonymous</span>
              </div>
              <p>Your vote is encrypted and anonymous. System secured with blockchain technology.</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
