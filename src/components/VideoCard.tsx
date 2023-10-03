import { Link } from 'react-router-dom';
import { type MostPopurSnippetType, type KeywordSnippetType } from '../type/youtube';
import { formatAgo } from '../util/date';

interface VideoCardProps {
  id: string;
  snippet: KeywordSnippetType | MostPopurSnippetType;
}

export default function VideoCard({ id, snippet }: VideoCardProps) {
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <li>
      <Link to={`/watch/${id}`} state={{ snippet }}>
        <div className="card-thumb">
          <img src={thumbnails.medium.url} alt={title} />
        </div>
        <div className="card-info">
          <p>{title}</p>
          <p>{channelTitle}</p>
          <p>{formatAgo(publishedAt, 'en-US')}</p>
        </div>
      </Link>
    </li>
  );
}
