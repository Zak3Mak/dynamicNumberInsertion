 const fpPromise = import('https://fpcdn.io/v3/i0B5iy6WSpMFPH0pSHLB')
    .then(FingerprintJS => FingerprintJS.load({
      endpoint: 'https://offers.goaptive.com'
    }))
 
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      const visitorId = result.visitorId
      console.log(visitorId)
    });

const pageUrl = window.location.href;
//var dniNumber = findNumber(trackedNumber);
const dniUrl = 'https://marketingservice-1986-dev.twil.io/DynamicNumberInsertion';
const xhr = new XMLHttpRequest();

 


function findNumber(url, visitorId)
{ 
const dniData ="url="+pageUrl+"&visitorId="+visitorId; 
xhr.open('POST', dniUrl, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
xhr.send(params);
return xhr.responseText;
}; 
