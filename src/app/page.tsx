'use client';

import { useTheme } from 'next-themes';
import { Moon, SunDim } from '@phosphor-icons/react';
import { Button } from '@/components/Button';
import { MouseEvent, useState } from 'react';

export default function Home() {
  const [calc, setCalc] = useState<
    { current: string; total: string } | undefined
  >();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const Icon = theme === 'dark' ? SunDim : Moon;

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const { value } = evt.currentTarget;

    if (value === 'reset') {
      // Reset state
      setCalc(undefined);
      return;
    }

    if (value === '=') {
      // Handle equal
      setCalc();
      return;
    }

    if (isNaN(Number(value))) {
      // Handle operators
      console.log(value, Number(value), isNaN(Number(value)));
      return;
    }

    // Handle numbers
    setCalc((prev) => ({
      ...prev,
    }));
  };

  return (
    <main className="flex h-full items-center justify-center p-4 md:p-0">
      <div
        className={
          'rounded-2xl shadow-lg dark:shadow-bg-neutral-900 px-8 pb-24 pt-8 bg-white dark:bg-neutral-900 max-w-md'
        }
      >
        <header className="mb-24 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={'w-3 h-3 rounded-full bg-red-500'} />
            <span className={'w-3 h-3 rounded-full bg-yellow-500'} />
            <span className={'w-3 h-3 rounded-full bg-green-500'} />
          </div>

          <button
            onClick={handleThemeChange}
            className="p-2 bg-transparent inline-flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-gray-100 transition-colors ease-in-out duration-300"
          >
            <Icon className="h-6 w-6" />
          </button>
        </header>

        <h1 className="font-bold text-3xl tracking-wide">
          <span className="text-orange-500">C</span>alculator
        </h1>

        <section className="my-16 w-full text-6xl text-right font-light">
          {!calc ? (
            <div className="w-10 my-12 opacity-10 h-1 ml-auto rounded bg-gray-800 dark:bg-gray-200 animate-pulse" />
          ) : (
            calc.total
          )}
        </section>

        <section className="grid grid-cols-4 gap-6">
          {/* First Row */}
          <Button
            onClick={handleButtonClick}
            value="reset"
            variant="action"
            className={'!w-[unset] !justify-start col-span-2 px-8 !rounded-2xl'}
          >
            AC
          </Button>
          <Button onClick={handleButtonClick} value="%" variant="action">
            %
          </Button>
          <Button onClick={handleButtonClick} value="/" variant="action">
            ÷
          </Button>

          {/* Second Row */}
          <Button onClick={handleButtonClick} value="7">
            7
          </Button>
          <Button onClick={handleButtonClick} value="8">
            8
          </Button>
          <Button onClick={handleButtonClick} value="9">
            9
          </Button>
          <Button onClick={handleButtonClick} value="*" variant="action">
            x
          </Button>

          {/* Third Row */}
          <Button onClick={handleButtonClick} value="4">
            4
          </Button>
          <Button onClick={handleButtonClick} value="5">
            5
          </Button>
          <Button onClick={handleButtonClick} value="6">
            6
          </Button>
          <Button onClick={handleButtonClick} value="-" variant="action">
            -
          </Button>

          {/* Fourth Row */}
          <Button onClick={handleButtonClick} value="1">
            1
          </Button>
          <Button onClick={handleButtonClick} value="2">
            2
          </Button>
          <Button onClick={handleButtonClick} value="3">
            3
          </Button>
          <Button onClick={handleButtonClick} value="+" variant="action">
            +
          </Button>

          {/* Fifth Row */}
          <Button
            onClick={handleButtonClick}
            value="0"
            className={'!w-[unset] !justify-start col-span-2 px-8 !rounded-2xl'}
          >
            0
          </Button>
          <Button value=".">.</Button>
          <Button onClick={handleButtonClick} value="=" variant="action">
            =
          </Button>
        </section>
      </div>
    </main>
  );
}
