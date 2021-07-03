var btn1 = document.getElementById('new');
var btn2 = document.getElementById('login');
var btn3 = document.getElementById('login10');
var btn4 = document.getElementById('analysis');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
// もし入力した最新の数値が平均よりも高ければ(あかん)
    btn1.addEventListener('click', function(){
        modal2.style.display = 'block';})
        // モーダルを非表示にする
        var closeBtn2 = document.getElementById('closeBtn2'); 
        closeBtn2.addEventListener('click', function(){
        modal2.style.display = 'none';
    })
    // もし入力した最新の数値が平均と同じもしくは低ければ(良い)

    btn2.addEventListener('click', function(){
        modal1.style.display = 'block';
    })
    // モーダルを非表示にする
        var closeBtn1 = document.getElementById('closeBtn1'); 
closeBtn1.addEventListener('click', function(){
modal1.style.display = 'none';
})  

btn3.addEventListener('click', function(){
    modal1.style.display = 'block';
    modal2.style.display = 'none';
})
// モーダルを非表示にする
    var closeBtn1 = document.getElementById('closeBtn1'); 
closeBtn1.addEventListener('click', function(){
modal1.style.display = 'none';
})  

btn4.addEventListener('click', function(){
    modal2.style.display = 'block';
})
// モーダルを非表示にする
    var closeBtn1 = document.getElementById('closeBtn1'); 
closeBtn2.addEventListener('click', function(){
modal2.style.display = 'none';
})  

// // firebase読み込み設定
// // firesbaseのサイトのコード---------------------------
// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyADj2QGm3iGDaMioO8ZX3NZN5_kTc0xsVA",
//   authDomain: "dev20chat-c8419.firebaseapp.com",
//   databaseURL: "https://dev20chat-c8419-default-rtdb.firebaseio.com/",  //仕様が変わった
//   projectId: "dev20chat-c8419",
//   storageBucket: "dev20chat-c8419.appspot.com",
//   messagingSenderId: "179098484234",
//   appId: "1:179098484234:web:d61a44c26659008fb1a9f3"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //------------------------------------------------
// //firebaseのデーターベース（保存させる場所）を使いますよ
// // firebaseのデータベースとリアルタイムに繋がることができる
// const newPostRef = firebase.database().ref();
// // 現在地の取得(geolocation)ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// //最初に実行する関数
//  function GetMap() {
//   navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
// }
// //****************************************
//     //成功関数(位置情報を取得できたらこの関数を表示する)
//     //****************************************
//     let map;
//     function mapsInit(position) {
//       //lat=緯度、lon=経度 を取得
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
//       map = new Microsoft.Maps.Map('#myMap', {
//         center: new Microsoft.Maps.Location(lat, lon), 
//         zoom: 13,
//         // 検索窓を追加する
//         showSearchBar: true
//     });
//     // 現在地の緯度経度
//     console.log(lat); //35.8616739
//     console.log(lon); //139.9709821
//     //現在地にピンの設定をするーーー
//     var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { 
//       color: 'red' 
//     });
//     //現在地にピンを刺す
//     map.entities.push(pushpin);
//     // テキストBOXを追加する
//    var center = map.getCenter();
//    console.log(center);
//    var infobox = new Microsoft.Maps.Infobox(center, { 
//      title: '自分', 
//      description: '食GOを開始します' ,
//     });
//    infobox.setMap(map);
 

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // 柏郵便局千代田店
// // 35.8548083 139.9761126
// $("#images1").on("click", function () {
//   // //firebaseを使った一連の流れーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // // 送信ボタンをクリックされたら次の処理をする------------
// // $("#images1").on("click", function () {
// //   // 記述1
// //   //エラーハンドリング
// //   let activeimage1 = $("#activeimage1").val();
// //   if(activeimage1 === ""){
// //     alert("入力されていません")
// //     return
// //   }
// //   // データを登録で送る
// //     newPostRef.push({
// //       longitude:$("#activeimage1").val(),
// //       latitude:$("#activeimage2").val(),
// //     })
// //     $("#activeimage1").val(""); //空にする
// //     $("#activeimage2").val(""); //空にする
// //    // 受信処理
// // });
// // // firebaseにあるデータを出力する
// // newPostRef.on("child_added", function (data) { //dataはなんでもいい
// //   let v = data.val(); //ここに保存されたデータが全て入ってくる
// //   let k = data.key; //今回は使いません
// //     let str = `<p>${v.longitude}</p><p>${v.latitude}</p>`;
// //   // ここでデータをhtmlに埋め込む
// //   $("#output1").prepend(str);
// // });  
//   //  過去行った場所の表示緯度と経度がわかればピンを表示できるーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//   // 北柏ふるさと公園(35.8685638 139.9904472)
//   // 開智国際大学(35.8623903 139.9884756)
//   // 日体大柏高校(35.8575547 139.9913326)
//   // 新柏駅(35.8382528 139.9669225)
//   // 麗澤大学(35.8330871 139.9549793)
//   // 北小金駅(35.823145 139.9333367)
//   // 柏中新宿郵便局(35.8337096 139.9457829)
//   // 柏南高校(35.8375588 139.9769683)
//   // 流山運転免許センター(35.8497426 139.9311665)
//   // 増尾駅(35.829782 139.976478)
//   // 流山おおたかの森(	35.8707329 139.925909)
//   //咲保育園(35.8484525 140.0053638)
//   //ひばりヶ丘市民プール(35.8490059 139.9715386)
//   // データを登録で送るーーーーーーーーーーーーーーーーーーーーーー
//     newPostRef.push({
//       longitude: 35.8490059,
//       latitude:140.0053638,
//       comment1: $("#activeimage1").val(),
//       comment2: $("#activeimage2").val(),
      
