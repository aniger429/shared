function myFunc() {

require(['N/record'],function (r)
    {
    var p = r.load.promise({type: r.Type.CUSTOMER, id: 1633});
    p.then(function (cust)
    {
    console.log(JSON.stringify(cust));
     });
    }


}
