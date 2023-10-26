import { useQuery } from '@tanstack/react-query';

import { useYoutubeApi } from '../context/youtubeApiContext';
import VideoCard from './VideoCard';

interface RelatedVideosProps {
  channelId: string;
  className: string;
}
export default function RelatedVideos({ channelId, className }: RelatedVideosProps) {
  const youtube = useYoutubeApi();
  const { data: RelatedVideos } = useQuery(
    ['RelatedVideos', channelId],
    async () => await youtube?.RelatedVideos(channelId),
    {staleTime: 1000 * 60 * 5}
  );

  return (
    <ul className={`related-list ${className}`}>
      {RelatedVideos?.map(({ id, snippet }: any) => (
        <VideoCard key={id} id={id} snippet={snippet} className="related-list__item" />
      ))}
    </ul>
  );
}
