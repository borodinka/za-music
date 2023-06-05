import { actions } from "./actions";

export const initialState = {
  track: null,
  tracks: [],
  isPlaying: false,
};

export function playerReducer(state, action) {
  switch (action.type) {
    case actions.SET_TRACKS_DATA:
      return {
        ...state,
        isPlaying: action.isPlaying,
        track: action.track,
        tracks: action.tracks,
      };

    case actions.TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
  }
}
