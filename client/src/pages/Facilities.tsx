// src/pages/Facilities.jsx
import {
  Building2,
  Library,
  FlaskConical,
  Laptop,
  Music,
  Trophy,
  Bus,
  Utensils,
  Shield,
  Wifi,
  BookOpen,
  Users,
  Heart,
  Sparkles,
  Sun,
  Droplets,
  Wind,
  TreePine,
  Car,
  Coffee,
  Dumbbell,
  Palette,
  Microscope,
  Globe,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Camera,
  Play,
  ChevronRight,
  Filter,
  X,
  Loader2,
  Search,
  Calendar,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      desc: "Smart classrooms with digital boards and modern teaching aids",
      category: "Academic",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Library,
      title: "Library",
      desc: "Well-stocked library with thousands of books and digital resources",
      category: "Academic",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FlaskConical,
      title: "Science Labs",
      desc: "Fully equipped physics, chemistry, and biology laboratories",
      category: "Academic",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Laptop,
      title: "Computer Lab",
      desc: "State-of-the-art computer labs with latest technology",
      category: "Academic",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Music,
      title: "Music Room",
      desc: "Dedicated space for music education with various instruments",
      category: "Arts",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "Art Studio",
      desc: "Creative space for visual arts and craft activities",
      category: "Arts",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      desc: "Indoor and outdoor sports facilities for various games",
      category: "Sports",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Dumbbell,
      title: "Gymnasium",
      desc: "Modern gym equipment for physical fitness",
      category: "Sports",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      desc: "Healthy and nutritious meals prepared in hygienic conditions",
      category: "General",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Bus,
      title: "Transport",
      desc: "Safe and reliable school bus service with tracking",
      category: "General",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Security",
      desc: "24/7 security with CCTV surveillance and trained guards",
      category: "General",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Wifi,
      title: "Wi-Fi Campus",
      desc: "High-speed internet connectivity across the campus",
      category: "General",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const categories = ["All", "Academic", "Arts", "Sports", "General"];

  const highlights = [
    { icon: Sun, label: "Solar Power", desc: "Sustainable energy initiative", color: "from-yellow-500 to-orange-500" },
    { icon: Droplets, label: "Rainwater Harvesting", desc: "Water conservation", color: "from-blue-500 to-cyan-500" },
    { icon: TreePine, label: "Green Campus", desc: "Environment-friendly", color: "from-green-500 to-emerald-500" },
    { icon: Heart, label: "Medical Room", desc: "First-aid facilities", color: "from-red-500 to-pink-500" },
  ];

  const stats = [
    { value: "25+", label: "Facilities", icon: Building2, color: "text-blue-600" },
    { value: "1000+", label: "Happy Students", icon: Users, color: "text-green-600" },
    { value: "50+", label: "Sports Activities", icon: Trophy, color: "text-yellow-600" },
    { value: "98%", label: "Satisfaction Rate", icon: Star, color: "text-purple-600" },
  ];

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

  const filteredFacilities = facilities.filter(facility => {
    const matchesCategory = activeCategory === "All" || facility.category === activeCategory;
    const matchesSearch = facility.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
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
              <span className="text-xs sm:text-sm font-medium">State-of-the-Art Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              World-Class Facilities
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light opacity-90 mt-1 sm:mt-2">
                Creating an Environment That Nurtures Learning
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto px-4">
              State-of-the-art facilities designed for holistic development and academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="-mt-6 sm:-mt-8 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center group animate-on-scroll opacity-0 scale-95 transition-all duration-700"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
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

      {/* Highlights */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${item.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-600">Explore Our Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">State-of-the-Art</span> Facilities
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Discover our world-class facilities designed to provide the best learning experience
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-10">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search facilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-white text-slate-600 hover:bg-blue-50 shadow-md"
                  }`}
                >
                  {category === "All" ? <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> : <Filter className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Facilities Grid */}
          {filteredFacilities.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No facilities found</h3>
              <p className="text-slate-600">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredFacilities.map((facility, i) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${facility.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`bg-gradient-to-r ${facility.color} w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3">{facility.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${facility.color} text-white`}>
                        {facility.category}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why Our Facilities */}
      <section className="bg-gradient-to-br from-white to-blue-50/50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium text-green-600">Why We Stand Out</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Designed for <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Every facility is thoughtfully designed to enhance learning, creativity, and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, title: "Quality Education", desc: "State-of-the-art learning environment", color: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Expert Guidance", desc: "Facilities supported by qualified staff", color: "from-purple-500 to-pink-500" },
              { icon: Heart, title: "Student Well-being", desc: "Safe and nurturing environment", color: "from-red-500 to-rose-500" },
              { icon: Globe, title: "Global Standards", desc: "World-class infrastructure", color: "from-green-500 to-emerald-500" },
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

      {/* Virtual Tour CTA */}
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
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Explore From Home</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Take a Virtual Tour
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Explore our campus and facilities from the comfort of your home
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                Start Virtual Tour
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}