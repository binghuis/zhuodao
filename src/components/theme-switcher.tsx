'use client';

import { MoonIcon } from '@/icons/moon';
import { SunIcon } from '@/icons/sun';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(isSelected ? 'dark' : 'light');
  }, [isSelected, setTheme]);

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <MoonIcon className={className} /> : <SunIcon className={className} />
      }
    />
  );
}
