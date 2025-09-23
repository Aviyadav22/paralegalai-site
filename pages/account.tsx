import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { 
  User, 
  Mail, 
  Shield, 
  Calendar, 
  CreditCard, 
  Settings, 
  Bell, 
  Lock,
  Download,
  Trash2,
  Edit,
  Check,
  Zap,
  Users
} from "lucide-react"
import { useState } from "react"

interface AccountPageProps {
  user: {
    id: string
    name: string
    email: string
    role: string
    createdAt: string
  }
}

export default function Account({ user }: AccountPageProps) {
  const { data: session, update } = useSession()
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || ""
  })

  const handleSave = async () => {
    // Here you would typically make an API call to update the user
    setIsEditing(false)
    // Update session if needed
    await update()
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#1f1d1b] mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                      activeTab === tab.id
                        ? "bg-[#1f1d1b] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-serif font-bold text-[#1f1d1b]">
                      Profile Information
                    </h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2 px-4 py-2 text-[#1f1d1b] border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Edit size={16} />
                      {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#c5a880] rounded-full flex items-center justify-center">
                        {session?.user?.image ? (
                          <img
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        ) : (
                          <User size={32} className="text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1f1d1b]">
                          {session?.user?.name || "User"}
                        </h3>
                        <p className="text-gray-600">{session?.user?.email}</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            <Shield size={14} className="mr-1" />
                            Free Plan
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>

                    {/* Account Info */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-[#1f1d1b] mb-4">
                        Account Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Calendar size={20} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Member since</p>
                            <p className="font-medium text-[#1f1d1b]">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Shield size={20} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Account type</p>
                            <p className="font-medium text-[#1f1d1b] capitalize">
                              {user.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                      <div className="flex justify-end">
                        <button
                          onClick={handleSave}
                          className="flex items-center gap-2 px-6 py-3 bg-[#1f1d1b] text-white rounded-lg hover:bg-[#4b2e2e] transition"
                        >
                          <Check size={16} />
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-8">
                    Security Settings
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Change Password
                      </h3>
                      <p className="text-yellow-700 mb-4">
                        Update your password to keep your account secure
                      </p>
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                        Change Password
                      </button>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-blue-700 mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                        Danger Zone
                      </h3>
                      <p className="text-red-700 mb-4">
                        Permanently delete your account and all associated data
                      </p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                        <Trash2 size={16} />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-8">
                    Billing & Subscription
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Current Usage */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1f1d1b] mb-6">Current Usage</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap size={32} className="text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                            Document Analyses
                          </h4>
                          <p className="text-3xl font-bold text-blue-600 mb-2">0 / 10</p>
                          <p className="text-sm text-gray-600">This month</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield size={32} className="text-green-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                            Research Queries
                          </h4>
                          <p className="text-3xl font-bold text-green-600 mb-2">0 / 50</p>
                          <p className="text-sm text-gray-600">This month</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users size={32} className="text-purple-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                            Team Members
                          </h4>
                          <p className="text-3xl font-bold text-purple-600 mb-2">1 / 1</p>
                          <p className="text-sm text-gray-600">Current plan</p>
                        </div>
                      </div>
                    </div>

                    {/* Current Plan */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-green-800 mb-2">
                            Free Plan
                          </h3>
                          <p className="text-green-700 mb-4">
                            Perfect for getting started with Paralegal AI
                          </p>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• 10 document analyses per month</li>
                            <li>• Basic legal research tools</li>
                            <li>• Email support</li>
                          </ul>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-green-800">$0</p>
                          <p className="text-green-600">per month</p>
                        </div>
                      </div>
                    </div>

                    {/* Upgrade Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <h4 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                          Professional Plan
                        </h4>
                        <p className="text-gray-600 mb-4">
                          For individual lawyers and small firms
                        </p>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-[#1f1d1b]">$29</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 mb-6">
                          <li>• 100 document analyses per month</li>
                          <li>• Advanced AI research tools</li>
                          <li>• Priority support</li>
                          <li>• Custom templates</li>
                        </ul>
                        <button 
                          className="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed transition"
                          disabled
                        >
                          Coming Soon
                        </button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <h4 className="text-lg font-semibold text-[#1f1d1b] mb-2">
                          Enterprise Plan
                        </h4>
                        <p className="text-gray-600 mb-4">
                          For large law firms and organizations
                        </p>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-[#1f1d1b]">$99</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1 mb-6">
                          <li>• Unlimited document analyses</li>
                          <li>• Custom AI models</li>
                          <li>• 24/7 dedicated support</li>
                          <li>• API access</li>
                          <li>• Custom integrations</li>
                        </ul>
                        <button 
                          className="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed transition"
                          disabled
                        >
                          Coming Soon
                        </button>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-semibold text-[#1f1d1b]">
                          Payment Methods
                        </h4>
                        <button className="px-4 py-2 text-[#1f1d1b] border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          Add Payment Method
                        </button>
                      </div>
                      
                      <div className="text-center py-8 text-gray-500">
                        <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                        <p>No payment methods added</p>
                        <p className="text-sm">Add a payment method to upgrade your plan</p>
                      </div>
                    </div>

                    {/* Billing History */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-semibold text-[#1f1d1b]">
                          Billing History
                        </h4>
                        <button className="px-4 py-2 text-[#1f1d1b] border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          Download All
                        </button>
                      </div>
                      
                      <div className="text-center py-8 text-gray-500">
                        <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                        <p>No billing history available</p>
                        <p className="text-sm">You&apos;re currently on the free plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-8">
                    Notification Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#1f1d1b]">Email Notifications</h4>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#1f1d1b]">Document Analysis Complete</h4>
                        <p className="text-sm text-gray-600">Get notified when analysis is finished</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#1f1d1b]">Security Alerts</h4>
                        <p className="text-sm text-gray-600">Important security notifications</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] rounded" />
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === "preferences" && (
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1f1d1b] mb-8">
                    Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Zone
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+5:30 (IST)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#1f1d1b]">Dark Mode</h4>
                        <p className="text-sm text-gray-600">Switch to dark theme</p>
                      </div>
                      <input type="checkbox" className="w-4 h-4 text-[#D4AF37] rounded" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: {
        id: session.user?.id || "",
        name: session.user?.name || "",
        email: session.user?.email || "",
        role: (session.user as any)?.role || "user",
        createdAt: new Date().toISOString(), // You might want to get this from the database
      },
    },
  }
}
