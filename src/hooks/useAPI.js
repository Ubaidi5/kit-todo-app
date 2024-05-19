import { useState } from "react";

export const useAPI = (api) => {
  const [loading, toggleLoading] = useState(false);

  async function fetch_function() {
    try {
      toggleLoading(true);
      const res = await api();
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      toggleLoading(false);
    }
  }

  return [fetch_function, loading];
};