//     })
//     $("#activeimage1").val(""); //空にする
//     $("#activeimage2").val(""); //空にする
// });

// document.getElementById("pastplace1").onclick = function() {
// // firebaseにあるデータを出力する
// newPostRef.on("child_added", function (data) { //dataはなんでもいい
//   let v = data.val(); //ここに保存されたデータが全て入ってくる
//   console.log(v);
//   var pin100 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(v.longitude, v.latitude), {
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="20" stroke="orange" stroke-width="4" fill="yellow" /></svg>',
//     anchor: new Microsoft.Maps.Point(25, 25)
//   });
//    // テキストBOXを追加する
//  var infobox100 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(v.longitude, v.latitude), { 
//    title: v.comment1, 
//    description: v.comment2,
//     visible: false
//   });
//    // テキストBOXを追加する
//  infobox100.setMap(map);
//   Microsoft.Maps.Events.addHandler(pin100, 'click', function () {
//     infobox100.setOptions({ visible: true });
//   });
//   //指定した場所にピンを刺す
//  map.entities.push(pin100);
// //  // (ピンクリック時にinfoboxの表示)ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// //  var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
// //   /* No need to set credentials if already passed in URL */
// //   center: new Microsoft.Maps.Location(47.60357, -122.32945)
// // });
// // var center = map.getCenter();
// // var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
// // var infobox = new Microsoft.Maps.Infobox(center, { 
// //   title: 'Map Center', 
// //   description: 'Seattle', 
// //   visible: false });
// // infobox.setMap(map);
// // Microsoft.Maps.Events.addHandler(pushpin, 'click', function () {
// //   infobox.setOptions({ visible: true });
// // });
// // map.entities.push(pushpin);
// //   //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//  // 非表示ボタンでピンとテキストBOXを消す(現状最新の一個しか消せない)
//  document.getElementById("pastplace2").onclick = function() {
// map.entities.remove(pin100);
// infobox100.setMap(null);
// };
// });
// };
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//    // 相手の表示をするーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//    //指定した場所にピンの設定をする(柏駅にピンをさす)ーーーーーーーーーーーーーーーーーーーーーーーーー
//   //  var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.8613321, 139.9727391), {
//   //     color: 'blue' 
//   //   });
//   //   //指定した場所にピンを刺す
//   //   map.entities.push(pin);
//   //    // テキストBOXを追加する
//   //  var infobox1 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(35.8613321, 139.9727391), { 
//   //    title: '柏駅', 
//   //    description: 'ピンを刺しています' ,
//   //   });
//   //  infobox1.setMap(map);
//   // 他のユーザーの表示をするーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//   // 柏ヤングボウル(35.8460045 139.957012)
//   // 東葛飾高校(35.8608078 139.9644934)
//   // 柏しこだの森保育園(35.8729321 139.9563416)
// // 一人目
//    document.getElementById("our").onclick = function() {
//     var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.8613321, 139.9727391), {
//       color: 'blue' 
//     });
//        // テキストBOXを追加する
//        var infobox1 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(35.8613321, 139.9727391), { 
//         title: 'みづき', 
//         description: '暇〜' ,
//         actions: [
//           { label: 'Handler1', eventHandler: function () { alert('Handler1'); } },
//           { label: 'Handler2', eventHandler: function () { alert('Handler2'); } },
//           { label: 'Handler3', eventHandler: function () { alert('Handler3'); } },
//       ],
//         visible: false
//       });
//        // テキストBOXを追加する
//      infobox1.setMap(map);
//       Microsoft.Maps.Events.addHandler(pin, 'click', function () {
//         infobox1.setOptions({ visible: true });
//       });
//       //指定した場所にピンを刺す
//      map.entities.push(pin);


