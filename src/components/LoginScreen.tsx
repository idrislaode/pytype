import React, { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Terminal, Code2, Sparkles, Github, Instagram, Facebook, Youtube } from 'lucide-react';

const LoginScreen = () => {
  const [inputName, setInputName] = useState('');
  const { setUserName } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUserName(inputName.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-up flex-1 flex flex-col justify-center">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 animate-float shadow-lg">
            <Terminal className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-accent">.</span>
            <span className="text-primary">py</span>
            <span className="text-foreground">Type</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Belajar Python sambil latihan mengetik
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-xl p-4 text-center">
            <Code2 className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">100 Level</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <Terminal className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Real Python</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Progress</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Masukkan Nama Kamu
          </label>
          <Input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Contoh: Bowo"
            className="w-full bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground mb-4 h-12 text-lg"
            autoFocus
          />
          <Button
            type="submit"
            disabled={!inputName.trim()}
            className="w-full h-12 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all"
            style={{ boxShadow: '0 0 30px hsl(47, 100%, 62%, 0.3)' }}
          >
            Mulai Belajar
          </Button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Dengan komentar penjelasan Bahasa Indonesia
        </p>
      </div>

      {/* Credits Footer */}
      <footer className="w-full max-w-md mt-8 pb-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-3">
            Created by <span className="text-accent font-semibold">Idrislaode</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/idrsldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@idrsldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/idrsldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/idrsldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@idrsldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginScreen;
