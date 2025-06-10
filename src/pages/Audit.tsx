
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Shield, CheckCircle, AlertCircle, Home, Download } from "lucide-react";

const Audit = () => {
  const [receiptId, setReceiptId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const navigate = useNavigate();

  const handleVerifyReceipt = () => {
    // Simulate verification process
    if (receiptId.includes("RCP-")) {
      setVerificationResult({
        status: "verified",
        voteHash: "0xf4d2a7b8c9e1f3a5d6b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0",
        blockNumber: 15847392,
        timestamp: "2024-01-15 14:30:22",
        candidateVerified: true,
        encryptionValid: true,
        blockchainConfirmed: true
      });
    } else {
      setVerificationResult({
        status: "invalid",
        error: "Receipt ID not found in blockchain records"
      });
    }
  };

  const auditReports = [
    {
      id: "AUDIT-001",
      title: "Daily Encryption Verification",
      date: "2024-01-15",
      status: "Completed",
      type: "Automated"
    },
    {
      id: "AUDIT-002", 
      title: "Blockchain Integrity Check",
      date: "2024-01-15",
      status: "Completed",
      type: "Automated"
    },
    {
      id: "AUDIT-003",
      title: "Third-party Security Audit",
      date: "2024-01-14", 
      status: "In Progress",
      type: "Manual"
    },
    {
      id: "AUDIT-004",
      title: "Voter Authentication Analysis",
      date: "2024-01-14",
      status: "Completed", 
      type: "Automated"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="h-6 w-6 text-green-600" />
                  Independent Audit System
                </CardTitle>
                <CardDescription>Verify vote receipts and access audit reports</CardDescription>
              </div>
              <Button onClick={() => navigate("/")} variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Receipt Verification */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Verify Vote Receipt
              </CardTitle>
              <CardDescription>
                Enter your receipt ID to verify your vote was recorded correctly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="receiptId">Receipt ID</Label>
                <Input
                  id="receiptId"
                  placeholder="RCP-1704567022-abc123def"
                  value={receiptId}
                  onChange={(e) => setReceiptId(e.target.value)}
                />
              </div>

              <Button onClick={handleVerifyReceipt} className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Verify Receipt
              </Button>

              {verificationResult && (
                <Card className={verificationResult.status === "verified" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  <CardContent className="pt-6">
                    {verificationResult.status === "verified" ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-green-800">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-semibold">Receipt Verified Successfully</span>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Blockchain Hash:</span>
                            <p className="font-mono text-xs break-all">{verificationResult.voteHash}</p>
                          </div>
                          <div>
                            <span className="font-medium">Block Number:</span>
                            <span className="ml-2">{verificationResult.blockNumber}</span>
                          </div>
                          <div>
                            <span className="font-medium">Recorded At:</span>
                            <span className="ml-2">{verificationResult.timestamp}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <Badge variant="default" className="bg-green-500">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Vote Valid
                          </Badge>
                          <Badge variant="default" className="bg-green-500">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Encrypted
                          </Badge>
                          <Badge variant="default" className="bg-green-500">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            On Chain
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle className="h-5 w-5" />
                        <div>
                          <span className="font-semibold">Verification Failed</span>
                          <p className="text-sm">{verificationResult.error}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* Audit Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Audit Overview</CardTitle>
              <CardDescription>Current audit status and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">100%</p>
                    <p className="text-sm text-green-700">Votes Verified</p>
                  </div>
                  <div className="text-center p-4 bg-blue-100 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">45,234</p>
                    <p className="text-sm text-blue-700">Total Audited</p>
                  </div>
                  <div className="text-center p-4 bg-purple-100 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">0</p>
                    <p className="text-sm text-purple-700">Discrepancies</p>
                  </div>
                  <div className="text-center p-4 bg-orange-100 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">24</p>
                    <p className="text-sm text-orange-700">Audit Reports</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Blockchain integrity: 100% verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Encryption validation: All votes valid</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Mixnet verification: Independent confirmed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Zero-knowledge proofs: Valid</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Audit Reports */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Audit Reports</CardTitle>
            <CardDescription>Access detailed audit reports and compliance documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                <span>Report ID</span>
                <span>Title</span>
                <span>Date</span>
                <span>Status</span>
                <span>Actions</span>
              </div>
              
              {auditReports.map((report) => (
                <div key={report.id} className="grid grid-cols-5 gap-4 text-sm py-2 border-b">
                  <span className="font-mono">{report.id}</span>
                  <span>{report.title}</span>
                  <span>{report.date}</span>
                  <Badge variant={report.status === "Completed" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-fit">
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Public Verification */}
        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Public Verification</CardTitle>
            <CardDescription className="text-blue-700">
              All audit data is publicly available for independent verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex-col gap-2">
                <FileText className="h-5 w-5" />
                <span className="text-xs">Blockchain Data</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-xs">Cryptographic Proofs</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-xs">Verification Tools</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Audit;