//      // 二人目 // 柏ヤングボウル(35.8460045 139.957012)
//      var pin111 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.8460045, 139.957012), {
//       color: 'blue' 
//     });
//        // テキストBOXを追加する
//        var infobox111 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(35.8460045, 139.957012), { 
//         title: 'ゆうじ', 
//         description: '誰か夜空いてへん?' ,
//         actions: [
//           { label: 'Handler1', eventHandler: function () { alert('Handler1'); } },
//           { label: 'Handler2', eventHandler: function () { alert('Handler2'); } },
//           { label: 'Handler3', eventHandler: function () { alert('Handler3'); } },
//       ],
//         visible: false
//       });
//        // テキストBOXを追加する
//      infobox111.setMap(map);
//       Microsoft.Maps.Events.addHandler(pin111, 'click', function () {
//         infobox111.setOptions({ visible: true });
//       });
//       //指定した場所にピンを刺す
//      map.entities.push(pin111);

//      // 三人目  // 東葛飾高校(35.8608078 139.9644934)
//      var pin112 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.8608078, 139.9644934), {
//       color: 'blue' 
//     });
//        // テキストBOXを追加する
//        var infobox112 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(35.8608078, 139.9644934), { 
//         title: 'みさき', 
//         description: '初参戦です' ,
//         actions: [
//           { label: 'プロフィール', eventHandler: function () { alert('Handler1'); } },
//           { label: 'eat', eventHandler: function () { alert('Handler2'); } },
//           { label: 'Handler3', eventHandler: function () { alert('Handler3'); } },
//       ],
//         visible: false
//       });
//        // テキストBOXを追加する
//      infobox112.setMap(map);
//       Microsoft.Maps.Events.addHandler(pin112, 'click', function () {
//         infobox112.setOptions({ visible: true });
//       });
//       //指定した場所にピンを刺す
//      map.entities.push(pin112);
//      // 四人目 // 柏しこだの森保育園(35.8729321 139.9563416)
//      var pin113 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.8729321, 139.9563416), {
//       color: 'blue' 
//     });
//        // テキストBOXを追加する
//        var infobox113 = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(35.8729321, 139.9563416), { 
//         title: 'りょう', 
//         description: 'よろしくお願いします' ,
//         actions: [
//           { label: 'prof', eventHandler: function () { 
//             modal2.style.display = 'block';
//             var closeBtn2 = document.getElementById('closeBtn2'); 
//             closeBtn2.addEventListener('click', function(){
//             modal2.style.display = 'none';
//         })
//           } },
//           { label: 'eat', eventHandler: function () { 
//             modal3.style.display = 'block';
//             var closeBtn3 = document.getElementById('closeBtn3'); 
//             closeBtn3.addEventListener('click', function(){
//             modal3.style.display = 'none';
//         })           
//           } },
//           { label: 'talk', eventHandler: function () { 
//             modal4.style.display = 'block';
//             var closeBtn4 = document.getElementById('closeBtn4'); 
//             closeBtn4.addEventListener('click', function(){
//             modal4.style.display = 'none';
//             })
//            } },
//       ],
//         visible: false
//       });
//        // テキストBOXを追加する
//      infobox113.setMap(map);
//       Microsoft.Maps.Events.addHandler(pin113, 'click', function () {
//         infobox113.setOptions({ visible: true });
//       });
//       //指定した場所にピンを刺す
//      map.entities.push(pin113);
//     };
//      // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//   //  プッシュピンにイベントを追加する
//   // // 相手のピンに対しクリックイベントをする
//   // Microsoft.Maps.Events.addHandler(pin,'click',function(){
//   //   map.setView({
//   //     mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//   //     center: new Microsoft.Maps.Location(35.8613321, 139.9727391),
//   //     zoom:20
//   //   });
//   // });
//   //  出発地と目的地の設定をする(一回非表示にする)ーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
// //     var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
// //     directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
// //     directionsManager.showInputPanel('directionsInputContainer');
// // });
// //  出発地と目的地の設定を画面上から削除する
// // Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
// //   var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
// //   // Set Route Mode to driving
// //   directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
// //   var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: 'Redmond', location: new Microsoft.Maps.Location(47.67683029174805, -122.1099624633789) });
// //   var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: 'Seattle', location: new Microsoft.Maps.Location(47.59977722167969, -122.33458709716797) });
// //   directionsManager.addWaypoint(waypoint1);
// //   directionsManager.addWaypoint(waypoint2);
// //   // Set the element in which the itinerary will be rendered
// //   directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
// //   directionsManager.calculateDirections();
// //   Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', function () {
// //       window.setTimeout(function () {
// //           directionsManager.clearDisplay();
// //           var allWaypoints = directionsManager.getAllWaypoints();
// //           var numberWaypoints = allWaypoints.length;
// //           document.getElementById('printoutPanel').innerHTML = numberWaypoints + ' waypoints in DirectionsManager';
// //       }, 3000);
// //   });
// // });
//   };//(InitMapの終わり)

