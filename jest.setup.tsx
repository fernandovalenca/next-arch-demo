import '@testing-library/jest-dom';

import type { ImageProps } from 'next/image';
import { createElement } from 'react';

// Mock do Next Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, preload: _, ...rest }: ImageProps) => {
    return createElement('img', { src, alt, ...rest });
  },
}));

// Mock global fetch
global.fetch = global.fetch || jest.fn();
