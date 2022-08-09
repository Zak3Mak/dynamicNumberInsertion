let visitorId = '';
let dniData = '';
let dniNumber = 8888888888;
const pageUrl = window.location.href;
let aptiveHrefPhoneNumber = function (phoneNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ')' + match[2] + '-' + match[3];
    }
    return null;
  };
let aptiveDisplayPhoneNumber = function (phoneNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '' + match[1] + '.' + match[2] + '.' + match[3];
    }
    return null;
  };
let aTags = document.getElementsByTagName("a");
console.log("aTags:", aTags);
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
dniNumber=xhr.responseText;
console.log("dniNumber:", dniNumber);
    }
}})
.then (function(){xhr.send(dniData);})
.then (function fillNumber(dniNumber){
        
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].href.search('tel:') == 0) {
        aTags[i].href = 'tel:1'+aptiveHrefPhoneNumber(dniNumber)+'';
        aTags[i].dataset.ckeSavedHref = 'tel:1'+aptiveHrefPhoneNumber(dniNumber)+'';
            if (aTags[i].innerHTML.search('Call')== 0 ) {
                console.log("Mobile Page");
            } else {
                aTags[i].innerHTML = aptiveDisplayPhoneNumber(dniNumber);
                   }
        }
  }
})
