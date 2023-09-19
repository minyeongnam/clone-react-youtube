import { type KeywordSnippetType } from '../type/youtube';
import { formatAgo } from '../util/date';

interface VideoCardProps {
  snippet: KeywordSnippetType;
}

export default function VideoCard({
  snippet: { title, thumbnails, channelTitle, publishedAt },
}: VideoCardProps) {
  return (
    <li>
      <div className="card-thumb">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="card-info">
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'en-US')}</p>
      </div>
    </li>
  );
}
