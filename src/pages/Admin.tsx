
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Users, 
  Shield, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Database,
  FileText,
  Eye
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("monitoring");

  const auditLogs = [
    { id: 1, timestamp: "2024-01-15 14:30:22", action: "Vote Submitted", voterId: "V001****5432", status: "Success", hash: "0xabc123..." },
    { id: 2, timestamp: "2024-01-15 14:29:15", action: "Biometric Verification", voterId: "V002****7890", status: "Success", hash: "0xdef456..." },
    { id: 3, timestamp: "2024-01-15 14:28:45", action: "Login Attempt", voterId: "V003****2468", status: "Failed", hash: "N/A" },
    { id: 4, timestamp: "2024-01-15 14:27:33", action: "Vote Changed", voterId: "V001****5432", status: "Success", hash: "0xghi789..." },
  ];

  const systemStats = {
    totalVotes: 45234,
    activeVoters: 1247,
    systemUptime: "99.97%",
    blockchainSync: "100%",
    encryptionStatus: "Active",
    lastAudit: "2024-01-15 12:00:00"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Monitor className="h-6 w-6 text-blue-600" />
              Election Administration Dashboard
            </CardTitle>
            <CardDescription>Real-time monitoring and audit controls</CardDescription>
          </CardHeader>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="monitoring">System Monitoring</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            <TabsTrigger value="security">Security Status</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-6">
            {/* System Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Votes Cast</p>
                      <p className="text-2xl font-bold">{systemStats.totalVotes.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Voters</p>
                      <p className="text-2xl font-bold">{systemStats.activeVoters}</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">System Uptime</p>
                      <p className="text-2xl font-bold">{systemStats.systemUptime}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Blockchain Synchronization</span>
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {systemStats.blockchainSync}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Encryption Service</span>
                      <Badge variant="default" className="bg-green-500">
                        <Shield className="mr-1 h-3 w-3" />
                        {systemStats.encryptionStatus}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Database Connection</span>
                      <Badge variant="default" className="bg-green-500">
                        <Database className="mr-1 h-3 w-3" />
                        Online
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Audit System</span>
                      <Badge variant="default" className="bg-green-500">
                        <FileText className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Last Security Audit</span>
                      <Badge variant="outline">
                        <Clock className="mr-1 h-3 w-3" />
                        {systemStats.lastAudit}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Biometric Service</span>
                      <Badge variant="default" className="bg-green-500">
                        <Eye className="mr-1 h-3 w-3" />
                        Online
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Audit Trail</CardTitle>
                <CardDescription>Complete log of all system activities and vote transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                    <span>Timestamp</span>
                    <span>Action</span>
                    <span>Voter ID</span>
                    <span>Status</span>
                    <span>Blockchain Hash</span>
                    <span>Actions</span>
                  </div>
                  {auditLogs.map((log) => (
                    <div key={log.id} className="grid grid-cols-6 gap-4 text-sm py-2 border-b">
                      <span className="font-mono text-xs">{log.timestamp}</span>
                      <span>{log.action}</span>
                      <span className="font-mono">{log.voterId}</span>
                      <Badge variant={log.status === "Success" ? "default" : "destructive"} className="w-fit">
                        {log.status}
                      </Badge>
                      <span className="font-mono text-xs truncate">{log.hash}</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="h-5 w-5" />
                    Security Status: Secure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>All encryption keys active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Blockchain integrity verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>No suspicious activities detected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Biometric system operational</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="h-5 w-5" />
                    Security Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span>3 failed login attempts (resolved)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span>Token rotation scheduled in 2 hours</span>
                    </div>
                    <div className="text-muted-foreground">
                      No critical alerts
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Security Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">99.9%</p>
                    <p className="text-sm text-muted-foreground">Authentication Success</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">0</p>
                    <p className="text-sm text-muted-foreground">Security Breaches</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">256-bit</p>
                    <p className="text-sm text-muted-foreground">Encryption Strength</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">100%</p>
                    <p className="text-sm text-muted-foreground">Audit Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Export detailed reports for auditing and compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <FileText className="h-6 w-6" />
                    <span>Voting Activity Report</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Shield className="h-6 w-6" />
                    <span>Security Audit Report</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Database className="h-6 w-6" />
                    <span>Blockchain Verification</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Users className="h-6 w-6" />
                    <span>Voter Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
