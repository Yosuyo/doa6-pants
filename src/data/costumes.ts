// キャラ／コスチュームのコンテンツデータ。
// name / comment は日本語(ja)・英語(en)の両方を1箇所で管理する。
// 英訳が未完のものは en を空文字("")にしておき、表示側で ja にフォールバックする。

export type Locale = "ja" | "en";

export type LocalizedText = {
  ja: string;
  en: string;
};

export type Variant = {
  key: string;
  label: LocalizedText;
};

export type Costume = {
  id: string;
  name: LocalizedText;
  comment: LocalizedText;
};

export type Character = {
  id: string;
  name: LocalizedText;
  costumes: Costume[];
};

export const variants: Variant[] = [
  { key: "0", label: { ja: "コスチューム", en: "Costume" } },
  { key: "a", label: { ja: "A", en: "A" } },
  { key: "x", label: { ja: "X", en: "X" } },
  { key: "y", label: { ja: "Y", en: "Y" } },
  { key: "r2", label: { ja: "R2", en: "R2" } },
];

export const characters: Character[] = [
  {
    id: "kasumi",
    name: { ja: "かすみ", en: "" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "スカートではなく着物なので比較的ガードが堅い", en: "" },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "" },
        comment: { ja: "よく見ると細かい刺繡が入っている。縞パン好きな人はXのパンツをどうぞ", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "シンプルな形状だが、各パンツで別の意匠が加えられている", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "海賊テーマにちなんで錨のマークなどが入っている", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "コスチューム13-15と共通。ピンクの服に水色パンツは良く映える", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "大部分はコスチューム13-15と共通。Xパンツは特別に魔法使いパープル", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "濡らすことで初めて差分が表れる変態仕様。Aは黒でYは青", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "濡れ透けで見えるブラも変わる。その点も考慮して色を選びたい", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "分かりにくいが、このコスチュームもトップスが透ける。パンツも刺繍ありで豪華", en: "" },
      },
    ],
  },
  {
    id: "nico",
    name: { ja: "NiCO", en: "NiCO" },
    costumes: [
      {
        id: "clockwork",
        name: { ja: "クロノワーク", en: "Clockwork" },
        comment: {
          ja: "フリルがあしらわれたパンツ。LR追加コスチュームで一番かわいいと思う",
          en: "Frilled panties. In my opinion the cutest of the Last Round costumes.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "王道はAのレース仕様だが、XやYの淡い色合いも捨てがたい",
          en: "The classic pick is A's lace version, but the soft tones of X and Y are hard to pass up too.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "海賊らしからぬ可愛らしいパンツ。Aのパンツは前面にもワンポイントがある",
          en: "Surprisingly cute panties for a pirate theme. A even has an accent on the front.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "ウェディングと共通。ロングスカートだが、軽い生地でヒラヒラと捲れる",
          en: "Shared with the wedding costume. A long skirt, but the light fabric flutters up easily.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "シンプルな前面リボンの形状。R2は水色の縞パン",
          en: "A simple design with a front ribbon. R2 is light-blue striped panties.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "トップスのインナーが変化する。Yの赤はちょっと濡れ透けが分かりにくいかも",
          en: "The inner top changes color. Y's red can be a bit hard to see when wet.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "貴重なパンスト越しパンツ。R2は珍しいギンガムチェック柄",
          en: "A rare see-through-pantyhose look. R2 has an unusual gingham check pattern.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "黄緑系のレアな配色が多い。Yパンツのレース模様も豪華で良い",
          en: "Lots of rare yellow-green tones. The lace pattern on the Y panties is gorgeous too.",
        },
      },
      {
        id: "scientist's_holiday",
        name: { ja: "Scientist's Holiday／陽だまりの熱力学", en: "Scientist's Holiday" },
        comment: {
          ja: "レース＋リボンのデザイン。カラバリ衣装は未検証なのであしからず",
          en: "A lace-and-ribbon design. Note that the color-variant outfits haven't been verified.",
        },
      },
    ],
  },
  {
    id: "marie",
    name: { ja: "マリー", en: "" },
    costumes: [
      {
        id: "costume01-03",
        name: { ja: "コスチューム01-03", en: "" },
        comment: { ja: "マリーと言えばドロワーズ。縫い目が可愛い", en: "" },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "" },
        comment: { ja: "リボンのついた王道デザイン。Xのパンツには猫がいる", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "Aパンツは背面にもレース模様が入っており必見", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "それぞれ海賊にちなんだワンポイントが前か後ろに施されている", en: "" },
      },
      {
        id: "little_devil_maid_costume",
        name: { ja: '"小"悪魔サーバントコスチューム', en: "" },
        comment: { ja: "コスチューム01-03と同じ。かわいいね", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "コスチューム07-09とほぼ同じ。Xのパンツは特別にオレンジ縞", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "コスチューム07-09とほぼ同じ。R2のパンツは苺でなくネコ模様", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "こちらは上半身インナーの色が変化。濡れると透けるぞ！", en: "" },
      },
      {
        id: "gorgeous_dress",
        name: { ja: "ゴージャスドレス", en: "" },
        comment: { ja: "Aボタンが赤色という珍しいパターン", en: "" },
      },
      {
        id: "atelier_ryza_mashup_costume",
        name: { ja: "『ライザのアトリエ』コラボコスチューム", en: "" },
        comment: { ja: "形状は共通でそれぞれ色が異なる。R2はおそらくピンクの縞パン", en: "" },
      },
      {
        id: "design_contest_2019_costume",
        name: { ja: "デザインコンテスト2019コスチューム", en: "" },
        comment: { ja: "おなじみのリボン。高級感のある赤いスカート生地にパンツが映える", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "リボンとレースの豪華なデザイン。なんてリッチなんだ", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "可愛らしい淡い色使い。R2は見えづらいがドット柄である", en: "" },
      },
    ],
  },
  {
    id: "honoka",
    name: { ja: "ほのか", en: "" },
    costumes: [
      {
        id: "costume01",
        name: { ja: "コスチューム01", en: "" },
        comment: { ja: "それぞれデザインが異なる。黄色いリボンは共通", en: "" },
      },
      {
        id: "costume02",
        name: { ja: "コスチューム02", en: "" },
        comment: { ja: "トップスがブラウスなので濡れ透けアリ。縞や柄のブラは分かりやすい", en: "" },
      },
      {
        id: "costume03",
        name: { ja: "コスチューム03", en: "" },
        comment: { ja: "リボンの色がコスチューム02と異なる", en: "" },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "" },
        comment: { ja: "子供パンツ過ぎる。スカート生地は厚く案外ガードが堅い", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "白ストッキングを履いている珍しいコスチューム", en: "" },
      },
      {
        id: "image_change",
        name: { ja: "イメチェン☆スクールガールコスチューム", en: "" },
        comment: { ja: "コスチューム01と同一のもの", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "こちらはブラ透けが無い。代わりにめっちゃ揺れる", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "コスチューム02とほぼ同じ。Yは赤", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "透ける。ブラがデカい", en: "" },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "" },
        comment: { ja: "少し見づらいが、R2は薄い水色", en: "" },
      },
      {
        id: "design_contest_2019_costume",
        name: { ja: "デザインコンテスト2019コスチューム", en: "" },
        comment: { ja: "かなり分かりにくいが一応パンツが変わっている。AとR2は判別不能", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "デカいブラが透ける。Xは濃い色なので特に目立つ", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "シンプルな形状。Xは前後に★マーク、R2はお尻にウサギさん", en: "" },
      },
    ],
  },
  {
    id: "tina",
    name: { ja: "ティナ", en: "" },
    costumes: [
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと同じパンツ", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "ウェディングと共通。オレンジの軽いスカートが舞う", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "ウェディングとほぼ同じ。Yは紫", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "濡れると派手に透ける。水辺ステージで戦おう", en: "" },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "" },
        comment: { ja: "タイツ越しに刺繍が見える", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "R2の柄は少し珍しい", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "王道アメスク。前面にリボンが2個ついている", en: "" },
      },
    ],
  },
  {
    id: "helena",
    name: { ja: "エレナ", en: "" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "女神モチーフの衣装。前掛けの隙間が狙い目", en: "" },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "" },
        comment: { ja: "他ではあまり見ない柄が入っている", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "ハイレグなパンツ。Xはさらに透け要素も", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "コスチューム13-15と共通", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "濡れ透け。背面はこのようになっています", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "タイツとストッキングの違いは生地の厚さとのこと", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "教師側の衣装。R2の色合いいいですね", en: "" },
      },
    ],
  },
  {
    id: "mira",
    name: { ja: "ミラ", en: "" },
    costumes: [
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "こちらも他キャラのウェディングと共通", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "逆に透けさせたくない方はYの白がおすすめ", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "チェックやドット柄など結構かわいらしい", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "R2が前後の色が違うというDOAでは非常に珍しいパンツ", en: "" },
      },
    ],
  },
  {
    id: "ayane",
    name: { ja: "あやね", en: "" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06, シーズンパス3特典", en: "" },
        comment: { ja: "あやねは足技が多いのでパンツ撮影がしやすい", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "夏らしい爽やかなパンツ", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "やたら細いサラシが透ける。サラシなのかこれは", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "お嬢様服なのでブラも透ける", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "R2は毛糸っぽい質感に加え、あやねモチーフの蝶がついている", en: "" },
      },
    ],
  },
  {
    id: "leifang",
    name: { ja: "レイファン", en: "" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "" },
        comment: { ja: "チャイナ服らしく下着も刺繍が入っている", en: "" },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "" },
        comment: { ja: "方麗鳳はレイファンの漢字表記らしい", en: "" },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "花の刺繍が豪華。ただ衣装の形状的にここまで見えることは少ない", en: "" },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "" },
        comment: { ja: "Yは前面背面パンダのパンツ。雑な中国を感じる", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "対戦中は分からないだろうが、AやR2は刺繍が入っている", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "パンダの背面はこんなかんじ", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "あやねと同じ細い下着。チューブトップ？", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "Xの赤色は、この形状のパンツの中では珍しい", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "保健室の先生コス。下着は派手", en: "" },
      },
    ],
  },
  {
    id: "hitomi",
    name: { ja: "ヒトミ", en: "" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "" },
        comment: { ja: "カラバリによって下着のボタン割り当てが違うので注意", en: "" },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "" },
        comment: { ja: "ちなみに07-09は透けなし。01-03はノーブラ", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通。白ストッキングあり", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "リボンや刺繍がついていてかわいらしい", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "サマーワンピとおおむね共通", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "少しわかりにくいがXは黒、R2は白", en: "" },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "" },
        comment: { ja: "形状は共通。色のみが異なる", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "Yはお嬢様コスで珍しい緑下着", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "柄にバリエーションがあってよい", en: "" },
      },
    ],
  },
  {
    id: "christie",
    name: { ja: "クリスティ", en: "" },
    costumes: [
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "" },
        comment: { ja: "注目したいのはYのパンツ。クリスティのモチーフである蛇柄である", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "個人的おすすめはR2。青と赤の対比が美しい", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "透ける。水辺で戦おう", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "全体的に大人っぽい色合い", en: "" },
      },
    ],
  },
  {
    id: "kokoro",
    name: { ja: "こころ", en: "" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "" },
        comment: { ja: "ミニスカ着物。パンツも豪華である", en: "" },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "" },
        comment: { ja: "R2！学生が穿いていいパンツじゃないだろ！", en: "" },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "分かりにくいが透ける。おそらく順に黒、ピンク、黄色、赤", en: "" },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "" },
        comment: { ja: "ニットとタイツで暖かそうな衣装。胸元がけしからん過ぎる", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊コスチュームと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "薄手の生地でよく捲れる", en: "" },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "" },
        comment: { ja: "サマーワンピとおおむね共通", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "見せブラの色が変わる。ショーパンがショート過ぎる", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "パンツはストッキング越し。むしろブラの方が目立つ", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "側面をよく見てほしい。なんと紐パンである", en: "" },
      },
    ],
  },
  {
    id: "la-mariposa",
    name: { ja: "ラ・マリポーサ", en: "" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "タイトなスカートなのでガードが堅い", en: "" },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "" },
        comment: { ja: "他キャラのウェディングと共通", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "ヒョウ柄パンツ。覆面レスラーからの着想だろうか", en: "" },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "" },
        comment: { ja: "灰色なのでめっちゃ透ける。DOAで一番透けてる", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "Yの下着、パンツはピンク主体だがブラは黒ベースである。貴重", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "パンツに連動して見せブラの色も変わる", en: "" },
      },
    ],
  },
  {
    id: "tamaki",
    name: { ja: "たまき", en: "" },
    costumes: [
      {
        id: "costume04",
        name: { ja: "コスチューム04", en: "" },
        comment: { ja: "常時見えているブラの色も変わる。ブラって常時見えて大丈夫なんですかね", en: "" },
      },
      {
        id: "costume05",
        name: { ja: "コスチューム05", en: "" },
        comment: { ja: "A, X, Yの順番がコスチューム04と違うので注意。R2は共通で深い青色", en: "" },
      },
      {
        id: "costume06",
        name: { ja: "コスチューム06", en: "" },
        comment: { ja: "それにしてもパンツよりブラに目が行く。ヴィーナス諸島のコスチュームはすげえや", en: "" },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "" },
        comment: { ja: "デザインは共通で色のみ変化。こちらのパンツは今のところ当コスチューム限定", en: "" },
      },
      {
        id: "deluxe_costume",
        name: { ja: "デラックスコスチューム", en: "" },
        comment: { ja: "衣装が透けていて常にモロ見えですが、こちらはれっきとした下着です。ボタンで色が変わるので", en: "" },
      },
      {
        id: "party_dress",
        name: { ja: "パーティードレス", en: "" },
        comment: { ja: "他キャラのウェディングパンツと同じ。ドレスが濃い青なので淡いパンツがよく目立つ", en: "" },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "" },
        comment: { ja: "こちらも他キャラの海賊パンツと同一。Yパンツの武器はカトラスという", en: "" },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "" },
        comment: { ja: "ほぼウェディングと共通。Xのパンツだけ色がグレー", en: "" },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "" },
        comment: { ja: "かなりブラが透ける。水で濡れなくても、少し時間がたてば汗で透ける", en: "" },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "" },
        comment: { ja: "緩い着こなしがたまきらしい一着。かなり分かりにくいが、透けブラあり", en: "" },
      },
    ],
  },
];

// 指定ロケールのテキストを返す。en が空なら ja にフォールバックする。
export function t(text: LocalizedText, locale: Locale): string {
  if (locale === "en") {
    return text.en || text.ja;
  }
  return text.ja;
}
