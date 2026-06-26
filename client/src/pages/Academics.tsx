// src/pages/Academics.jsx
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import { useLocation } from "wouter";
import {
  BookOpen,
  GraduationCap,
  Target,
  Award,
  Calendar,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Library,
  FlaskConical,
  Globe,
  Code,
  Music,
  Palette,
  Brain,
  Book,
  Calculator,
  Microscope,
  Languages,
  Trophy,
  Rocket,
  Zap,
  Star,
  TrendingUp,
  BarChart3,
  PieChart,
  Crown,
  Gem,
  Compass,
  Lightbulb,
  ChevronRight,
  Play,
  Pause,
  Quote,
  School,
  PenTool,
  ScrollText,
  Atom,
  Dna,
  History,
  Map,
  Brush,
  Mic,
  Footprints,
  Menu,
  X,
  Home,
  Medal,
  UsersRound,
  Dumbbell,
} from "lucide-react";

export default function Academics() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("programs");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    subjects: 0,
    passRate: 0,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Debug: Log when tab changes
  useEffect(() => {
    console.log("Active Tab changed to:", activeTab);
  }, [activeTab]);

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "from-blue-500 to-blue-600", description: "Building logical thinking and problem-solving skills" },
    { name: "Science", icon: Microscope, color: "from-green-500 to-green-600", description: "Exploring the wonders of the natural world" },
    { name: "English", icon: BookOpen, color: "from-purple-500 to-purple-600", description: "Developing communication and literary skills" },
    { name: "Social Studies", icon: Globe, color: "from-orange-500 to-orange-600", description: "Understanding history, geography, and society" },
    { name: "Computer Science", icon: Code, color: "from-cyan-500 to-cyan-600", description: "Preparing for the digital future" },
    { name: "Arts", icon: Palette, color: "from-pink-500 to-pink-600", description: "Nurturing creativity and self-expression" },
    { name: "Hindi", icon: Languages, color: "from-red-500 to-red-600", description: "Learning our national language" },
    { name: "Physical Education", icon: Footprints, color: "from-emerald-500 to-emerald-600", description: "Developing physical fitness and teamwork" },
  ];

  const programs = [
    {
      level: "Primary School",
      grades: "Grades 1-5",
      description: "Building strong foundations in core subjects with focus on basic skills, values, and character development.",
      highlights: ["Foundational literacy & numeracy", "Moral values & discipline", "Creative learning through activities"],
      icon: Book,
      color: "from-blue-500 to-blue-600",
    },
    {
      level: "Middle School",
      grades: "Grades 6-8",
      description: "Developing critical thinking, analytical skills, and subject specialization with practical learning approaches.",
      highlights: ["Critical thinking & analysis", "Project-based learning", "Subject exploration & labs"],
      icon: Target,
      color: "from-green-500 to-emerald-600",
    },
    {
      level: "High School",
      grades: "Grades 9-10",
      description: "Preparing students for board examinations and future academic pursuits with comprehensive curriculum.",
      highlights: ["Board exam preparation", "Career guidance & counseling", "Competitive exam foundation"],
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const achievements = [
    { icon: Trophy, label: "100% Board Exam Results", desc: "Consistent excellence in Class 10 board examinations for 5+ years", color: "from-yellow-500 to-amber-600" },
    { icon: Award, label: "District Level Competitions", desc: "Winners in various academic and cultural competitions", color: "from-blue-500 to-indigo-600" },
    { icon: Brain, label: "Olympiad Achievements", desc: "Multiple winners in national and state level Olympiads", color: "from-purple-500 to-pink-600" },
  ];

  const extracurricular = [
    { name: "Music & Dance", icon: Music, description: "Vocal, instrumental, and dance training", color: "from-purple-400 to-pink-500" },
    { name: "Sports", icon: Trophy, description: "Cricket, football, basketball, athletics & more", color: "from-green-400 to-emerald-500" },
    { name: "Debate & Elocution", icon: Mic, description: "Public speaking and critical thinking", color: "from-blue-400 to-cyan-500" },
    { name: "Art & Craft", icon: Brush, description: "Creative expression through visual arts", color: "from-orange-400 to-amber-500" },
  ];

  const boardExams = [
    { name: "CBSE Board", icon: ScrollText, description: "Central Board of Secondary Education curriculum", color: "from-blue-500 to-cyan-500" },
    { name: "State Board", icon: School, description: "State-level board examination preparation", color: "from-green-500 to-teal-500" },
  ];

  const quickStats = [
    { icon: Medal, label: "Board Toppers", value: "50+", color: "from-yellow-400 to-amber-500" },
    { icon: UsersRound, label: "Students Enrolled", value: "5000+", color: "from-blue-400 to-indigo-500" },
    { icon: Award, label: "Awards Won", value: "100+", color: "from-purple-400 to-pink-500" },
    { icon: TrendingUp, label: "Success Rate", value: "95%", color: "from-green-400 to-emerald-500" },
  ];

  const tabs = [
    { id: "programs", label: "Academic Programs", icon: BookOpen },
    { id: "subjects", label: "Subjects", icon: Target },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ];

  // Animate counters
  useEffect(() => {
    const targetValues = { students: 5000, teachers: 200, subjects: 15, passRate: 100 };
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
        teachers: Math.floor(targetValues.teachers * progress),
        subjects: Math.floor(targetValues.subjects * progress),
        passRate: Math.floor(targetValues.passRate * progress),
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

  // Handle back navigation
  const handleBack = () => {
    setLocation('/');
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  // Render content based on active tab
  const renderContent = () => {
    console.log("Rendering tab:", activeTab);
    
    switch (activeTab) {
      case "programs":
        return renderPrograms();
      case "subjects":
        return renderSubjects();
      case "achievements":
        return renderAchievements();
      default:
        return <div className="text-center py-10">Select a tab to view content</div>;
    }
  };

  // Render Programs
  const renderPrograms = () => (
    <section className="py-4 sm:py-8 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">Our Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span> for Class 1-10
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Tailored programs designed to nurture and develop young minds from primary to secondary level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={i}
                className="group relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3">
                  <div className={`bg-gradient-to-r ${program.color} p-4 sm:p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        {program.grades}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4">{program.level}</h3>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{program.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-3 sm:mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Render Subjects
  const renderSubjects = () => (
    <section className="py-4 sm:py-8 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <span className="text-xs sm:text-sm font-medium text-purple-600">Core Curriculum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subjects</span> We Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Comprehensive curriculum covering essential disciplines from Class 1 to 10
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {subjects.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <div
                key={i}
                className={`group bg-gradient-to-br ${subject.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white transform hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl animate-on-scroll opacity-0 scale-95`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 relative group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-medium text-xs sm:text-sm lg:text-base block group-hover:scale-105 transition-transform duration-300">{subject.name}</span>
                <div className="w-6 sm:w-8 h-0.5 bg-white/50 mx-auto mt-1.5 sm:mt-2 group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Board Preparation */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Board Exam</span> Preparation
            </h3>
            <p className="text-sm sm:text-base text-slate-600">Comprehensive preparation for Class 10 board examinations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {boardExams.map((exam, i) => {
              const Icon = exam.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${exam.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{exam.name}</h4>
                  <p className="text-sm sm:text-base text-slate-600">{exam.description}</p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-blue-600 group-hover:gap-2 sm:group-hover:gap-3 transition-all text-sm sm:text-base">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Extracurricular */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Extracurricular</span> Activities
            </h3>
            <p className="text-sm sm:text-base text-slate-600">Developing well-rounded personalities beyond academics</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {extracurricular.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${activity.color} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">
                    {activity.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  // Render Achievements
  const renderAchievements = () => (
    <section className="py-4 sm:py-8 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            <span className="text-xs sm:text-sm font-medium text-yellow-600">Our Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
            Celebrating <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Academic Excellence</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Our commitment to excellence reflected in results from Class 1 to 10
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <div
                key={i}
                className="group relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-yellow-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3">
                  <div className={`bg-gradient-to-r ${achievement.color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.label}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600">{achievement.desc}</p>
                  <div className="mt-3 sm:mt-4 flex justify-center gap-0.5 sm:gap-1">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Class 10 Special Note */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border-2 border-blue-200">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Class 10 Board Preparation</h3>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Special focus on Class 10 board examinations with comprehensive coaching, 
            mock tests, and personalized guidance to ensure 100% results.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Subject-wise coaching
            </span>
            <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Mock tests
            </span>
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Doubt clearing sessions
            </span>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative text-white py-16 sm:py-20 lg:py-28 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-indigo-900/70" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 md:opacity-20">
          <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 border-4 border-white/20 rounded-full animate-spin-slow" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-bounce-in border border-white/20">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium">Excellence in Education (Class 1-10)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Academics at
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-90 mt-1 sm:mt-2">
                Sri NRI High School
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto px-4">
              Comprehensive education from Class 1 to 10 with a focus on excellence, values, and holistic development
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                Explore Programs
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="-mt-6 sm:-mt-8 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center group animate-on-scroll opacity-0 scale-95 transition-all duration-700"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-gradient-to-r ${stat.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-200">
            {[
              { value: counters.students, label: "Students", icon: Users, suffix: "+" },
              { value: counters.teachers, label: "Teachers", icon: Users, suffix: "+" },
              { value: counters.subjects, label: "Subjects", icon: BookOpen, suffix: "+" },
              { value: counters.passRate, label: "Pass Rate (X)", icon: Award, suffix: "%" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`text-center p-3 sm:p-4 group animate-on-scroll opacity-0 scale-95 transition-all duration-700 ${
                    i < 2 ? 'border-b border-gray-200 md:border-b-0' : ''
                  } ${i % 2 === 0 ? 'border-r border-gray-200 md:border-r-0' : ''}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                    <span className="text-lg sm:text-xl md:text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-nowrap md:flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    console.log("Tab clicked:", tab.id);
                    setActiveTab(tab.id);
                  }}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-white text-slate-600 hover:bg-blue-50 shadow-md"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{tab.label}</span>
                  <span className="xs:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <div className="min-h-[400px]">
        {renderContent()}
      </div>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600" />
        <div className="absolute inset-0 opacity-10 md:opacity-20">
          <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow-delayed" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-on-scroll opacity-0 scale-95 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Ready to Excel?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 px-4">
              Start Your Academic Journey Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join Sri NRI High School and experience excellence in education from Class 1 to 10
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <button 
                onClick={() => handleNavigation("/admissions")}
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3"
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                Apply Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}