export type ProductId = 'puzzle-mac' | 'clipslot-mac';

export type ProductMeta = {
  id: ProductId;
  appId: 'puzzle' | 'clipslot' | 'ghost-desktop' | 'global-mute';
  name: string;
  description: string;
  price: number;
  currency: 'jpy';
  stripePriceId: string;
  downloadKey: string;
};

export const products: ProductMeta[] = [
  {
    id: 'puzzle-mac',
    appId: 'puzzle',
    name: 'Puzzle Pro',
    description: 'ウィンドウ配置を素早く整える macOS 用ユーティリティ。',
    price: 500,
    currency: 'jpy',
    stripePriceId: 'price_1Sc2qO1a8QcxM190xLhrBLuY',
    downloadKey: 'puzzle-mac-v1',
  },
  {
    id: 'clipslot-mac',
    appId: 'clipslot',
    name: 'ClipSlot for macOS',
    description: '固定スロット型のクリップボードマネージャ（macOS版）。',
    price: 1200,
    currency: 'jpy',
    stripePriceId: 'price_dummy_clipslot_mac',
    downloadKey: 'clipslot-mac-v1',
  },
];
