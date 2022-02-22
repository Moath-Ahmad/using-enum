// enum Month {
//     Jan = 1,
//     Feb,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     Jul,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec
// };

// function isItSummer(month: Month) {
//     let is_summer: boolean;

//     switch (month) {
//         case Month.Jun:
//         case Month.Jul:
//         case Month.Aug:
//             is_summer = true;
//             console.log(`${month} is a summer month`);
//             break;
//         default:
//             is_summer = false;
//             console.log(`${month} isn't a summer month`);
//             break
//     };
//     return is_summer;
// };

// console.log(Month.Jun);
// console.log(isItSummer(Month.Aug));

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}

const request = {
    id: 1,
    status: ApprovalStatus.submitted,
    description: 'Please approve this request'
}

if (request.status == ApprovalStatus.submitted) {
    console.log('You have a request to approve please check your email!')
}

// convert JSON file to array of object to use it

const json = '{ "result": true, "count": 42}';
const obj = JSON.parse(json);

console.log(obj.result);
console.log(obj.count);