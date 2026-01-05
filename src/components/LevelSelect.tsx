import React, { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { pythonLessons, Lesson, categories } from '@/data/pythonLessons';
import { Button } from '@/components/ui/button';
import { Check, Lock, Trophy, LogOut, Zap, ChevronDown, ChevronRight } from 'lucide-react';

interface LevelSelectProps {
  onSelectLevel: (lesson: Lesson) => void;
}

const LevelSelect = ({ onSelectLevel }: LevelSelectProps) => {
  const { userName, progress, logout } = useUser();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(categories);

  const completedLevels = Object.keys(progress).filter(
    (key) => progress[parseInt(key)]?.completed
  ).length;

  const totalWpm = Object.values(progress).reduce(
    (sum, p) => sum + (p?.bestWpm || 0),
    0
  );
  const avgWpm = completedLevels > 0 ? Math.round(totalWpm / completedLevels) : 0;

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const getLessonsByCategory = (category: string) => {
    return pythonLessons.filter((lesson) => lesson.category === category);
  };

  const getCategoryProgress = (category: string) => {
    const lessons = getLessonsByCategory(category);
    const completed = lessons.filter((l) => progress[l.id]?.completed).length;
    return { completed, total: lessons.length };
  };

  const isLevelLocked = (lesson: Lesson, index: number) => {
    if (index === 0) return false;
    const prevLesson = pythonLessons[index - 1];
    return !progress[prevLesson.id]?.completed;
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              Halo, <span className="text-accent">{userName}</span>! 👋
            </h1>
            <p className="text-muted-foreground">100 level Python menanti kamu</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Keluar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedLevels}/100</p>
                <p className="text-xs text-muted-foreground">Level Selesai</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{avgWpm}</p>
                <p className="text-xs text-muted-foreground">Rata-rata WPM</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-syntax-function/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-syntax-function" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedLevels}%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="glass-card rounded-xl p-4 mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress Keseluruhan</span>
            <span className="text-accent font-medium">{completedLevels}/100 Level</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${completedLevels}%` }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category) => {
            const categoryProgress = getCategoryProgress(category);
            const lessons = getLessonsByCategory(category);
            const isExpanded = expandedCategories.includes(category);
            const allCompleted = categoryProgress.completed === categoryProgress.total;

            return (
              <div key={category} className="glass-card rounded-xl overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div className="text-left">
                      <h2 className="font-semibold text-lg flex items-center gap-2">
                        {category}
                        {allCompleted && (
                          <span className="text-accent text-sm">✓</span>
                        )}
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        {categoryProgress.completed}/{categoryProgress.total} level selesai
                      </p>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{
                        width: `${(categoryProgress.completed / categoryProgress.total) * 100}%`,
                      }}
                    />
                  </div>
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div className="border-t border-border/50 p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {lessons.map((lesson) => {
                      const globalIndex = pythonLessons.findIndex((l) => l.id === lesson.id);
                      const levelProgress = progress[lesson.id];
                      const isCompleted = levelProgress?.completed;
                      const isLocked = isLevelLocked(lesson, globalIndex);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => !isLocked && onSelectLevel(lesson)}
                          disabled={isLocked}
                          className={`rounded-lg p-4 text-left transition-all duration-300 border ${
                            isCompleted
                              ? 'bg-accent/10 border-accent/30'
                              : isLocked
                              ? 'opacity-50 cursor-not-allowed bg-muted/50 border-transparent'
                              : 'bg-secondary/50 border-border/50 hover:border-accent/50 hover:bg-secondary cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                                isCompleted
                                  ? 'bg-accent/20'
                                  : isLocked
                                  ? 'bg-muted'
                                  : 'bg-primary/20'
                              }`}
                            >
                              {isLocked ? (
                                <Lock className="w-4 h-4 text-muted-foreground" />
                              ) : (
                                lesson.icon
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-muted-foreground">
                                  #{lesson.id}
                                </span>
                                {isCompleted && (
                                  <Check className="w-3 h-3 text-accent" />
                                )}
                              </div>
                              <h3 className="font-medium text-sm truncate">
                                {lesson.title}
                              </h3>
                              {isCompleted && levelProgress && (
                                <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                                  <span>{levelProgress.bestWpm} WPM</span>
                                  <span>{levelProgress.bestAccuracy}%</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;