// //    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
// // var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { color: 'red' });
// // map.entities.push(pushpin);

//   //   var marker_pos = new Microsoft.Maps.Location(35.68135257803937, 139.76609230041504);
//   //   var pin = new Microsoft.Maps.Pushpin(marker_pos,
//   //     {
//   //         draggable: true
//   //     }
//   // );
       
//     //***************************************
//     //失敗関数
//     //****************************************
//     function mapsError(error) {
//       let e = "";
//       if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
//         e = "位置情報が許可されてません";
//       }
//       if (error.code == 2) { //2＝現在地を特定できない
//         e = "現在位置を特定できません";
//       }
//       if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
//         e = "位置情報を取得する前にタイムアウトになりました";
//       }
//       alert("エラー：" + e);
//     };

//     //****************************************
//     //オプション設定
//     //****************************************
//     const set = {
//       enableHighAccuracy: true, //より高精度な位置を求める
//       maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
//       timeout: 10000 //10秒以内に現在地情報を取得できなければ、処理を終了
//     };

// // 行った場所の保存ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // ローソン柏駅東口店
// // 緯度：35.8639739
// // 経度：139.9730786
// // ①緯度経度を表示させる
// // ②緯度経度データベースに保存する
// // ③緯度経度をでデータベースから取り出す

// //APIを用いて天気を表示するーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // 天気の表示文字列および画像ファイル名
// const WEATHERS = {
//   Thunderstorm: { label: '雷雨', img: 'clouds' },
//   Drizzle: { label: '霧雨', img: 'rains' },
//   Rain: { label: '雨', img: 'rains' },
//   Snow: { label: '雪', img: 'snow' },
//   Atmosphere: { label: '濃霧', img: 'snow' },
//   Clear: { label: '晴れ', img: 'clear' },
//   Clouds: { label: '曇り', img: 'clouds' }
// };
// // 日にちを入れるターゲットを定義する
// const nowTimeTarget = document.getElementById('nowData');
// const nextTimeTarget = document.getElementById('nextData');
// const afNextTimeTarget = document.getElementById('afNextData');
// // 現在の日時を取得
// const now = new Date();
// // 取得した日時をターゲットに代入
// nowTimeTarget.innerHTML = (now.getMonth() + 1) + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分';
// // 位置情報を取得開始
// if (navigator.geolocation) {
//   // 位置情報が取得成功した時
//   console.log("わーい");
//   navigator.geolocation.getCurrentPosition(function (position) {
//       // 緯度経度を取得
//       const basePosition = position.coords;
//       const lat = basePosition.latitude;
//       const lng = basePosition.longitude;
//       console.log(lat); //35.8511354
//       console.log(lng); //139.9512978

//       // 現在の天気
//       //https://api.openweathermap.org/data/2.5/weather?lat=35.8511354&lon=139.9512978&units=metric&APPID=fa4ca02bfe8ffffee540fbc8ec5e6f4c;
//       //中身を取り出した
//       // {
//       //"coord":{"lon":139.9513,"lat":35.8511},
//       // "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
//       // "base":"stations",
//       // "main":{"temp":19.26,"feels_like":18.89,"temp_min":16.12,"temp_max":20.72,"pressure":1008,"humidity":63},
//       // "visibility":10000,
//       // "wind":{"speed":3.84,"deg":67,"gust":5.99},
//       // "clouds":{"all":86},
//       // "dt":1622381459,
//       // "sys":{"type":2,"id":60940,"country":"JP","sunrise":1622316375,"sunset":1622368169},
//       // "timezone":32400,
//       // "id":1859924,
//       // "name":"Kashiwa",
//       // "cod":200}

