import { formatDistance, parseISO } from "date-fns";
import { differenceInSeconds, differenceInDays } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const formatDistanceFromNowPersian = (dateStr) => {
  const date = typeof dateStr === "string" ? parseISO(dateStr) : dateStr;
  const now = new Date();

  const diffSeconds = differenceInSeconds(date, now);
  const isFuture = diffSeconds > 0;

  const absDiffSeconds = Math.abs(diffSeconds);

  const diffMinutes = Math.floor(absDiffSeconds / 60);

  if (absDiffSeconds < 60) return isFuture ? `چند ثانیه دیگر` : "چند ثانیه پیش";

  if (diffMinutes < 60)
    return isFuture
      ? `${diffMinutes} دقیقه دیگر`
      : ` از ${diffMinutes} دقیقه پیش`;

  const diffHours = Math.floor(absDiffSeconds / 3600);
  if (diffHours < 24)
    return isFuture ? `${diffHours} ساعت دیگر` : ` از ${diffHours} ساعت پیش`;

  const diffDays = Math.floor(absDiffSeconds / (3600 * 24));
  if (diffDays < 30)
    return isFuture ? `${diffDays} روز دیگر` : ` از ${diffDays} روز پیش`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12)
    return isFuture
      ? `حدود ${diffMonths} ماه دیگر `
      : ` از ${diffMonths} ماه پیش`;

  const diffYears = Math.floor(diffDays / 365);
  return isFuture ? `${diffYears} سال دیگر` : ` از ${diffYears} سال پیش`;
};

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();
  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "IRR",
    currencyDisplay: "narrowSymbol",
  }).format(value);
