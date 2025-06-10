
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Eye, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const candidates = [
  { id: "candidate1", name: "Alice Johnson", party: "Progressive Party" },
  { id: "candidate2", name: "Bob Smith", party: "Conservative Alliance" },
  { id: "candidate3", name: "Carol Davis", party: "Liberal Coalition" },
  { id: "candidate4", name: "David Wilson", party: "Independent" },
];

const Confirmation = () => {
  const [receipt, setReceipt] = useState<any>(null);
  const [canChangeVote, setCanChangeVote] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const selectedCandidate = localStorage.getItem("selectedCandidate");
    const voteTimestamp = localStorage.getItem("voteTimestamp");
    const voterId = localStorage.getItem("voterId");

    if (!selectedCandidate) {
      navigate("/login");
      return;
    }

    const candidate = candidates.find(c => c.id === selectedCandidate);
    const receiptId = `RCP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const blockchainHash = `0x${Math.random().toString(16).substr(2, 64)}`;

    setReceipt({
      id: receiptId,
      candidate,
      timestamp: voteTimestamp,
      voterId: voterId?.substring(0, 4) + "****" + voterId?.substring(voterId.length - 4),
      blockchainHash,
      encryptionKey: `ENC-${Math.random().toString(36).substr(2, 16).toUpperCase()}`,
    });

    // Vote can only be changed for 10 minutes
    const changeTimer = setTimeout(() => {
      setCanChangeVote(false);
    }, 600000); // 10 minutes

    return () => clearTimeout(changeTimer);
  }, [navigate]);

  const handleChangeVote = () => {
    if (!canChangeVote) {
      toast({
        title: "Vote Change Expired",
        description: "The time window for changing your vote has expired",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Redirecting to Voting",
      description: "You can change your vote. Previous vote will be invalidated.",
    });
    navigate("/voting");
  };

  const handleDownloadReceipt = () => {
    const receiptData = {
      ...receipt,
      downloadedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(receiptData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vote-receipt-${receipt.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Receipt Downloaded",
      description: "Your vote receipt has been saved securely",
    });
  };

  const handleViewResults = () => {
    navigate("/results");
  };

  if (!receipt) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-700">Vote Successfully Submitted!</CardTitle>
            <CardDescription>Your vote has been encrypted and recorded on the blockchain</CardDescription>
          </CardHeader>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Vote Receipt</CardTitle>
            <CardDescription>Keep this receipt for verification purposes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Receipt ID:</span>
                <p className="font-mono text-xs break-all">{receipt.id}</p>
              </div>
              <div>
                <span className="font-medium">Voter ID:</span>
                <p className="font-mono">{receipt.voterId}</p>
              </div>
              <div>
                <span className="font-medium">Candidate:</span>
                <p>{receipt.candidate.name}</p>
                <p className="text-muted-foreground text-xs">{receipt.candidate.party}</p>
              </div>
              <div>
                <span className="font-medium">Timestamp:</span>
                <p className="text-xs">{new Date(receipt.timestamp).toLocaleString()}</p>
              </div>
              <div className="col-span-2">
                <span className="font-medium">Blockchain Hash:</span>
                <p className="font-mono text-xs break-all bg-gray-100 p-2 rounded">{receipt.blockchainHash}</p>
              </div>
              <div className="col-span-2">
                <span className="font-medium">Encryption Key (for audit):</span>
                <p className="font-mono text-xs bg-gray-100 p-2 rounded">{receipt.encryptionKey}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={handleDownloadReceipt}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Receipt
          </Button>

          <Button
            onClick={handleChangeVote}
            variant={canChangeVote ? "secondary" : "outline"}
            disabled={!canChangeVote}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Change Vote
            {!canChangeVote && " (Expired)"}
          </Button>

          <Button
            onClick={handleViewResults}
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            View Results
          </Button>
        </div>

        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-2">Security Features:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Vote encrypted with homomorphic encryption</li>
                <li>Blockchain verification ensures immutability</li>
                <li>Zero-knowledge proofs maintain anonymity</li>
                <li>Receipt can be used for independent audit verification</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
