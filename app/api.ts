import axios from 'axios';
const XMLParser = require('react-xml-parser');

const fetchURL = 'https://moovitapp.com/tripplan/israel-1/poi';

let config = {
  headers: {
    "host": "moovitapp.com",
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

axios.get(fetchURL, config).then(res => {
  const xml = new XMLParser().parseFromString(res.data);
  let element = findElementById(xml, 'serverApp-state');
  let serverAppState = element && element.value ? JSON.parse(element.value + "") : null;
  let langId = serverAppState.appState.global.selectedLocale.langId;
  let customerId = serverAppState.appState.customer.currentCustomer.id;
  let metroId = serverAppState.appState.customer.currentCustomer.defaultMetroId;
  let key = JSON.stringify({customerId,langId, metroId});
  let userKey = serverAppState.appState.user.metroCombinations[key].userKey;

  console.log(key);
  console.log(serverAppState.appState.user.metroCombinations);
  console.log({ langId, customerId, metroId, userKey });
}).catch(err => console.error(err));