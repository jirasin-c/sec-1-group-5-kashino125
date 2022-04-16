<script setup>
import { onBeforeMount, ref } from 'vue'

// const topThree = ref([])
const first = ref([])
const second = ref([])
const third = ref([])
const formForth = ref([])

const getUser = async () => {
  const response = await fetch(`http://localhost:5000/accounts`)
  const data = await response.json()
  // sort data by points
  data.sort((a, b) => b.points - a.points)
  for (let i = 0; i < 3; i++) {
    // topThree.value.push(data[i])
    if (i === 0) {
      first.value = data[i]
    } else if (i === 1) {
      second.value = data[i]
    } else if (i === 2) {
      third.value = data[i]
    }
  }
  for (let i = 3; i < data.length; i++) {
    formForth.value.push(data[i])
  }
  console.log(first.value)
  console.log(second.value)
  console.log(third.value)
  console.log(formForth.value)
  // console.log(topThree.value)
  // user.value = data
  // console.log(user.value)
}

onBeforeMount(async () => {
  await getUser()
})
</script>

<template>
  <!-- create Leaderboard -->
  <div>
    <div class="card one">
      <div class="header">
        <i class="arrow fas fa-chevron-left"></i>
        <h1 class="title">Leaderboard</h1>
      </div>

      <div class="profile">
        <!-- <div v-for="(three, index) in topThree">
          <div class="num">{{ index }}</div>
          <img src="" alt="" class="photo" />
          <p class="link">{{ three[index + 1][name] }}</p>
          <p class="points">{{ three.points }}</p>
        </div> -->

        <div class="person second">
          <div class="num">2</div>
          <!-- <i class="fas fa-caret-up"></i> -->
          <img src="../img/silver_medal.png" alt="" class="photo" />
          <p class="link">{{ second.name }}</p>
          <p class="points">{{ second.points }}</p>
        </div>
        <!-- <div>
          <ul v-for="u in user">
            <li>
              <div class="person">
                <div class="num">{{ u.name }}</div>
                <p class="points">{{ u.points }}</p>
              </div>
            </li>
          </ul>
        </div> -->
        <div class="person first">
          <div class="num">1</div>
          <i class="fas fa-crown"></i>
          <img src="../img/gold_medal.png" alt="" class="photo main" />
          <p class="link">{{ first.name }}</p>
          <p class="points">{{ first.points }}</p>
        </div>

        <div class="person third">
          <div class="num">3</div>
          <i class="fas fa-caret-up"></i>
          <img src="../img/bronz_medal.png" alt="" class="photo" />
          <p class="link">{{ third.name }}</p>
          <p class="points">{{ third.points }}</p>
        </div>
      </div>

      <div class="rest">
        <div class="others flex" v-for="(forth, index) in formForth">
          <div class="rank">
            <i class="fas fa-caret-up"></i>
            <p class="num">{{ index + 4 }}</p>
          </div>
          <div class="info flex">
            <img src="" alt="" class="p_img" />
            <p class="link">{{ forth.name }}</p>
            <p class="points">{{ forth.points }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
  font-family: 'Josefin Sans', Arial;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  background: #2f855a;
}

.title h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.card {
  min-height: 475px;
  width: 500px;
  margin: 2rem;
  border-radius: 15px;
  background: #02383c;
}

.card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 1.5rem;
}

.card .header .title {
  font-weight: 300;
}

.photo {
  width: 75px;
  background: #fff;
  border-radius: 50%;
  border: 5px solid cyan;
  box-shadow: 0 0 20px cyan;
  margin: 1rem 0;
}

.main {
  width: 85px;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.profile .person {
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
}

.profile .person.first {
  z-index: 10;
  transform: translateY(-10%);
}

.first .fa-crown {
  color: gold;
  filter: drop-shadow(0px 0px 5px gold);
}

.num {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.fa-caret-up {
  color: cyan;
  font-size: 21px;
}

.link {
  margin: 0.2rem 0;
  color: #fff;
  margin-top: -0.3rem;
  font-size: 13px;
}

.points {
  color: cyan;
  font-size: 17px;
}

.second {
  margin-right: -0.7rem !important;
}

.third {
  margin-left: -0.7rem !important;
}

.p_img {
  width: 50px;
  background: #fff;
  border-radius: 50%;
}

.flex {
  display: flex;
  align-items: center;
}

.others {
  display: flex;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: rgba(210, 255, 213, 0.3);
}

.info .points {
  margin-left: 0.2rem;
  margin-right: 1.2rem;
}

.info .link {
  margin: 0 1rem;
}

.rank {
  display: flex;
  align-items: center;
  margin: 0 1rem;
  flex-direction: column-reverse;
}

.rank i {
  margin-top: -5px !important;
}

.rank .num {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
