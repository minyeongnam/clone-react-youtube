import { Link } from 'react-router-dom';
import { type MostPopurSnippetType, type KeywordSnippetType } from '../type/youtube';
import { formatAgo } from '../util/date';

interface VideoCardProps {
  id: string;
  snippet: KeywordSnippetType | MostPopurSnippetType;
  className?: string;
}

export default function VideoCard({ id, snippet, className }: VideoCardProps) {
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <li className={`card ${className}`}>
      <Link to={`/watch/${id}`} state={{ snippet }} className="card__inner">
        <div className="card__thumb">
          <img src={thumbnails.medium.url} alt={title} />
        </div>
        <div className="card__info">
          <strong className="card__title">{title}</strong>
          <span className="card__channel">{channelTitle}</span>
          <span className="card__ago">{formatAgo(publishedAt, 'en-US')}</span>
        </div>
      </Link>
    </li>
  );
}
