import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ko from 'javascript-time-ago/locale/ko';

TimeAgo.addLocale(ko);
TimeAgo.addLocale(en);

export function formatAgo(date: Date, lang: string = 'ko-KO') {
  const timeago = new TimeAgo(lang);

  return timeago.format(new Date(date));
}
