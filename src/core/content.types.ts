import type { Component } from 'vue';

// Built-in content types
export type ContentType =
  | 'tool'
  | 'cheatsheet'
  | 'template'
  | 'policy'
  | 'script'
  | 'command'
  | 'link'
  | 'report'
  | 'note'
  | 'guide'
  | 'snippet'
  | (string & {}); // Allow custom/dynamic types

export interface ContentItem {
  type: ContentType;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  component: () => Promise<Component>;
  icon?: Component;
  category?: string;
  layoutMode?: 'default' | 'wide';
}
