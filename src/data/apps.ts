export type AppPlatform = 'ios' | 'macos';

export type AppMeta = {
  id: 'puzzle' | 'clipslot';
  name: string;
  shortDescription: string;
  tagline: string;
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
    platforms: ['ios', 'macos'],
    iosAppStoreUrl: 'https://example.com/puzzle-ios',
    macBuyProductId: 'puzzle-mac',
  },
  {
    id: 'clipslot',
    name: 'ClipSlot',
    shortDescription: '固定スロット型のクリップボードマネージャ。',
    tagline: 'よく使うコピーを、即座に呼び出す。',
    platforms: ['ios', 'macos'],
    iosAppStoreUrl: 'https://example.com/clipslot-ios',
    macBuyProductId: 'clipslot-mac',
  },
];
