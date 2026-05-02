// Logger disabled to avoid CORS + 401 issues from test server

export const Log = async (
  stack?: string,
  level?: string,
  pkg?: string,
  message?: string
) => {
  // intentionally empty
  return;
};