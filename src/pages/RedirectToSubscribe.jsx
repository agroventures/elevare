import React, { useEffect } from 'react'

const RedirectToSubscribe = () => {
  useEffect(() => {
    window.location.replace("https://subscribe.elevare.lk");
  }, []);

  return null;
};

export default RedirectToSubscribe
