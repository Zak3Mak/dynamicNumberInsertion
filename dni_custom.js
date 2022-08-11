var visitorId = '';
var dniData = '';
var dniNumber = 8888888888;
const pageUrl = window.location.href;
var aptiveHrefPhoneNumber = function (phoneNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ')' + match[2] + '-' + match[3];
    }
    return null;
  };
var aptiveDisplayPhoneNumber = function (phoneNumber) {
    var cleaned = ('' + dniNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '' + match[1] + '.' + match[2] + '.' + match[3];
    }
    return null;
  };
var linkUpdate = document.getElementsByTagName("a");
console.log("linkUpdate:", linkUpdate);
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
        
    for (var i = 0; i < linkUpdate.length; i++) {
        if (linkUpdate[i].href.search('tel:') == 0) {
        linkUpdate[i].href = 'tel:1'+aptiveHrefPhoneNumber(dniNumber)+'';
        linkUpdate[i].dataset.ckeSavedHref = 'tel:1'+aptiveHrefPhoneNumber(dniNumber)+'';
            if (linkUpdate[i].innerHTML.search('Call')== 0 ) {
                console.log("Mobile Page");
            } else {
                linkUpdate[i].innerHTML = aptiveDisplayPhoneNumber(dniNumber);
                   }
        }
  }
})
