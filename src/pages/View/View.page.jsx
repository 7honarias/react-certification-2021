import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalCard from '../../components/HorizontalCard';
import useYoutubeApi from '../../components/helpers/useYoutubeApi';

import {
  Viewpage,
  MainContent,
  SideSection,
  SideVideo,
  Title,
  Video,
} from './View.styled';

function ViewPage() {
  const { videoId } = useParams();
  const { video, loading, listVideoRelated, error, fetchVideo, fetchRelation } =
    useYoutubeApi();

  useEffect(() => {
    fetchRelation(videoId);
    fetchVideo(videoId);
    if (error !== null) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const parseString = (string) => {
    const parser = new DOMParser();
    return parser.parseFromString(string, 'text/html').body.innerHTML;
  };

  return (
    <Viewpage>
      {!loading && (
        <MainContent>
          <SideVideo>
            <Video
              title="{video.snippet.title}"
              allowFullScreen
              src={`https://www.youtube.com/embed/${videoId}`}
            />
            <Title>{parseString(video?.snippet?.title)}</Title>
            <hr />
            <p>{parseString(video?.snippet?.description)}</p>
          </SideVideo>
          <SideSection>
            {listVideoRelated.map((card) => (
              <HorizontalCard
                title={parseString(card?.snippet?.title)}
                image={card?.snippet?.thumbnails?.medium?.url}
                videoId={card.id.videoId}
                key={card.id.videoId}
              />
            ))}
          </SideSection>
        </MainContent>
      )}
    </Viewpage>
  );
}

export default ViewPage;
