export type AppPlatform = 'macos';

export type AppVersion = {
  name: string;
  price: string;
  iconUrl: string;
  storeUrl?: string;
};

export type AppMeta = {
  id: 'puzzle' | 'clipslot' | 'ghost-desktop' | 'global-mute';
  name: string;
  shortDescription: string;
  tagline: string;
  shortDescription_en: string;
  tagline_en: string;
  platforms: AppPlatform[];
  versions?: AppVersion[];
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
    platforms: ['macos'],
    versions: [
      {
        name: 'Lite',
        price: 'Free',
        iconUrl: '/apps/puzzle/puzzle_icon_lite.png',
      },
      {
        name: 'Pro',
        price: '¥500',
        iconUrl: '/apps/puzzle/puzzle_icon_pro.png',
      },
    ],
    macBuyProductId: 'puzzle-mac',
  },
  {
    id: 'clipslot',
    name: 'ClipSlot',
    shortDescription: '固定スロット型のクリップボードマネージャ。',
    tagline: 'よく使うコピーを、即座に呼び出す。',
    shortDescription_en: 'Fixed-slot clipboard manager.',
    tagline_en: 'Instantly recall frequently used clips.',
    platforms: ['macos'],
    macBuyProductId: 'clipslot-mac',
  },
  {
    id: 'ghost-desktop',
    name: 'GhostDesktop',
    shortDescription: 'ワンクリックでデスクトップ上のファイルやディスクを一時的に隠せるツール。',
    tagline: '画面共有前に、デスクトップを瞬時にクリアに。',
    shortDescription_en: 'Hide desktop files and disks instantly from the menu bar.',
    tagline_en: 'Clear your desktop in seconds before sharing your screen.',
    platforms: ['macos'],
  },
  {
    id: 'global-mute',
    name: 'GlobalMute',
    shortDescription: 'ズームやTeamsなどのマイク・カメラをOSレベルでまとめてON/OFFできるユーティリティ。',
    tagline: 'どんな会議ツールでも、ミュート切り替えを迷わない。',
    shortDescription_en: 'Toggle mic/camera system-wide, regardless of meeting app.',
    tagline_en: 'Never hunt for the mute button again.',
    platforms: ['macos'],
  },
];
