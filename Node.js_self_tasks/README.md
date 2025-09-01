NodeJS Basics
 Amateur
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Your score will be updated as you progress.
Description


Resources
Read or watch:

Node JS getting started
Process API doc
Child process
Express getting started
Mocha documentation
Nodemon documentation


Learning Objectives

run javascript using NodeJS
use NodeJS modules
use specific Node JS module to read files
use process to access command line arguments and the environment
create a small HTTP server using Node JS
create a small HTTP server using Express JS
create advanced routes with Express JS
use ES6 with Node JS with Babel-node
use Nodemon to develop faster

🔹 NodeJS Tapşırıqlar
1️⃣ Node ilə ilk proqram

👉 Tapşırıq:
salam.js faylı yarat və konsolda "Salam, Node.js!" yazdır.
Komanda:

node salam.js

2️⃣ Node Modulları

👉 Tapşırıq:

os modulundan istifadə et.

Kompüterin əməliyyat sistemi və CPU sayı haqqında məlumatı ekrana yazdır.

İpucu:

const os = require("os");
console.log(os.platform());
console.log(os.cpus().length);

3️⃣ Fayl oxumaq/yazmaq

👉 Tapşırıq:

fs modulundan istifadə et.

data.txt adlı fayl yarat və içinə "Node.js öyrənirik!" yaz.

Sonra həmin faylı oxu və məzmununu ekrana çıxar.

4️⃣ Process ilə arqumentlər

👉 Tapşırıq:

app.js adlı fayl yarat.

Konsoldan istifadəçinin adını al (process.argv ilə).

Proqram işləyəndə "Salam, [ad]" çap eləsin.

Nümunə:

node app.js Elshad


Çıxış:

Salam, Elshad

5️⃣ HTTP server (Node ilə)

👉 Tapşırıq:

http modulundan istifadə et.

Server qur (3000 portunda).

İstifadəçi brauzerdə http://localhost:3000 yazanda “Salam, bu mənim Node serverimdir” yazsın.

6️⃣ HTTP server (Express ilə)

👉 Tapşırıq:

Express quraşdır (npm install express).

/ ünvanında "Ana səhifə",

/about ünvanında "Haqqımızda",

/contact ünvanında "Əlaqə" yazısını qaytaran server yaz.

7️⃣ Express Routes

👉 Tapşırıq:

/user/:id marşrutu yaz.

http://localhost:3000/user/25 daxil olanda çıxış:

İstifadəçi ID: 25

8️⃣ ES6 ilə Express (Babel)

👉 Tapşırıq:

Babel quraşdır (npm install @babel/core @babel/node @babel/preset-env).

import express from "express"; sintaksisi ilə server yaz.

/hello ünvanında "Salam ES6!" qaytarsın.

9️⃣ Nodemon

👉 Tapşırıq:

Nodemon quraşdır (npm install -g nodemon).

app.js faylını nodemon app.js ilə işə sal.

Koda dəyişiklik edəndə server avtomatik restart olub yeni nəticəni göstərsin.

✅ Bonus (kiçik layihə)

Hamısını birləşdirərək mini layihə et:

Express ilə server qur

/, /about, /user/:id marşrutları yaz

fs ilə fayldan oxu və /file ünvanında fayl məzmununu göstər

Nodemon ilə işlət
