import axios from 'axios';

export const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyAYqG4dkr8FeUIXfKTTqqrroxJo0tQENGM',
    //key: process.env.REACT_APP_API_KEY,
  },
});

export const searchVideos = async (searchQuery) => {
  try {
    const result = youtubeClient.get('/search', {
      params: { q: searchQuery, type: 'video' },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVideo = (videoId) => {
  try {
    const result = youtubeClient.get('/videos', {
      params: { id: videoId },
    });
    return result;
  } catch (error) {
    return null;
  }
};

export const getRelationVideoList = (videoId) => {
  try {
    const result = youtubeClient.get('/search', {
      params: { type: 'video', relatedToVideoId: videoId },
    });
    return result;
  } catch (error) {
    return null;
  }
};

//AIzaSyAYqG4dkr8FeUIXfKTTqqrroxJo0tQENGM
