import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';

const youtube = new Youtube(); // MockData는 YoutubeFake()를 사용
export const YoutubeApiContext = createContext<Youtube | null>(null);

export function YoutubeApiProvider({ children }: { children: JSX.Element }) {
  return <YoutubeApiContext.Provider value={youtube}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
