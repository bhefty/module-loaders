let _ = require('lodash')

let people = [
{
"id": 1,
"first_name": "Bobby",
"last_name": "Collins",
"email": "bcollins0@google.nl",
"gender": "Male",
"ip_address": "122.65.28.20"
},
{
"id": 2,
"first_name": "Eugene",
"last_name": "Sullivan",
"email": "esullivan1@pen.io",
"gender": "Male",
"ip_address": "32.112.108.58"
},
{
"id": 3,
"first_name": "Ruth",
"last_name": "Weaver",
"email": "rweaver2@taobao.com",
"gender": "Female",
"ip_address": "183.29.183.63"
},
{
"id": 4,
"first_name": "Robert",
"last_name": "Kim",
"email": "rkim3@netscape.com",
"gender": "Male",
"ip_address": "165.32.197.9"
},
{
"id": 5,
"first_name": "Bobby",
"last_name": "Young",
"email": "byoung4@cargocollective.com",
"gender": "Male",
"ip_address": "39.148.103.45"
},
{
"id": 6,
"first_name": "Jacqueline",
"last_name": "George",
"email": "jgeorge5@twitpic.com",
"gender": "Female",
"ip_address": "239.27.74.8"
},
{
"id": 7,
"first_name": "Tammy",
"last_name": "Greene",
"email": "tgreene6@blogger.com",
"gender": "Female",
"ip_address": "61.153.66.108"
},
{
"id": 8,
"first_name": "Wanda",
"last_name": "Freeman",
"email": "wfreeman7@hatena.ne.jp",
"gender": "Female",
"ip_address": "90.202.194.116"
},
{
"id": 9,
"first_name": "Louis",
"last_name": "Ortiz",
"email": "lortiz8@uiuc.edu",
"gender": "Male",
"ip_address": "70.66.132.48"
},
{
"id": 10,
"first_name": "Joyce",
"last_name": "Moore",
"email": "jmoore9@scientificamerican.com",
"gender": "Female",
"ip_address": "58.105.174.31"
},
{
"id": 11,
"first_name": "Irene",
"last_name": "Williams",
"email": "iwilliamsa@typepad.com",
"gender": "Female",
"ip_address": "113.182.207.184"
},
{
"id": 12,
"first_name": "Christine",
"last_name": "Lawson",
"email": "clawsonb@foxnews.com",
"gender": "Female",
"ip_address": "174.77.227.42"
},
{
"id": 13,
"first_name": "Louis",
"last_name": "Wheeler",
"email": "lwheelerc@tinypic.com",
"gender": "Male",
"ip_address": "175.207.239.33"
},
{
"id": 14,
"first_name": "Helen",
"last_name": "Berry",
"email": "hberryd@google.co.uk",
"gender": "Female",
"ip_address": "155.247.219.216"
},
{
"id": 15,
"first_name": "Rebecca",
"last_name": "Ramos",
"email": "rramose@github.io",
"gender": "Female",
"ip_address": "45.143.66.198"
},
{
"id": 16,
"first_name": "Brandon",
"last_name": "Green",
"email": "bgreenf@un.org",
"gender": "Male",
"ip_address": "0.150.19.41"
},
{
"id": 17,
"first_name": "Christine",
"last_name": "Clark",
"email": "cclarkg@omniture.com",
"gender": "Female",
"ip_address": "152.89.152.187"
},
{
"id": 18,
"first_name": "Theresa",
"last_name": "Flores",
"email": "tfloresh@sciencedirect.com",
"gender": "Female",
"ip_address": "149.110.82.154"
},
{
"id": 19,
"first_name": "Jeffrey",
"last_name": "Pierce",
"email": "jpiercei@behance.net",
"gender": "Male",
"ip_address": "237.174.172.198"
},
{
"id": 20,
"first_name": "Scott",
"last_name": "Richards",
"email": "srichardsj@woothemes.com",
"gender": "Male",
"ip_address": "43.50.186.100"
}
]

let femaleCount = _.filter(people, {gender: 'Female'}).length

alert(femaleCount + ' female count')
