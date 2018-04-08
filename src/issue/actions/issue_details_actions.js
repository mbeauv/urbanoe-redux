// @flow

import { urbanoeCommunicator } from '../../common/actions/communicator';
import type { UrbanoeThunkAction } from '../../types';

/**
 * Returns an asynchronous action to retrieve the details of a given issue.
 */
export function getIssueDetails(issueId: number): UrbanoeThunkAction {
  return async (dispatch) => {
    dispatch({ type: 'ISSUE_DETAILS_REQUEST', issueId });

    try {
      const url = `/issues/${issueId}.json`;
      const response = await urbanoeCommunicator().get(url);
      dispatch({ type: 'ISSUE_DETAILS_RESPONSE_OK', issueDetails: response.data });
    } catch (error) {
      dispatch({ type: 'ISSUE_DETAILS_RESPONSE_ERROR', issueId, error });
    }
  };
}
