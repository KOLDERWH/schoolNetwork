const ip = require('./ip')
const axios = require('axios');

// 密码
const password = ''
// 账号
const username = ''
// 运营商 中国移动=2 中国电信=3  中国联通=4
const channel = '4'
// 是否漫游 0否 1是
const ifautologin = '0'

let headers = {
    'Origin': 'http://10.255.255.34',
    'Host': '10.255.255.34',
    'Accept': 'application/json, text/plain, */*',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
}
const loginurl = 'http://10.255.255.34/api/v1/login'

function Login() {
    var usripadd = ip.address();
    axios.post(loginurl, {
        headers,
        data: {
            channel: '_GET',
            ifautologin,
            pagesign: 'firstauth',
            password,
            username,
            usripadd,
        }

    }).then(function (response) {
        let items = response.status
        // console.log(items);
    }).catch(function (error) {
        console.log(error);
    });

    axios.post(loginurl, {
        headers,
        data: {
            channel,
            ifautologin,
            pagesign: 'secondauth',
            password,
            username,
            usripadd,
        }

    }).then(function (response) {
        if (response.status === 200)
            console.log('success');
    }).catch(function (error) {
        console.log(error);
    });
}

Login()