//       // WEB API を使用し、現在地の現在の天気を取得ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//       const API_KEY = "fa4ca02bfe8ffffee540fbc8ec5e6f4c";
//       const url = "https://api.openweathermap.org/data/2.5/weather" + "?lat=" + lat + "&lon=" + lng + "&units=metric&APPID=" + API_KEY;
//       const request = new XMLHttpRequest();
//       request.open("GET", url, true);
//       request.responseType = "json";
//       // 現在の天気に関する関数
//       request.onload = function () {
//         const nowData = this.response;
//         // 「現在の天気」「現在の気温」「現在地」を取得
//         const weatherName = nowData.weather[0].main;
//         const weatherTemp = nowData.main.temp;
//         const cityName = nowData.name;
//         console.log(weatherName); //Clouds
//         console.log(weatherTemp); //18.86
//         console.log(cityName); //Kashiwa
//         // 取得した現在地が「Suguri」の時の処置
//         if (cityName === 'Suguri') {
//           alert('現在位置をうまく取得することができませんでした。\nしばらくお待ちいただき、再度アクセスいただけますでしょうか？\n「Suguri」の天気を表示させていただきます。どこかは知りません。')
//         }
//         // 取得したもの入れるターゲットを定義
//         const geoTarget = document.getElementById('cityName');
//         const patternTextTarget = document.getElementById('pattern');
//         const patternImgTarget = document.getElementById('picture');
//         const patternTempTarget = document.getElementById('temp');
//         // 現在地、気温をターゲットに代入
//         geoTarget.innerHTML = cityName;
//         patternTempTarget.innerHTML = weatherTemp + '<span class="unit">℃</span>';
//         /*取得した天気によって
//         「天気の名前」「天気の画像を」を挿入*/
//         const weather = WEATHERS[weatherName];
        
