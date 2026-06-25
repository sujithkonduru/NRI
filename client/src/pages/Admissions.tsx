// src/pages/Admissions.jsx
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import {
  FileText,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertCircle,
  Download,
  Send,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Star,
  Heart,
  Shield,
  ChevronRight,
  GraduationCap,
  Target,
  Globe,
  Loader2,
  ExternalLink,
  Gift,
  TrendingUp,
  Smile,
} from "lucide-react";

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // CTA visibility
  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const ctaElement = document.querySelector('.cta-section');
    if (ctaElement) {
      ctaObserver.observe(ctaElement);
    }

    return () => ctaObserver.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.grade) newErrors.grade = "Please select a grade";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setLoading(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        message: "",
      });
    }, 4000);
  };

  const requirements = [
    {
      icon: FileText,
      title: "Application Form",
      desc: "Complete the application form with accurate details",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Entrance Test",
      desc: "Assessment of academic readiness and aptitude",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Interview",
      desc: "Interaction with parents and student",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Document Verification",
      desc: "Submit required documents for verification",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const feeStructure = [
    { grade: "Primary (1-5)", fee: "₹85,000", perYear: true, color: "from-blue-500 to-blue-600" },
    { grade: "Middle (6-8)", fee: "₹95,000", perYear: true, color: "from-purple-500 to-purple-600" },
    { grade: "High (9-10)", fee: "₹110,000", perYear: true, color: "from-green-500 to-green-600" },
  ];

  const documents = [
    "Birth Certificate (original and copy)",
    "Transfer Certificate from previous school",
    "Report Card of previous class",
    "Passport size photographs (4)",
    "Aadhar Card (copy)",
    "Medical Records",
  ];

  const quickStats = [
    { icon: Users, label: "Students Enrolled", value: "5000+", color: "text-blue-600", bgColor: "bg-blue-100" },
    { icon: Award, label: "Scholarships", value: "100+", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { icon: Star, label: "Satisfaction Rate", value: "98%", color: "text-green-600", bgColor: "bg-green-100" },
    { icon: Heart, label: "Happy Parents", value: "95%", color: "text-pink-600", bgColor: "bg-pink-100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
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
              <span className="text-xs sm:text-sm font-medium">Admissions Open 2024-25</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Join the Sri NRI Family
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light opacity-90 mt-1 sm:mt-2">
                Embark on a Journey of Educational Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto px-4">
              Secure your child's future with quality education, experienced faculty, and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
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

      {/* Quick Info Banner */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center text-white">
              <div className="text-lg sm:text-xl font-bold">Admission Open</div>
              <div className="text-sm sm:text-base opacity-90">Apply now for 2024-25 session</div>
            </div>
            <div className="text-center text-white border-t sm:border-t-0 sm:border-l sm:border-r border-white/20 pt-3 sm:pt-0 sm:px-4">
              <div className="text-lg sm:text-xl font-bold">Limited Seats</div>
              <div className="text-sm sm:text-base opacity-90">Apply early to secure admission</div>
            </div>
            <div className="text-center text-white pt-3 sm:pt-0">
              <div className="text-lg sm:text-xl font-bold">Scholarships</div>
              <div className="text-sm sm:text-base opacity-90">Merit and need-based available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-600">Simple Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Admission Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Simple steps to secure your child's future at Sri NRI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {requirements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`bg-gradient-to-r ${item.color} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md text-xs font-bold text-blue-600 border-2 border-blue-200">
                    {i + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 text-center">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium text-green-600">Apply Now</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Start Your Application
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Fill out the application form to begin the admission process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 sm:p-10 text-center animate-fadeIn">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl animate-bounce-in">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Application Submitted! 🎉
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  We will contact you shortly with the next steps.
                </p>
                <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-green-600 text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Welcome to the Sri NRI family!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Full Name <span className="text-red-500">*</span>
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
                        placeholder="Enter full name"
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
                        placeholder="Enter email address"
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${
                      focusedField === 'phone' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                    }`}>
                      <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        focusedField === 'phone' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                        placeholder="Enter 10-digit phone number"
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Grade Applying For <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${
                      focusedField === 'grade' ? 'transform scale-[1.01] sm:scale-[1.02]' : ''
                    }`}>
                      <GraduationCap className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        focusedField === 'grade' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('grade')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base appearance-none ${
                          errors.grade ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select grade</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        <option value="4">Grade 4</option>
                        <option value="5">Grade 5</option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      {errors.grade && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs sm:text-sm">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                    Message / Additional Information
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
                      className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Any additional information or questions..."
                    />
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        Submit Application
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>

                <p className="text-[10px] sm:text-xs text-slate-400 text-center mt-2">
                  <span className="flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    Your information is safe and secure
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="text-xs sm:text-sm font-medium text-purple-600">Fee Structure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Competitive and transparent fee structure for quality education
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              {feeStructure.map((item, i) => (
                <div
                  key={i}
                  className={`group flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                    i !== feeStructure.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto mb-2 sm:mb-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                      {i + 1}
                    </div>
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">{item.grade}</span>
                  </div>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {item.fee}
                    {item.perYear && <span className="text-sm font-normal text-gray-500 ml-1">/year</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gradient-to-br from-white to-blue-50/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              <span className="text-xs sm:text-sm font-medium text-orange-600">Required Documents</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Documents Required
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Please prepare these documents for the admission process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 animate-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{doc}</span>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sri NRI */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
              <span className="text-xs sm:text-sm font-medium text-pink-600">Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Why Choose Sri NRI?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Excellence in education, holistic development, and a nurturing environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, title: "Academic Excellence", desc: "Top-notch curriculum and experienced teachers", color: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Expert Faculty", desc: "Qualified and dedicated teaching staff", color: "from-purple-500 to-pink-500" },
              { icon: Globe, title: "Modern Facilities", desc: "Smart classrooms and advanced labs", color: "from-green-500 to-emerald-500" },
              { icon: Heart, title: "Holistic Growth", desc: "Focus on academics and personality development", color: "from-orange-500 to-amber-500" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${item.color} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className={`max-w-3xl mx-auto text-center text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Secure Your Child's Future</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Take the First Step Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join Sri NRI High School and give your child the gift of quality education and a bright future.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                Apply Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}