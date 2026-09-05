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
    name: { ja: "かすみ", en: "Kasumi" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "スカートではなく着物なので比較的ガードが堅い",
          en: "It's a kimono rather than a skirt, so it's fairly well-guarded.",
        },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "Costume 13-15" },
        comment: {
          ja: "よく見ると細かい刺繡が入っている。縞パン好きな人はXのパンツをどうぞ",
          en: "Look closely and you'll spot fine embroidery. If you like striped panties, go for X.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "シンプルな形状だが、各パンツで別の意匠が加えられている",
          en: "A simple shape, but each pair has its own distinct design touch.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "海賊テーマにちなんで錨のマークなどが入っている",
          en: "Fitting the pirate theme, there are anchor motifs and the like.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "コスチューム13-15と共通。ピンクの服に水色パンツは良く映える",
          en: "Shared with Costume 13-15. Light-blue panties really pop against the pink outfit.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "大部分はコスチューム13-15と共通。Xパンツは特別に魔法使いパープル",
          en: "Mostly shared with Costume 13-15. X gets a special wizardly purple.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "濡らすことで初めて差分が表れる変態仕様。Aは黒でYは青",
          en: "A cheeky design where the variations only show once she's wet. A is black, Y is blue.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "濡れ透けで見えるブラも変わる。その点も考慮して色を選びたい",
          en: "The bra that shows through when wet changes too, so factor that in when picking a color.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "分かりにくいが、このコスチュームもトップスが透ける。パンツも刺繍ありで豪華",
          en: "Hard to tell, but this top goes see-through too. The panties are fancy with embroidery.",
        },
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
    name: { ja: "マリー", en: "Marie Rose" },
    costumes: [
      {
        id: "costume01-03",
        name: { ja: "コスチューム01-03", en: "Costume 01-03" },
        comment: {
          ja: "マリーと言えばドロワーズ。縫い目が可愛い",
          en: "Marie means drawers. The stitching is adorable.",
        },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "Costume 07-09" },
        comment: {
          ja: "リボンのついた王道デザイン。Xのパンツには猫がいる",
          en: "A classic design with a ribbon. X's panties have a cat on them.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "Aパンツは背面にもレース模様が入っており必見",
          en: "A's panties even have a lace pattern on the back—don't miss it.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "それぞれ海賊にちなんだワンポイントが前か後ろに施されている",
          en: "Each pair has a pirate-themed accent on the front or back.",
        },
      },
      {
        id: "little_devil_maid_costume",
        name: { ja: '"小"悪魔サーバントコスチューム', en: '"Little" Devil Servant Costume' },
        comment: {
          ja: "コスチューム01-03と同じ。かわいいね",
          en: "Same as Costume 01-03. Cute, right?",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "コスチューム07-09とほぼ同じ。Xのパンツは特別にオレンジ縞",
          en: "Nearly the same as Costume 07-09. X gets special orange stripes.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "コスチューム07-09とほぼ同じ。R2のパンツは苺でなくネコ模様",
          en: "Nearly the same as Costume 07-09. R2 has a cat pattern instead of strawberries.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "こちらは上半身インナーの色が変化。濡れると透けるぞ！",
          en: "Here the upper inner wear changes color. It goes see-through when wet!",
        },
      },
      {
        id: "gorgeous_dress",
        name: { ja: "ゴージャスドレス", en: "Gorgeous Dress" },
        comment: {
          ja: "Aボタンが赤色という珍しいパターン",
          en: "Unusually, the A button gives you red.",
        },
      },
      {
        id: "atelier_ryza_mashup_costume",
        name: { ja: "『ライザのアトリエ』コラボコスチューム", en: "Atelier Ryza Collab Costume" },
        comment: {
          ja: "形状は共通でそれぞれ色が異なる。R2はおそらくピンクの縞パン",
          en: "Same shape across the board, only the colors differ. R2 looks like pink striped panties.",
        },
      },
      {
        id: "design_contest_2019_costume",
        name: { ja: "デザインコンテスト2019コスチューム", en: "Design Contest 2019 Costume" },
        comment: {
          ja: "おなじみのリボン。高級感のある赤いスカート生地にパンツが映える",
          en: "The familiar ribbon. The panties stand out nicely against the luxe red skirt fabric.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "リボンとレースの豪華なデザイン。なんてリッチなんだ",
          en: "A lavish ribbon-and-lace design. How rich!",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "可愛らしい淡い色使い。R2は見えづらいがドット柄である",
          en: "Cute, soft color choices. It's hard to see, but R2 is polka-dotted.",
        },
      },
    ],
  },
  {
    id: "honoka",
    name: { ja: "ほのか", en: "Honoka" },
    costumes: [
      {
        id: "costume01",
        name: { ja: "コスチューム01", en: "Costume 01" },
        comment: {
          ja: "それぞれデザインが異なる。黄色いリボンは共通",
          en: "Each one has a different design. The yellow ribbon is shared across all.",
        },
      },
      {
        id: "costume02",
        name: { ja: "コスチューム02", en: "Costume 02" },
        comment: {
          ja: "トップスがブラウスなので濡れ透けアリ。縞や柄のブラは分かりやすい",
          en: "The top is a blouse, so it goes see-through when wet. Striped and patterned bras are easy to spot.",
        },
      },
      {
        id: "costume03",
        name: { ja: "コスチューム03", en: "Costume 03" },
        comment: {
          ja: "リボンの色がコスチューム02と異なる",
          en: "The ribbon color differs from Costume 02.",
        },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "Costume 07-09" },
        comment: {
          ja: "子供パンツ過ぎる。スカート生地は厚く案外ガードが堅い",
          en: "Way too childish a pair. The skirt fabric is thick, so it's surprisingly well-guarded.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "白ストッキングを履いている珍しいコスチューム",
          en: "A rare costume where she wears white stockings.",
        },
      },
      {
        id: "image_change",
        name: { ja: "イメチェン☆スクールガールコスチューム", en: "Image Change☆ Schoolgirl Costume" },
        comment: {
          ja: "コスチューム01と同一のもの",
          en: "Identical to Costume 01.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "こちらはブラ透けが無い。代わりにめっちゃ揺れる",
          en: "No see-through bra on this one. Instead, it bounces like crazy.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "コスチューム02とほぼ同じ。Yは赤",
          en: "Nearly the same as Costume 02. Y is red.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "透ける。ブラがデカい",
          en: "Goes see-through. The bra is huge.",
        },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "Gust Collab Costume" },
        comment: {
          ja: "少し見づらいが、R2は薄い水色",
          en: "A bit hard to see, but R2 is pale light blue.",
        },
      },
      {
        id: "design_contest_2019_costume",
        name: { ja: "デザインコンテスト2019コスチューム", en: "Design Contest 2019 Costume" },
        comment: {
          ja: "かなり分かりにくいが一応パンツが変わっている。AとR2は判別不能",
          en: "Really hard to tell, but the panties do change. A and R2 are impossible to distinguish.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "デカいブラが透ける。Xは濃い色なので特に目立つ",
          en: "Her big bra shows through. X is a deep color, so it stands out especially.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "シンプルな形状。Xは前後に★マーク、R2はお尻にウサギさん",
          en: "A simple shape. X has star marks front and back, and R2 has a little bunny on the rear.",
        },
      },
    ],
  },
  {
    id: "tina",
    name: { ja: "ティナ", en: "Tina" },
    costumes: [
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと同じパンツ",
          en: "The same panties as the other characters' wedding costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "ウェディングと共通。オレンジの軽いスカートが舞う",
          en: "Shared with the wedding costume. The light orange skirt flutters around.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "ウェディングとほぼ同じ。Yは紫",
          en: "Nearly the same as the wedding costume. Y is purple.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "濡れると派手に透ける。水辺ステージで戦おう",
          en: "Goes wildly see-through when wet. Fight on a waterside stage.",
        },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "Gust Collab Costume" },
        comment: {
          ja: "タイツ越しに刺繍が見える",
          en: "You can see the embroidery through the tights.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "R2の柄は少し珍しい",
          en: "R2's pattern is a little unusual.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "王道アメスク。前面にリボンが2個ついている",
          en: "A classic American-style school look. There are two ribbons on the front.",
        },
      },
    ],
  },
  {
    id: "helena",
    name: { ja: "エレナ", en: "Helena" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "女神モチーフの衣装。前掛けの隙間が狙い目",
          en: "A goddess-themed outfit. The gap in the front drape is the sweet spot.",
        },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "Costume 13-15" },
        comment: {
          ja: "他ではあまり見ない柄が入っている",
          en: "Features a pattern you don't often see elsewhere.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "ハイレグなパンツ。Xはさらに透け要素も",
          en: "High-leg panties. X even adds a see-through element.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "コスチューム13-15と共通",
          en: "Shared with Costume 13-15.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "濡れ透け。背面はこのようになっています",
          en: "See-through when wet. Here's what the back looks like.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "タイツとストッキングの違いは生地の厚さとのこと",
          en: "The difference between tights and stockings is apparently the fabric thickness.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "教師側の衣装。R2の色合いいいですね",
          en: "The teacher's outfit. R2's color scheme is nice.",
        },
      },
    ],
  },
  {
    id: "mira",
    name: { ja: "ミラ", en: "Mila" },
    costumes: [
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "こちらも他キャラのウェディングと共通",
          en: "Also shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "逆に透けさせたくない方はYの白がおすすめ",
          en: "If you'd rather it not show through, Y's white is the way to go.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "チェックやドット柄など結構かわいらしい",
          en: "Checks, polka dots, and more—quite cute.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "R2が前後の色が違うというDOAでは非常に珍しいパンツ",
          en: "R2 has different colors front and back—very rare panties for DOA.",
        },
      },
    ],
  },
  {
    id: "ayane",
    name: { ja: "あやね", en: "Ayane" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06, シーズンパス3特典", en: "Costume 04-06 / Season Pass 3 Bonus" },
        comment: {
          ja: "あやねは足技が多いのでパンツ撮影がしやすい",
          en: "Ayane has lots of kick moves, so grabbing panty shots is easy.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "夏らしい爽やかなパンツ",
          en: "Fresh, summery panties.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "やたら細いサラシが透ける。サラシなのかこれは",
          en: "A weirdly thin chest wrap shows through. Is that even a chest wrap?",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "お嬢様服なのでブラも透ける",
          en: "It's a high-society outfit, so the bra shows through too.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "R2は毛糸っぽい質感に加え、あやねモチーフの蝶がついている",
          en: "R2 has a knit-like texture plus a butterfly, Ayane's signature motif.",
        },
      },
    ],
  },
  {
    id: "leifang",
    name: { ja: "レイファン", en: "Leifang" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "Costume 04-06" },
        comment: {
          ja: "チャイナ服らしく下着も刺繍が入っている",
          en: "True to the qipao style, even the underwear has embroidery.",
        },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "Costume 07-09" },
        comment: {
          ja: "方麗鳳はレイファンの漢字表記らしい",
          en: "Apparently \u201cFang Leifang\u201d is the kanji rendering of her name.",
        },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "花の刺繍が豪華。ただ衣装の形状的にここまで見えることは少ない",
          en: "Gorgeous floral embroidery, though the outfit's cut rarely lets you see this much.",
        },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "Costume 13-15" },
        comment: {
          ja: "Yは前面背面パンダのパンツ。雑な中国を感じる",
          en: "Y has pandas on the front and back—a delightfully lazy take on \u201cChina.\u201d",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "対戦中は分からないだろうが、AやR2は刺繍が入っている",
          en: "You'd never notice mid-match, but A and R2 have embroidery.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "パンダの背面はこんなかんじ",
          en: "Here's what the panda's backside looks like.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "あやねと同じ細い下着。チューブトップ？",
          en: "The same thin underwear as Ayane. A tube top, maybe?",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "Xの赤色は、この形状のパンツの中では珍しい",
          en: "X's red is rare among panties of this cut.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "保健室の先生コス。下着は派手",
          en: "A school-nurse look. The underwear is flashy.",
        },
      },
    ],
  },
  {
    id: "hitomi",
    name: { ja: "ヒトミ", en: "Hitomi" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "Costume 04-06" },
        comment: {
          ja: "カラバリによって下着のボタン割り当てが違うので注意",
          en: "Heads up: the button-to-underwear mapping differs by color variant.",
        },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "Costume 13-15" },
        comment: {
          ja: "ちなみに07-09は透けなし。01-03はノーブラ",
          en: "For reference, 07-09 doesn't show through, and 01-03 is braless.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通。白ストッキングあり",
          en: "Shared with the other characters' wedding costumes. Comes with white stockings.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "リボンや刺繍がついていてかわいらしい",
          en: "Cute, with ribbons and embroidery.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "サマーワンピとおおむね共通",
          en: "Largely shared with the Summer Breeze Collection.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "少しわかりにくいがXは黒、R2は白",
          en: "A bit hard to tell, but X is black and R2 is white.",
        },
      },
      {
        id: "gust_mashup_costume",
        name: { ja: "『ガスト』 コラボコスチューム", en: "Gust Collab Costume" },
        comment: {
          ja: "形状は共通。色のみが異なる",
          en: "Same shape throughout, only the colors differ.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "Yはお嬢様コスで珍しい緑下着",
          en: "Y is a rare green underwear for a high-society costume.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "柄にバリエーションがあってよい",
          en: "Nice variety in the patterns.",
        },
      },
    ],
  },
  {
    id: "christie",
    name: { ja: "クリスティ", en: "Christie" },
    costumes: [
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "Costume 07-09" },
        comment: {
          ja: "注目したいのはYのパンツ。クリスティのモチーフである蛇柄である",
          en: "The one to watch is Y's panties—a snake print, Christie's signature motif.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "個人的おすすめはR2。青と赤の対比が美しい",
          en: "My personal pick is R2—the blue-and-red contrast is beautiful.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "透ける。水辺で戦おう",
          en: "Goes see-through. Fight near the water.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "全体的に大人っぽい色合い",
          en: "A mature color palette overall.",
        },
      },
    ],
  },
  {
    id: "kokoro",
    name: { ja: "こころ", en: "Kokoro" },
    costumes: [
      {
        id: "costume04-06",
        name: { ja: "コスチューム04-06", en: "Costume 04-06" },
        comment: {
          ja: "ミニスカ着物。パンツも豪華である",
          en: "A miniskirt kimono. The panties are lavish too.",
        },
      },
      {
        id: "costume07-09",
        name: { ja: "コスチューム07-09", en: "Costume 07-09" },
        comment: {
          ja: "R2！学生が穿いていいパンツじゃないだろ！",
          en: "R2! That's not something a student should be wearing!",
        },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "分かりにくいが透ける。おそらく順に黒、ピンク、黄色、赤",
          en: "Hard to tell, but it shows through. Probably black, pink, yellow, red in order.",
        },
      },
      {
        id: "costume13-15",
        name: { ja: "コスチューム13-15", en: "Costume 13-15" },
        comment: {
          ja: "ニットとタイツで暖かそうな衣装。胸元がけしからん過ぎる",
          en: "A cozy-looking knit-and-tights outfit. The neckline is downright scandalous.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊コスチュームと共通",
          en: "Also shared with the other characters' pirate costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "薄手の生地でよく捲れる",
          en: "Thin fabric that flips up easily.",
        },
      },
      {
        id: "witch_party_costume",
        name: { ja: "ウィッチパーティー☆コスチューム", en: "Witch Party☆ Costume" },
        comment: {
          ja: "サマーワンピとおおむね共通",
          en: "Largely shared with the Summer Breeze Collection.",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "見せブラの色が変わる。ショーパンがショート過ぎる",
          en: "The visible bra changes color. Those shorts are way too short.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "パンツはストッキング越し。むしろブラの方が目立つ",
          en: "The panties are seen through stockings. If anything, the bra stands out more.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "側面をよく見てほしい。なんと紐パンである",
          en: "Take a close look at the sides—they're actually side-tie panties.",
        },
      },
    ],
  },
  {
    id: "la-mariposa",
    name: { ja: "ラ・マリポーサ", en: "La Mariposa" },
    costumes: [
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "タイトなスカートなのでガードが堅い",
          en: "A tight skirt, so it's well-guarded.",
        },
      },
      {
        id: "happy_wedding_costume",
        name: { ja: "ハッピーウェディングコスチューム", en: "Happy Wedding Costume" },
        comment: {
          ja: "他キャラのウェディングと共通",
          en: "Shared with the other characters' wedding costumes.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "ヒョウ柄パンツ。覆面レスラーからの着想だろうか",
          en: "Leopard-print panties. Inspired by the masked-wrestler theme, perhaps?",
        },
      },
      {
        id: "energy_up_training_wear",
        name: { ja: "汗だく！トレーニングウェア", en: "Energy Up! Training Wear" },
        comment: {
          ja: "灰色なのでめっちゃ透ける。DOAで一番透けてる",
          en: "It's gray, so it shows through like crazy. The most see-through in all of DOA.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "Yの下着、パンツはピンク主体だがブラは黒ベースである。貴重",
          en: "For Y, the panties are mostly pink but the bra is black-based. A rare combo.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "パンツに連動して見せブラの色も変わる",
          en: "The visible bra changes color in sync with the panties.",
        },
      },
    ],
  },
  {
    id: "tamaki",
    name: { ja: "たまき", en: "Tamaki" },
    costumes: [
      {
        id: "costume04",
        name: { ja: "コスチューム04", en: "Costume 04" },
        comment: {
          ja: "常時見えているブラの色も変わる。ブラって常時見えて大丈夫なんですかね",
          en: "The always-visible bra changes color too. Is it really okay for the bra to be on show the whole time?",
        },
      },
      {
        id: "costume05",
        name: { ja: "コスチューム05", en: "Costume 05" },
        comment: {
          ja: "A, X, Yの順番がコスチューム04と違うので注意。R2は共通で深い青色",
          en: "Note that the A/X/Y order differs from Costume 04. R2 is a shared deep blue.",
        },
      },
      {
        id: "costume06",
        name: { ja: "コスチューム06", en: "Costume 06" },
        comment: {
          ja: "それにしてもパンツよりブラに目が行く。ヴィーナス諸島のコスチュームはすげえや",
          en: "Still, your eyes go to the bra more than the panties. Those Venus Islands costumes are something else.",
        },
      },
      {
        id: "costume10-12",
        name: { ja: "コスチューム10-12", en: "Costume 10-12" },
        comment: {
          ja: "デザインは共通で色のみ変化。こちらのパンツは今のところ当コスチューム限定",
          en: "Same design, only the color changes. These panties are exclusive to this costume for now.",
        },
      },
      {
        id: "deluxe_costume",
        name: { ja: "デラックスコスチューム", en: "Deluxe Costume" },
        comment: {
          ja: "衣装が透けていて常にモロ見えですが、こちらはれっきとした下着です。ボタンで色が変わるので",
          en: "The outfit is sheer so it's always fully visible, but this is genuinely underwear—the buttons change its color.",
        },
      },
      {
        id: "party_dress",
        name: { ja: "パーティードレス", en: "Party Dress" },
        comment: {
          ja: "他キャラのウェディングパンツと同じ。ドレスが濃い青なので淡いパンツがよく目立つ",
          en: "The same as the other characters' wedding panties. The dress is deep blue, so pale panties really stand out.",
        },
      },
      {
        id: "pirates_of_the_7_seas_costume",
        name: { ja: "七つの海のパイレーツコスチューム", en: "Pirates of the 7 Seas Costume" },
        comment: {
          ja: "こちらも他キャラの海賊パンツと同一。Yパンツの武器はカトラスという",
          en: "Also identical to the other characters' pirate panties. The weapon on the Y panties is called a cutlass.",
        },
      },
      {
        id: "summer_breeze_collection",
        name: { ja: "潮風そよぐサマーワンピ", en: "Summer Breeze Collection" },
        comment: {
          ja: "ほぼウェディングと共通。Xのパンツだけ色がグレー",
          en: "Nearly the same as the wedding costume. Only X's panties are gray.",
        },
      },
      {
        id: "high_society_costume",
        name: { ja: "【復刻】お嬢様の休日コスチューム", en: "[Revival] High Society Costume" },
        comment: {
          ja: "かなりブラが透ける。水で濡れなくても、少し時間がたてば汗で透ける",
          en: "The bra shows through a lot. Even without getting wet, sweat makes it sheer after a while.",
        },
      },
      {
        id: "school_uniform",
        name: { ja: "【復刻】スクールコスチューム", en: "[Revival] School Costume" },
        comment: {
          ja: "緩い着こなしがたまきらしい一着。かなり分かりにくいが、透けブラあり",
          en: "A loosely worn look that's very Tamaki. Hard to spot, but there's a see-through bra.",
        },
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
