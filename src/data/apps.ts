export type AppPlatform = 'ios' | 'macos';

export type AppMeta = {
  id: 'puzzle' | 'clipslot';
  name: string;
  shortDescription: string;
  tagline: string;
  shortDescription_en: string;
  tagline_en: string;
  platforms: AppPlatform[];
  iosAppStoreUrl?: string;
  macBuyProductId?: string;
};

export const apps: AppMeta[] = [
  {
    id: 'puzzle',
    name: 'Puzzle',
    shortDescription: 'ウィンドウをパズルのように素早く整列させるツール。',
    tagline: '開いているウィンドウを、一瞬で「ちょうどいい配置」に。',
    shortDescription_en: 'Quickly arrange windows like a puzzle.',
    tagline_en: 'Instantly snap open windows to the "perfect layout".',
    platforms: ['ios', 'macos'],
    iosAppStoreUrl: 'https://example.com/puzzle-ios',
    macBuyProductId: 'puzzle-mac',
  },
  {
    id: 'clipslot',
    name: 'ClipSlot',
    shortDescription: '固定スロット型のクリップボードマネージャ。',
    tagline: 'よく使うコピーを、即座に呼び出す。',
    shortDescription_en: 'Fixed-slot clipboard manager.',
    tagline_en: 'Instantly recall frequently used clips.',
    platforms: ['ios', 'macos'],
    iosAppStoreUrl: 'https://example.com/clipslot-ios',
    macBuyProductId: 'clipslot-mac',
  },
];
