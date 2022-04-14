<script setup>
import { ref, onBeforeMount } from "vue";
import { user } from "../../data/user";
const accounts = ref([]);

// const CurrentPassword = ref();

//GET method
const getUser = async () => {
  const res = await fetch(`http://localhost:5000/accounts/${user.userId}`);
  accounts.value = await res.json();
  console.log(accounts.value.passWord);
  console.log(accounts.value.userName);
  // for (let index = 0; index < accounts.value.length; index++) {
  //   const account = accounts.value[index];
  //   console.log(account.passWord);
  // CurrentPassword.value = account.passWord;
};
// };
// console.log(CurrentPassword.value);

onBeforeMount(async () => {
  await getUser();
});

const are_u_user = false;

function confirmpassword() {
  let text;
  let check = prompt(
    "Please enter your password to confirm:",
    "confirm password"
  );
  if (check == accounts.value.passWord) {
    text = ":3";
    are_u_user = true;
    console.log(check);
    console.log(are_u_user);
  } else {
    text = ";p";
    console.log(check);
  }
  // document.getElementById("demo").innerHTML = text;
}
</script>
 
<template>
  <h1>Edit Account</h1>
  <div>
    Edit Name:
    <input placeholder="New Name" />
    <br />
    Edit UserName:
    <input placeholder="New UserName" />
    <br />
    Edit Password:
    <input placeholder="New Password" />
    <br />
    <button>Delet Account</button>
    <br />
    <button @click="confirmpassword">Apply</button>
  </div>
  <!-- <p id="demo"></p> -->
</template>
 
<style>
</style>