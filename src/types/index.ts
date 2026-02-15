import { ReactNode } from 'react';

export interface TabsItem {
  key: string;
  label: ReactNode;
}

export interface CachesItem {
  name: string;
  ele: ReactNode;
}

export type LifeCircle = (() => void | (() => void)) & { id?: string };
