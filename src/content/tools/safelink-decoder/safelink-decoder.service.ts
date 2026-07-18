import { translate as t } from '@/plugins/i18n.plugin';

export function decodeSafeLinksURL(safeLinksUrl: string) {
  if (!safeLinksUrl.match(/\.safelinks\.protection\.outlook\.com/)) {
    throw new Error('Invalid SafeLinks URL provided');
  }

  return new URL(safeLinksUrl).searchParams.get('url');
}
