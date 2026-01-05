import React, { useState } from 'react';
import { useUser, UserProvider } from '@/contexts/UserContext';
import LoginScreen from '@/components/LoginScreen';
import LevelSelect from '@/components/LevelSelect';
import TypingGame from '@/components/TypingGame';
import { Lesson, pythonLessons, getLessonById } from '@/data/pythonLessons';
import { Helmet } from 'react-helmet';

type Screen = 'login' | 'levels' | 'game';

const AppContent = () => {
  const { isLoggedIn } = useUser();
  const [currentScreen, setCurrentScreen] = useState<Screen>(isLoggedIn ? 'levels' : 'login');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  React.useEffect(() => {
    if (isLoggedIn && currentScreen === 'login') {
      setCurrentScreen('levels');
    } else if (!isLoggedIn) {
      setCurrentScreen('login');
    }
  }, [isLoggedIn, currentScreen]);

  const handleSelectLevel = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentScreen('game');
  };

  const handleBack = () => {
    setCurrentScreen('levels');
    setSelectedLesson(null);
  };

  const handleComplete = () => {
    if (selectedLesson) {
      const nextLesson = getLessonById(selectedLesson.id + 1);
      if (nextLesson) {
        setSelectedLesson(nextLesson);
      } else {
        setCurrentScreen('levels');
        setSelectedLesson(null);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>.pyType - Belajar Python Sambil Latihan Mengetik</title>
        <meta
          name="description"
          content="Aplikasi latihan mengetik kode Python dengan penjelasan Bahasa Indonesia. Belajar Python dari dasar dengan 10 level bertahap."
        />
      </Helmet>
      
      {currentScreen === 'login' && <LoginScreen />}
      {currentScreen === 'levels' && <LevelSelect onSelectLevel={handleSelectLevel} />}
      {currentScreen === 'game' && selectedLesson && (
        <TypingGame
          lesson={selectedLesson}
          onBack={handleBack}
          onComplete={handleComplete}
        />
      )}
    </>
  );
};

const Index = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default Index;
