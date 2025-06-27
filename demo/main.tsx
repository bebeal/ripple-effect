import React from 'react';
import { createRoot } from 'react-dom/client';

import { useRippleEffect } from '../src/index';
import '../src/ripple.css';

const Section: React.FC<{ theme?: 'dark' | 'light'; label: string }> = ({
  theme = 'light',
  label,
}) => {
  const { createRippleEffect } = useRippleEffect();

  const isDark = theme === 'dark';

  return (
    <div
      className={isDark ? 'dark' : undefined}
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDark ? '#111' : '#f0f0f0',
        color: isDark ? '#fff' : '#000',
        height: '100%',
      }}
    >
      <button
        onClick={createRippleEffect}
        style={{
          position: 'relative',
          overflow: 'hidden',
          color: 'inherit',
          padding: '12px 24px',
          borderRadius: '6px',
          border: '2px solid currentColor',
          background: isDark ? '#1e1e1e' : '#ffffff',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
    </div>
  );
};

const TitleSection: React.FC<{ theme?: 'dark' | 'light'; text: string }> = ({ theme = 'light', text }) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={isDark ? 'dark' : undefined}
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDark ? '#111' : '#f0f0f0',
        color: isDark ? '#fff' : '#000',
        height: '100%',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          margin: 0,
          color: 'inherit',
        }}
      >
        {text}
      </h1>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <TitleSection theme="light" text="ripple" />
        <TitleSection theme="dark" text="effect" />
      </div>
      <div style={{ display: 'flex', flex: 2 }}>
        <Section theme="light" label="Light Button" />
        <Section theme="dark" label="Dark Button" />
      </div>
    </div>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
