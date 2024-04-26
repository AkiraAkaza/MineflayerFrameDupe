# MineflayerFrameDupe
Mineflayer Auto Frame-Dupe

# Dành cho mấy thằng tự ngộ nhận đây là bot của 0_Ngocc và truc8782 
# Bot chỉ mang tính chất minh hoạ không lạm dụng dưới mọi hình thức
# Đã bảo là chạy repl như lon đừng có dùng git này trên đấy xin mấy thánh

# How to use
1. Get [Node.js](https://nodejs.org)
2. Downlod and unzip the repo `` git clone https://github.com/AkiraAkaza/MineflayerFrameDupe.git``
3. Run the command ``npm i`` to download the necessary things for the bot.
5. Edit the config fles
6. Run the script with ``node index.js``

   # Config Format [config.json]
```
{
  "admin": ["admin1", "admin2"],  
  "prefix": "*",  // set any key in prefix
  "kit_color": "orange",  // shulker_box color duping
  "blocks_on_feet": "quartz_block",  // blocks on bot feet
  "username": "botname1",
  "username1": "botname2",
  "username2": "botname3",
  "username3": "botname4",
  "host": "anarchy.8b8t.me",
  "version": "1.17.1",
  "port": 25565,
  "auth": "offline",
  "auth_password": "ExamplePassword", // Bot Password when logging in [/login - /register]
}

```

# How to setup in 8b8t server
1. Reg account for bot duping
2. Out spawn with 20000 blocks
3. Chat *tpa then /tpayes bot in arear dupe
4. Drop shulker_box and item_frame for bot
5. Chat *dupe for starting bot duping with item_frame

# How to setup bot online 24/7
1. Run command ``npm install pm2``
2. pm2 start index.js
   
> Enjoy 

# Cách dùng bot (vn)
1. Tải nodejs bản lts
2. Tải xuống hoặc git clone ``https://github.com/AkiraAkaza/MineflayerFrameDupe.git``
3. Mở lên và chạy lệnh ``npm i`` để tải các tài nguyên cần thiết
4. Tìm file config.json và chỉnh sửa
5. Sau khi sửa xong thì lưu lại và chạy lệnh ``node .``

# Setup bot trong server 
1. Reg tài khoản của bot và đưa nó ra khỏi spawn để dễ dàng dùng lệnh tpa
2. Sau khi thoát khỏi spawn thì thoát khỏi server sau đó đến account chính tại stash
3. Tại stash đặt một blocks bất kì xuống dưới chân bot ( VD: ở đây tớ dùng blocks quartz nếu bạn khống có thì lấy một blocks bất kì và dùng F3 + H để xem item_blocks đó viết ra sao )
4. Sau khi setup xong chỗ bot dupe thì bạn chạy bot để nó login vào server
5. Nếu bạn để prefix giống mình là ``*`` thì bạn chat ``*tpa`` để bot gửi lệnh tp đến bạn sau đó bạn cần phải đứng lên blocks đã đặt và chấp nhận lệnh tpa với ``/tpayes``
6. Bạn cần đưa khoảng 2 stach item_frame cho bot và vài kit cần dupe
7. Bạn cần xác định đúng màu của kit trong file config.json để bot không bị lỗi chương trình
8. Restart lại bot và tận hưởng kit thôi :)
