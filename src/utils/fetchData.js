export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3a2457913cmsh8c89734abd42292p1ae3e4jsn936a8cd46dda',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
} 