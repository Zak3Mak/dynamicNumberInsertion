let visitorId = '';
let dniData = '';
let dniNumber = 8888888888;
var aTags = document.getElementsByTagName("a");
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
.then (function(){xhr.send(dniData);})

.then (function aptiveDisplayPhoneNumber(dniNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '' + match[1] + '.' + match[2] + '.' + match[3];
    }
    return null;
  };)
.then (function aptiveHrefPhoneNumber(dniNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ')' + match[2] + '-' + match[3];
    }
    return null;
  };)
.then (function fillNumber(trackedNumber){
    for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].href.search('tel:') == 0) {
    aTags[i].href = 'tel:1'+aptiveHrefPhoneNumber(trackedNumber)+'';
    aTags[i].dataset.ckeSavedHref = 'tel:1'+aptiveHrefPhoneNumber(trackedNumber)+'';
    if (aTags[i].innerHTML.search('Call')== 0 )
        {console.log("Mobile Page");}
      else {aTags[i].innerHTML = aptiveDisplayPhoneNumber(trackedNumber);}
    }
  }
};)
