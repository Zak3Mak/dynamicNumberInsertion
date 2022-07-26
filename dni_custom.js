let visitorId = '';
let dniData = '';
let dniNumber = 8888888888;
const pageUrl = window.location.href;
//var dniNumber = findNumber(trackedNumber);
const dniUrl = 'https://marketingservice-1986-dev.twil.io/DynamicNumberInsertion';
const xhr = new XMLHttpRequest();


let fpPromise = import('https://fpcdn.io/v3/i0B5iy6WSpMFPH0pSHLB')
.then(FingerprintJS => FingerprintJS.load())
.then(fp => fp.get())
.then(result => { 
    visitorId = result.visitorId;
    })
.then (function() {dniData ="url="+pageUrl+"&visitorId="+visitorId;})
.then (function (){xhr.open('POST', dniUrl, true);})
.then (function (){xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');})
.then (function (){xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == 4 && xhr.status == 200) {
dniNumber=xhr.responseText; }
}})
.then (function(){xhr.send(dniData);});
