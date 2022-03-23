const fetch = function(param, callback){
    //
    // 비동기 코드: 파일 시스템 접근, 네크워크통신, SQL to DB, setTimeout
    //
    setTimeout(function() {
        if(param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);    
}

// test01: success
fetch('param-data', function(error, res){
    if(error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

// test01: fail
fetch('param-error', function(error, res){
    if(error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

console.log("wait.....");