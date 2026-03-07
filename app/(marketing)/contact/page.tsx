"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar, FileText, MessageSquare, Check } from "lucide-react";

const contactTypes = [
  {
    id: "demo",
    icon: Calendar,
    title: "無料デモを予約",
    description: "製品のデモンストレーションをご希望の方",
  },
  {
    id: "document",
    icon: FileText,
    title: "資料請求",
    description: "製品資料のダウンロードをご希望の方",
  },
  {
    id: "inquiry",
    icon: MessageSquare,
    title: "お問い合わせ",
    description: "ご質問・ご相談がある方",
  },
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "demo";
  const [selectedType, setSelectedType] = useState(initialType);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Check className="h-8 w-8 text-accent-foreground" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground">
            お問い合わせありがとうございます
          </h1>
          <p className="mt-4 text-muted-foreground">
            内容を確認の上、担当者より2営業日以内にご連絡いたします。
          </p>
          <Button className="mt-8" asChild>
            <Link href="/">トップページに戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            社宝についてのご質問、デモのご予約、資料請求など、
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Contact Type Selection */}
            <div className="grid gap-4 sm:grid-cols-3">
              {contactTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    selectedType === type.id
                      ? "border-foreground bg-muted"
                      : "border-border hover:border-foreground/30"
                  }`}
                >
                  <type.icon className="h-6 w-6 text-foreground" />
                  <h3 className="mt-3 font-medium text-foreground">{type.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{type.description}</p>
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    会社名 <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="株式会社サンプル"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-foreground">
                    部署名
                  </label>
                  <Input
                    id="department"
                    name="department"
                    placeholder="人事部"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    お名前 <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    メールアドレス <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="yamada@example.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    電話番号
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03-1234-5678"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-foreground">
                    従業員数
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
                  >
                    <option value="">選択してください</option>
                    <option value="1-50">1〜50名</option>
                    <option value="51-100">51〜100名</option>
                    <option value="101-500">101〜500名</option>
                    <option value="501-1000">501〜1,000名</option>
                    <option value="1001+">1,001名以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  お問い合わせ内容
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="ご質問やご要望があればご記入ください"
                  className="mt-2"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-input"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  <Link href="/privacy" className="text-accent hover:underline">
                    プライバシーポリシー
                  </Link>
                  に同意します <span className="text-destructive">*</span>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                送信する
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground">お問い合わせ先</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">メール</p>
                      <a
                        href="mailto:contact@shaho.co.jp"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        contact@shaho.co.jp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">電話</p>
                      <a
                        href="tel:03-1234-5678"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        03-1234-5678
                      </a>
                      <p className="text-xs text-muted-foreground">平日 10:00〜18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">住所</p>
                      <p className="text-sm text-muted-foreground">
                        〒150-0002
                        <br />
                        東京都渋谷区渋谷1-1-1
                        <br />
                        渋谷ビル5F
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground">サポート</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    既存のお客様は、管理画面内のサポートチャットをご利用ください。
                  </p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <Link href="/help">ヘルプセンター</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
