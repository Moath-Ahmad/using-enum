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
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 1,
    status: ApprovalStatus.submitted,
    description: 'Please approve this request'
};
if (request.status == ApprovalStatus.submitted) {
    console.log('You have a request to approve please check your email!');
}
