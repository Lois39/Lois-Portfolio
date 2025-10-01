"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "okerekelois2@gmail.com",
    href: "mailto:okerekelois2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+2349120838407",
    href: "tel:+2349120838407",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, NG",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Lois39",
    color: "hover:text-purple-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/loisokereke",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:okerekelois2@gmail.com",
    color: "hover:text-green-400",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_35zwhux",
        "template_mqs77b6",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "FYmFyP1hySlCFQ4DK"
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-animated py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">GET IN</span>{" "}
            <span className="glow-text">TOUCH</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            amazing together!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <Card className="card-glow p-8 animate-fade-in-left">
            <h2 className="text-3xl font-bold glow-text mb-8">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-primary/30 focus:border-primary glow-border"
                    placeholder="Lois Okereke"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-foreground font-medium"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-primary/30 focus:border-primary glow-border"
                    placeholder="loisokereke@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="text-foreground font-medium"
                >
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 bg-secondary/50 border-primary/30 focus:border-primary glow-border"
                  placeholder="Project Collaboration"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-foreground font-medium"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-secondary/50 border-primary/30 focus:border-primary glow-border min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="btn-glow w-full flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="animate-fade-in-right space-y-8">
            <Card className="card-glow p-8">
              <h2 className="text-3xl font-bold glow-text mb-8">Contact Info</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center group hover-glow p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 glow-border">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-foreground font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="card-glow p-8">
              <h2 className="text-2xl font-bold glow-text mb-6">Follow Me</h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center p-4 rounded-lg
                        bg-secondary/50 hover:bg-primary/20 
                        border border-primary/30 hover:border-primary/50
                        transition-all duration-300 group hover-glow
                      `}
                    >
                      <Icon
                        className={`text-muted-foreground group-hover:text-primary transition-colors ${social.color}`}
                        size={24}
                      />
                      <span className="ml-3 font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
