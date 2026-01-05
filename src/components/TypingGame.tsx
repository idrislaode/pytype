import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Lesson, getRandomSnippet } from '@/data/pythonLessons';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw, Trophy, Zap, Target, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface TypingGameProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: () => void;
}

const TypingGame = ({ lesson, onBack, onComplete }: TypingGameProps) => {
  const { updateProgress } = useUser();
  const [snippet, setSnippet] = useState('');
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const initGame = useCallback(() => {
    setSnippet(getRandomSnippet(lesson));
    setTypedText('');
    setStartTime(null);
    setEndTime(null);
    setErrors(0);
    setIsComplete(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [lesson]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleRefresh = () => {
    initGame();
    toast.success('Kode baru dimuat!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    
    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }

    // Count errors
    let newErrors = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== snippet[i]) {
        newErrors++;
      }
    }
    setErrors(newErrors);
    setTypedText(value);

    // Check completion
    if (value === snippet) {
      const end = Date.now();
      setEndTime(end);
      setIsComplete(true);
      
      const timeInMinutes = (end - (startTime || end)) / 60000;
      const words = snippet.length / 5;
      const wpm = Math.round(words / timeInMinutes);
      const accuracy = Math.round(((snippet.length - errors) / snippet.length) * 100);
      
      updateProgress(lesson.id, wpm, accuracy);
      toast.success('Level selesai! 🎉');
    }
  };

  const calculateStats = () => {
    if (!startTime) return { wpm: 0, accuracy: 100, time: 0 };
    
    const currentTime = endTime || Date.now();
    const timeInSeconds = (currentTime - startTime) / 1000;
    const timeInMinutes = timeInSeconds / 60;
    const words = typedText.length / 5;
    const wpm = timeInMinutes > 0 ? Math.round(words / timeInMinutes) : 0;
    const accuracy = typedText.length > 0
      ? Math.round(((typedText.length - errors) / typedText.length) * 100)
      : 100;
    
    return { wpm, accuracy, time: Math.round(timeInSeconds) };
  };

  const stats = calculateStats();
  const progress = snippet.length > 0 ? (typedText.length / snippet.length) * 100 : 0;

  const renderCode = () => {
    return snippet.split('').map((char, index) => {
      let className = 'char-pending';
      
      if (index < typedText.length) {
        className = typedText[index] === char ? 'char-correct' : 'char-incorrect';
      } else if (index === typedText.length) {
        className = 'char-current';
      }

      // Apply syntax highlighting
      const line = snippet.slice(0, index + 1).split('\n').pop() || '';
      if (line.trim().startsWith('#')) {
        className += ' syntax-comment';
      }

      return (
        <span key={index} className={className}>
          {char === '\n' ? '↵\n' : char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <span className="text-xs font-medium text-muted-foreground">Level {lesson.id}</span>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <span>{lesson.icon}</span>
                {lesson.title}
              </h1>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            className="border-border/50 hover:border-primary/50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Ganti Kode
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="glass-card rounded-xl p-4 flex items-center gap-3">
            <Zap className="w-5 h-5 text-accent" />
            <div>
              <p className="text-2xl font-bold">{stats.wpm}</p>
              <p className="text-xs text-muted-foreground">WPM</p>
            </div>
          </div>
          <div className="glass-card rounded-xl p-4 flex items-center gap-3">
            <Target className="w-5 h-5 text-primary" />
            <div>
              <p className="text-2xl font-bold">{stats.accuracy}%</p>
              <p className="text-xs text-muted-foreground">Akurasi</p>
            </div>
          </div>
          <div className="glass-card rounded-xl p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-syntax-function" />
            <div>
              <p className="text-2xl font-bold">{stats.time}s</p>
              <p className="text-xs text-muted-foreground">Waktu</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-secondary rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Code Display */}
        <div className="glass-card rounded-2xl overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-syntax-function/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              {lesson.title.toLowerCase().replace(' ', '_')}.py
            </span>
          </div>
          <div className="p-6 code-editor min-h-[200px] relative">
            <pre className="whitespace-pre-wrap leading-relaxed text-base">
              {renderCode()}
            </pre>
          </div>
        </div>

        {/* Hidden Input */}
        <textarea
          ref={inputRef}
          value={typedText}
          onChange={handleInputChange}
          className="sr-only"
          autoFocus
          disabled={isComplete}
        />

        {/* Click to Focus Message */}
        {!isComplete && (
          <p
            className="text-center text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors"
            onClick={() => inputRef.current?.focus()}
          >
            Klik di sini atau langsung ketik untuk mulai...
          </p>
        )}

        {/* Completion Modal */}
        {isComplete && (
          <div className="glass-card rounded-2xl p-8 text-center animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Level Selesai! 🎉</h2>
            <p className="text-muted-foreground mb-6">
              Kamu berhasil menyelesaikan level {lesson.title}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-3xl font-bold text-accent">{stats.wpm}</p>
                <p className="text-xs text-muted-foreground">WPM</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-3xl font-bold text-primary">{stats.accuracy}%</p>
                <p className="text-xs text-muted-foreground">Akurasi</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-3xl font-bold text-accent">{stats.time}s</p>
                <p className="text-xs text-muted-foreground">Waktu</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              ✅ Score tersimpan!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                onClick={handleRefresh}
                className="border-border/50 hover:border-accent/50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Restart Level
              </Button>
              <Button
                onClick={onComplete}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                style={{ boxShadow: '0 0 30px hsl(47, 100%, 62%, 0.3)' }}
              >
                Level Berikutnya
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingGame;
