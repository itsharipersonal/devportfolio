"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hari.krishnan@email.com",
      href: "mailto:hari.krishnan@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hari",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/hari",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/hari",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className={`${social.color} transition-colors`}
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-5 h-5 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-blue-50/20 backdrop-blur-md border border-blue-200/30 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-2">Quick Response</h3>
                  <p className="text-white text-xs">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to call or text me directly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium text-white mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium text-white mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-white mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-white mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md border border-white/20 shadow-xl text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-base mb-6 opacity-90">
                  Let's discuss how I can help bring your ideas to life
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="mailto:hari.krishnan@email.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
