// const a = 10;

// setTimeout(() => {
//   console.log(a);
// }, 1000);

// const b = 20;
// console.log(b);
// console.log("before request");
// const asyncWithCallbacks = (successFN, faliureFN) => {
//   const duration = Math.random() * 5000;

//   const db = [{ name: "yashwant" }, { name: "krishna" }];

//   setTimeout(() => {
//     const random = Math.random();
//     // console.log("inside request");

//     if (random > 0.5) {
//       console.log("success");
//       return successFN(db);
//     } else {
//       console.log("failure");
//       return faliureFN("Not a valid request, 502");
//     }
//   }, duration);
// };

// const successFN = (value) => console.log(value);
// const faliureFN = (error) => console.log(error);

// // const response = asyncWithCallbacks(successFN, faliureFN);
// // console.log(response);

// const responseHandler = (response) => {
//   console.log(response);
//   asyncWithCallbacks(
//     (s) => {
//       console.log(s);
//       asyncWithCallbacks(
//         (s) => {
//           console.log(s);
//           asyncWithCallbacks(
//             (s) => {
//               console.log(s);
//               asyncWithCallbacks(
//                 (s) => {
//                   console.log(s);
//                 },
//                 (e) => console.log(e)
//               );
//             },
//             (e) => console.log(e)
//           );
//         },
//         (e) => console.log(e)
//       );
//     },
//     (e) => console.log(e)
//   );
// };

// asyncWithCallbacks(responseHandler, (error) => console.log(error));

// console.log("after request");

const asyncWithPromises = () => {
  return new Promise((resolve, reject) => {
    const duration = Math.random() * 5000;

    const db = [{ name: "yashwant" }, { name: "krishna" }];

    setTimeout(() => {
      const random = Math.random();
      // console.log("inside request");

      if (random > 0.5) {
        console.log("success");
        return resolve(db);
      } else {
        console.log("failure");
        return reject({ success: false, msg: "Something went wrong..." });
      }
    }, duration);
  });
};

// asyncWithPromises()
//   .then((data) => {
//     console.log(data);
//     return asyncWithPromises();
//   })
//   .then((data) => {
//     console.log(data);
//     return asyncWithPromises();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err.msg));

// Async Await
console.log("first");

const asyncWithAwait = async () => {
  try {
    const response = await asyncWithPromises();
    const response1 = await asyncWithPromises();
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

asyncWithAwait();
console.log("second");
