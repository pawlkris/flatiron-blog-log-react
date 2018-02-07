import { UPDATE_POST_FILTER } from "./types";

export function updatePostFilter(formState) {
  return {
    type: UPDATE_POST_FILTER,
    tag: formState.tag,
    title: formState.title,
    cohort: formState.cohort,
    sort: formState.sort
  };
}
