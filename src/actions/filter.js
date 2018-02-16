import {
  UPDATE_POST_FILTER,
  UPDATE_DASHBOARD_FILTER,
  CLEAR_POST_FILTER,
  CLEAR_DASHBOARD_FILTER
} from "./types";

export function updatePostFilter(formState) {
  return {
    type: UPDATE_POST_FILTER,
    tag: formState.tag,
    title: formState.title,
    cohort: formState.cohort_id,
    sort: formState.sort
  };
}

export function clearPostFilter() {
  return {
    type: CLEAR_POST_FILTER
  };
}

export function updateDashboardFilter(formState) {
  return {
    type: UPDATE_DASHBOARD_FILTER,
    filter: formState
  };
}

export function clearDashboardFilter() {
  return {
    type: CLEAR_DASHBOARD_FILTER
  };
}
