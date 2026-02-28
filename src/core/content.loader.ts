import type { ContentItem, ContentType } from './content.types';
import type { ToolWithCategory } from './tool.types';

// Force reload - all content types loaded
// Pattern: matches any folder under src/content/**/index.ts
// This allows unlimited content types without modifying this file
const modules = import.meta.glob(
  '@/content/**/index.ts',
  { eager: true }
);

const normalizeSlug = (value: string) => value.trim().toLowerCase();

type CategoryDef = { name: string; items: string[] };

// Load all category definitions (tools, cheatsheets, links, etc.)
const categoryModules = import.meta.glob(
  '@/content/**/categories.ts',
  { eager: true }
);

const categoryMapByType = new Map<string, Map<string, string>>();

Object.entries(categoryModules).forEach(([path, mod]: any) => {
  const match = path.match(/\/content\/([^/]+)\/categories\.ts$/);
  if (!match) return;
  const type = match[1];

  const exported = mod?.default ?? Object.values(mod).find((v: any) => Array.isArray(v));
  if (!Array.isArray(exported)) return;

  const slugToCategory = new Map<string, string>();
  (exported as CategoryDef[]).forEach((cat) => {
    if (!cat?.name || !Array.isArray(cat.items)) return;
    cat.items.forEach((slug) => {
      slugToCategory.set(normalizeSlug(slug), cat.name);
    });
  });

  categoryMapByType.set(type, slugToCategory);
});

const getCategoryForItem = (type: string, slug: string) => {
  const candidates = [type];
  if (type.endsWith('s')) {
    candidates.push(type.slice(0, -1));
  } else {
    candidates.push(`${type}s`);
  }

  for (const candidate of candidates) {
    const map = categoryMapByType.get(candidate);
    const hit = map?.get(normalizeSlug(slug));
    if (hit) return hit;
  }

  return undefined;
};

const rawContents: ContentItem[] = Object.values(modules)
  .filter((m: any) => m && m.content)
  .map((m: any) => m.content);

export const contents: ContentItem[] = rawContents.map((item: any) => {
  const mappedCategory = getCategoryForItem(item.type, item.slug);
  if (mappedCategory && (!item.category || item.category === 'Uncategorized')) {
    return { ...item, category: mappedCategory };
  }
  return item;
});

// Auto-discover available content types from loaded contents
export const AVAILABLE_CONTENT_TYPES: ContentType[] = Array.from(
  new Set(contents.map(item => item.type))
) as ContentType[];

export const toolsWithCategory: ToolWithCategory[] = contents
  .filter(c => c.type === 'tool')
  .map((tool: any) => ({
    ...tool,
    category: getCategoryForItem('tools', tool.slug) || getCategoryForItem('tool', tool.slug) || 'Uncategorized',
    path: `/${tool.type}/${tool.slug}`,
    name: tool.title,
    isNew: tool.isNew || false,
  }));
