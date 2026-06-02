import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString?: string | null): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  // CMS データに不正な日付が混ざっても "Invalid Date" を表示しないようガードする
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * カテゴリ名の表示用正規化。
 * 生成・入稿パイプラインの不具合で CMS 側に先頭文字が重複した値
 *（例: 「福福利厚生」）が入り込むことがあるため、表示時に補正する。
 * カテゴリ名は短い管理語彙のため、先頭1文字が直後と同一なら重複とみなす。
 */
export function normalizeCategoryName(name?: string | null): string {
  if (!name) return ''
  let result = name.trim()
  // 文字列全体が同じ並びの2回繰り返し（例: 「福利厚生福利厚生」）を畳む
  const half = result.length / 2
  if (result.length % 2 === 0 && result.slice(0, half) === result.slice(half)) {
    result = result.slice(0, half)
  }
  // 先頭1文字だけが重複（例: 「福福利厚生」）しているケースを補正
  if (result.length > 1 && result[0] === result[1]) {
    result = result.slice(1)
  }
  return result
}
