import React from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle, Globe } from 'daneshicons';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';

const AuthPages = () => {
  return (
    <div className="p-1 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Login Card */}
        <div className="rounded-2xl border theme-border theme-bg-card p-6 theme-shadow-md hover:theme-shadow-lg transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E31B23] to-red-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/20">
              <Lock size={24} className="theme-icon text-white" />
            </div>
            <h3 className="text-xl font-black theme-text">Welcome Back</h3>
            <p className="text-sm theme-text-secondary mt-1">Sign in to your account</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold theme-text-secondary block mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" />
                <input type="email" placeholder="you@company.com" className="w-full h-11 pl-10 pr-4 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold theme-text-secondary block mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" />
                <input type="password" placeholder="••••••••" className="w-full h-11 pl-10 pr-10 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
                <EyeOff size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 theme-text-secondary cursor-pointer">
                <input type="checkbox" className="rounded border-theme-border" /> Remember me
              </label>
              <a href="#" className="text-[#E31B23] font-bold hover:underline">Forgot password?</a>
            </div>
            <Button fullWidth iconRight={ArrowRight}>Sign In</Button>
            <p className="text-xs text-center theme-text-tertiary">
              Don't have an account? <a href="#" className="text-[#E31B23] font-bold hover:underline">Sign up</a>
            </p>
          </div>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border theme-border theme-bg-card p-6 theme-shadow-md hover:theme-shadow-lg transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <User size={24} className="theme-icon text-white" />
            </div>
            <h3 className="text-xl font-black theme-text">Create Account</h3>
            <p className="text-sm theme-text-secondary mt-1">Get started in minutes</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold theme-text-secondary block mb-1.5">First Name</label>
                <input type="text" placeholder="John" className="w-full h-11 px-4 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold theme-text-secondary block mb-1.5">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full h-11 px-4 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold theme-text-secondary block mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" />
                <input type="email" placeholder="you@company.com" className="w-full h-11 pl-10 pr-4 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold theme-text-secondary block mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" />
                <input type="password" placeholder="••••••••" className="w-full h-11 pl-10 pr-4 rounded-xl border theme-border theme-bg-secondary text-sm theme-text outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 transition-all" />
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs theme-text-tertiary">
              <input type="checkbox" className="mt-0.5 rounded border-theme-border" />
              <span>I agree to the <a href="#" className="text-[#E31B23] font-bold">Terms of Service</a> and <a href="#" className="text-[#E31B23] font-bold">Privacy Policy</a></span>
            </div>
            <Button variant="secondary" fullWidth iconRight={ArrowRight}>Create Account</Button>
          </div>
        </div>
      </div>

      {/* Social Login Bar */}
      <div className="mt-6 p-4 rounded-2xl border theme-border-secondary theme-bg-secondary flex flex-wrap items-center justify-center gap-4 text-xs theme-text-tertiary">
        <span className="font-bold">Or continue with</span>
        <div className="flex items-center gap-3">
          {['Google', 'GitHub', 'Microsoft'].map(provider => (
            <button key={provider} className="flex items-center gap-2 px-4 py-2 rounded-xl border theme-border theme-bg-card hover:theme-shadow-sm transition-all cursor-pointer theme-text-secondary hover:theme-text text-xs font-bold">
              <Globe size={14} className="theme-icon" /> {provider}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
