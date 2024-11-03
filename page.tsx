import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Zap, Lock, CheckCircle2 } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">WhatsGPT</div>
          <div className="space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-green-600">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-green-600">How it Works</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-green-600">Pricing</Link>
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Supercharge Your WhatsApp with AI</h1>
          <p className="text-xl text-gray-600 mb-8">Integrate ChatGPT into your WhatsApp and experience the power of AI in your everyday conversations.</p>
          <Button size="lg" className="text-lg px-8 py-6">Get Started for Free</Button>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 text-green-600" />
                  Smart Conversations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Engage in intelligent conversations with AI-powered responses.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 text-green-600" />
                  Instant Answers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get quick and accurate answers to your questions in real-time.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 text-green-600" />
                  Privacy Focused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your conversations remain private and secure with end-to-end encryption.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-20 bg-green-50">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Sign Up</h3>
              <p>Create your WhatsGPT account in just a few clicks.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Connect WhatsApp</h3>
              <p>Link your WhatsApp account securely to WhatsGPT.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Start Chatting</h3>
              <p>Enjoy AI-powered conversations in your WhatsApp chats.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg font-normal">/month</span></div>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> 100 AI responses/day</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Basic support</li>
                </ul>
                <Button className="w-full mt-6">Choose Basic</Button>
              </CardContent>
            </Card>
            <Card className="border-green-600">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$19.99<span className="text-lg font-normal">/month</span></div>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Unlimited AI responses</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Priority support</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Advanced features</li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Choose Pro</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">Custom</div>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Custom integration</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> 24/7 support</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-2 text-green-600" /> Dedicated account manager</li>
                </ul>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20 bg-green-50">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">Is WhatsGPT official WhatsApp integration?</h3>
              <p>No, WhatsGPT is a third-party service that works alongside WhatsApp.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How secure is WhatsGPT?</h3>
              <p>We use end-to-end encryption and don't store your conversations.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I use WhatsGPT for business?</h3>
              <p>Yes, our Enterprise plan is tailored for business needs.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How do I get started?</h3>
              <p>Simply sign up, connect your WhatsApp, and start chatting!</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your WhatsApp Experience?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of users who are already enjoying AI-powered conversations.</p>
          <Button size="lg" className="text-lg px-8 py-6">Get Started Now</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">WhatsGPT</h3>
              <p>Enhancing your WhatsApp with the power of AI.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 WhatsGPT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
