
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, Eye, Shield, User } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Digital Voting System</CardTitle>
          <CardDescription>Secure Authentication Required</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={voterIdType} onValueChange={setVoterIdType}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="national">National ID</TabsTrigger>
              <TabsTrigger value="passport">Passport</TabsTrigger>
            </TabsList>
            
            <TabsContent value="national" className="space-y-4">
              <div>
                <Label htmlFor="nationalId">National ID Number</Label>
                <Input
                  id="nationalId"
                  placeholder="Enter your National ID"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="passport" className="space-y-4">
              <div>
                <Label htmlFor="passport">Passport Number</Label>
                <Input
                  id="passport"
                  placeholder="Enter your Passport Number"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <Label className="text-sm font-medium">Biometric Verification</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={biometricVerified ? "default" : "outline"}
                className="h-20 flex-col gap-2"
                onClick={handleBiometricVerification}
                disabled={isVerifying}
              >
                <Fingerprint className="h-6 w-6" />
                <span className="text-xs">
                  {isVerifying ? "Scanning..." : biometricVerified ? "Verified" : "Fingerprint"}
                </span>
              </Button>
              
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
                disabled
              >
                <Eye className="h-6 w-6" />
                <span className="text-xs">Face Recognition</span>
              </Button>
            </div>
          </div>

          <Button 
            onClick={handleLogin}
            className="w-full"
            size="lg"
            disabled={!voterId || !biometricVerified}
          >
            <User className="mr-2 h-4 w-4" />
            Authenticate & Continue
          </Button>

          <div className="text-center text-xs text-muted-foreground">
            Your vote is encrypted and anonymous. System secured with blockchain technology.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
