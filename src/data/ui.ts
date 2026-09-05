// UIの固定文言（ページタイトル、説明文、手順、ボタン、フッターなど）の辞書。
import type { Locale } from "./costumes";

export type UIStrings = {
  lang: string;
  pageTitle: string;
  metaDescription: string;
  siteTitle: string;
  siteDescriptionHtml: string;
  howtoTitle: string;
  howtoStep1: string;
  howtoStep2: string;
  freeTrainingAlt: string;
  rankedMatchAlt: string;
  closeCharacter: (name: string) => string;
  footerCopyrightHtml: string;
  footerScreenshot: string;
};

export const ui: Record<Locale, UIStrings> = {
  ja: {
    lang: "ja",
    pageTitle: "DOA6 パンツ早見表 | DEAD OR ALIVE 6 コスチューム差分まとめ",
    metaDescription:
      "DEAD OR ALIVE 6（DOA6）/ DEAD OR ALIVE 6 Last Round（DOA6LR）のコスチューム別パンツ差分・インナー差分をまとめた非公式ファンサイトです。マリー、ほのかなどの衣装ごとのA/X/Y/R2差分を画像付きで掲載しています。",
    siteTitle: "DOA6/DOA6LR パンツ早見表",
    siteDescriptionHtml:
      "DEAD OR ALIVE 6（DOA6）のコスチューム差分をまとめた非公式ファンサイトです。<br />祝！LAST ROUND発売！DOA7開発決定！",
    howtoTitle: "下着の色の変え方",
    howtoStep1: "コスチューム選択画面で A、X、Y、R2 のボタンを入力する。",
    howtoStep2: "特殊な決定音（ボタンにより固有）が聞こえたら変更成功。",
    freeTrainingAlt: "フリートレーニングのコスチューム選択画面",
    rankedMatchAlt: "ランクマッチのコスチューム選択画面",
    closeCharacter: (name: string) => `▲ ${name}を閉じる`,
    footerCopyrightHtml:
      "当サイトは個人運営の非公式ファンサイトです。<br />「DEAD OR ALIVE 6」および関連する画像・名称の著作権はコーエーテクモゲームスに帰属します。",
    footerScreenshot:
      "掲載している画像はゲームプレイ中に撮影したスクリーンショットです。",
  },
  en: {
    lang: "en",
    pageTitle: "DOA6 Panties Reference | DEAD OR ALIVE 6 Costume Variations",
    metaDescription:
      "An unofficial fan site cataloging the panty and inner-wear variations of DEAD OR ALIVE 6 (DOA6) / DEAD OR ALIVE 6 Last Round (DOA6LR) costumes, with A/X/Y/R2 differences shown per costume with images.",
    siteTitle: "DOA6/DOA6LR Panties Reference",
    siteDescriptionHtml:
      "An unofficial fan site cataloging the costume variations of DEAD OR ALIVE 6 (DOA6).<br />Celebrating the release of LAST ROUND, and DOA7 in development!",
    howtoTitle: "How to Change Underwear Color",
    howtoStep1: "On the costume selection screen, press the A, X, Y, or R2 button.",
    howtoStep2:
      "If you hear a special confirmation sound (unique to each button), the change succeeded.",
    freeTrainingAlt: "Costume selection screen in Free Training",
    rankedMatchAlt: "Costume selection screen in Ranked Match",
    closeCharacter: (name: string) => `▲ Close ${name}`,
    footerCopyrightHtml:
      "This is a privately run, unofficial fan site.<br />The copyrights of &ldquo;DEAD OR ALIVE 6&rdquo; and related images and names belong to Koei Tecmo Games.",
    footerScreenshot:
      "The images shown here are screenshots captured during gameplay.",
  },
};
