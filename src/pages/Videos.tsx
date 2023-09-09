import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/youtubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const youtube = useYoutubeApi();

  const {
    data: videoData,
    isLoading,
    isError,
  } = useQuery(['videos', keyword], async () => await youtube?.search(keyword));

  return (
    <>
      <div>{keyword ?? 'hot trend'}</div>
      {isLoading && <div>isLoading...</div>}
      {isError && <div>isError...</div>}
      {videoData?.map(({ id, snippet }) => <VideoCard title={snippet.title} key={id} />)}
    </>
  );
}
