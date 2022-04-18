# 🎰Kashino125
<p align="center">
 <img src="https://media3.giphy.com/media/H6nbCkEAauNjBzxxrJ/giphy.gif?cid=ecf05e47fkuqzbu9ziz7gds3j0qm3iocxcgwn1jboq3g8elk&rid=giphy.gif&ct=g" />
</p>

## About Kashino125
เป็น Web App ที่ให้ผู้เล่นได้เล่นเกม Pokdeng โดยผู้เล่นจะต้องสมัครสมาชิกก่อนเล่นเกมเพื่อที่ระบบจะนำข้อมูลของผู้เล่นไปจัดอันดับ ซึ่งจะมีชื่อ และ คะแนนของผู้เล่นอยู่บน Leaderboard หรือจะเล่นในโหมด Anonymous ก็ได้แต่จะไม่มีการบันทึกคะแนนขึ้น Leaderboard โดยขั้นตอนการใช้งาน Web สามารถดูตาม GIF ด้านล่างได้เลย

### ขั้นตอนการใช้งานแบบ Anonymous
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163741714-2e879096-1251-4c7a-bb95-3ff9d08d19bb.gif" />
</p>

### ขั้นตอนการใช้งานแบบสมัครสมาชิก
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163744510-a4605ad3-17a5-401c-8228-990cee875097.gif" />
</p>

### Function ภายในเว็บ
- Sign up, Sign in and Sign out 
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163744541-273d6a26-4586-41d1-897a-554ed45189cc.gif" />
</p>

- Game Pokdeng
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163744517-f539fe6f-af1e-4d10-bca4-df2d5dd261a3.gif" />
</p>

- Leaderboard
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163744555-d2ba81b1-c7e3-4d5c-aac5-46c2ac141bf9.gif" />
</p>

- Edit Account
<p align="center">
 <img src="https://user-images.githubusercontent.com/68856607/163744558-ba316d76-a7c2-463d-8906-c74bd0c819be.gif" />
</p>

## ความสามารถของแต่ละ Component
### Views :จำนวน 7 Views
- <strong>Home.vue</strong> </br>  หน้าแรกของตัวเว็บไซต์
- <strong>Pokdeng.vue</strong> </br> ส่วนหน้าตาของเกม Pokdeng โดยจะมีการ UPDATE Points ไปยัง db.json ของผู้เล่นเมื่อกดเริ่มเกมและจบเกม
- <strong>Signin.vue</strong> </br> ส่วนของการ GET ข้อมูลของ User จาก db.json เพื่อนำข้อมูลมาเช็คกับข้อมูลจาก Component AppSignin ที่ทำการส่ง emit มา ก่อนการ Sign in เข้าสู่ระบบ โดยถ้าชื่อหรือรหัสผ่านผิดจะทำการส่ง status การ login ไปยัง Component AppSignin เพื่อโชว์ข้อความเตือนผู้ใช้
- <strong>Signout.vue</strong> </br> ส่วนของการ signout ออกจากระบบ
- <strong>Signup.vue</strong> </br> ส่วนของการ POST ข้อมูลไปยัง db.json โดยจะทำการ GET ข้อมูลมาจาก db.json เพื่อเช็คว่าความถูกต้องของข้อมูลชื่อ username ที่ทำการระบุมาจาก Component AppSigup ที่ทำการส่ง emit มา ว่ามีอยู่ใน db.json แล้วหรือยัง 
- <strong>Leaderboard.vue</strong> </br> หน้าตาการจัดลำดับของผู้เล่นทุกคน โดยทำการ GET ข้อมูลจาก db.json และทำการ sort ข้อมูลตามจำนวน Points ของผู้เล่นจากมากไปน้อย
- <strong>EditAccount.vue</strong>  </br> เป็นในส่วนของหน้าที่สามารถ UPDATE และ DELETE ข้อมูลของผู้เล่น โดยสามารถเปลี่ยนได้ทั้ง Display name และ User name หรือจะทำการลบ Account 
### Components :จำนวน 7 Components
- <strong>AppNavbar.vue</strong> </br> หน้าตาของ Navbar และจัดการเรื่องของการทำ router 
- <strong>AppSignin.vue</strong> </br> ส่วนหน้าตาของการ Signin และทำการส่ง emit ข้อมูลต่างๆจากการที่ผู้ใช้กรอกกลับมาให้กับหน้า View Signin.vue
- <strong>AppSignup.vue</strong> </br> ส่วนหน้าตาของ Signout และทำการส่ง emit ข้อมูลต่างๆจากการที่ผู้ใช้กรอกกลับมาให้กับหน้า View Signup.vue
- <strong>bot.vue</strong> </br> เป็นส่วนของหน้าตาการ์ดของบอท 
- <strong>card.vue</strong> </br> หน้าตาของการที่จะถูกสุ่มในเเต่ละใบ
- <strong>player.vue</strong> </br> เป็นส่วนการ์ดของผู้เล่น
- <strong>random.vue</strong> </br> ส่วนที่ทำการสุ่มเลขต่างๆ รวมไปถึงการ compare ของเกม

# Vue 3 + Vite     ![This is an image](https://github.com/thanakritcankha/sec-1-group-5-kashino125/blob/main/public/favicon.ico)
This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Installation and Usage
- Install node_module
``` bash
npm install
```

- Run Project
``` sh
npm run dev 
```
- Run Backend
``` sh
npm run backend
```
 

# INT203-Group5

 | No. | Name              | Student ID   |
|:---:|-------------------|--------------|
|  1  |  กัณฑ์พงษ์ ศรีสุธาภัทร์   | 63130500004  |
|  2  | จิรสิน ฉัตร์บรรยงค์ | 63130500011  |
|  3  | ชินภัค เจริญศิริ | 63130500021 |
|  4  | ทรรศภูมิ คงนิธิเฉลิม  | 63130500044 |
|  5  |  ธนกฤต แคนขา  | 63130500045 |

