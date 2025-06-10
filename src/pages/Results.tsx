
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart, Users, TrendingUp, Shield, Home } from "lucide-react";

const results = [
  { name: "Alice Johnson", party: "Progressive Party", votes: 45234, percentage: 42.3, color: "bg-blue-500" },
  { name: "Bob Smith", party: "Conservative Alliance", votes: 38901, percentage: 36.4, color: "bg-red-500" },
  { name: "Carol Davis", party: "Liberal Coalition", votes: 15432, percentage: 14.4, color: "bg-green-500" },
  { name: "David Wilson", party: "Independent", votes: 7345, percentage: 6.9, color: "bg-purple-500" },
];

const totalVotes = results.reduce((sum, candidate) => sum + candidate.votes, 0);

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart className="h-6 w-6 text-purple-600" />
                  Election Results - Live Count
                </CardTitle>
                <CardDescription>Presidential Election 2024 - Real-time verified results</CardDescription>
              </div>
              <Button onClick={() => navigate("/")} variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Votes</p>
                  <p className="text-2xl font-bold">{totalVotes.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Turnout</p>
                  <p className="text-2xl font-bold">73.4%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verified Votes</p>
                  <p className="text-2xl font-bold">100%</p>
                </div>
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Precincts</p>
                  <p className="text-2xl font-bold">892/892</p>
                </div>
                <BarChart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Presidential Candidates</CardTitle>
            <CardDescription>Live results updated every 30 seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.map((candidate, index) => (
                <div key={candidate.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${candidate.color}`}></div>
                      <div>
                        <p className="font-semibold">{candidate.name}</p>
                        <p className="text-sm text-muted-foreground">{candidate.party}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{candidate.percentage}%</p>
                      <p className="text-sm text-muted-foreground">{candidate.votes.toLocaleString()} votes</p>
                    </div>
                  </div>
                  <Progress value={candidate.percentage} className="h-3" />
                  {index === 0 && (
                    <p className="text-xs text-green-600 font-medium">Leading</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain Verification */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Shield className="h-5 w-5" />
              Blockchain Verification Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-green-800">Last Block Hash:</p>
                <p className="font-mono text-xs break-all text-green-700">
                  0xf4d2a...8bc9e
                </p>
              </div>
              <div>
                <p className="font-medium text-green-800">Block Height:</p>
                <p className="text-green-700">15,847,392</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Verification Status:</p>
                <p className="text-green-700">✓ All votes verified</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
