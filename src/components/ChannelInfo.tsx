import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/youtubeApiContext';

interface ChannelProps {
  channelId: string;
  channelTitle: string;
}

export default function ChannelInfo({ channelId, channelTitle }: ChannelProps) {
  const youtube = useYoutubeApi();
  const { data: channelIconUrl } = useQuery(
    ['channelIconUrl', channelId],
    () => youtube?.channelIconUrl(channelId), {staleTime: 1000* 60 * 5}
  );
  return (
    <div className="channel">
      <img src={channelIconUrl} alt="채널 아이콘" />
      {channelTitle}
    </div>
  );
}
