

renderProduct()

  function renderProduct(){

    const data = [
        {
          "offLogo": 33,
          "greenDot": "https://www.jiomart.com/p/groceries/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack/592200116",
          "Image": "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
          "clsgetname": "Saffola Gold Refined Rice Bran And Sunflower Based Blended Oil 3 L + Daawat Devaaya Basmati Rice 5 kg (Combo Pack)",
          "final_price": "₹ 875.00",
          "price": "₹ 1310.00",
          "save_price": "Save ₹ 435.00"
        },
        {
          "offLogo": 25,
          "greenDot": "https://www.jiomart.com/p/groceries/colgate-strong-teeth-dental-cream-toothpaste-200-g-pack-of-2/491055460",
          "Image": "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-0-202203151056.jpg",
          "clsgetname": "Colgate Strong Teeth Dental Cream Toothpaste 500 g Saver Pack",
          "final_price": "₹ 188.00",
          "price": "₹ 253.00",
          "save_price": "Save ₹ 65.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/surf-excel-easy-wash-detergent-powder-5-kg/590837659",
          "Image": "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg",
          "clsgetname": "Surf Excel Easy Wash Detergent Powder 5 kg",
          "final_price": "₹ 678.00",
          "price": "₹ 730.00",
          "save_price": "Save ₹ 52.00"
        },
        {
          "offLogo": 15,
          "greenDot": "https://www.jiomart.com/p/groceries/maggi-2-minute-masala-instant-noodles-560-g/490003834",
          "Image": "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-0-202203150702.jpg",
          "clsgetname": "Maggi 2-Minute Masala Instant Noodles 560 g",
          "final_price": "₹ 92.00",
          "price": "₹ 109.00",
          "save_price": "Save ₹ 17.00"
        },
        {
          "offLogo": 3,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-pasteurised-butter-500-g/490001392",
          "Image": "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg",
          "clsgetname": "Amul Butter 500 g (Carton)",
          "final_price": "₹ 245.00",
          "price": "₹ 255.00",
          "save_price": "Save ₹ 10.00"
        },
        {
          "offLogo": 16,
          "greenDot": "https://www.jiomart.com/p/groceries/tur-arhar-dal-2-kg/491417390",
          "Image": "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg",
          "clsgetname": "Tur / Arhar Dal 2 kg",
          "final_price": "₹ 252.00",
          "price": "₹ 300.00",
          "save_price": "Save ₹ 48.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/closeup-ever-fresh-red-hot-gel-toothpaste-150-g-pack-of-2/490008332",
          "Image": "https://www.jiomart.com/images/product/150x150/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-0-202206222347.jpg",
          "clsgetname": "Closeup Everfresh+ Red Hot Gel Toothpaste 150 g (Pack of 2)",
          "final_price": "₹ 163.00",
          "price": "₹ 182.00",
          "save_price": "Save ₹ 19.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/surf-excel-matic-front-load-detergent-powder-6-kg/591223797",
          "Image": "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-0-202204291101.jpg",
          "clsgetname": "Surf Excel Matic Front Load Detergent Powder 6 kg",
          "final_price": "₹ 1325.00",
          "price": "₹ 1425.00",
          "save_price": "Save ₹ 100.00"
        },
        {
          "offLogo": 21,
          "greenDot": "https://www.jiomart.com/p/groceries/kissan-fresh-tomato-ketchup-1-2-kg/590809928",
          "Image": "https://www.jiomart.com/images/product/150x150/492391349/kissan-fresh-tomato-ketchup-1-2-kg-product-images-o492391349-p590809928-0-202203150627.jpg",
          "clsgetname": "Kissan Fresh Tomato Ketchup 1.2 kg",
          "final_price": "₹ 125.00",
          "price": "₹ 160.00",
          "save_price": "Save ₹ 35.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/gowardhan-pure-cow-ghee-1-l-pouch/490010244",
          "Image": "https://www.jiomart.com/images/product/150x150/490010244/gowardhan-pure-cow-ghee-1-l-pouch-product-images-o490010244-p490010244-0-202203150918.jpg",
          "clsgetname": "Gowardhan Pure Cow Ghee 1 L (Pouch)",
          "final_price": "₹ 566.00",
          "price": "₹ 609.00",
          "save_price": "Save ₹ 43.00"
        },
        {
          "offLogo": 23,
          "greenDot": "https://www.jiomart.com/p/groceries/cycle-om-shanti-chandanam-pooja-oil-1-l/491600002",
          "Image": "https://www.jiomart.com/images/product/150x150/491600002/cycle-om-shanti-chandanam-pooja-oil-1-l-product-images-o491600002-p491600002-0-202203152234.jpg",
          "clsgetname": "Cycle Om Shanti Chandanam Pooja Oil 1 L",
          "final_price": "₹ 179.00",
          "price": "₹ 235.00",
          "save_price": "Save ₹ 56.00"
        },
        {
          "offLogo": 38,
          "greenDot": "https://www.jiomart.com/p/groceries/good-life-almonds-500-g/491186625",
          "Image": "https://www.jiomart.com/images/product/150x150/491186625/good-life-almonds-500-g-product-images-o491186625-p491186625-0-202205180139.jpg",
          "clsgetname": "Good Life Almonds 500 g",
          "final_price": "₹ 339.00",
          "price": "₹ 549.00",
          "save_price": "Save ₹ 210.00"
        },
        {
          "offLogo": 25,
          "greenDot": "https://www.jiomart.com/p/groceries/colgate-max-fresh-spicy-fresh-red-gel-toothpaste-150-g-pack-of-2/491016281",
          "Image": "https://www.jiomart.com/images/product/150x150/491016281/colgate-max-fresh-spicy-fresh-red-gel-toothpaste-150-g-pack-of-2-product-images-o491016281-p491016281-0-202206021942.jpg",
          "clsgetname": "Colgate Max Fresh Spicy Fresh Red Gel Toothpaste 150 g (Pack of 2)",
          "final_price": "₹ 149.00",
          "price": "₹ 200.00",
          "save_price": "Save ₹ 51.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/surf-excel-matic-top-load-detergent-powder-6-kg/591223798",
          "Image": "https://www.jiomart.com/images/product/150x150/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-0-202204291101.jpg",
          "clsgetname": "Surf Excel Matic Top Load Detergent Powder 6 kg",
          "final_price": "₹ 1232.00",
          "price": "₹ 1325.00",
          "save_price": "Save ₹ 93.00"
        },
        {
          "offLogo": 33,
          "greenDot": "https://www.jiomart.com/p/groceries/sunfeast-dark-fantasy-choco-fill-cookies-300-g/491319789",
          "Image": "https://www.jiomart.com/images/product/150x150/491319789/sunfeast-dark-fantasy-original-choco-filled-biscuits-300-g-product-images-o491319789-p491319789-0-202205301919.jpg",
          "clsgetname": "Sunfeast Dark Fantasy Original Choco Filled Biscuits 300 g",
          "final_price": "₹ 113.00",
          "price": "₹ 170.00",
          "save_price": "Save ₹ 57.00"
        },
        {
          "offLogo": 3,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-pure-ghee-1-l-pouch/490010164",
          "Image": "https://www.jiomart.com/images/product/150x150/490010164/amul-pure-ghee-1-l-pouch-product-images-o490010164-p490010164-0-202203151915.jpg",
          "clsgetname": "Amul Pure Ghee 1 L (Pouch)",
          "final_price": "₹ 509.00",
          "price": "₹ 525.00",
          "save_price": "Save ₹ 16.00"
        },
        {
          "offLogo": 50,
          "greenDot": "https://www.jiomart.com/p/groceries/mangaldeep-4-in-1-puja-agarbatti-120-pcs/491584192",
          "Image": "https://www.jiomart.com/images/product/150x150/491584192/mangaldeep-4-in-1-ziplock-agarbatti-120-pcs-product-images-o491584192-p491584192-0-202203150356.jpg",
          "clsgetname": "Mangaldeep 4 in 1 Agarbatti 120 pcs",
          "final_price": "₹ 32.00",
          "price": "₹ 65.00",
          "save_price": "Save ₹ 33.00"
        },
        {
          "offLogo": 26,
          "greenDot": "https://www.jiomart.com/p/groceries/super-sarvottam-rice-bran-oil-1-l-pouch/491504124",
          "Image": "https://www.jiomart.com/images/product/150x150/491504124/super-sarvottam-physically-refined-100-rice-bran-oil-1-l-product-images-o491504124-p491504124-0-202203150801.jpg",
          "clsgetname": "Super Sarvottam Physically Refined 100% Rice Bran Oil 1 L",
          "final_price": "₹ 145.00",
          "price": "₹ 197.00",
          "save_price": "Save ₹ 52.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/pears-pure-gentle-soap-125-g-buy-4-get-1-free/491085658",
          "Image": "https://www.jiomart.com/images/product/150x150/491085658/pears-pure-gentle-soap-with-natural-oils-125-g-buy-4-get-1-free-product-images-o491085658-p491085658-0-202203170226.jpg",
          "clsgetname": "Pears Pure & Gentle Soap with Natural Oils 125 g (Buy 4 Get 1 Free)",
          "final_price": "₹ 352.00",
          "price": "₹ 392.00",
          "save_price": "Save ₹ 40.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/tide-lemon-mint-detergent-powder-5-kg-get-1-kg-free/590860214",
          "Image": "https://www.jiomart.com/images/product/150x150/491252834/tide-lemon-mint-detergent-powder-5-kg-get-1-kg-free-product-images-o491252834-p590860214-0-202204281256.jpg",
          "clsgetname": "Tide Lemon & Mint Detergent Powder 5 kg (Get 1 kg Free)",
          "final_price": "₹ 637.00",
          "price": "₹ 685.00",
          "save_price": "Save ₹ 48.00"
        },
        {
          "offLogo": 22,
          "greenDot": "https://www.jiomart.com/p/groceries/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg/491373488",
          "Image": "https://www.jiomart.com/images/product/150x150/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202203151522.jpg",
          "clsgetname": "Britannia NutriChoice Hi-Fibre Digestive Biscuits 1 kg",
          "final_price": "₹ 170.00",
          "price": "₹ 220.00",
          "save_price": "Save ₹ 50.00"
        },
        {
          "offLogo": 4,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-taaza-homogenised-toned-long-life-milk-1-l-tetra-pak/490010311",
          "Image": "https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg",
          "clsgetname": "Amul Taaza Homogenised Toned Milk 1 L (Tetra Pak)",
          "final_price": "₹ 65.00",
          "price": "₹ 68.00",
          "save_price": "Save ₹ 3.00"
        },
        {
          "offLogo": 6,
          "greenDot": "https://www.jiomart.com/p/groceries/scotch-brite-sponge-wipe-5-pcs/590049051",
          "Image": "https://www.jiomart.com/images/product/150x150/491249317/scotch-brite-sponge-wipe-5-pcs-product-images-o491249317-p590049051-0-202203150917.jpg",
          "clsgetname": "Scotch-Brite Sponge Wipe 5 pcs",
          "final_price": "₹ 309.00",
          "price": "₹ 330.00",
          "save_price": "Save ₹ 21.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/saffola-gold-rice-bran-based-blended-oil-3-l/590860238",
          "Image": "https://www.jiomart.com/images/product/150x150/492571049/saffola-gold-rice-bran-based-blended-oil-3-l-product-images-o492571049-p590860238-0-202203170449.jpg",
          "clsgetname": "Saffola Gold Rice Bran Based Blended Oil 3 L",
          "final_price": "₹ 615.00",
          "price": "₹ 690.00",
          "save_price": "Save ₹ 75.00"
        },
        {
          "offLogo": 33,
          "greenDot": "https://www.jiomart.com/p/groceries/pepsodent-germicheck-cavity-protection-toothpaste-150-g-pack-of-2/490226009",
          "Image": "https://www.jiomart.com/images/product/150x150/490226009/pepsodent-germicheck-cavity-protection-toothpaste-150-g-pack-of-2-product-images-o490226009-p490226009-0-202208111722.jpg",
          "clsgetname": "Pepsodent Germicheck Cavity Protection Toothpaste 150 g (Pack of 2)",
          "final_price": "₹ 92.00",
          "price": "₹ 138.00",
          "save_price": "Save ₹ 46.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/tide-jasmine-rose-detergent-powder-5-kg-get-extra-1-kg-free/590838653",
          "Image": "https://www.jiomart.com/images/product/150x150/491252835/tide-jasmine-rose-detergent-powder-5-kg-get-extra-1-kg-free-product-images-o491252835-p590838653-0-202203151949.jpg",
          "clsgetname": "Tide Jasmine & Rose Detergent Powder 5 kg (Get Extra 1 kg Free)",
          "final_price": "₹ 637.00",
          "price": "₹ 685.00",
          "save_price": "Save ₹ 48.00"
        },
        {
          "offLogo": 17,
          "greenDot": "https://www.jiomart.com/p/groceries/parle-g-gold-biscuits-1-kg/491335633",
          "Image": "https://www.jiomart.com/images/product/150x150/491335633/parle-g-gold-biscuits-1-kg-product-images-o491335633-p491335633-0-202203150704.jpg",
          "clsgetname": "Parle-G Gold Biscuits 1 kg",
          "final_price": "₹ 115.00",
          "price": "₹ 140.00",
          "save_price": "Save ₹ 25.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/gowardhan-cow-ghee-1-l-pack-of-2-pouch-with-lock-seal-container/590052513",
          "Image": "https://www.jiomart.com/images/product/150x150/491895396/gowardhan-cow-ghee-1-l-pack-of-2-pouch-with-lock-seal-container-product-images-o491895396-p590052513-0-202203171122.jpg",
          "clsgetname": "Gowardhan Cow Ghee 1 L (Pack of 2) Pouch With Lock & Seal Container",
          "final_price": "₹ 1169.00",
          "price": "₹ 1299.00",
          "save_price": "Save ₹ 130.00"
        },
        {
          "offLogo": 11,
          "greenDot": "https://www.jiomart.com/p/groceries/mangalmai-til-oil-for-diyas-lamps-900-ml/491378981",
          "Image": "https://www.jiomart.com/images/product/150x150/491378981/mangalmai-til-diya-and-lamp-oil-900-ml-product-images-o491378981-p491378981-0-202205180128.jpg",
          "clsgetname": "Mangalmai Til Diya and Lamp Oil 900 ml",
          "final_price": "₹ 199.00",
          "price": "₹ 225.00",
          "save_price": "Save ₹ 26.00"
        },
        {
          "offLogo": 16,
          "greenDot": "https://www.jiomart.com/p/groceries/aashirvaad-superior-mp-whole-wheat-atta-10-kg/590150649",
          "Image": "https://www.jiomart.com/images/product/150x150/490750662/aashirvaad-superior-mp-whole-wheat-atta-10-kg-product-images-o490750662-p590150649-0-202203171046.jpg",
          "clsgetname": "Aashirvaad Superior MP Whole Wheat Atta 10 kg",
          "final_price": "₹ 430.00",
          "price": "₹ 512.00",
          "save_price": "Save ₹ 82.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/lux-soft-touch-bar-soap-150-g-pack-of-3/490915877",
          "Image": "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-0-202203151351.jpg",
          "clsgetname": "Lux Rose & Vitamin E Soft Glowing Skin Soap Bar 150 g (Pack of 3)",
          "final_price": "₹ 184.00",
          "price": "₹ 198.00",
          "save_price": "Save ₹ 14.00"
        },
        {
          "offLogo": 34,
          "greenDot": "https://www.jiomart.com/p/groceries/quaker-oats-1-5-kg/490850761",
          "Image": "https://www.jiomart.com/images/product/150x150/490850761/quaker-oats-1-5-kg-product-images-o490850761-p490850761-0-202203170759.jpg",
          "clsgetname": "Quaker Oats 1.5 kg",
          "final_price": "₹ 192.00",
          "price": "₹ 292.00",
          "save_price": "Save ₹ 100.00"
        },
        {
          "offLogo": 16,
          "greenDot": "https://www.jiomart.com/p/groceries/prabhat-cow-ghee-1-l-pouch/590087550",
          "Image": "https://www.jiomart.com/images/product/150x150/491278605/prabhat-cow-ghee-1-l-pouch-product-images-o491278605-p590087550-0-202203151615.jpg",
          "clsgetname": "Prabhat Cow Ghee 1 L (Pouch)",
          "final_price": "₹ 479.00",
          "price": "₹ 575.00",
          "save_price": "Save ₹ 96.00"
        },
        {
          "offLogo": 19,
          "greenDot": "https://www.jiomart.com/p/groceries/madhur-pure-hygienic-sugar-5-kg/490861956",
          "Image": "https://www.jiomart.com/images/product/150x150/490861956/madhur-pure-hygienic-sugar-5-kg-product-images-o490861956-p490861956-0-202208221852.jpg",
          "clsgetname": "Madhur Pure & Hygienic Sugar 5 kg",
          "final_price": "₹ 237.00",
          "price": "₹ 295.00",
          "save_price": "Save ₹ 58.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/dove-cream-beauty-bathing-bar-125-g-buy-4-get-1-free/590287499",
          "Image": "https://www.jiomart.com/images/product/150x150/491961317/dove-cream-beauty-bathing-bar-125-g-buy-4-get-1-free-product-images-o491961317-p590287499-0-202203152303.jpg",
          "clsgetname": "Dove Cream Beauty Bathing Bar 125 g (Buy 4 Get 1 Free)",
          "final_price": "₹ 438.00",
          "price": "₹ 472.00",
          "save_price": "Save ₹ 34.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/parle-g-original-glucose-biscuits-800-g/490008739",
          "Image": "https://www.jiomart.com/images/product/150x150/490008739/parle-g-original-glucose-biscuits-800-g-product-images-o490008739-p490008739-0-202203170454.jpg",
          "clsgetname": "Parle-G Original Glucose Biscuits 800 g",
          "final_price": "₹ 76.00",
          "price": "₹ 85.00",
          "save_price": "Save ₹ 9.00"
        },
        {
          "offLogo": 26,
          "greenDot": "https://www.jiomart.com/p/groceries/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-pouch/491278308",
          "Image": "https://www.jiomart.com/images/product/150x150/491278308/priya-fortified-with-vitamin-a-d-refined-sunflower-oil-1-l-product-images-o491278308-p491278308-0-202203170524.jpg",
          "clsgetname": "Priya Fortified With Vitamin A & D Refined Sunflower Oil 1 L",
          "final_price": "₹ 159.00",
          "price": "₹ 215.00",
          "save_price": "Save ₹ 56.00"
        },
        {
          "offLogo": 17,
          "greenDot": "https://www.jiomart.com/p/groceries/pears-pure-gentle-soap-with-natural-oils-125-g-pack-of-3/490337869",
          "Image": "https://www.jiomart.com/images/product/150x150/490337869/pears-pure-gentle-soap-with-glycerin-natural-oils-125-g-pack-of-3-product-images-o490337869-p490337869-0-202203170714.jpg",
          "clsgetname": "Pears Pure & Gentle Soap with Glycerin & Natural Oils 125 g (Pack of 3)",
          "final_price": "₹ 207.00",
          "price": "₹ 252.00",
          "save_price": "Save ₹ 45.00"
        },
        {
          "offLogo": 28,
          "greenDot": "https://www.jiomart.com/p/groceries/britannia-treat-jim-jam-cream-biscuits-150-g/490876695",
          "Image": "https://www.jiomart.com/images/product/150x150/490876695/britannia-treat-jim-jam-cream-biscuits-150-g-product-images-o490876695-p490876695-0-202203151434.jpg",
          "clsgetname": "Britannia Treat Jim Jam Cream Biscuits 150 g",
          "final_price": "₹ 25.00",
          "price": "₹ 35.00",
          "save_price": "Save ₹ 10.00"
        },
        {
          "offLogo": 3,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-pure-ghee-500-ml-pouch/490001520",
          "Image": "https://www.jiomart.com/images/product/150x150/490001520/amul-pure-ghee-500-ml-pouch-product-images-o490001520-p490001520-0-202203141904.jpg",
          "clsgetname": "Amul Pure Ghee 500 ml (Pouch)",
          "final_price": "₹ 265.00",
          "price": "₹ 275.00",
          "save_price": "Save ₹ 10.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/godrej-no-1-sandal-and-turmeric-soap-150-g-pack-of-4/491173582",
          "Image": "https://www.jiomart.com/images/product/150x150/491173582/godrej-no-1-sandal-and-turmeric-soap-150-g-pack-of-4-product-images-o491173582-p491173582-0-202203170805.jpg",
          "clsgetname": "Godrej No.1 Sandal and Turmeric Soap 150 g (Pack of 4)",
          "final_price": "₹ 170.00",
          "price": "₹ 189.00",
          "save_price": "Save ₹ 19.00"
        },
        {
          "offLogo": 32,
          "greenDot": "https://www.jiomart.com/p/groceries/britannia-good-day-cashew-biscuits-1-kg/590116903",
          "Image": "https://www.jiomart.com/images/product/150x150/491695463/britannia-good-day-cashew-biscuits-1-kg-product-images-o491695463-p590116903-0-202203150315.jpg",
          "clsgetname": "Britannia Good Day Cashew Biscuits 1 Kg",
          "final_price": "₹ 170.00",
          "price": "₹ 250.00",
          "save_price": "Save ₹ 80.00"
        },
        {
          "offLogo": 3,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-cow-ghee-1-l-pouch/491135471",
          "Image": "https://www.jiomart.com/images/product/150x150/491135471/amul-cow-ghee-1-l-pouch-product-images-o491135471-p491135471-0-202203170918.jpg",
          "clsgetname": "Amul Cow Ghee 1 L (Pouch)",
          "final_price": "₹ 523.00",
          "price": "₹ 540.00",
          "save_price": "Save ₹ 17.00"
        },
        {
          "offLogo": 7,
          "greenDot": "https://www.jiomart.com/p/groceries/l-oreal-paris-6-oil-nourish-nourishing-scalp-hair-shampoo-360-ml/490915878",
          "Image": "https://www.jiomart.com/images/product/150x150/490915878/lux-jasmine-vitamin-e-soap-150-g-pack-of-3-product-images-o490915878-p490915878-0-202203150352.jpg",
          "clsgetname": "Lux Jasmine & Vitamin E Soap 150 g (Pack of 3)",
          "final_price": "₹ 200.00",
          "price": "₹ 216.00",
          "save_price": "Save ₹ 16.00"
        },
        {
          "offLogo": 3,
          "greenDot": "https://www.jiomart.com/p/groceries/amul-pure-ghee-1-l-pouch/490010164",
          "Image": "https://www.jiomart.com/images/product/150x150/490010164/amul-pure-ghee-1-l-pouch-product-images-o490010164-p490010164-0-202203151915.jpg",
          "clsgetname": "Amul Pure Ghee 1 L (Pouch)",
          "final_price": "₹ 509.00",
          "price": "₹ 525.00",
          "save_price": "Save ₹ 16.00"
        },
        {
          "offLogo": 50,
          "greenDot": "https://www.jiomart.com/p/groceries/mangaldeep-4-in-1-puja-agarbatti-120-pcs/491584192",
          "Image": "https://www.jiomart.com/images/product/150x150/491584192/mangaldeep-4-in-1-ziplock-agarbatti-120-pcs-product-images-o491584192-p491584192-0-202203150356.jpg",
          "clsgetname": "Mangaldeep 4 in 1 Agarbatti 120 pcs",
          "final_price": "₹ 32.00",
          "price": "₹ 65.00",
          "save_price": "Save ₹ 33.00"
        },
        {
          "offLogo": 26,
          "greenDot": "https://www.jiomart.com/p/groceries/super-sarvottam-rice-bran-oil-1-l-pouch/491504124",
          "Image": "https://www.jiomart.com/images/product/150x150/491504124/super-sarvottam-physically-refined-100-rice-bran-oil-1-l-product-images-o491504124-p491504124-0-202203150801.jpg",
          "clsgetname": "Super Sarvottam Physically Refined 100% Rice Bran Oil 1 L",
          "final_price": "₹ 145.00",
          "price": "₹ 197.00",
          "save_price": "Save ₹ 52.00"
        },
        {
          "offLogo": 10,
          "greenDot": "https://www.jiomart.com/p/groceries/pears-pure-gentle-soap-125-g-buy-4-get-1-free/491085658",
          "Image": "https://www.jiomart.com/images/product/150x150/491085658/pears-pure-gentle-soap-with-natural-oils-125-g-buy-4-get-1-free-product-images-o491085658-p491085658-0-202203170226.jpg",
          "clsgetname": "Pears Pure & Gentle Soap with Natural Oils 125 g (Buy 4 Get 1 Free)",
          "final_price": "₹ 352.00",
          "price": "₹ 392.00",
          "save_price": "Save ₹ 40.00"
        }
       ]





    let imageContainer = document.querySelector('.Satyajit-storys-container');
    imageContainer.innerHTML = null;

    data.forEach(el => {
        let off_logo = document.createElement('p');
        off_logo.innerText = `${el.offLogo}% \n off`
        off_logo.setAttribute('class','offLogo')
      
       let off_logo_back = document.createElement('img');
       off_logo_back.src = "https://www.jiomart.com/assets/version1661356103/smartweb/images/icons/offer_bg.svg"
       off_logo_back.setAttribute('class','off_logo_back')
        let image = document.createElement('img');
        image.src = el.Image;
        
        let title =  document.createElement('p');
        title.innerText = el.clsgetname;
        title.setAttribute('class','title')

        let discounted_mrp = document.createElement('p');
        discounted_mrp.innerText = ` ${el.final_price}`;
        discounted_mrp.setAttribute('class','discounted_price')
        let original_mrp = document.createElement('p');
        original_mrp.innerHTML = `M.R.P:  <span class = "Satyajit-price"> ${el.price}</span>`;
        // original_mrp.style.textDecoration = 'line-through'
        original_mrp.setAttribute('class',"Satyajit-original-mrp")

        let save_mrp = document.createElement('p');
        save_mrp.innerText = ` ${el.save_price}`
        save_mrp.style.color = 'green'
        save_mrp.setAttribute('class','Satyajit-save-mrp')
        

        let btn = document.createElement('button');
        btn.innerText = `Add to Cart`
        let plus_btn = document.createElement('button');
        plus_btn.innerHTML = `<i class="fa-solid fa-plus"></i>`
        plus_btn.setAttribute('class','Satyajit-plus-btn');

        let btn_group =  document.createElement('button');
        btn_group.setAttribute('class','btn-grp')
        btn_group.append(btn,plus_btn)
  
        btn_group.addEventListener('click', ()=>{
          storeItem(el);
          btn_group.style.backgroundColor = 'green'
         
        
        })

        let div = document.createElement('div');
        div.setAttribute('class','Satyajit-story-circle');
        let dot = document.createElement('div');
        dot.setAttribute('class','greenDot')  
        let box = document.createElement('div');
        box.setAttribute('class','greenBox')  ;
        box.append(dot)  
    
        div.append(off_logo,off_logo_back,box,image,title,discounted_mrp,original_mrp,save_mrp,btn_group);
        imageContainer.append(div)
   
    });
  }
  let data = JSON.parse(localStorage.getItem('products')) || [];
  function storeItem(el){
    data.push(el);
    localStorage.setItem('products',JSON.stringify(data))
    cartItemCount()
  }

