
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Vote, Shield, Users, BarChart, Lock, Eye } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="mx-auto mb-8 h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center">
              <Vote className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Secure Digital Voting System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the future of democratic participation with blockchain-secured, 
              cryptographically-protected voting that ensures privacy, verifiability, and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/login")}
                size="lg"
                className="px-8 py-4 text-lg"
              >
                <Vote className="mr-2 h-5 w-5" />
                Start Voting
              </Button>
              <Button 
                onClick={() => navigate("/results")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                <BarChart className="mr-2 h-5 w-5" />
                View Results
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Security Features
          </h2>
          <p className="text-xl text-gray-600">
            Built with cutting-edge cryptographic technology for maximum security and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Biometric Authentication</CardTitle>
              <CardDescription>
                Multi-factor authentication with fingerprint and facial recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Government-grade biometric verification ensures only authorized voters can participate
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Homomorphic Encryption</CardTitle>
              <CardDescription>
                Client-side encryption with privacy-preserving computation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Votes are encrypted before transmission and remain encrypted during tallying
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Blockchain Verification</CardTitle>
              <CardDescription>
                Immutable ledger with zero-knowledge proofs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Every vote is recorded on blockchain with cryptographic proof of integrity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Anti-Coercion Tokens</CardTitle>
              <CardDescription>
                Time-limited tokens prevent vote buying and coercion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Dynamic tokens with expiration ensure votes cannot be influenced or purchased
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BarChart className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Verifiable Mixnets</CardTitle>
              <CardDescription>
                Independent audit through cryptographic mixing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Third-party verification through mixnet protocols ensures election integrity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Vote className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle>Vote Change Window</CardTitle>
              <CardDescription>
                Secure vote modification within time limits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Voters can change their vote within a secure time window to prevent coercion
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Access different parts of the voting system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button 
              onClick={() => navigate("/login")}
              variant="outline"
              className="h-24 flex-col gap-2"
            >
              <Vote className="h-8 w-8" />
              <span>Cast Your Vote</span>
            </Button>

            <Button 
              onClick={() => navigate("/results")}
              variant="outline"
              className="h-24 flex-col gap-2"
            >
              <BarChart className="h-8 w-8" />
              <span>Live Results</span>
            </Button>

            <Button 
              onClick={() => navigate("/admin")}
              variant="outline"
              className="h-24 flex-col gap-2"
            >
              <Shield className="h-8 w-8" />
              <span>Admin Dashboard</span>
            </Button>

            <Button 
              onClick={() => navigate("/audit")}
              variant="outline"
              className="h-24 flex-col gap-2"
            >
              <Eye className="h-8 w-8" />
              <span>Audit Trail</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              Secure Digital Voting System - Powered by Advanced Cryptography & Blockchain Technology
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Ensuring democratic integrity through technological innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
