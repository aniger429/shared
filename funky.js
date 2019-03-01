alert("Hello from CDN!!!");
function myFunc() {
               require(['N/record'], function (r) {
                   var p = r.load.promise({type: r.Type.CUSTOMER, id: 13787});
                   p.then(function (cust) { console.log(JSON.stringify(cust)); } );
               });
           }
