'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To ensure the theme state is only accessed after the component is mounted
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="p-1 rounded-full  bg-gray-200 dark:bg-gray-50 hover:ring-2 hover:ring-gray-400"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <span className="text-xl">🌙</span>
      ) : (
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
}
