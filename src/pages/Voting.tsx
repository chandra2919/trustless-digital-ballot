
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Shield, Clock, Lock, Vote, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const candidates = [
  { id: "candidate1", name: "Alice Johnson", party: "Progressive Party", image: "🧑‍💼", color: "from-blue-500 to-blue-600" },
  { id: "candidate2", name: "Bob Smith", party: "Conservative Alliance", image: "👨‍💼", color: "from-red-500 to-red-600" },
  { id: "candidate3", name: "Carol Davis", party: "Liberal Coalition", image: "👩‍💼", color: "from-green-500 to-green-600" },
  { id: "candidate4", name: "David Wilson", party: "Independent", image: "🧑‍🎓", color: "from-purple-500 to-purple-600" },
];

const Voting = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const [tokenExpiry, setTokenExpiry] = useState(15); // 15 minutes
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          navigate("/login");
          return 0;
        }
        return prev - 1;
      });
      setTokenExpiry((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVoteSubmit = () => {
    if (!selectedCandidate) {
      toast({
        title: "No Selection",
        description: "Please select a candidate before submitting your vote",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("selectedCandidate", selectedCandidate);
    localStorage.setItem("voteTimestamp", new Date().toISOString());
    
    navigate("/confirmation");
  };

  const progress = ((300 - timeRemaining) / 300) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="mb-6 backdrop-blur-sm bg-white/90 shadow-xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                      <Vote className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Presidential Election 2024
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">Select your preferred candidate</CardDescription>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-right"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    <span className={timeRemaining < 60 ? "text-red-600 font-bold" : ""}>
                      Session: {formatTime(timeRemaining)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Token expires: {formatTime(tokenExpiry)}</span>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <Progress value={progress} className="mt-4 h-2" />
              </motion.div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="mb-6 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="p-2 bg-blue-100 rounded-full"
                >
                  <Lock className="h-6 w-6 text-blue-600" />
                </motion.div>
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 text-lg">Your vote is secure and encrypted</p>
                  <p className="text-blue-700 mt-1">
                    Vote encryption happens locally. Blockchain verification ensures tamper-proof recording.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ballot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Official Ballot - Presidential Election</CardTitle>
              <CardDescription className="text-lg">
                Choose one candidate. Your selection will be encrypted before submission.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate}>
                <div className="space-y-4">
                  {candidates.map((candidate, index) => (
                    <motion.div
                      key={candidate.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                        selectedCandidate === candidate.id 
                          ? `bg-gradient-to-r ${candidate.color} text-white shadow-lg` 
                          : "bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center space-x-4 p-6">
                        <div className="relative">
                          <RadioGroupItem 
                            value={candidate.id} 
                            id={candidate.id}
                            className={selectedCandidate === candidate.id ? "border-white text-white" : ""}
                          />
                          {selectedCandidate === candidate.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1"
                            >
                              <CheckCircle className="h-4 w-4 text-white" />
                            </motion.div>
                          )}
                        </div>
                        
                        <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-6">
                            <motion.div 
                              className="text-5xl"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {candidate.image}
                            </motion.div>
                            <div>
                              <div className={`font-bold text-xl ${
                                selectedCandidate === candidate.id ? "text-white" : "text-gray-900"
                              }`}>
                                {candidate.name}
                              </div>
                              <div className={`text-lg ${
                                selectedCandidate === candidate.id ? "text-white/90" : "text-gray-600"
                              }`}>
                                {candidate.party}
                              </div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      {/* Selection indicator */}
                      <AnimatePresence>
                        {selectedCandidate === candidate.id && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            exit={{ width: 0 }}
                            className="absolute bottom-0 left-0 h-1 bg-white/30"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => navigate("/login")}
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-gray-400 text-gray-700"
                    >
                      Cancel Voting
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleVoteSubmit}
                      size="lg"
                      className={`w-full h-14 font-semibold text-lg transition-all duration-300 ${
                        selectedCandidate 
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg" 
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!selectedCandidate}
                    >
                      <Lock className="mr-3 h-5 w-5" />
                      Submit Encrypted Vote
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Time warning */}
        <AnimatePresence>
          {timeRemaining < 60 && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="fixed bottom-4 right-4 z-50"
            >
              <Card className="border-red-200 bg-red-50 shadow-lg">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">Time Running Out!</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Session expires in {formatTime(timeRemaining)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Voting;
