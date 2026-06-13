// microCMS client configuration
// Set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY in environment variables

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
  };
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    avatar?: {
      url: string;
    };
  };
};

export type CaseStudy = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  company: {
    name: string;
    industry: string;
    size: string;
    logo?: {
      url: string;
    };
  };
  results: {
    metric: string;
    value: string;
  }[];
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export type Category = {
  id: string;
  name: string;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

// Check if microCMS is configured
export const isMicroCMSConfigured = () => {
  return Boolean(serviceDomain && apiKey);
};

async function fetchFromMicroCMS<T>(
  endpoint: string,
  queries?: Record<string, string | number>
): Promise<T> {
  if (!serviceDomain || !apiKey) {
    throw new Error("microCMS is not configured");
  }

  const params = new URLSearchParams();
  if (queries) {
    Object.entries(queries).forEach(([key, value]) => {
      params.append(key, String(value));
    });
  }

  const url = `https://${serviceDomain}.microcms.io/api/v1/${endpoint}${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from microCMS: ${res.status}`);
  }

  return res.json();
}

// Blog Posts
export async function getBlogPosts(options?: {
  limit?: number;
  offset?: number;
  category?: string;
}) {
  const queries: Record<string, string | number> = {};
  if (options?.limit) queries.limit = options.limit;
  if (options?.offset) queries.offset = options.offset;
  if (options?.category) queries.filters = `category[equals]${options.category}`;

  return fetchFromMicroCMS<{
    contents: BlogPost[];
    totalCount: number;
  }>("blog", queries);
}

export async function getBlogPost(id: string) {
  return fetchFromMicroCMS<BlogPost>(`blog/${id}`);
}

// Case Studies
export async function getCaseStudies(options?: { limit?: number; offset?: number }) {
  const queries: Record<string, string | number> = {};
  if (options?.limit) queries.limit = options.limit;
  if (options?.offset) queries.offset = options.offset;

  return fetchFromMicroCMS<{
    contents: CaseStudy[];
    totalCount: number;
  }>("case-studies", queries);
}

export async function getCaseStudy(id: string) {
  return fetchFromMicroCMS<CaseStudy>(`case-studies/${id}`);
}

// Categories
export async function getCategories() {
  return fetchFromMicroCMS<{
    contents: Category[];
    totalCount: number;
  }>("categories");
}

// Mock data for development (when microCMS is not configured)
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "従業員エンゲージメントを高める福利厚生の設計方法",
    content: "",
    excerpt: "従業員の満足度とエンゲージメントを向上させるための効果的な福利厚生プログラムの設計について解説します。",
    publishedAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
    category: { id: "welfare", name: "福利厚生" },
    thumbnail: { url: "/images/features/features-benefits.jpg", width: 800, height: 500 },
    author: { name: "田中 健太" },
  },
  {
    id: "2",
    title: "健康経営銘柄に選ばれるために必要なこと",
    content: "",
    excerpt: "経済産業省が選定する健康経営銘柄。選定されるために必要な取り組みと、そのメリットについて詳しく解説します。",
    publishedAt: "2024-02-28T10:00:00.000Z",
    updatedAt: "2024-02-28T10:00:00.000Z",
    category: { id: "health", name: "健康経営" },
    thumbnail: { url: "/images/features/features-health-app.jpg", width: 800, height: 500 },
    author: { name: "佐藤 美咲" },
  },
  {
    id: "3",
    title: "ストレスチェック義務化から8年、企業に求められる次のステップ",
    content: "",
    excerpt: "ストレスチェック制度が義務化されて8年。形骸化を防ぎ、真に効果的なメンタルヘルス対策を実現するためのポイントを解説します。",
    publishedAt: "2024-02-25T10:00:00.000Z",
    updatedAt: "2024-02-25T10:00:00.000Z",
    category: { id: "mental-health", name: "メンタルヘルス" },
    thumbnail: { url: "/images/features/features-admin.jpg", width: 800, height: 500 },
    author: { name: "山本 直樹" },
  },
  {
    id: "4",
    title: "リモートワーク時代の健康管理：企業ができること",
    content: "",
    excerpt: "オフィス勤務とは異なる課題を持つリモートワーク環境での従業員の健康管理について、具体的な施策を紹介します。",
    publishedAt: "2024-02-20T10:00:00.000Z",
    updatedAt: "2024-02-20T10:00:00.000Z",
    category: { id: "health", name: "健康経営" },
    thumbnail: { url: "/images/wellness.jpg", width: 800, height: 500 },
    author: { name: "田中 健太" },
  },
];

export const mockCaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "従業員満足度が30%向上、健康経営銘柄に初選定",
    content: "",
    excerpt: "社宝導入により、福利厚生の利用率が5倍に。従業員満足度調査でも過去最高を記録しました。",
    publishedAt: "2024-02-15T10:00:00.000Z",
    company: {
      name: "株式会社テックイノベーション",
      industry: "IT・通信",
      size: "500-1000名",
    },
    results: [
      { metric: "従業員満足度", value: "+30%" },
      { metric: "福利厚生利用率", value: "5倍" },
      { metric: "離職率", value: "-15%" },
    ],
    testimonial: {
      quote: "社宝の導入で、福利厚生の管理工数が大幅に削減され、従業員からの問い合わせも激減しました。",
      author: "人事部長 鈴木 一郎",
      role: "株式会社テックイノベーション",
    },
  },
  {
    id: "2",
    title: "健診受診率98%を達成、データ活用で予防医療を推進",
    content: "",
    excerpt: "健診予約のデジタル化と自動リマインドにより、受診率が大幅に向上。健康データの可視化で従業員の意識も変化。",
    publishedAt: "2024-01-20T10:00:00.000Z",
    company: {
      name: "グローバルマニュファクチャリング株式会社",
      industry: "製造業",
      size: "1000-5000名",
    },
    results: [
      { metric: "健診受診率", value: "98%" },
      { metric: "再検査受診率", value: "+45%" },
      { metric: "管理工数", value: "-60%" },
    ],
    testimonial: {
      quote: "紙での管理から解放され、データに基づいた健康施策を打てるようになりました。",
      author: "健康経営推進室 室長 山田 花子",
      role: "グローバルマニュファクチャリング株式会社",
    },
  },
  {
    id: "3",
    title: "メンタルヘルス不調による休職者を50%削減",
    content: "",
    excerpt: "ストレスチェックの分析結果を活用し、組織課題を特定。早期介入プログラムの導入で休職者を大幅に削減。",
    publishedAt: "2024-01-10T10:00:00.000Z",
    company: {
      name: "フィナンシャルサービス株式会社",
      industry: "金融・保険",
      size: "2000-5000名",
    },
    results: [
      { metric: "休職者数", value: "-50%" },
      { metric: "高ストレス者率", value: "-20%" },
      { metric: "職場復帰率", value: "+35%" },
    ],
    testimonial: {
      quote: "部署ごとの傾向が可視化され、ピンポイントで対策を打てるようになりました。",
      author: "産業医 中村 健一",
      role: "フィナンシャルサービス株式会社",
    },
  },
];
