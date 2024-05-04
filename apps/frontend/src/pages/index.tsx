import React from 'react';
import { ModeToggle } from '@components/ModeToggle/ModeToggle';
import { translation } from '@i18n/i18n';

export function Index() {
  return (
    <div>
      {translation('hello')}
      <ModeToggle />
    </div>
  );
}

export default Index;