//         if (weather) {
//           const { label, img } = weather;
//           patternTextTarget.innerHTML = label;
//           patternImgTarget.innerHTML = `<img src="imgs/${img}.png" alt="${label}">`;
//         } else {
//           return false;
//         }
//       };
//       request.send();
//       //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//       // 天気予報(2日後まで)cnt=16(3時間ごとだから),(6時間前からのデータを取得?)
//       //→3時間後のデータはオブジェクトでいう[3]である
//       //https://api.openweathermap.org/data/2.5/forecast?lat=35.8511354&lon=139.9512978&units=metric&cnt=16&APPID=fa4ca02bfe8ffffee540fbc8ec5e6f4c;
//       //中身を取り出した
//       // {"cod":"200",
//       // "message":0,
//       // "cnt":16,
//       // "list":
//       // // 3時間後
//       // [
//       //{"dt":1622386800,
//       // "main":{"temp":19.08,"feels_like":18.71,"temp_min":18.96,"temp_max":19.08,"pressure":1008,"sea_level":1008,"grnd_level":1009,"humidity":64,"temp_kf":0.12},
//       // "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
//       // "clouds":{"all":87},
//       // "wind":{"speed":3.69,"deg":62,"gust":5.82},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-05-30 15:00:00"},
//       // // 6時間後
//       // {"dt":1622397600,
//       // "main":{"temp":18.62,"feels_like":18.16,"temp_min":17.71,"temp_max":18.62,"pressure":1009,"sea_level":1009,"grnd_level":1009,"humidity":62,"temp_kf":0.91},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//       // "clouds":{"all":81},
//       // "wind":{"speed":2.44,"deg":60,"gust":4.23},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-05-30 18:00:00"},
//       // // 9時間後
//       // {"dt":1622408400,
//       // "main":{"temp":18.37,"feels_like":17.8,"temp_min":18.01,"temp_max":18.37,"pressure":1011,"sea_level":1011,"grnd_level":1011,"humidity":59,"temp_kf":0.36},
//       // "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//       // "clouds":{"all":32},
//       // "wind":{"speed":2.86,"deg":55,"gust":4.03},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-05-30 21:00:00"},
//       // // // 12時間後
//       // {"dt":1622419200,
//       // "main":{"temp":21.71,"feels_like":21.22,"temp_min":21.71,"temp_max":21.71,"pressure":1013,"sea_level":1013,"grnd_level":1010,"humidity":49,"temp_kf":0},
//       // "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//       // "clouds":{"all":2},
//       // "wind":{"speed":2.54,"deg":65,"gust":2.39},
//       // "visibility":10000,
//       // "pop":0,"
//       // sys":{"pod":"d"},
//       // "dt_txt":"2021-05-31 00:00:00"},
//       // // // 15時間後
//       // {"dt":1622430000,
//       // "main":{"temp":24.5,"feels_like":24.05,"temp_min":24.5,"temp_max":24.5,"pressure":1012,"sea_level":1012,"grnd_level":1009,"humidity":40,"temp_kf":0},
//       // "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//       // "clouds":{"all":37},
//       // "wind":{"speed":2.87,"deg":130,"gust":2.84},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-05-31 03:00:00"},
//       //  // // 18時間後
//       // {"dt":1622440800,
//       // "main":{"temp":23.41,"feels_like":22.96,"temp_min":23.41,"temp_max":23.41,"pressure":1011,"sea_level":1011,"grnd_level":1009,"humidity":44,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//       // "clouds":{"all":65},
//       // "wind":{"speed":5.11,"deg":130,"gust":4.87},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-05-31 06:00:00"},
//       //  // // 21時間後
//       // {"dt":1622451600,
//       // "main":{"temp":21.86,"feels_like":21.46,"temp_min":21.86,"temp_max":21.86,"pressure":1012,"sea_level":1012,"grnd_level":1010,"humidity":52,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//       // "clouds":{"all":57},
//       // "wind":{"speed":5.52,
//       // "deg":142,
//       // "gust":5.89},
//       // "visibility":10000,
//       // "pop":0.04,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-05-31 09:00:00"},
//       // // // 24時間後
//       // {"dt":1622462400,
//       // "main":{"temp":19.57,"feels_like":19.31,"temp_min":19.57,"temp_max":19.57,"pressure":1013,"sea_level":1013,"grnd_level":1011,"humidity":66,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//       // "clouds":{"all":59},
//       // "wind":{"speed":4.36,"deg":142,"gust":6.26},
//       // "visibility":10000,
//       // "pop":0.16,
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-05-31 12:00:00"},
//       // // // 27時間後
//       // {"dt":1622473200,
//       // "main":{"temp":16.52,"feels_like":16.47,"temp_min":16.52,"temp_max":16.52,"pressure":1014,"sea_level":1014,"grnd_level":1012,"humidity":86,"temp_kf":0},
//       // "weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],
//       // "clouds":{"all":99},
//       // "wind":{"speed":4.73,"deg":355,"gust":7.23},
//       // "visibility":3938,
//       // "pop":1,
//       // "rain":{"3h":7.03},
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-05-31 15:00:00"},
//       // // // 30時間後
//       // {"dt":1622484000,
//       // "main":{"temp":15.56,"feels_like":15.26,"temp_min":15.56,"temp_max":15.56,"pressure":1016,"sea_level":1016,"grnd_level":1014,"humidity":80,"temp_kf":0},
//       // "weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],
//       // "clouds":{"all":99},
//       // "wind":{"speed":4.91,"deg":21,"gust":9.67},
//       // "visibility":10000,
//       // "pop":0.99,
//       // "rain":{"3h":4.12},
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-05-31 18:00:00"},
//       // // // 33時間後
//       // {"dt":1622494800,
//       // "main":{"temp":16.03,"feels_like":15.62,"temp_min":16.03,"temp_max":16.03,"pressure":1017,"sea_level":1017,"grnd_level":1015,"humidity":74,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//       // "clouds":{"all":70},
//       // "wind":{"speed":2.83,"deg":21,"gust":4.29},
//       // "visibility":10000,
//       // "pop":0.12,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-05-31 21:00:00"},
//       // // // 36時間後
//       // {"dt":1622505600,
//       // "main":{"temp":19.73,"feels_like":19.27,"temp_min":19.73,"temp_max":19.73,"pressure":1018,"sea_level":1018,"grnd_level":1016,"humidity":58,"temp_kf":0},
//       // "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//       // "clouds":{"all":45},"wind":{"speed":1.94,"deg":41,"gust":2.16},
//       // "visibility":10000,
//       // "pop":0.1,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-06-01 00:00:00"},
//       // // // 39時間後
//       // {"dt":1622516400,
//       // "main":{"temp":22.68,"feels_like":22.26,"temp_min":22.68,"temp_max":22.68,"pressure":1017,"sea_level":1017,"grnd_level":1015,"humidity":48,"temp_kf":0},
//       // "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//       // "clouds":{"all":47},"wind":{"speed":2.83,"deg":113,"gust":2.12},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-06-01 03:00:00"},
//       // // // 42時間後
//       // {"dt":1622527200,
//       // "main":{"temp":24.31,"feels_like":23.87,"temp_min":24.31,"temp_max":24.31,"pressure":1016,"sea_level":1016,"grnd_level":1014,"humidity":41,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//       // "clouds":{"all":57},
//       // "wind":{"speed":2.97,"deg":132,"gust":2.42},
//       // "visibility":10000,"pop":0,"sys":{"pod":"d"},
//       // "dt_txt":"2021-06-01 06:00:00"},
//       // // // 45時間後
//       // {"dt":1622538000,
//       // "main":{"temp":21.82,"feels_like":21.42,"temp_min":21.82,"temp_max":21.82,"pressure":1018,"sea_level":1018,"grnd_level":1015,"humidity":52,"temp_kf":0},
//       // "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
//       // "clouds":{"all":45},
//       // "wind":{"speed":5.18,"deg":128,"gust":5.09},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"d"},
//       // "dt_txt":"2021-06-01 09:00:00"},
//       // / // 48時間後
//       // {"dt":1622548800,
//       // "main":{"temp":19.49,"feels_like":19.22,"temp_min":19.49,"temp_max":19.49,"pressure":1020,"sea_level":1020,"grnd_level":1017,"humidity":66,"temp_kf":0},
//       // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//       // "clouds":{"all":59},
//       // "wind":{"speed":4.16,"deg":152,"gust":6.42},
//       // "visibility":10000,
//       // "pop":0,
//       // "sys":{"pod":"n"},
//       // "dt_txt":"2021-06-01 12:00:00"}],
//       // "city":{"id":1859924,"name":"Kashiwa","coord":{"lat":35.8511,"lon":139.9513},"country":"JP","population":340221,"timezone":32400,"sunrise":1622316375,"sunset":1622368169}}
      
