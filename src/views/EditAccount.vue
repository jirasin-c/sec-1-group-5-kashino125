<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { user } from "../../data/user";
import { useRouter } from "vue-router";

const accounts = ref([]);
const router = useRouter();
const cantEdit = ref(true)

//GET method
const getUser = async () => {
  const res = await fetch(`http://localhost:5000/accounts/${user.userId}`);
  accounts.value = await res.json();
};

//PUT method
const editUser = async () => {
  userEdit.points = accounts.value.points;
  userEdit.passWord = accounts.value.passWord;
  const res = await fetch(`http://localhost:5000/accounts/${user.userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userEdit.userName,
      name: userEdit.name,
      passWord: userEdit.passWord,
      points: userEdit.points
    }),
  });
  if (res.status === 200) {
    const newInfo = await res.json();
    user.setLoginUserName(newInfo.userName);
    user.setLoginName(newInfo.name)
  }
};

onBeforeMount(async () => {
  await getUser();
});


//DELETE method
const removeAccount = async () => {
  if (confirm(`Do you confirm to delete your account ?`)) {
    const res = await fetch(`http://localhost:5000/accounts/${user.userId}`, {
      method: "DELETE",
    });
    if (res.status === 200) {

      user.setLogoutStatus();
      user.setLogoutName();
      user.setLogoutUserId();
      user.setLogoutUserName();
      user.setLogoutUserPoint();
      router.push({ name: 'Home' });
      console.log("delete account successfully");
    } else {
      console.log("error, cannot delete account");
    }
  } else {

  }

};
const userEdit = reactive({
  userName: user.userName,
  passWord: "",
  name: user.name,
  points: ""
});
</script>

<template>
  <div class="py-32 ">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
      <div class="md:flex">
        <div class="w-full p-2 py-10">
          <div class="flex justify-center">
            <div class="relative"> <img src="../assets/user.png" class="rounded-full" width="80"> </div>
          </div>
          <div class="flex flex-col text-center mt-3 mb-4"> <span class="text-2xl font-medium">{{ user.name }}</span>
            <span class="text-md text-gray-400">@{{ user.userName }}</span>
          </div>

          <div>
            <label for="name" class="block mb-2 font-medium text-center text-md text-gray-800">User
              name</label>
            <input type="text" name="name" id="name"
              class="bg-slate-300 border-1 rounded-lg px-4 py-2 w-full text-gray-800 " v-model="userEdit.userName"
              :disabled="cantEdit" :class="{ 'opacity-25 cursor-not-allowed': cantEdit }" />
          </div>
          <div>
            <label for="password" class="block mb-2 font-medium text-center text-md text-gray-800">Display Name</label>
            <input type="text" name="password" id="password" class="bg-slate-300 border-1 rounded-lg px-4 py-2 w-full"
              v-model="userEdit.name" :disabled="cantEdit" :class="{ 'opacity-25 cursor-not-allowed': cantEdit }" />
          </div>
          <div class="px-14 mt-5">
            <button class="h-12 bg-sky-500 w-full text-white text-md rounded-lg hover:shadow hover:bg-sky-600 mb-2"
              :disabled="user.userPoint > 0" :class="{ 'opacity-50 cursor-not-allowed': user.userPoint > 0 }"
              @click="user.userPoint = 1000">Add
              1000 Points</button>
            <button class="h-12 bg-red-500 w-full text-white text-md rounded-lg hover:shadow hover:bg-red-700 mb-2"
              @click="removeAccount">Delete
              Account</button>
            <button class="h-12 bg-blue-700 w-full text-white text-md rounded-lg hover:shadow hover:bg-blue-800"
              @click="cantEdit = !cantEdit" v-if="cantEdit">Edit</button>
            <button class="h-12 bg-blue-700 w-full text-white text-md rounded-lg hover:shadow hover:bg-blue-800"
              @click="editUser" v-else>Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
</style>
