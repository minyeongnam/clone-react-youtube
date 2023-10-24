import { useLocation, useParams } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    state: { snippet },
  } = useLocation();
  const { title, channelTitle, description, channelId } = snippet;
  return (
    <div className="video-view">
      <div className="video-view__video">
        <iframe
          id="player"
          className="video__iframe"
          itemType="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen={true}
          frameBorder={0}
        />
        <div className="video__info">
          <strong className="video__title">{title}</strong>
          <ChannelInfo channelId={channelId} channelTitle={channelTitle} />
          <p className="video__description">{description}</p>
        </div>
      </div>
      <RelatedVideos channelId={channelId} className="video-view__related" />
    </div>
  );
}
