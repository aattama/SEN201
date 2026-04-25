/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Check,
  AlertCircle,
  Award,
  List,
  Moon,
  Sun
} from 'lucide-react';
import { questions, Question } from './data/questions';

type View = 'landing' | 'quiz' | 'result' | 'review';
type Theme = 'light' | 'dark';

const EXAM_DURATION = 3600; // 60 minutes in seconds

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const startQuiz = () => {
    setQuizQuestions([...questions].sort(() => Math.random() - 0.5));
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeft(EXAM_DURATION);
    setIsFinished(false);
    setView('quiz');
  };

  const finishQuiz = useCallback(() => {
    if (isFinished) return;
    setIsFinished(true);
    let totalScore = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setView('result');
  }, [userAnswers, quizQuestions, isFinished]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (view === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft, finishQuiz]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index: number) => {
    const currentQ = quizQuestions[currentQuestionIndex];
    setUserAnswers({ ...userAnswers, [currentQ.id]: index });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (idx: number) => {
    setCurrentQuestionIndex(idx);
  };

  // Render Logic
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center"
          >
            <div className="flex justify-end w-full max-w-3xl mb-8">
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-200 dark:shadow-blue-900/20">
              <BookOpen className="text-white w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
              Software Engineering CBT
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Course Code: SEN 201 <br/>
              Test your knowledge on Computer Systems, SDLC, UML, Testing, and Quality Management with our comprehensive practice exam.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <Clock className="w-6 h-6 text-blue-500 mb-3 mx-auto" />
                <h3 className="font-semibold mb-1 text-slate-900 dark:text-white">Time Limit</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">60 Minutes</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <List className="w-6 h-6 text-blue-500 mb-3 mx-auto" />
                <h3 className="font-semibold mb-1 text-slate-900 dark:text-white">Questions</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{questions.length} Items</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <Award className="w-6 h-6 text-blue-500 mb-3 mx-auto" />
                <h3 className="font-semibold mb-1 text-slate-900 dark:text-white">Pass Mark</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">50% Overall</p>
              </div>
            </div>

            <button 
              id="start-exam-btn"
              onClick={startQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-200 dark:shadow-blue-900/20 active:scale-95"
            >
              Start Practice Exam
            </button>
          </motion.div>
        )}

        {view === 'quiz' && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-screen"
          >
            {/* Quiz Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white leading-tight">SEN 201 CBT</h2>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">Software Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-8">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold transition-colors ${timeLeft < 300 ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                  <Clock className="w-4 h-4" />
                  {formatTime(timeLeft)}
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </button>
                  <button 
                    id="submit-exam-btn-header"
                    onClick={finishQuiz}
                    className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-800 dark:hover:bg-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
              {/* Question Sidebar */}
              <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto hidden lg:block p-6 transition-colors">
                <h3 className="font-bold text-sm text-slate-400 dark:text-slate-500 uppercase mb-4 tracking-wider">Navigation</h3>
                <div className="grid grid-cols-5 gap-2">
                  {quizQuestions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all border ${
                        idx === currentQuestionIndex 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100 dark:shadow-none' 
                          : userAnswers[q.id] !== undefined
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/30'
                          : 'bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-6 md:p-12 transition-colors">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">
                      {quizQuestions[currentQuestionIndex].topic}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">Q{currentQuestionIndex + 1}.</span>
                      {quizQuestions[currentQuestionIndex].text}
                    </h2>
                  </div>

                  <div className="space-y-4 mb-12">
                    {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        className={`w-full p-5 rounded-2xl text-left transition-all border flex items-center group ${
                          userAnswers[quizQuestions[currentQuestionIndex].id] === idx
                            ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 ring-2 ring-blue-100 dark:ring-blue-900/30 shadow-md'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center mr-4 font-bold text-sm transition-colors ${
                          userAnswers[quizQuestions[currentQuestionIndex].id] === idx
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className={`text-lg font-medium transition-colors ${
                          userAnswers[quizQuestions[currentQuestionIndex].id] === idx ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                        }`}>
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                    <button 
                      onClick={prevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="flex items-center gap-2 px-6 py-2 rounded-xl text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" /> Previous
                    </button>
                    <div className="text-slate-400 dark:text-slate-500 font-medium hidden sm:block">
                      {currentQuestionIndex + 1} of {quizQuestions.length}
                    </div>
                    {currentQuestionIndex < quizQuestions.length - 1 ? (
                      <button 
                        onClick={nextQuestion}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-100 dark:shadow-none"
                      >
                        Next Question <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button 
                        onClick={finishQuiz}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-xl font-bold transition-all shadow-md shadow-green-100 dark:shadow-none"
                      >
                        Finish Exam
                      </button>
                    )}
                  </div>
                </div>
              </main>
            </div>
            
            {/* Mobile Progress */}
            <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 sticky bottom-0 z-10 shadow-lg transition-colors">
              <div className="flex justify-between text-xs font-bold text-slate-400 dark:text-slate-500 mb-2">
                <span>PROGRESS</span>
                <span>{Math.round(((Object.keys(userAnswers).length) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(Object.keys(userAnswers).length / quizQuestions.length) * 100}%` }}
                  className="bg-blue-600 dark:bg-blue-500 h-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        {view === 'result' && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto px-6 py-20 flex flex-col items-center text-center"
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl ${
              score >= (quizQuestions.length / 2) ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
            }`}>
              {score >= (quizQuestions.length / 2) ? <Award className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
            </div>
            
            <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">Exam Results</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">Thank you for completing the SEN 201 Practice Exam.</p>

            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm w-full mb-12 flex flex-col items-center transition-colors">
              <span className="text-sm font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-4">Your Overall Score</span>
              <div className="text-7xl font-black text-slate-900 dark:text-white mb-2">
                {score}<span className="text-slate-300 dark:text-slate-700 text-4xl font-light">/{quizQuestions.length}</span>
              </div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-8">
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>
              
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-bold mb-1">
                    <CheckCircle2 className="w-5 h-5" /> Correct
                  </div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{score}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400 font-bold mb-1">
                    <XCircle className="w-5 h-5" /> Incorrect
                  </div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{quizQuestions.length - score}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button 
                onClick={startQuiz}
                className="flex-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-white transition-all shadow-lg active:scale-95"
              >
                <RotateCcw className="w-5 h-5" /> Retake Exam
              </button>
              <button 
                onClick={() => setView('review')}
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95 text-lg"
              >
                Review Answers
              </button>
            </div>
            <button 
              onClick={() => setView('landing')}
              className="mt-8 text-slate-400 dark:text-slate-500 font-semibold hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Back to Home
            </button>
          </motion.div>
        )}

        {view === 'review' && (
          <motion.div 
            key="review"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-screen"
          >
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm transition-colors">
              <button 
                onClick={() => setView('result')}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 dark:text-slate-400"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-white text-lg">Detailed Review</h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Analysis of all answers</p>
              </div>
            </header>

            <main className="flex-1 bg-slate-50 dark:bg-slate-950 overflow-y-auto px-4 py-8 transition-colors">
              <div className="max-w-3xl mx-auto space-y-8">
                {quizQuestions.map((q, qIdx) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  
                  return (
                    <div key={q.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
                      <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full uppercase tracking-wide">
                            Q{qIdx + 1}: {q.topic}
                          </span>
                          {isCorrect ? (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                              <Check className="w-4 h-4" /> Correct
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-red-500 dark:text-red-400 font-bold text-sm bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
                              <XCircle className="w-4 h-4" /> Incorrect
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">{q.text}</h3>

                        <div className="space-y-3">
                          {q.options.map((opt, oIdx) => {
                            let statusClass = "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400";
                            let icon = null;

                            if (oIdx === q.correctAnswer) {
                              statusClass = "border-green-200 dark:border-green-900/30 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 ring-1 ring-green-500 dark:ring-green-700";
                              icon = <Check className="w-5 h-5 text-green-600 dark:text-green-400" />;
                            } else if (oIdx === userAns) {
                              statusClass = "border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 ring-1 ring-red-500 dark:ring-red-700";
                              icon = <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
                            }

                            return (
                              <div key={oIdx} className={`p-4 rounded-2xl border flex items-center transition-all ${statusClass}`}>
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mr-4 font-bold text-sm ${
                                  oIdx === q.correctAnswer ? 'bg-green-600 text-white' : 
                                  oIdx === userAns ? 'bg-red-500 text-white' : 
                                  'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </div>
                                <span className="flex-1 font-semibold">{opt}</span>
                                {icon}
                              </div>
                            );
                          })}
                        </div>
                        
                        {!isCorrect && (
                          <div className="mt-6 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex gap-3 text-sm text-blue-800 dark:text-blue-300 leading-relaxed transition-colors">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <div>
                                <p className="font-bold mb-1 uppercase tracking-tight text-xs">Explanatory Note</p>
                                <p>The correct answer is <strong>{q.options[q.correctAnswer]}</strong>. Refer to the Software Engineering (SEN 201) course materials for details on {q.topic}.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                <div className="pt-10 flex justify-center">
                  <button 
                    onClick={() => setView('result')}
                    className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-slate-800 dark:hover:bg-white transition-all active:scale-95"
                  >
                    Back to Result
                  </button>
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

