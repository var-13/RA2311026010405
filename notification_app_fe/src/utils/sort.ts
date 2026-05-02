export const sortNotifications = (data: any[]) => {
  const priorityOrder: any = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return data
    .sort((a, b) => {
      // Priority first
      if (priorityOrder[b.Type] !== priorityOrder[a.Type]) {
        return priorityOrder[b.Type] - priorityOrder[a.Type];
      }

      // Then latest time
      return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime();
    })
    .slice(0, 10);
};