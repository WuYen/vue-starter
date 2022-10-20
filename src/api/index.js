async function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}

async function getSchedule(year) {
  return fetchData(`https://ergast.com/api/f1/${year}.json`);
}

async function getDriverStandings(year) {
  return fetchData(`https://ergast.com/api/f1/${year}/driverStandings/0.json`);
}

export default {
  getSchedule,
  getDriverStandings,
};
