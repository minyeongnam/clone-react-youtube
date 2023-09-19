import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
// import YoutubeFake from '../api/youtubeFake';

const client = new YoutubeClient();
//  const client = new YoutubeFake();
const youtube = new Youtube(client);

export const YoutubeApiContext = createContext<Youtube | null>(null);

export function YoutubeApiProvider({ children }: { children: JSX.Element }) {
  return <YoutubeApiContext.Provider value={youtube}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
