// Cloudflare Pages Function: トップ(/) アクセス時のみ、訪問者のブラウザ言語を見て
// 英語系なら /en/ へ 302 リダイレクトする。SEO配慮のため以下を守る:
//  - クローラー(googlebot等)は判定せず日本語版(/)をそのまま返す
//  - 恒久統合を避けるため 301 ではなく 302 を使う
//  - 一度言語を選んだら cookie(lang) で記憶し、再判定しない
//  - このFunctionは / のみを担当。/en/ や他URLは対象外

const CRAWLER_UA = /(googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|sogou|exabot|facebot|ia_archiver|bot|crawler|spider)/i;

function getCookie(cookieHeader, name) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

// Accept-Language の先頭の主要言語が en 系かどうかを判定する
function prefersEnglish(acceptLanguage) {
  if (!acceptLanguage) return false;
  // 例: "en-US,en;q=0.9,ja;q=0.8" -> 品質値順に見て最初にマッチした言語で判断
  const langs = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of langs) {
    if (tag.startsWith("ja")) return false; // 日本語が最優先なら日本語のまま
    if (tag.startsWith("en")) return true; // 英語が(日本語より先に)来たら英語へ
  }
  return false;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // / 以外は対象外（保険。基本 /index に対してのみ発火する）
  if (url.pathname !== "/") {
    return next();
  }

  const ua = request.headers.get("user-agent") || "";
  // クローラーは判定せず、日本語版をそのまま返す
  if (CRAWLER_UA.test(ua)) {
    return next();
  }

  // すでに言語選択済みなら再判定しない
  const chosen = getCookie(request.headers.get("cookie"), "lang");
  if (chosen) {
    return next();
  }

  // ブラウザ言語で判定
  if (prefersEnglish(request.headers.get("accept-language"))) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/en/",
        // 何度もリダイレクトしないよう、判定結果を記憶
        "Set-Cookie": "lang=en; Path=/; Max-Age=31536000; SameSite=Lax",
        "Cache-Control": "no-store",
      },
    });
  }

  // 日本語のまま
  return next();
}
