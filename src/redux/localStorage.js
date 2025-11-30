
// export const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem("state");
//       if (!serializedState) return undefined;
//       else return JSON.parse(serializedState);
//     } catch(err) {
//       return undefined;
//     }
//   };
  
//   export const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem("state", serializedState);
//     } catch(err) {
//       console.log(err);
//     }
//   };


export const loadState = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return undefined;

    const cartKey = `cart_${user.email}`;
    const serializedState = localStorage.getItem(cartKey);

    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const cartKey = `cart_${user.email}`;
    const serializedState = JSON.stringify(state);

    localStorage.setItem(cartKey, serializedState);
  } catch (err) {
    console.log(err);
  }
};
