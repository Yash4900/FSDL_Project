var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
        throw err;
    } else{
        var dbase = db.db("electro_shoppe");

        // CATEGORIES----------------------------------------------------------------------------------------------------------------

        var objects = [
            {
                "_id" : 01,
                "title" : "Mobile"
            },

            {
                "_id" : 02,
                "title" : "Television"
            },

            {
                "_id" : 03,
                "title" : "Washing Machine"
            },

            {
                "_id" : 04,
                "title" : "Microwave"
            },

            {
                "_id" : 05,
                "title": "Laptop"
            },
            
            {
                "_id" : 06,
                "title": "Chargers"
            },

            {
                "_id" : 07,
                "title": "Power Bank"
            },

            {
                "_id" : 08,
                "title": "Refrigerator"
            },

            {
                "_id" : 09,
                "title": "AC"
            },

            {
                "_id" : 10,
                "title": "Earphones"
            },

            {
                "_id" : 11,
                "title": "Headphones"
            },

            {
                "_id" : 12,
                "title": "Cameras"
            },

            {
                "_id" : 13,
                "title": "Smartwatches"
            },

            {
                "_id" : 14,
                "title": "Pendrive"
            },

            {
                "_id" : 15,
                "title": "Memory Cards"
            },

            {
                "_id" : 16,
                "title": "Routers"
            },
        ];
        dbase.collection("categories").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("All categories inserted successfully");
            }
        });
        
        // USERS----------------------------------------------------------------------------------------------------------------

        var objectUser = [
            {
                "_id" : 109,
                "username" : "yash123",
                "password" : "yash@321",
                "email" : "yashsatra@gmail.com",
                "fname" : "Yash",
                "lname" : "Satra",
                "age" : 20,
                "role" : 1,
                "photoUrl" : "test",
                "type" : "test"
            },
            {
                "_id" : 101,
                "username" : "nishant123",
                "password" : "nishant@321",
                "email" : "nsp@gmail.com",
                "fname" : "Nishant",
                "lname" : "Pal",
                "age" : 21,
                "role" : 2,
                "photoUrl" : "test",
                "type" : "test"
            },
            {
                "_id" : 095,
                "username" : "ssm123",
                "password" : "sid@321",
                "email" : "sid69@gmail.com",
                "fname" : "Siddharth",
                "lname" : "Mishra",
                "age" : 19,
                "role" : 3,
                "photoUrl" : "test",
                "type" : "test"
            },
        ];
        dbase.collection("users").insertMany(objectUser, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("All users inserted successfully");
            }
        });
        
        // PRODUCTS----------------------------------------------------------------------------------------------------------------

        var objects = [

            // MOBILES

            {
                "_id" : 011,
                "title" : "Samsung Galaxy S10",
                "image" : "https://images.samsung.com/is/image/samsung/ph-galaxy-s10-sm-g973-sm-g973fzwdxtc-frontprismwhite-thumb-152576822?$ORIGIN_JPG$",
                "images" : "",
                "description" : "8 GB RAM + 128 GB Storage",
                "price" : 33900,
                "quantity" : 4,
                "short_desc" : "Available in multiple colours",
                "_catId" : 01
            },
            
            {
                "_id" : 012,
                "title" : "Apple Iphone SE",
                "image" : "https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70",
                "images" : "",
                "description" : "4 GB RAM + 64 GB Storage",
                "price" : 37900,
                "quantity" : 10,
                "short_desc" : "Sublime Camera",
                "_catId" : 01
            },

            {
                "_id" : 013,
                "title" : "Redmi 9 Prime",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/41QvJaYWvML._SY300_.jpg",
                "images" : "",
                "description" : "4 GB RAM + 64 GB STORAGE",
                "price" : 10999,
                "quantity" : 15,
                "short_desc" : "Excellent display",
                "_catId" : 01
            },

            {
                "_id" : 014,
                "title" : "Oppo A5",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/514zYTXaCqL._SX679_.jpg",
                "images" : "",
                "description" : "4 GB RAM + 64 GB STORAGE",
                "price" : 9900,
                "quantity" : 10,
                "short_desc" : "High Quality Camera",
                "_catId" : 01
            },

            {
                "_id" : 015,
                "title" : "OnePlus 8",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71KJ3loLvyL._SL1500_.jpg",
                "images" : "",
                "description" : "6GB RAM + 128GB Storage",
                "price" : 33900,
                "quantity" : 25,
                "short_desc" : "Equipped with 90hz Fluid display",
                "_catId" : 01
            },

            {
                "_id" : 016,
                "title" : "Apple iPhone 7 ",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/419smKsnVyL._SL1024_.jpg",
                "images" : "",
                "description" : "3 GB RAM + 32 GB STORAGE",
                "price" : 33900,
                "quantity" : 14,
                "short_desc" : "4K video and optical image stabilization",
                "_catId" : 01
            },

            // TELEVISION
            
            {
                "_id" : 021,
                "title" : "Sony Bravia",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61TerjdN68L._SX425_.jpg",
                "images" : "",
                "description" : "42 inch smart TV",
                "price" : 60999,
                "quantity" : 6,
                "short_desc" : "2020 Model",
                "_catId" : 02
            },
            {
                "_id" : 022,
                "title" : "Samsung LED Smart TV UA32T4340AKXXL",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg",
                "images" : "",
                "description" : "32 inch smart TV",
                "price" : 14489,
                "quantity" : 4,
                "short_desc" : "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
                "_catId" : 02
            },
            {
                "_id" : 023,
                "title" : "Onida Fire TV 43FIF",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71vJoWfZDLL._SL1500_.jpg",
                "images" : "",
                "description" : "43 inch smart TV",
                "price" : 21990,
                "quantity" : 8,
                "short_desc" : "Full HD Smart LED TV ",
                "_catId" : 02
            },
            {
                "_id" : 024,
                "title" : "TCL Full HD Certified Android Smart LED TV 40S6500FS",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71IziaJsmKL._SL1500_.jpg",
                "images" : "",
                "description" : "40 inch smart TV",
                "price" : 17999,
                "quantity" : 20,
                "short_desc" : "Black 2020 Model",
                "_catId" : 02
            },
            {
                "_id" : 025,
                "title" : "LG HD Ready Smart LED TV 32LM563BPTC",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg",
                "images" : "",
                "description" : "32 inch smart TV",
                "price" : 14999,
                "quantity" : 7,
                "short_desc" : "Dark Iron Gray 2020 Model",
                "_catId" : 02
            },

            // WASHING MACHINES

            {
                "_id" : 031,
                "title" : "Samsung Top load Washing Machine",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61JeJKWBWNL._SL1500_.jpg",
                "images" : "",
                "description" : "6.2 kg Fully-Automatic",
                "price" : 12999,
                "quantity" : 5,
                "short_desc" : "WA62M4100HY/TL, Imperial Silver, Center Jet Technology",
                "_catId" : 03
            },
            {
                "_id" : 032,
                "title" : "Whirlpool Top Loading Washing Machine",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/81Qqj2C2RzL._SL1500_.jpg",
                "images" : "",
                "description" : "7 Kg 5 Star Semi-Automatic",
                "price" : 8999,
                "quantity" : 9,
                "short_desc" : "SUPERB ATOM 7.0, Grey Dazzle, TurboScrub Technology",
                "_catId" : 03
            },
            {
                "_id" : 033,
                "title" : "Intex Top Loading Washing Machine WMS62TL",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/91mRu98fVjL._SL1500_.jpg",
                "images" : "",
                "description" : "6.2 kg Semi-Automatic",
                "price" : 6300,
                "quantity" : 11,
                "short_desc" : "White and Maroon",
                "_catId" : 03
            },

            // MICROWAVE
            
            {
                "_id" : 041,
                "title" : "Samsung Convection Microwave Oven",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71yo-p9AbiL._SL1500_.jpg",
                "images" : "",
                "description" : "28 L",
                "price" : 13900,
                "quantity" : 5,
                "short_desc" : "Banishes Food Odour",
                "_catId" : 04
            },

            {
                "_id" : 042,
                "title" : "LG All in One Charcoal Convection Microwave Oven",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71jcr8Kvz-L._SL1500_.jpg",
                "images" : "",
                "description" : "32 L",
                "price" : 25999,
                "quantity" : 8,
                "short_desc" : "Glass Touch & Dial is sensitive to touch and easy to clean",
                "_catId" : 04
            },

            {
                "_id" : 043,
                "title" : "Haier Solo Microwave Oven",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/713WC-c67NL._SL1500_.jpg",
                "images" : "",
                "description" : "20 L",
                "price" : 4600,
                "quantity" : 2,
                "short_desc" : "Food can be kept warm for long time",
                "_catId" : 04
            },

            // LAPTOP
            
            {
                "_id" : 051,
                "title" : "Apple MacBook Pro",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg",
                "images" : "",
                "description" : "16-inch, 16GB RAM, 512GB Storage",
                "price" : 179999,
                "quantity" : 6,
                "short_desc" : "Stunning Retina display with True Tone technology",
                "_catId" : 05
            },

            {
                "_id" : 052,
                "title" : "HP Pavilion x360 Touchscreen",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/617clKqAqiL._SL1080_.jpg",
                "images" : "",
                "description" : "14-inch, 8GB RAM, 512GB Storage",
                "price" : 52499,
                "quantity" : 4,
                "short_desc" : "HP TrueVision HD camera with integrated dual array digital microphone",
                "_catId" : 05
            },
            
            {
                "_id" : 053,
                "title" : "Dell Inspiron 3595",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/711l--hfnHL._SL1500_.jpg",
                "images" : "",
                "description" : "15.6-inch/4GB/1TB HDD",
                "price" : 26684,
                "quantity" : 3,
                "short_desc" : "Waves MaxxAudio Pro | 3-Cell Battery, 42WHr",
                "_catId" : 05
            },

            {
                "_id" : 054,
                "title" : "ASUS TUF Gaming A15 Laptop",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/A1A2yQlAXCL._SL1500_.jpg",
                "images" : "",
                "description" : "15.6-inch/8GB RAM/512GB NVMe SSD",
                "price" : 77999,
                "quantity" : 6,
                "short_desc" : "Best Selling Gaming Laptop",
                "_catId" : 05
            },
            
            // CHARGERS
            
            {
                "_id" : 061,
                "title" : "Glorious GE052400U04",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/51AQfd6oBGL._SL1280_.jpg",
                "images" : "",
                "description" : "Wall Charger 2.4A",
                "price" : 149,
                "quantity" : 60,
                "short_desc" : "Fast Charger - Black",
                "_catId" : 06
            },

            {
                "_id" : 062,
                "title" : "Mi 2A 10W Charger with Cable",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61bOhEDkU7L._SL1500_.jpg",
                "images" : "",
                "description" : "1.2 Meter",
                "price" : 399,
                "quantity" : 40,
                "short_desc" : "Black Wall Charger",
                "_catId" : 06
            },

            // POWER BANKS
            
            {
                "_id" : 071,
                "title" : "Mi Power Bank 3i Dual Output and Input Port",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71Rcb9pnbEL._SL1500_.jpg",
                "images" : "",
                "description" : "10000mAh",
                "price" : 699,
                "quantity" : 12,
                "short_desc" : "18W Fast Charging",
                "_catId" : 07
            },

            {
                "_id" : 072,
                "title" : "Ambrane Li-Polymer Powerbank",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/714kahV60VL._SL1500_.jpg",
                "images" : "",
                "description" : "10000mAh",
                "price" : 449,
                "quantity" : 17,
                "short_desc" : "Compact Size and Fast Charging",
                "_catId" : 07
            },

            // REFRIGERATOR
            
            {
                "_id" : 081,
                "title" : "Godrej 2 Star Direct-Cool Single Door Refrigerator",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71mu0ZqCSrL._SL1500_.jpg",
                "images" : "",
                "description" : "190 L",
                "price" : 10499,
                "quantity" : 8,
                "short_desc" : "Single Door Refrigerator",
                "_catId" : 08
            },

            {
                "_id" : 082,
                "title" : "Panasonic 3 Star 6-Stage Inverter Frost-Free Double Door Refrigerator",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61TerjdN68L._SX425_.jpg",
                "images" : "",
                "description" : "336 L",
                "price" : 26999,
                "quantity" : 10,
                "short_desc" : "Frost-Free Double Door Refrigerator",
                "_catId" : 08
            },
            
            {
                "_id" : 083,
                "title" : "Samsung 2 Star Direct Cool Single Door Refrigerator",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61TerjdN68L._SX425_.jpg",
                "images" : "",
                "description" : "192 L",
                "price" : 11499,
                "quantity" : 5,
                "short_desc" : "Single Door Refrigerator",
                "_catId" : 08
            },
            
            // AC
            
            {
                "_id" : 091,
                "title" : "Voltas 3 Star Split AC",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/511fs9x31bL._SL1500_.jpg",
                "images" : "",
                "description" : "1.5 Ton ",
                "price" : 29999,
                "quantity" : 4,
                "short_desc" : "Environment friendly - no ozone depletion potential & low global warming potential",
                "_catId" : 09
            },

            {
                "_id" : 092,
                "title" : "Whirlpool 3 Star Inverter Split AC",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61sPTlmQetL._SL1500_.jpg",
                "images" : "",
                "description" : "1.5 Ton",
                "price" : 27999,
                "quantity" : 2,
                "short_desc" : "Turbo cool",
                "_catId" : 09
            },
            
            {
                "_id" : 093,
                "title" : "Hisense 3 Star Wi-Fi Inverter Split AC",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/519x8XAplUL._SL1280_.jpg",
                "images" : "",
                "description" : "1.0 Ton ",
                "price" : 24999,
                "quantity" : 1,
                "short_desc" : "Intelligent super cooling, intelligent sleep",
                "_catId" : 09
            },

            // EARPHONES
            
            {
                "_id" : 101,
                "title" : "boAt Bassheads 100 in Ear Wired Earphones",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg",
                "images" : "",
                "description" : "Has a durable PVC Cable which is tangle free",
                "price" : 349,
                "quantity" : 20,
                "short_desc" : "With Mic",
                "_catId" : 10
            },

            {
                "_id" : 102,
                "title" : "realme Buds Classic Wired Earphones",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/7123d26rFxL._SL1500_.jpg",
                "images" : "",
                "description" : "14.2mm Large Driver ensures high fidelity music",
                "price" : 299,
                "quantity" : 25,
                "short_desc" : "with HD Microphone",
                "_catId" : 10
            },

            // HEADPHONES
            
            {
                "_id" : 111,
                "title" : "Sony WH-1000XM3",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg",
                "images" : "",
                "description" : "Noise Cancellation Available",
                "price" : 21999,
                "quantity" : 10,
                "short_desc" : "30 Hours Battery Life, Quick Charge, Touch Control",
                "_catId" : 11
            },

            {
                "_id" : 112,
                "title" : "Zebronics Zeb-Thunder Wireless BT Headphone",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg",
                "images" : "",
                "description" : "40mm Drivers, AUX Connectivity",
                "price" : 899,
                "quantity" : 15,
                "short_desc" : "Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card",
                "_catId" : 11
            },

            // CAMERAS
            
            {
                "_id" : 121,
                "title" : "Canon EOS 1500D 24.1 Digital SLR Camera ",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
                "images" : "",
                "description" : "ISO: 100-6400 sensitivity range",
                "price" : 24999,
                "quantity" : 14,
                "short_desc" : "Connectivity: WiFi, NFC and Bluetooth built-in",
                "_catId" : 12
            },

            {
                "_id" : 122,
                "title" : "Nikon D7500 20.9MP Digital SLR Camera",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/81bVHWevmyL._SL1500_.jpg",
                "images" : "",
                "description" : "4K UHD Video Recording at 30 fps",                
                "price" : 75999,
                "quantity" : 19,
                "short_desc" : "Multi-CAM 3500FX II 51-Point AF System",
                "_catId" : 12
            },

            // SMARTWATCHES
            
            {
                "_id" : 131,
                "title" : "HONOR Band 5",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/71MwpvuFthL._SL1500_.jpg",
                "images" : "",
                "description" : "Waterproof Full Color AMOLED Touchscreen",
                "price" : 1999,
                "quantity" : 15,
                "short_desc" : "Special Features & Battery Life: Multiple Watch Faces",
                "_catId" : 13
            },

            {
                "_id" : 132,
                "title" : "Noise ColorFit NAV Smart Watch",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61PBtrwxS%2BL._SL1500_.jpg",
                "images" : "",
                "description" : "Built-in GPS and High Resolution Display",
                "price" : 3999,
                "quantity" : 16,
                "short_desc" : "Large 1.4 inch LCD Screen: ColorFit NAV has a high resolution of 320x320 pixels",
                "_catId" : 13
            },

            // PENDRIVE
            
            {
                "_id" : 141,
                "title" : "SanDisk Cruzer Blade USB Flash Drive",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SL1206_.jpg",
                "images" : "",
                "description" : "32 GB",
                "price" : 329,
                "quantity" : 45,
                "short_desc" : "Ultra-compact and portable USB flash drive",
                "_catId" : 14
            },

            {
                "_id" : 142,
                "title" : "HP FD236W USB 2.0 Pen Drive",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
                "images" : "",
                "description" : "32 GB",
                "price" : 399,
                "quantity" : 55,
                "short_desc" : "Durable metal Charming appearance which brings a great sense of style",
                "_catId" : 14
            },

            // MEMORY CARDS
            
            {
                "_id" : 151,
                "title" : "SanDisk Class 10 microSDXC Memory Card",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/617NtexaW2L._SL1500_.jpg",
                "images" : "",
                "description" : "128 GB ",
                "price" : 1199,
                "quantity" : 60,
                "short_desc" : "With Adapter",
                "_catId" : 15
            },

            {
                "_id" : 152,
                "title" : "Samsung EVO Plus microSDXC",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/81MbOF%2BPYQL._SL1500_.jpg",
                "images" : "",
                "description" : "64 GB ",
                "price" : 649,
                "quantity" : 70,
                "short_desc" : "100MB/s Full HD & 4K UHD Memory Card with Adapter",
                "_catId" : 15
            },

            // ROUTERS
            
            {
                "_id" : 161,
                "title" : "TP-link N300 WiFi Wireless Router TL-WR845N",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/41fQ5NSkEWL._SL1040_.jpg",
                "images" : "",
                "description" : "300Mbps Wi-Fi Speed",
                "price" : 959,
                "quantity" : 13,
                "short_desc" : "IPv6 Compatible | AP/RE/WISP Mode",
                "_catId" : 16
            },

            {
                "_id" : 162,
                "title" : "Linksys MR9000 Mesh Wi-Fi Router",
                "image" : "https://images-na.ssl-images-amazon.com/images/I/61a2sF0IjZL._SL1000_.jpg",
                "images" : "",
                "description" : "Provides up to 3000 square feet of Wi Fi coverage for 25 plus Wireless devices",
                "price" : 12999,
                "quantity" : 15,
                "short_desc" : "Enjoy 4K HD streaming, gaming and more in quality without buffering",
                "_catId" : 16
            },
        ];
        dbase.collection("products").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Products inserted successfully");
            }
        });

        // ORDERS----------------------------------------------------------------------------------------------------------------

        var objects = [
            /* 1 */
            {
                "_id" : 201,
                "_userId" : 109
            },
            
            {
                "_id" : 202,
                "_userId" : 101
            },
            {
                "_id" : 203,
                "_userId" : 095
            },
        ];
        dbase.collection("orders").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Orders inserted successfully");
            }
        });

        // ORDERS_DETAILS----------------------------------------------------------------------------------------------------------------

        var objects = [
            /* 1 */
            {
                "_id" : 301,
                "_orderId" : 201,
                "_productId" : 012,
                "quantity" : 3
            },   
                    
            {
                "_id" : 302,
                "_orderId" : 202,
                "_productId" : 022,
                "quantity" : 2
            }, 

            {
                "_id" : 303,
                "_orderId" : 203,
                "_productId" : 054,
                "quantity" : 1
            },   
        ];
        dbase.collection("orders_details").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Orders details inserted successfully");
            }
        });

        // ADDRESSES----------------------------------------------------------------------------------------------------------------

        var objects = [
            {
                "_id" : 401,
                "_userId" : 109,
                "city" : "Bhachau",
                "state": "Gujarat",
            },

            {
                "_id" : 402,
                "_userId" : 101,
                "city" : "Navi Mumbai",
                "state": "Maharashtra",
            },

            {
                "_id" : 403,
                "_userId" : 095,
                "city" : "Pune",
                "state": "Maharashtra",
            },
        ];
        dbase.collection("addresses").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Addresses inserted successfully");
            }
            db.close();
        });
    }
})