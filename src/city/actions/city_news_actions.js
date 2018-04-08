// @flow

import { Map } from 'immutable';
import { url } from 'urbanoe-common';
import type { UrbanoeThunkAction } from '../../types';
import { urbanoeCommunicator } from '../../common/actions/communicator';

/**
 * Returns an asynchronous action to retrieve a page of news from the server.
 */
export function getCityNews(cityId: number, pageId: number): UrbanoeThunkAction {
  return async (dispatch) => {
    dispatch({ type: 'CITY_NEWS_PAGE_REQUEST', cityId, pageId });

    try {
      const newsUrl = url('activities.json', Map({
        scope: 'for_city',
        city_id: cityId,
        page: pageId,
      }));
      const response = await urbanoeCommunicator().get(newsUrl);
      dispatch({ type: 'CITY_NEWS_PAGE_RESPONSE_OK', cityNews: response.data });
    } catch (error) {
      dispatch({ type: 'CITY_NEWS_PAGE_RESPONSE_ERROR', error });
    }
  };
}
