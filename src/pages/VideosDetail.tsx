import { useLocation, useParams } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    state: { snippet },
  } = useLocation();
  const { title, channelTitle, description, channelId } = snippet;
  return (
    <div>
      <div className="video">
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
          <h1>{title}</h1>
          <ChannelInfo channelId={channelId} channelTitle={channelTitle} />
          <p>{description}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>리스트다</li>
        </ul>
      </div>
    </div>
  );
}