//       // // WEB API を使用し、現在地の翌日以降の天気を取得
//       const nextUrl = "https://api.openweathermap.org/data/2.5/forecast" + "?lat=" + lat + "&lon=" + lng + "&units=metric&APPID=" + API_KEY;
//       const nextRequest = new XMLHttpRequest();
//       nextRequest.open("GET", nextUrl, true);
//       nextRequest.responseType = "json";
//       // 現在、翌日以降の天気に関する関数
//       nextRequest.onload = function () {
//         const data = this.response;
//          // 「現在の天気」「現在の気温」「現在地」を取得
//          //取り出せた!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         //  天気の種類
//   // const nextweatherName = data.list[0].weather[0].main;//Clouds(6時間前の天気の種類)
//   // console.log(nextweatherName); //Clouds
//   // const nextweatherTemp = data.list[0].main.temp;//6時間前の気温
//   // console.log(nextweatherTemp); 
//   // const nextcityName = data.city.name;
//   // console.log(nextcityName); //Kashiwa

//   // 3時間後の天気を取り出すーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//   const nextweatertime1 = data.list[3].dt_txt;//取り出した現在時刻を取り出した()
//   console.log(nextweatertime1);
//   const nextweatherName1 = data.list[3].weather[0].main;//Clouds(3時間後の天気の種類)
//   console.log(nextweatherName1); //Clouds
//   const nextweatherTemp1 = data.list[3].main.temp;//3時間後の気温
//   console.log(nextweatherTemp1); 

//   // 取得したもの入れるターゲットを定義ーーーーーー
//   const patternTime1 = document.getElementById('forecast-time1');
//   const patternTextTarget1 = document.getElementById('forecast-weather1');
//   const patternImgTarget1 = document.getElementById('forecast-picture1');
//   const patternTempTarget1 = document.getElementById('forecast-temp1');

//   // 現在地、気温をHTMLに反映させる代入ーーーーーー
//   patternTime1.innerHTML = nextweatertime1;
//   patternTextTarget1.innerHTML = nextweatherName1;
//   patternTempTarget1.innerHTML = nextweatherTemp1 + '<span class="unit">℃</span>';

//   /*取得した天気によって
//   「天気の名前」「天気の画像を」を挿入*/
//   const weather1 = WEATHERS[nextweatherName1];
//   if (weather1) {
//     const { label, img } = weather1;
//     patternTextTarget1.innerHTML = label;
//     patternImgTarget1.innerHTML = `<img src="imgs/${img}.png" alt="${label}">`;
//   } else {
//     return false;
//   }
//   // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//    // 6時間後の天気を取り出すーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//    const nextweatertime2 = data.list[4].dt_txt;//取り出した現在時刻を取り出した(2021-05-31 00:00:00)
//    console.log(nextweatertime2);
//    const nextweatherName2 = data.list[4].weather[0].main;//Clouds(3時間後の天気の種類)
//    console.log(nextweatherName2); //Clouds
//    const nextweatherTemp2 = data.list[4].main.temp;//3時間後の気温(21.71)
//    console.log(nextweatherTemp2); 
//    // 取得したもの入れるターゲットを定義ーーーーーー
//   const patternTime2 = document.getElementById('forecast-time2');
//   const patternTextTarget2 = document.getElementById('forecast-weather2');
//   const patternImgTarget2 = document.getElementById('forecast-picture2');
//   const patternTempTarget2 = document.getElementById('forecast-temp2');

