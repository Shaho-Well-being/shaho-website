import { getBlogPosts, getBlogPost, mockBlogPosts, isMicroCMSConfigured } from "@/lib/microcms";
import type { BlogPost } from "@/lib/microcms";

export async function fetchBlogPosts(limit = 20): Promise<BlogPost[]> {
  if (isMicroCMSConfigured()) {
    try {
      return (await getBlogPosts({ limit })).contents;
    } catch {
      return mockBlogPosts;
    }
  }
  return mockBlogPosts;
}

export async function fetchBlogPost(id: string): Promise<BlogPost | undefined> {
  if (isMicroCMSConfigured()) {
    try {
      return await getBlogPost(id);
    } catch {
      return mockBlogPosts.find((post) => post.id === id);
    }
  }
  return mockBlogPosts.find((post) => post.id === id);
}

export async function fetchBlogStaticParams(): Promise<{ id: string }[]> {
  const posts = await fetchBlogPosts(100);
  return posts.map((post) => ({ id: post.id }));
}
