import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [IsDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme == 'dark'){
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  },[]);
  const toggleTheme = () => {
    if(IsDarkMode){
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
    }
    else{
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.remove('light');
      setIsDarkMode(true);
    }
  }

  return <button onClick={toggleTheme} className={cn("fixed  top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
  )}>
  {IsDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" />)
    : (<Moon className="h-6 w-6 text-blue-900" />
    )}</button>
}