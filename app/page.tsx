import Image from "next/image";
import {
  Move,
  BatteryCharging,
  Brain,
  Smile,
  Clock,
  Activity,
  CheckCircle2,
  ArrowRight,
  Download,
  Zap,
  Coffee,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-foreground overflow-x-hidden selection:bg-brand-accent/30">
      <Header />

      {/* 1. Hero Section - Linear/Calm Style */}
      <section
        id="hero"
        className="w-full relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/20 rounded-full blur-[100px] -z-10 opacity-60"></div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[80px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Text & Form */}
          <div className="text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm mb-4 animate-fade-in-up mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-600 tracking-wide">
                New: Smart Posture Analysis
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Wellness that works <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                while you work.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              Micro-exercises for office workers to stay active, reduce stress,
              and maintain focus—without leaving your desk.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <WaitlistForm />
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative">
            {/* Abstract Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-brand-accent/30 to-brand-primary/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative z-10">
              {/* Person Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/hero_person1_bg.png"
                  alt="Office worker staying active"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Floating UI Card 1 - Activity */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float-slow hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                      <Activity size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">
                        Daily Goal
                      </p>
                      <p className="text-sm font-bold text-zinc-800">
                        85% Achieved
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating UI Card 2 - Reminder */}
                <div className="absolute top-12 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float-delayed hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-accent/30 rounded-full flex items-center justify-center text-zinc-700">
                      <Clock size={20} />
                    </div>
                    <div className="">
                      <p className="text-xs text-zinc-500 font-medium">
                        Next Break
                      </p>
                      <p className="text-sm font-bold text-zinc-800">
                        in 15 mins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section - Bento Grid */}
      <section id="problem" className="w-full py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Office Reality
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Modern work environments are designed for productivity, not
              biology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-secondary/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                  <Activity />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sedentary Lifestyle</h3>
                <p className="text-zinc-600 text-lg leading-relaxed max-w-md">
                  Sitting for 8+ hours a day slows down metabolism and increases
                  the risk of long-term health issues. It's the "new smoking" of
                  our generation.
                </p>
              </div>
            </div>

            {/* Tall Card */}
            <div className="md:row-span-2 bg-zinc-50 rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-accent/30 rounded-xl flex items-center justify-center mb-6 text-zinc-700">
                  <Brain />
                </div>
                <h3 className="text-xl font-bold mb-3">Mental Fatigue</h3>
                <p className="text-zinc-600">
                  Continuous focus without breaks drains mental energy, leading
                  to burnout and reduced creativity.
                </p>
              </div>
              <div className="mt-8 flex justify-center relative z-0">
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src="/mental_fatigue.png"
                    alt="Mental Fatigue Illustration"
                    fill
                    className="object-contain object-bottom transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-700 group-hover:scale-110 transition-transform">
                <Move />
              </div>
              <h3 className="text-xl font-bold mb-3">Physical Discomfort</h3>
              <p className="text-zinc-600">
                Back and neck pain are the most common complaints of office
                workers.
              </p>
            </div>

            {/* Medium Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-700 group-hover:scale-110 transition-transform">
                <Zap />
              </div>
              <h3 className="text-xl font-bold mb-3">Low Energy</h3>
              <p className="text-zinc-600">
                Afternoon slumps are real. Movement is the best natural energy
                booster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution & Features - Clean Cards */}
      <section id="solution" className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Reclaim Your Well-being
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              A simple, science-backed approach to staying healthy at your desk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1 space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Micro-movements</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Short, 1-5 minute exercises designed to be done in work
                    clothes, right at your desk. No sweat, just stretch.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Reminders</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Gentle nudges to move when you've been sitting too long.
                    Customizable to your schedule.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mental Breaks</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Guided breathing and mindfulness sessions to reset your
                    focus and lower stress levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="glass-card rounded-3xl p-8 relative transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-lg">Today's Routine</h4>
                  <span className="text-xs font-medium bg-zinc-100 px-3 py-1 rounded-full">
                    15 min left
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Neck Release",
                      time: "2 min",
                      icon: Smile,
                      color: "bg-brand-primary/20 text-brand-primary",
                    },
                    {
                      name: "Wrist Stretch",
                      time: "1 min",
                      icon: Move,
                      color: "bg-brand-accent/30 text-zinc-700",
                    },
                    {
                      name: "Deep Breathing",
                      time: "3 min",
                      icon: Brain,
                      color: "bg-brand-secondary/30 text-zinc-800",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mr-4`}
                      >
                        <item.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-zinc-400">{item.time}</p>
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-zinc-200 group-hover:border-brand-accent transition-colors"></div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                  Start Session
                </button>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Personalized Plan", icon: ShieldCheck },
              { label: "Progress Tracking", icon: Activity },
              { label: "Ergonomic Tips", icon: Coffee },
              { label: "Mobile App", icon: Smartphone },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center hover:bg-white hover:shadow-sm transition-all"
              >
                <feature.icon className="w-8 h-8 text-zinc-400 mb-3" />
                <span className="font-medium text-sm text-zinc-700">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Section - Minimal */}
      <section id="pricing" className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Simple Pricing
            </h2>
            <p className="text-zinc-500">
              Invest in your health for less than a cup of coffee a week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-6">$0</div>
              <p className="text-zinc-500 text-sm mb-8">
                Essential desk exercises and basic reminders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={16} className="text-zinc-400" /> 5 Daily
                  Exercises
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={16} className="text-zinc-400" /> Basic
                  Reminders
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-zinc-200 font-medium hover:bg-zinc-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-brand-bg p-8 rounded-3xl border border-brand-accent/50 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                POPULAR
              </div>
              <h3 className="font-bold text-xl mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $4.99
                <span className="text-base font-normal text-zinc-500">/mo</span>
              </div>
              <p className="text-zinc-500 text-sm mb-8">
                Full access to all routines, analytics, and personalization.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={16} className="text-brand-primary" />{" "}
                  Unlimited Routines
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={16} className="text-brand-primary" />{" "}
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={16} className="text-brand-primary" />{" "}
                  Custom Schedule
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="w-full py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to feel better?
          </h2>
          <p className="text-xl text-zinc-500 mb-10 max-w-xl mx-auto">
            Join thousands of professionals who have made wellness a part of
            their daily workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-primary hover:bg-red-300 text-zinc-900 font-semibold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <Download size={20} />
              Download for iOS
            </button>
            <button className="bg-white hover:bg-zinc-50 text-zinc-900 font-semibold py-4 px-12 rounded-full transition-all shadow-md border border-zinc-100">
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              OnSite<span className="text-brand-primary">Fit</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} OnSiteFit.
          </div>
        </div>
      </footer>
    </main>
  );
}
