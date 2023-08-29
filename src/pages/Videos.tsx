import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { search } from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();

  const {
    data: videoData,
    isLoading,
    isError,
  } = useQuery(['videos', keyword], async () => await search());

  return (
    <>
      <div>{keyword ?? 'hot trend'}</div>
      {isLoading && <div>isLoading...</div>}
      {isError && <div>isError...</div>}
      {videoData?.map(({ id, snippet }: any) => (
        <VideoCard title={snippet.title} key={id.videoId} />
      ))}
    </>
  );
}
