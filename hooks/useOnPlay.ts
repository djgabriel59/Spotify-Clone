import { Song } from '@/types';

import usePlayer from './usePlayer';
import useAuthModel from './useAuthModel';
import { useUser } from './useUser';

import React from 'react';

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModel = useAuthModel();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModel.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return onPlay;
};

export default useOnPlay;