//   // 現在地、気温をHTMLに反映させる代入ーーーーーー
//   patternTime2.innerHTML = nextweatertime2;
//   patternTextTarget2.innerHTML = nextweatherName2;
//   patternTempTarget2.innerHTML = nextweatherTemp2 + '<span class="unit">℃</span>';
//    /*取得した天気によって
//   「天気の名前」「天気の画像を」を挿入*/
//   const weather2 = WEATHERS[nextweatherName2];
//   if (weather2) {
//     const { label, img } = weather2;
//     patternTextTarget2.innerHTML = label;
//     patternImgTarget2.innerHTML = `<img src="imgs/${img}.png" alt="${label}">`;
//   } else {
//     return false;
//   }
//   // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//       };
//       nextRequest.send();
//     },
//     //位置情報の取得失敗した時
//     function () {
//       alert('位置情報の取得に失敗しました。');
//     });
// } 
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // //firebaseを使った一連の流れーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // // 送信ボタンをクリックされたら次の処理をする------------
// // $("#images1").on("click", function () {
// //   // 記述1
// //   //エラーハンドリング
// //   let activeimage1 = $("#activeimage1").val();
// //   if(activeimage1 === ""){
// //     alert("入力されていません")
// //     return
// //   }
//   // データを登録で送る
// //     newPostRef.push({
// //       longitude:$("#activeimage1").val(),
// //       latitude:$("#activeimage2").val(),
// //     })
// //     $("#activeimage1").val(""); //空にする
// //     $("#activeimage2").val(""); //空にする
// //    // 受信処理
// // });
// // // firebaseにあるデータを出力する
// // newPostRef.on("child_added", function (data) { //dataはなんでもいい
// //   let v = data.val(); //ここに保存されたデータが全て入ってくる
// //   let k = data.key; //今回は使いません
// //     let str = `<p>${v.longitude}</p><p>${v.latitude}</p>`;
// //   // ここでデータをhtmlに埋め込む
// //   $("#output1").prepend(str);
// // });

// // /* HTML(だけ)の読み込みが完了したら */
// // window.addEventListener('DOMContentLoaded',()=>{
// //   //- イベントリスナー登録
// //   document.getElementById('talkapi__request').addEventListener('click',handler_request_reply);
// // });
// // /* 返答をリクエスト */
// // function handler_request_reply(ev){
// //   /* コメント取得 */
// //   const comment = document.getElementById('talkapi__input').value;
// //   /* レクエストデータ */
// //   let formdata = new FormData();
// //   //- apikeyパラメーター 

// //   formdata.append('apikey','DZZVO26YGZZw7PailcSH7AIe6b3bmTvD');
// //   //- コメント
// //   formdata.append('query',comment);
// //   /* リクエスト */
// //   fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
// //       method: 'post',
// //       body: formdata,
// //   }).then(response => {//- レスポンス取得
// //     response.json().then(data => {
// //         //- 返答取得
// //         const reply = data.results[0].reply;
// //         console.log(reply);
// //         //- 出力
// //         document.getElementById('talkapi__reply').innerHTML = reply;
// // newPostRef.push({
// //   longitude: "",
// //   latitude: "",
// //   comment1: "",
// //   comment2: "",
// //   userme:$("#talkapi__input").val(),
// //   usercounter:$("#talkapi__reply").val()
// // })
// // $("#talkapi__reply").prepend(counter1);
// //     });
// //     console.log(reply);
// // });
// // // talkAPIの設定をする
// // }
// // $("#talkapi__input").val(""); //空にする
// // // データを取り出すーーーーーーーーーーーーーーーーーーーーーー
// // newPostRef.on("child_added", function (data20) { //dataはなんでもいい
// //   let v = data20.val(); //ここに保存されたデータが全て入ってくる
// //   console.log(v);
// //   let me1 = `<p>${v.userme}</p>`;
// //   let counter1 = `<p>${v.usercounter}</p>`;
// //   $("#talkme").prepend(me1);
// //   $("#talkapi__reply").prepend(counter1);
// // });
// // let ai1 = document.getElementById("talkapi__input").innerHTML;
// // console.log(ai1);



// // チャットボットのトークの部分の設定
// // データを登録で送るーーーーーーーーーーーーーーーーーーーーーー
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// /* HTML(だけ)の読み込みが完了したら */
// window.addEventListener('DOMContentLoaded',()=>{
//   //- イベントリスナー登録
//   document.getElementById('talkapi__request').addEventListener('click',handler_request_reply);
// });
// /* 返答をリクエスト */
// function handler_request_reply(ev){
//   /* インプットしたコメント取得 */
//   const comment = document.getElementById('talkapi__input').value;
//         $("#talkme").prepend(comment)
//         $("#talkapi__input").val(""); //空にする
//   /* レクエストデータ */
//   let formdata = new FormData();
//   //- apikeyパラメーター 
//   formdata.append('apikey','DZZVO26YGZZw7PailcSH7AIe6b3bmTvD');
//   //- コメント
//   formdata.append('query',comment);
//   /* リクエスト */
//   fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
//       method: 'post',
//       body: formdata,
//   }).then(response => {//- レスポンス取得
//     response.json().then(data => {
//         //- 返答取得
//         const reply = data.results[0].reply;
//         //- 出力
//         document.getElementById('talkapi__reply').innerHTML = reply;
//     });
// });
// // talkAPIの設定をする
// }


// // let ai1 = document.getElementById("talkapi__input").innerHTML;
// // console.log(ai1);






