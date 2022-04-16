<script setup>
import { user } from "../../data/user";
</script>
 
<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between mx-auto">
        <router-link :to="{ name: 'Home' }"
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kashino125
        </router-link>

        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li>
              <router-link v-if="user.statusUser == true" :to="{ name: 'Pokdeng' }"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Pokdeng</router-link>
              <router-link v-else :to="{ name: 'Signin' }"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Pokdeng</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Leaderboard' }"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Leaderboard</router-link>
            </li>

            <!-- <li>

              <span class="dropdown inline-block relative">
                <p v-show="user.statusUser"
                  class="  md:text-md md:font-medium block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">
                  Welcome: {{
                    user.userName
                  }}</p>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li>
                    <router-link v-if="user.statusUser" :to="{ name: 'Edit' }"
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 pr-5 pl-3 block whitespace-no-wrap text-md mr-4 font-medium">
                      Edit Profile</router-link>
                  </li>
                </ul>
              </span>
            </li> -->

            <li v-show="user.statusUser">
              <router-link :to="{ name: 'Edit' }"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Welcome: {{ user.name }}</router-link>
            </li>
            <li v-if="!user.statusUser">
              <router-link :to="{ name: 'Signin' }"
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md py-1 px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in</router-link>
            </li>
            <li v-else>
              <router-link :to="{ name: 'Signout' }"
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md py-1 px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign out</router-link>
            </li>
          </ul>
        </div>

        <!-- responsive -->
        <div class="flex md:hidden">
          <div class="dropdown inline-block relative">
            <button class="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded inline-flex text-md items-center">
              <span class="mr-3 text-md" v-if="!user.statusUser">Menu</span>
              <span v-else class="block whitespace-no-wrap">Welcome: {{
                user.name
              }}</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <!-- <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--prime"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M20 10.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Zm0-4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Zm0 8H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Zm0 4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Z" />
              </svg> -->
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li>
                <router-link v-if="user.statusUser" :to="{ name: 'Edit' }"
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 pr-5 pl-3 block whitespace-no-wrap text-md mr-4 font-medium">
                  Edit Profile</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Pokdeng' }"
                  class="bg-gray-200 hover:bg-gray-400 py-2 pr-5 pl-3 block whitespace-no-wrap text-md font-medium mr-4">
                  Pokdeng</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Leaderboard' }"
                  class="bg-gray-200 hover:bg-gray-400 py-2 pr-5 pl-3 block whitespace-no-wrap text-md font-medium mr-4">
                  Leaderboard</router-link>
              </li>
              <li v-if="!user.statusUser">
                <router-link :to="{ name: 'Signin' }"
                  class="rounded-b text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2 pr-5 pl-3 block whitespace-no-wrap text-md font-medium mr-4">
                  Sign in</router-link>
              </li>
              <li v-else>
                <router-link :to="{ name: 'Signout' }"
                  class="rounded-b text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2 pr-5 pl-3 block whitespace-no-wrap text-md font-medium mr-4">
                  Sign out</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>
 
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>