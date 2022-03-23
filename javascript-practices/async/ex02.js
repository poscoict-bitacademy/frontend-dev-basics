const fetch = function(param) {
    return new Promise(function(reslove, reject){
        //
        // 비동기 코드: 파일 시스템 접근, 네크워크통신, SQL to DB, setTimeout
        //
        setTimeout(function() {
            if(param === 'param-data') {
                reslove('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);    
    });
}

if(require.main == module) {
    // test01: success
    fetch('param-data').then(function(res){
        console.log(res);
    });

    // test01: fail
    fetch('param-error').catch(function(error){
        console.error(error);
    });

    // 일반적으로
    // fetch('param....')
    //    .then(res => {                
    //    })
    //    .catch(error => {
    //    });

    console.log("wait.....");
} else {
    module.exports = fetch;
}

