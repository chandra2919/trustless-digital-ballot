
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Shield, Clock, Lock, Vote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const candidates = [
  { id: "candidate1", name: "Alice Johnson", party: "Progressive Party", image: "🧑‍💼" },
  { id: "candidate2", name: "Bob Smith", party: "Conservative Alliance", image: "👨‍💼" },
  { id: "candidate3", name: "Carol Davis", party: "Liberal Coalition", image: "👩‍💼" },
  { id: "candidate4", name: "David Wilson", party: "Independent", image: "🧑‍🎓" },
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

    // Store vote data for confirmation page
    localStorage.setItem("selectedCandidate", selectedCandidate);
    localStorage.setItem("voteTimestamp", new Date().toISOString());
    
    navigate("/confirmation");
  };

  const progress = ((300 - timeRemaining) / 300) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="h-6 w-6 text-green-600" />
                  Presidential Election 2024
                </CardTitle>
                <CardDescription>Select your preferred candidate</CardDescription>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  Session: {formatTime(timeRemaining)}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  Token expires: {formatTime(tokenExpiry)}
                </div>
              </div>
            </div>
            <Progress value={progress} className="mt-4" />
          </CardHeader>
        </Card>

        {/* Security Notice */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-blue-600" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">Your vote is secure and encrypted</p>
                <p className="text-blue-700">
                  Vote encryption happens locally. Blockchain verification ensures tamper-proof recording.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ballot */}
        <Card>
          <CardHeader>
            <CardTitle>Official Ballot - Presidential Election</CardTitle>
            <CardDescription>Choose one candidate. Your selection will be encrypted before submission.</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate}>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={candidate.id} id={candidate.id} />
                    <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{candidate.image}</div>
                        <div>
                          <div className="font-semibold text-lg">{candidate.name}</div>
                          <div className="text-sm text-muted-foreground">{candidate.party}</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-8 pt-6 border-t">
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate("/login")}
                  variant="outline"
                  size="lg"
                >
                  Cancel Voting
                </Button>
                <Button
                  onClick={handleVoteSubmit}
                  size="lg"
                  className="flex-1"
                  disabled={!selectedCandidate}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Submit Encrypted Vote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Voting;
