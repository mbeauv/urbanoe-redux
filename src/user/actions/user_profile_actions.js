// @flow

import { urbanoeCommunicator } from '../../common/actions/communicator';
import type { UrbanoeThunkAction } from '../../types';

/**
 * Returns an asynchronous action to retrieve a given user's profile.
 */
export function getSelectedUserProfile(userId: number): UrbanoeThunkAction {
  return async (dispatch) => {
    dispatch({ type: 'SELECTED_USER_PROFILE_REQUEST', userId });

    try {
      const userUrl = `end_users/${userId}.json`;
      const response = await urbanoeCommunicator().get(userUrl);
      dispatch({ type: 'SELECTED_USER_PROFILE_RESPONSE_OK', userProfile: response.data });
    } catch (error) {
      dispatch({ type: 'SELECTED_USER_PROFILE_RESPONSE_ERROR', userId, error });
    }
  };
}
