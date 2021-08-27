import { useState } from 'react';
import { searchVideos, getVideo, getRelationVideoList } from './helper';

const useYoutubeApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listVideoRelated, setListVideoRelated] = useState([]);
  const [video, setVideo] = useState('');
  const [error, setError] = useState(null);

  const fetchSearch = async (query) => {
    setLoading(true);
    try {
      const resp = await searchVideos(query);
      setData(resp.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchVideo = async (videoId) => {
    setLoading(true);
    try {
      const resp = await getVideo(videoId);
      setVideo(resp.data.items[0]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelation = async (videoId) => {
    setLoading(true);
    try {
      const resp = await getRelationVideoList(videoId);
      setListVideoRelated(resp.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    video,
    listVideoRelated,
    loading,
    error,
    fetchVideo,
    fetchSearch,
    fetchRelation,
  };
};

export default useYoutubeApi;
