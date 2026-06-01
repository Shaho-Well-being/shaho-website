export type Endorsement = {
  id: string;
  /** 推薦の切り口を表す見出し（例: 企業課題の専門家として） */
  heading: string;
  /** 専門家の氏名 */
  name: string;
  /** 肩書き・資格 */
  title: string;
  /** 所属・補足（例: 四ツ谷診断士会 会長） */
  organization?: string;
  /** 推薦コメント全文 */
  quote: string;
  /**
   * 顔写真のパス。`public/images/experts/` 配下に配置する。
   * 未設定の場合はイニシャルのアバターでフォールバック表示する。
   */
  photo?: string;
  /**
   * 円形クロップ内での写真の表示位置（CSS object-position 値）。
   * 縦長写真で顔の位置を微調整したいときに使う。例: "center 30%"
   * 未設定時は "center top"（上部基準）。
   */
  photoPosition?: string;
};

export const endorsements: Endorsement[] = [
  {
    id: "nakayama",
    heading: "企業課題の専門家として",
    name: "中山 直哉",
    title: "中小企業診断士",
    organization: "四ツ谷診断士会 会長",
    quote:
      "企業が抱える福利厚生や従業員の健康管理の課題に、社宝は的確に応えていると考えます。私が企業診断で感じる多くの問題点——例えば従業員満足度の向上、法定対応の煩雑さ、コストパフォーマンスの低さ——を一つのプラットフォームで解決できるのは画期的です。企業の成長と従業員の幸福を同時に実現する、非常に優れたサービスだと信じています。",
    photo: "/images/experts/nakayama.jpg",
    photoPosition: "center 20%",
  },
  {
    id: "seki",
    heading: "グローバル企業にも対応可能な点",
    name: "関 雅彦",
    title: "中小企業診断士",
    organization: "海外進出支援の専門家",
    quote:
      "グローバル化が進む現代において、多言語対応は従業員とのコミュニケーションにおいて非常に重要な要素です。社宝は、日本国内の法定項目への対応だけでなく、多言語対応機能を備えており、海外拠点を持つ企業や多国籍チームを運営する企業にも最適です。これにより、従業員がどの国出身者であっても一貫した福利厚生サービスを受けられるため、企業全体の連携と満足度を高めることができます。",
    photo: "/images/experts/seki.jpg",
  },
  {
    id: "katayama",
    heading: "コストと節税効果の観点から",
    name: "片山 和紀",
    title: "公認会計士・税理士",
    quote:
      "福利厚生費は、企業の税務負担を軽減しつつ、従業員に喜ばれる施策として有効です。さらに、これらの費用は法人税計算上、損金として計上可能であり、課税所得を減らすことができます。社宝は、コスト管理と従業員満足度の向上を両立する強力なプラットフォームです。",
    photo: "/images/experts/katayama.jpg",
    photoPosition: "center 10%",
  },
  {
    id: "taniguchi",
    heading: "企業のブランド価値向上に",
    name: "谷口 大介",
    title: "Webマーケティングコンサルタント",
    organization: "中小企業診断士",
    quote:
      "従業員に愛される福利厚生は、企業のブランド価値そのものです。社宝を導入することで、社員が企業から大切にされていると実感できる環境を整え、結果的に採用力や定着率の向上につながります。特にUI/UXの美しさや、即時性の高いポイント管理は、企業が最新のWebトレンドを理解していることを示す大きなアピールポイントとなるでしょう。",
    photo: "/images/experts/taniguchi.jpg",
  },
];
