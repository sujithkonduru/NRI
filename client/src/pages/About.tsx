// src/pages/About.jsx
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Clock,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Calendar,
  Trophy,
  Shield,
  Lightbulb,
  Handshake,
  Star,
  Rocket,
  Zap,
  ChevronRight,
  Play,
  Pause,
  Quote,
  Crown,
  Brain,
  Compass,
  Gem,
  TreePine,
  Flower2,
  Sun,
  Cloud,
  School,
  BookMarked,
  UserCheck,
  PenTool,
  Coffee,
  Smile,
  ThumbsUp,
  Briefcase,
  Medal,
  UsersRound,
  Mic,
  Palette,
  Music,
  Dumbbell,
  Video,
  ExternalLink,
  ChevronDown,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("mission");
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    passRate: 0,
    years: 0,
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const milestoneRefs = useRef([]);
  const statsRef = useRef(null);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      desc: "We uphold the highest standards of honesty and ethical behavior.",
      color: "from-rose-500 to-pink-500",
      gradient: "bg-gradient-to-br from-rose-50 to-pink-50",
      iconBg: "bg-rose-100",
    },
    {
      icon: Target,
      title: "Excellence",
      desc: "We strive for excellence in everything we do.",
      color: "from-blue-500 to-indigo-500",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: Handshake,
      title: "Community",
      desc: "We foster a sense of belonging and mutual respect.",
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace creativity and forward-thinking approaches.",
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
    },
  ];

  const milestones = [
    { year: "1995", event: "Foundation of Sri NRI High School", icon: Building2, color: "from-blue-500 to-blue-600" },
    { year: "2000", event: "First batch of students graduated", icon: GraduationCap, color: "from-green-500 to-emerald-600" },
    { year: "2005", event: "New campus building inaugurated", icon: Crown, color: "from-purple-500 to-purple-600" },
    { year: "2010", event: "Introduction of smart classrooms", icon: Zap, color: "from-amber-500 to-orange-600" },
    { year: "2015", event: "Recognized as Best School in the region", icon: Award, color: "from-rose-500 to-pink-600" },
    { year: "2020", event: "Online learning platform launched", icon: Globe, color: "from-cyan-500 to-blue-600" },
    { year: "2024", event: "Celebrating 25+ years of excellence", icon: Star, color: "from-yellow-500 to-amber-600" },
  ];

  const teamMembers = [
    { name: "Dr. Rajesh Kumar", role: "Principal", experience: "25+ years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Mrs. Priya Sharma", role: "Vice Principal", experience: "18+ years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
    { name: "Mr. Sanjay Patel", role: "Head of Academics", experience: "20+ years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Ms. Ananya Reddy", role: "Head of Student Affairs", experience: "15+ years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  ];

  const achievements = [
    { icon: Medal, label: "Best School Award", desc: "Recognized as Best School in the region 3 times", color: "from-yellow-400 to-amber-500" },
    { icon: UsersRound, label: "5000+ Alumni", desc: "Successful graduates across the globe", color: "from-blue-400 to-indigo-500" },
    { icon: TrendingUp, label: "95% Pass Rate", desc: "Consistent excellence in board examinations", color: "from-green-400 to-emerald-500" },
    { icon: Award, label: "50+ Competition Wins", desc: "Victories in academic and cultural events", color: "from-purple-400 to-pink-500" },
  ];

  const studentLife = [
    { icon: Mic, label: "Debate & Elocution", desc: "Public speaking and critical thinking", color: "from-blue-400 to-cyan-500" },
    { icon: Palette, label: "Art & Craft", desc: "Creative expression through visual arts", color: "from-pink-400 to-rose-500" },
    { icon: Music, label: "Music & Dance", desc: "Vocal, instrumental, and dance training", color: "from-purple-400 to-indigo-500" },
    { icon: Dumbbell, label: "Sports & Fitness", desc: "Cricket, football, basketball, and more", color: "from-green-400 to-emerald-500" },
  ];

  // Animate counters
  useEffect(() => {
    const targetValues = { students: 500, faculty: 20, passRate: 95, years: 15 };
    const duration = 2000;
    const steps = 60;
    const increment = {};
    const startTime = Date.now();

    Object.keys(targetValues).forEach(key => {
      increment[key] = targetValues[key] / steps;
    });

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters({
        students: Math.floor(targetValues.students * progress),
        faculty: Math.floor(targetValues.faculty * progress),
        passRate: Math.floor(targetValues.passRate * progress),
        years: Math.floor(targetValues.years * progress),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-24 lg:py-32 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/70" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-128 h-128 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 border-4 border-white/20 rounded-full animate-spin-slow" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border-4 border-white/10 rounded-full animate-spin-slow-delayed" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-bounce-in border border-white/20">
              <Sparkles className="w-5 h-5 animate-sparkle" />
              <span className="text-sm font-medium">Excellence in Education Since 1995</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              About Sri NRI
              <span className="block text-2xl sm:text-3xl lg:text-5xl font-light opacity-90 mt-2">
                Building Future Leaders
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto animate-slide-up-delayed">
              A legacy of excellence, innovation, and holistic education that transforms lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up-delayed-2">
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 group border border-white/20">
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                Watch Our Story
              </button>
              <button 
                onClick={() => handleNavigation("/admissions")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg group"
              >
                <GraduationCap className="w-5 h-5" />
                Explore Programs
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Quick Stats */}
      <section className="-mt-8 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={i}
                  className="text-center group animate-on-scroll opacity-0 scale-95 transition-all duration-700"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-gradient-to-r ${achievement.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{achievement.label}</div>
                  <div className="text-xs text-slate-500">{achievement.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Tabs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Our Purpose</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sri NRI</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our mission, vision, and what makes us unique
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: "mission", label: "Our Mission", icon: Target },
                { id: "vision", label: "Our Vision", icon: Globe },
                { id: "values", label: "Core Values", icon: Gem },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-white text-slate-600 hover:bg-blue-50 shadow-md"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl min-h-[300px]">
              {activeTab === "mission" && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-xl">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To empower students with knowledge, skills, and values that prepare them
                    for lifelong success and meaningful contributions to society. We believe in
                    nurturing curiosity, fostering creativity, and building character through
                    quality education and holistic development.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-3 gap-4">
                    {["Knowledge", "Skills", "Values"].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-blue-50 rounded-xl p-3 group hover:bg-blue-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-xl">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To be a beacon of educational excellence, nurturing global citizens who
                    are innovative, compassionate, and ready to lead. We envision a world where
                    every student discovers their potential and makes a positive difference
                    in their communities and beyond.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {["Innovation", "Compassion", "Leadership"].map((item) => (
                      <span key={item} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl">
                      <Gem className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {values.map((value, i) => {
                      const Icon = value.icon;
                      return (
                        <div key={i} className={`${value.gradient} rounded-xl p-4 flex items-start gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                          <div className={`${value.iconBg} p-2 rounded-lg flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">{value.title}</h4>
                            <p className="text-sm text-slate-600">{value.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border-4 border-white/20 rounded-full animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Our Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">The Sri NRI Difference</h2>
            <p className="text-lg opacity-90">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counters.students, label: "Students", icon: Users, suffix: "+" },
              { value: counters.faculty, label: "Faculty", icon: Users, suffix: "+" },
              { value: counters.passRate, label: "Pass Rate", icon: Award, suffix: "%" },
              { value: counters.years, label: "Years of Excellence", icon: Calendar, suffix: "+" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center group animate-on-scroll opacity-0 scale-95 transition-all duration-700"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative flex justify-center mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {stat.value}
                      <span className="text-3xl">{stat.suffix}</span>
                    </div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                    <div className="w-12 h-1 bg-white/30 mx-auto mt-3 group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white relative">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
  </div>
  <div className="container mx-auto px-4 sm:px-6 relative">
    <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-4">
        <Calendar className="w-5 h-5 text-amber-600" />
        <span className="text-sm font-medium text-amber-600">Our Journey</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Celebrating <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">25+ Years</span> of Excellence
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        A timeline of milestones that have shaped our institution
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full" />
      
      {milestones.map((milestone, i) => {
        const Icon = milestone.icon;
        const isEven = i % 2 === 0;
        
        return (
          <div
            key={i}
            className={`flex items-center mb-12 last:mb-0 animate-on-scroll opacity-0 ${
              isEven ? 'translate-x-10' : '-translate-x-10'
            } transition-all duration-700`}
            style={{ transitionDelay: `${i * 150}ms` }}
            ref={el => milestoneRefs.current[i] = el}
          >
            {/* Left Side Content - Even items (0, 2, 4, 6) */}
            {isEven ? (
              <>
                <div className="w-1/2 pr-12 text-right">
                  <div className={`bg-gradient-to-r ${milestone.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer`}>
                    <div className="text-2xl font-bold text-white mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-white/90 text-lg">
                      {milestone.event}
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2 text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm">View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 group cursor-pointer hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="w-1/2" />
              </>
            ) : (
              // Right Side Content - Odd items (1, 3, 5)
              <>
                <div className="w-1/2" />
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 group cursor-pointer hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="w-1/2 pl-12 text-left">
                  <div className={`bg-gradient-to-r ${milestone.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer`}>
                    <div className="text-2xl font-bold text-white mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-white/90 text-lg">
                      {milestone.event}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm">View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Student Life */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <School className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">Beyond Academics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Vibrant <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Student Life</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Holistic development through diverse activities and experiences
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentLife.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center animate-on-scroll"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${activity.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {activity.label}
                  </h4>
                  <p className="text-sm text-slate-600">{activity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Crown className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Leadership Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Visionary Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence in education
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-sm text-slate-500 mt-1">{member.experience}</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 opacity-30 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed">
              "Education is not just about filling a bucket, but lighting a fire. 
              At Sri NRI, we ignite the spark of curiosity in every student."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-white/50" />
              <span className="text-lg font-medium">Founder's Message</span>
              <div className="w-12 h-0.5 bg-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border-4 border-white/10 rounded-full animate-spin-slow-delayed" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-on-scroll opacity-0 scale-95 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 animate-sparkle" />
              <span className="font-medium">Join Our Journey of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Ready to Be Part of <br />Our Story?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover the Sri NRI difference and start your journey towards academic excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleNavigation("/admissions")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
              >
                <GraduationCap className="w-6 h-6" />
                Explore Admissions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 backdrop-blur-sm"
              >
                <Phone className="w-6 h-6" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}