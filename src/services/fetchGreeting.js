const getGreeting = async () => {
  const response = await fetch('http://127.0.0.1:3000/greeting', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.message;
};

export default getGreeting;
