<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { user } from "../../data/user";
const accounts = ref({});

//GET method
const getUser = async () => {
  const res = await fetch(`http://localhost:5000/accounts/${user.userId}`);
  accounts.value = await res.json();
  console.log(accounts.value);
};

const editUser = async () => {
  userEdit.points = accounts.value.points;
  const res = await fetch(`http://localhost:5000/accounts/${user.userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userEdit),
  });
  if (res.status === 200) {
    const newInfo = await res.json();
    user.setLoginUserName(newInfo.userName);
  }
};

onBeforeMount(async () => {
  if (user !== null) {
    await getUser();
  }
});

let are_u_user = false;

async function confirmpassword() {
  let check = prompt("Please enter your password to confirm:");
  if (check == accounts.value.passWord) {
    are_u_user = true;
    await editUser();
    userEdit.name = "";
    userEdit.userName = "";
    userEdit.passWord = "";
    alert("Infomation Updated!!");
  } else {
    alert("Invalid credential");
  }
}
const userEdit = reactive({
  userName: "",
  passWord: "",
  name: "",
  points: "",
});
</script>

<template>
  <h1>Edit Account</h1>
  <div>
    Edit Name:
    <input placeholder="New Name" v-model="userEdit.name" />
    <br />
    Edit UserName:
    <input placeholder="New UserName" v-model="userEdit.userName" />
    <br />
    Edit Password:
    <input placeholder="New Password" v-model="userEdit.passWord" />
    <br />
    <button>Delet Account</button>
    <br />
    <button @click="confirmpassword">Apply</button>
  </div>
</template>

<style></style>