function cartItemCount(){
    
    let cartPlace = document.querySelector('#Aitemcount');
    let cartItem = JSON.parse(localStorage.getItem('products'));
    cartPlace.innerHTML = null
    cartPlace.innerHTML = cartItem.length
    
}

  /////////////Sating Of Shop By Category/.?//////////////////////////////



  renderProduct2()

function renderProduct2(){

 const data2 = [
 
 {

   "Images": "https://www.jiomart.com/images/category/6/thumb/0-6.png?v=1607022291",
    "title":"Personal Care"
 },
 {
   "Images": "https://www.jiomart.com/images/category/7/thumb/0-7.png?v=1607022291",
    "title":"Home Care"
 },
 {
   "Images": "https://www.jiomart.com/images/category/10/thumb/0-10.png?v=1607022291",
    "title":" Baby Care"
 },
 {
   "Images": "https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291",
    "title":" Staples"
  },
  {
       "Images": "https://www.jiomart.com/images/category/11/thumb/0-11.png?v=1607022291",
    "title":" Snacks & Branded Foods"
  },  
{
   "Images": "https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291",
    "title":" Dairy & Bakery"
},
  {
    "Images": "https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291",
    "title":"Fruits & Vegetables"
  },
   
  {
    "Images": "https://www.jiomart.com/images/category/3/thumb/0-3.png?v=1607022291",
    "title":"Beverages"
  }
]


  let imageContainer_3 = document.querySelector('.Satyajit-2-storys-container');
  imageContainer_3.innerHTML = null;

  data2.forEach(el => {
      let off_logo = document.createElement('p');
      off_logo.innerText = `${el.offLogo}% \n off`
      off_logo.setAttribute('class','offLogo')
    
     let off_logo_back = document.createElement('img');
     off_logo_back.src = "https://www.jiomart.com/assets/version1661356103/smartweb/images/icons/offer_bg.svg"
     off_logo_back.setAttribute('class','off_logo_back')
      let image = document.createElement('img');
      image.src = el.Images;
      
      let titles =  document.createElement('p');
      titles.innerText = el.title;
      titles.setAttribute('class','title')

      let discounted_mrp = document.createElement('p');
      discounted_mrp.innerText = ` ${el.final_price}`;
      discounted_mrp.setAttribute('class','discounted_price')
      let original_mrp = document.createElement('p');
      original_mrp.innerHTML = `M.R.P:  <span class = "Satyajit-2-price"> ${el.price}</span>`;
      // original_mrp.style.textDecoration = 'line-through'
      original_mrp.setAttribute('class',"Satyajit-2-original-mrp")

      let save_mrp = document.createElement('p');
      save_mrp.innerText = ` ${el.save_price}`
      save_mrp.style.color = 'green'
      save_mrp.setAttribute('class','Satyajit-2-save-mrp')
      

      let btn = document.createElement('button');
      btn.innerText = `Add to Cart`
      let plus_btn = document.createElement('button');
      plus_btn.innerHTML = `<i class="fa-solid fa-plus"></i>`
      plus_btn.setAttribute('class','Satyajit-2-plus-btn');

      let btn_group =  document.createElement('button');
      btn_group.setAttribute('class','btn-grp')
      btn_group.append(btn,plus_btn)

      let div = document.createElement('div');
      div.setAttribute('class','Satyajit-2-story-circle');
      let dot = document.createElement('div');
      dot.setAttribute('class','greenDot')  
      let box = document.createElement('div');
      box.setAttribute('class','greenBox')  ;
      box.append(dot)  
      div.append(image,titles);
      imageContainer_3.append(div)
 
  });
}
