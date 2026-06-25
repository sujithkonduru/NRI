// src/pages/Home.jsx
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import {
  BookOpen,
  Users,
  Award,
  Zap,
  ArrowRight,
  Star,
  Phone,
  MapPin,
  ChevronDown,
  GraduationCap,
  Calendar,
  Heart,
  Target,
  Globe,
  Mail,
  Clock,
  User,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Building2,
  Library,
  FlaskConical,
  Music,
  Trophy,
  Laptop,
  Bus,
  Utensils,
  Shield,
  Play,
  Quote,
  Crown,
} from "lucide-react";

export default function Home() {
  const [location, setLocation] = useLocation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      desc: "Top-notch curriculum with experienced teachers and proven results",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    },
    {
      icon: Zap,
      title: "Modern Facilities",
      desc: "Smart classrooms, advanced labs, and world-class sports facilities",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      desc: "Qualified and dedicated teaching staff committed to student success",
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop",
    },
    {
      icon: Star,
      title: "Holistic Growth",
      desc: "Focus on academics, personality development, and life skills",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1544717297-fa95f6ee7e7b?w=400&h=300&fit=crop",
    },
  ];

  const stats = [
    { number: "5000+", label: "Students", icon: Users },
    { number: "95%", label: "Pass Rate", icon: Award },
    { number: "200+", label: "Faculty", icon: GraduationCap },
    { number: "25+", label: "Years of Excellence", icon: Trophy },
  ];

  const programs = [
    {
      title: "Primary School",
      desc: "Building strong foundations for young minds",
      icon: BookOpen,
      color: "from-blue-400 to-blue-600",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSei_VmyetCSU_AMfRjBW0Ni7ZLv7JRUFi5SUyRUJXLgQ&s=10",
    },
    {
      title: "Middle School",
      desc: "Developing critical thinking and problem-solving skills",
      icon: Target,
      color: "from-green-400 to-green-600",
      image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEgYtryOqZfcQ/articleshare-shrink_800/B56Z0OmaGmHIAI-/0/1774066443065?e=2147483647&v=beta&t=e9JZ5qRhJiDOYhaTtDn3OP10fHP7WrqOvhFHEuTMCgY",
    },
    {
      title: "High School",
      desc: "Preparing students for college and beyond",
      icon: GraduationCap,
      color: "from-purple-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "Sri NRI has transformed my child's confidence and academic performance. The teachers are exceptional!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Rahul Patel",
      role: "Alumni",
      content: "The skills and values I learned at Sri NRI have been instrumental in my career success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Mehta",
      role: "Teacher",
      content: "Working at Sri NRI has been incredibly rewarding. The school truly cares about holistic education.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const facilities = [
    { name: "Smart Classrooms", icon: Laptop, image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=200&h=150&fit=crop" },
    { name: "Science Labs", icon: FlaskConical, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=150&fit=crop" },
    { name: "Library", icon: Library, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=150&fit=crop" },
    { name: "Music Room", icon: Music, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=150&fit=crop" },
    { name: "Sports Arena", icon: Trophy, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=150&fit=crop" },
    { name: "Bus Service", icon: Bus, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=150&fit=crop" },
    { name: "Cafeteria", icon: Utensils, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop" },
    { name: "Security", icon: Shield, image: "https://images.unsplash.com/photo-1557599443-2071a2df9c19?w=200&h=150&fit=crop" },
  ];

  const activities = [
    { name: "Sports Day", image: "https://images.unsplash.com/photo-1461896836934-b6d4b5f3f1a8?w=400&h=300&fit=crop" },
    { name: "Science Fair", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop" },
    { name: "Cultural Fest", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" },
  ];

  const handleNavigation = (href) => {
    setLocation(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 animate-sparkle" />
                <span className="text-sm font-medium">Excellence in Education Since 1995</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Building Future Leaders Through
                <span className="block text-blue-300">
                  Quality Education
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Sri NRI High School is committed to providing excellence in
                education with modern facilities, experienced faculty, and a
                holistic approach to student development.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => handleNavigation("/admissions")}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Apply Admission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleNavigation("/facilities")}
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  Explore Campus
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                    >
                      <div className="flex justify-center mb-1">
                        <Icon className="w-5 h-5 text-blue-300" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative">
                <img
                  src="https://content3.jdmagicbox.com/v2/comp/tirupati/l1/9999px877.x877.171014123524.c5l1/catalogue/sri-nri-english-medium-school-tiruchanoor-tirupati-schools-t9oqqq8aml.jpg"
                  alt="Happy Students"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl" />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">95% Pass Rate</p>
                      <p className="text-xs text-gray-500">Academic Excellence</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float delay-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">5000+ Students</p>
                      <p className="text-xs text-gray-500">Happy Learners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
                <Crown className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">About Our School</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Nurturing Young Minds for a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brighter Future</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Sri NRI High School has been a beacon of educational excellence since 1995. 
                We are dedicated to providing a nurturing environment where students can thrive 
                academically, socially, and personally.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">Experienced and dedicated faculty</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">State-of-the-art facilities and infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">Focus on holistic development</span>
                </li>
              </ul>
              <Button
                onClick={() => handleNavigation("/about")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative animate-fadeInRight">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_N5tuPS_z9vpmWuV6iCSo2uYrvmmX92Wnp4e2AupccQ&s=10"
                alt="School Campus"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section with Images */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Our Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive education programs designed for every stage of your child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                    <p className="text-slate-600 mb-4">{program.desc}</p>
                    <button
                      onClick={() => handleNavigation("/academics")}
                      className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full mb-4">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Sri NRI?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover what makes our school the perfect choice for your child's education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute bottom-4 left-4 bg-gradient-to-r ${item.color} p-2 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* School Activities */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">School Life</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Vibrant School Life
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond academics, we offer a rich tapestry of activities and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{activity.name}</h3>
                  <p className="text-sm opacity-90">Join the fun and learning</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Our Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              World-class infrastructure to ensure the best learning experience
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-slate-700 text-sm">{facility.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Quote className="w-4 h-4" />
              <span className="text-sm font-medium">Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Real experiences from parents, students, and teachers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    activeTestimonial === i ? "block animate-fadeIn" : "hidden"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-white/20 mb-4 object-cover"
                    />
                    <Quote className="w-8 h-8 opacity-50 mb-2" />
                    <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-75">{testimonial.role}</p>
                  </div>
                </div>
              ))}

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === i ? "w-8 bg-white" : "bg-white/30"
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&h=400&fit=crop"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white animate-fadeInUp max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 animate-sparkle" />
              <span className="font-medium">Ready to Join Sri NRI?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Start Your Journey Towards Excellence
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Give your child the gift of quality education and a bright future at Sri NRI High School
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleNavigation("/admissions")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleNavigation("/contact")}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Sri NRI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing quality education since 1995. Building future leaders
                through excellence in education.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => handleNavigation("/")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/academics")} className="hover:text-white transition-colors">
                    Academics
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/admissions")} className="hover:text-white transition-colors">
                    Admissions
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/facilities")} className="hover:text-white transition-colors">
                    Facilities
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 123 456 7890
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@srinri.edu.in
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  Mon-Fri: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                City Center,<br />
                India - 123456
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Sri NRI High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}