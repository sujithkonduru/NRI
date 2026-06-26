// src/pages/Contact.jsx
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Calendar,
  Building2,
  Sparkles,
  ArrowRight,
  Heart,
  MessageCircle,
  Headphones,
  Star,
  Users,
  Award,
  Shield,
  ChevronRight,
  ExternalLink,
  Clock as ClockIcon,
  ThumbsUp,
  Smile,
  Briefcase,
  Coffee,
  Loader2,
  AlertCircle,
  Check,
  X,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "The admission process was so smooth and the staff was incredibly helpful. My daughter loves her new school!",
      rating: 5,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Rahul Verma",
      role: "Student",
      content: "Teachers are amazing and always ready to help. I've grown so much academically and personally.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dr. Anita Desai",
      role: "Parent",
      content: "Exceptional communication from the school. I always feel informed and involved in my child's education.",
      rating: 5,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Suresh Kumar",
      role: "Alumni",
      content: "Sri NRI gave me the foundation I needed to succeed in life. Grateful for the wonderful education I received.",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setLoading(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "City Center, India - 123456",
      href: "https://maps.google.com",
      color: "from-blue-500 to-cyan-500",
      description: "Find us on Google Maps",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 123 456 7890",
      href: "tel:+911234567890",
      color: "from-green-500 to-emerald-500",
      description: "Available during office hours",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@srinri.edu.in",
      href: "mailto:info@srinri.edu.in",
      color: "from-purple-500 to-pink-500",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon-Fri: 8:00 AM - 4:00 PM",
      color: "from-orange-500 to-amber-500",
      description: "Saturday: 9:00 AM - 12:00 PM",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600", bgColor: "bg-blue-50", textColor: "text-blue-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500", bgColor: "bg-sky-50", textColor: "text-sky-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-600", bgColor: "bg-pink-50", textColor: "text-pink-600" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700", bgColor: "bg-blue-50", textColor: "text-blue-700" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600", bgColor: "bg-red-50", textColor: "text-red-600" },
  ];

  const quickStats = [
    { icon: Users, label: "Happy Students", value: "5000+", color: "text-blue-600", bgColor: "bg-blue-100" },
    { icon: Award, label: "Awards Won", value: "25+", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { icon: Headphones, label: "Support Hours", value: "24/7", color: "text-green-600", bgColor: "bg-green-100" },
    { icon: ThumbsUp, label: "Satisfaction Rate", value: "98%", color: "text-purple-600", bgColor: "bg-purple-100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border-4 border-white/20 rounded-full animate-spin-slow" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-72 h-72 border-4 border-white/10 rounded-full animate-spin-slow-delayed" />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 animate-bounce-in">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium">We'd Love to Hear From You</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Get in Touch
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light opacity-90 mt-1 sm:mt-2">
                Let's Start a Conversation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto px-4">
              We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="-mt-6 sm:-mt-8 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center group animate-on-scroll opacity-0 scale-95 transition-all duration-700"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <div className={`${stat.bgColor} p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`bg-gradient-to-r ${item.color} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-medium hover:text-blue-600 transition-colors text-sm sm:text-base lg:text-lg block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-800 font-medium text-sm sm:text-base lg:text-lg">{item.value}</p>
                  )}
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">{item.description}</p>
                  {item.href && (
                    <div className="mt-2 sm:mt-3 flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}


      {/* Contact Form & Map */}
      <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-12">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-xl">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-8 lg:p-10 text-center animate-fadeIn">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl animate-bounce-in">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-green-600 text-sm sm:text-base">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>We appreciate your interest</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" ref={formRef}>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'name' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                      }`}>
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                          focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'email' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                      }`}>
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                          focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'subject' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                      }`}>
                        <MessageSquare className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                          focusedField === 'subject' ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                            errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="What is this regarding?"
                        />
                        {errors.subject && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{errors.subject}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'message' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                      }`}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows="4"
                          className={`w-full px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base ${
                            errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
                          }`}
                          placeholder="Write your message here..."
                        />
                        {errors.message && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{errors.message}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            Send Message
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </Button>

                    <p className="text-[10px] sm:text-xs text-slate-400 text-center mt-2 sm:mt-4">
                      <span className="flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" />
                        Your information is safe with us
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Side - Map, Social, Quick Contact - 2 columns */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                  <div className="text-center p-4 relative z-10">
                    <div className="bg-white/90 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base">Sri NRI High School</p>
                    <p className="text-xs sm:text-sm text-gray-500">City Center, India</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm group/link"
                    >
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">What Our Community Says</h3>
                </div>
                <div className="relative h-28 sm:h-32 lg:h-36">
                  {testimonials.map((testimonial, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeTestimonial === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 sm:translate-x-8"
                      }`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`bg-gradient-to-r ${testimonial.color} p-1.5 sm:p-2 rounded-full flex-shrink-0`}>
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3">"{testimonial.content}"</p>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 sm:mt-2">{testimonial.name}</p>
                          <p className="text-[10px] sm:text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-1.5 mt-3 sm:mt-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeTestimonial === i ? "w-6 bg-gradient-to-r from-blue-600 to-purple-600" : "w-3 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  Connect With Us
                </h3>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.bgColor} p-2 sm:p-3 rounded-xl ${social.color} transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg group text-center`}
                        aria-label={social.label}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-6 mx-auto group-hover:scale-110 transition-transform ${social.textColor} group-hover:text-white`} />
                        <span className="text-[8px] sm:text-[10px] text-gray-500 group-hover:text-white transition-colors hidden sm:block mt-0.5 sm:mt-1">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
                  Quick Contact
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors group p-1.5 sm:p-2 rounded-xl hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">Call: +91 123 456 7890</span>
                  </a>
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors group p-1.5 sm:p-2 rounded-xl hover:bg-white/10"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">WhatsApp: +91 123 456 7890</span>
                  </a>
                  <a
                    href="mailto:info@srinri.edu.in"
                    className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors group p-1.5 sm:p-2 rounded-xl hover:bg-white/10"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">Email: info@srinri.edu.in</span>
                  </a>
                  <div className="flex items-center gap-2 sm:gap-3 text-white/90 p-1.5 sm:p-2">
                    <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Mon-Fri: 8:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
                <span className="text-xs sm:text-sm md:text-base font-medium">Let's Connect</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Visit our campus or reach out to us. We'd love to show you around and answer all your questions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  Schedule a Visit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}