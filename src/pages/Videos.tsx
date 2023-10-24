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
      <h1 className="keyword">{keyword === undefined ? 'HOT TREND🔥' : `KEYWORD: ${keyword}`}</h1>
      {isLoading && <div>isLoading...</div>}
      {isError && <div>isError...</div>}
      <ul className="video-list">
        {videoData?.map(({ id, snippet }, index) => {
          return (
            <VideoCard
              id={id}
              snippet={snippet}
              key={`${id}${index}`}
              className="video-list__item"
            />
          );
        })}
      </ul>
    </>
  );
}
