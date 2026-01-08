import axios from 'axios';
const XMLParser = require('react-xml-parser');

const connectURL = 'https://moovitapp.com/tripplan/israel-1/poi';
const arrivalsURL = 'https://moovitapp.com/api/lines/linesarrival';

let config = {
  headers: {
    "host": "moovitapp.com",
    "MOOVIT_USER_KEY": "",
    "MOOVIT_CUSTOMER_ID": "",
    "MOOVIT_APP_TYPE": "WEB_TRIP_PLANNER",
    "MOOVIT_CLIENT_VERSION": "5.151.2/V567",
    "MOOVIT_GTFS_LANGUAGE ": "HE",
    "MOOVIT_METRO_ID": "1",
    "MOOVIT_PHONE_TYPE": "2",
    "Origin": "https://moovitapp.com",
  }
}

function findElementById(node: any, id: string): any {
  if (node.attributes && node.attributes.id === id) return node;
  if (node.children) {
    for (let child of node.children) {
      let found = findElementById(child, id);
      if (found) return found;
    }
  }
  return null;
}


function connect() {

  axios.get(connectURL, config).then(res => {
    const xml = new XMLParser().parseFromString(res.data);
    let element = findElementById(xml, 'serverApp-state');
    var serverAppState: any = null;
    for (let extraBrackets = 0; extraBrackets < 10; extraBrackets++) {
      try {
        serverAppState = element && element.value ? JSON.parse(element.value + "}".repeat(extraBrackets)) : null;
        break;
      } catch (e) {
        console.log(extraBrackets);
        continue;
      }
    }

    let langId = serverAppState.appState.global.selectedLocale.langId;
    let customerId = serverAppState.appState.customer.currentCustomer.id;
    let metroId = serverAppState.appState.customer.currentCustomer.defaultMetroId;
    let key = JSON.stringify({ customerId, langId, metroId });
    let userKey = serverAppState.appState.user.metroCombinations[key].userKey;
    console.log({customerId, userKey, metroId, langId});
    config.headers["MOOVIT_USER_KEY"] = userKey;
    config.headers["MOOVIT_CUSTOMER_ID"] = customerId;
    return {customerId, userKey, metroId, langId};
  }).catch(err => console.error(err));

}

let keys = connect();

function getArrivals(stopId: number, lineIds: number[]) {
  const lineStopPairs = lineIds.map(lineId => ({
    lineId,
    stopId
  }));

  const requestBody = {
    params: {
      lineStopPairs
    }
  };

  console.log(requestBody);

  axios.post(arrivalsURL, requestBody, config).then(res => {
    console.log(res.data);
  });
}

getArrivals(37803416, [2780631, 5522099]);