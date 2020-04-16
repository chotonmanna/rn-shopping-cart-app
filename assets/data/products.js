import Product from '../../models/product';

const lists = [
  new Product(
    "1",
    "1",
    "Kent 8 Ltr Pearl RO+UV+UF with TDS controller Water Purifier",
    "Kent is one of the world's renowned brands in water purifiers and they use the latest technology in this easy-to-use water purifier. It comes with four different purification methods. RO, UV, UF and TDS controller which cleanse and purify the water of even dissolved impurities. You will be getting perfectly healthy and fresh water from this purifier.",
    17511,
    require("../prod_img/Kent-8-Ltr-Pearl-RO-1122021-1-fe1fe.jpg"),
    4
  ),
  new Product(
    "2",
    "1",
    "macizo Preto 4 Burner Manual Gas Stove",
    "Ms Powder Coating , Brass Burner, Manual Type,Toughened Glass Top Premium,Stainless Steel Spill Tray, Smart Lock Pansupport, 360 Degree Revolving",
    2754,
    require("../prod_img/macizo-Preto-4-Burner-Manual-SDL217524127-1-e8d44.jpeg"),
    4.2
  ),
  new Product(
    "3",
    "1",
    "Sricam sp007 Black Wi-Fi Bullet 2MP Full HD Camera",
    "In short what can be done with this camera ? 1. Perfect for Outdoor Facility 2. Connect through LAN or wireless through WIFI 3. See live video on PC/Laptop, Android Phone, iPhone, Web Browser from sitting anywhere in world. How to DO ? 1. Connect camera to Power 2. Connect Camera to LAN- this step is required only once to save wifi settings.",
    3390,
    require("../prod_img/Sricam-sp007-Black-Wi-Fi-SDL589732873-1-9378d.jpg"),
    3.8
  ),
  new Product(
    "4",
    "1",
    "Hikvision DS-2CE5AC0T-IRP HD Dome 720P Camera",
    "1 MP DOME DS-2CE5AC0T-IRP INDOOR CAMERA",
    1249,
    require("../prod_img/Hikvision-DS-2CE5AC0T-IRP-HD-SDL772723930-1-6ba6f.jpeg"),
    4.4
  ),
  new Product(
    "5",
    "1",
    "Four star FS-010-1 Popular Dry Iron White",
    "Operating at a powerful 1000 W, this FOUR STAR dry iron is designed for quick and easy ironing to give your clothes the perfect crisp and creaseless finish. Equipped with a non-stick Teflon coated soleplate this dry iron glides smoothly over all types of fabric without pulling or wrinkling them. The unit has a smart thermostatic control that allows you to set the temperature best suited to the fabric you're ironing.",
    476,
    require("../prod_img/Four-star-FS-010-1-SDL164884760-1-f1b8b.jpeg"),
    4.2
  ),

  new Product(
    "6",
    "2",
    "Michelin Twin Piston Direct Drive Inflator 240V",
    "1. 240AC Twin Piston Unit 2. No PU hose 3. No Pre-Set Function 4. With Blue Cover 5. With Bleed Valve With C Clip 6. EU regulation The product comes with AutoKartz Guarantee. If the product has any fitment issues / defects; we will replace the same else refund the order.",
    7920,
    require("../prod_img/1273_6B_M2Cr2C6mYuH9IBow0Tp6zlkNysgej.jpg"),
    4
  ),
  new Product(
    "7",
    "2",
    "Michelin Glossy Dash And Trim Cleaner 650ml",
    "1. Renews and preserves 2. Original finish 3. Anti-Static 4. Protective polymers 5. Pre-compression trigger 6. REACH standard 7. MSDS available on request 8. Made in the EU 9. 650ml The product comes with AutoKartz Guarantee. If the product has any fitment issues / defects; we will replace the same else refund the order.",
    398,
    require("../prod_img/1216_dVJHtK8o5Un2ACXsSc-naMCd9hyER_1u.jpg"),
    4.2
  ),
  new Product(
    "8",
    "2",
    "TS-G1010S Car Speaker Pioneer",
    "TS-G1010S Car Speaker Pioneer for Universal Universal Universal by N.A Ltd. exclusively on AutoKartz This is a/an After Market quality product from the house of Pioneer sold by N.A Ltd.The package contains following items : 1 X Speaker At AutoKartz.com all products are 100% genuine and brand new. The pictures shown of the product are generic in nature, the actual product may vary as per vehicle specification. The product comes with AutoKartz Guarantee. If the product has any fitment issues / defects; we will replace the same else refund the order.",
    1362,
    require("../prod_img/54_RAm4Q5qwq-m7bktggoAvSqGDfIDymR3C.jpg"),
    3.8
  ),
  new Product(
    "9",
    "2",
    "Side Air Flow Vent",
    "At AutoKartz.com we have both original factory (O.E) and aftermarket replacement products available for your vehicle. Depending on the vehicle type and the exact function of the product, our agents will be more than happy to help and guide you through the available options.",
    591,
    require("../prod_img/949_Cghl5rXlzHlPtLBzpsQQzJnZPv5HpMJf.jpg"),
    3
  ),
  new Product(
    "10",
    "3",
    "OM Baby Wipes - 5 Pack",
    "Wipes are important to keep a baby hygienic and free of germs. These wipes have been designed to be ultra-sensitive, thus they are not harsh on your little one’s skin and keep it hydrated at all times. You can use these wipes for your newborn as they have been designed keeping in mind the sensitivity of the skin at that stage.",
    599,
    require("../prod_img/OM-Baby-Wipes-5-Pack-SDL082849063-1-7a6f9.jpg"),
    4.7
  ),
  new Product(
    "11",
    "3",
    "Gerber Baby Food BANANA APPLE STRAWBERRY Infant Cereal for 12 Months + ( 227 gm )",
    "Gerber Gerber Multigrain Banana Apple Strawberry 227g Infant Cereal for 6 Months + ( 227 gm )",
    750,
    require("../prod_img/Gerber-Baby-Food-BANANA-APPLE-SDL553123869-1-88ef2.jpeg"),
    4.8
  ),
  new Product(
    "12",
    "3",
    "Weavers Villa Orange Fleece ( 1 pcs) Bedding Sets baby sleeping bed sheet",
    "Baby Mosquito Net by Weavers Villa is the utility for each household that gives complete protection from mosquitoes, flies and insects. The fine mesh used to manufacture ensures it to be a quality product. It restricts the entry of flies and mosquitoes which gives a pleasant sleep to your child. It has an easily foldable facility and being light weighted makes it easy to carry and install anywhere quickly.",
    741,
    require("../prod_img/Weavers-Villa-Orange-Fleece-1-SDL584498072-1-4ea99.jpg"),
    3.6
  ),
  new Product(
    "13",
    "4",
    "Harshpet ROYAL PET Tea/Coffee/Sugar Container Set of 15 3950 mL",
    "Gerber Gerber Multigrain Banana Apple Strawberry 227g Infant Cereal for 6 Months + ( 227 gm )",
    679,
    require("../prod_img/Gerber-Baby-Food-BANANA-APPLE-SDL553123869-1-88ef2.jpeg"),
    4
  ),
  new Product(
    "14",
    "4",
    "Weavers Villa Orange Fleece ( 1 pcs) Bedding Sets baby sleeping bed sheet",
    "Baby Mosquito Net by Weavers Villa is the utility for each household that gives complete protection from mosquitoes, flies and insects. The fine mesh used to manufacture ensures it to be a quality product. It restricts the entry of flies and mosquitoes which gives a pleasant sleep to your child. It has an easily foldable facility and being light weighted makes it easy to carry and install anywhere quickly.",
    741,
    require("../prod_img/Weavers-Villa-Orange-Fleece-1-SDL584498072-1-4ea99.jpg"),
    3.6
  ),
  new Product(
    "15",
    "5",
    "IKIGAI: The Japanese Secret to a Long and Happy Life (Lead Title)",
    "'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won’t be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.' Neil Pasricha, bestselling author of The Happiness Equation",
    403,
    require("../prod_img/Ikigai-Lead-Title-SDL808346601-1-81625.jpg"),
    4.2
  ),
  new Product(
    "16",
    "5",
    "Harry Potter and the Philosopher's Stone",
    "Harry Potter and the Philosopher's Stone",
    223,
    require("../prod_img/Untitled_1-a9be0.jpg"),
    4.1
  ),
  new Product(
    "17",
    "5",
    "Good Economics For Hard Times",
    "Good Economics For Hard Times",
    350,
    require("../prod_img/Good-Economics-For-Hard-Times-SDL500587926-1-118f0.jpg"),
    4.5
  ),
  new Product(
    "18",
    "6",
    "HAP Kids Cotton White Vest Mx Pack (Pack of 5) /Boys Vest",
    "A basic requirement for every boy, this vest / undershirt is a must for daily use . It ensures comfort, style and flexibility for your little champ. The soft absorbent fabric keep him cool and refreshed all day.Made from 100% premium Combed cotton soft absorbent fabric.International Fit with Contoured armhole for flexibility and maximum freedom of comfort.Reinforced Seems & long lasting .",
    319,
    require("../prod_img/HAP-Kids-Cotton-White-Vest-SDL514737224-1-854f9.jpg"),
    4.3
  ),
  new Product(
    "19",
    "6",
    "HAP Multicolored Printed Vest for Boys and Girls / pack of 5 /Innerwear Casual Wear",
    "Just imagine youR child in our HAP extremely flattering new Tank / Vest. The fun 5 colored design with trendy print in pure cotton interlock /rib fabric is a must have in your kids wardrobe this summer. Grab them soon before they're gone! HAP Kids Sporty cool Gym Style VEST is going to be your new favourite. In a cut you already know is super flattering, with its slim fit and racerback cut to look great with any of our super cool street shots .This 5 coloured fashion vest is a perfect blend of style, comfort and functionality.",
    486,
    require("../prod_img/HAP-Multicolored-Printed-Vest-for-SDL557313496-1-6b5c0.jpeg"),
    4.8
  ),
  new Product(
    "20",
    "7",
    "Bluetooth Module HC-05 Host and Slave Wireless Interface",
    "HC-05 is host and slave bluetooth module, interface VCC,GND,TXD,RXD,STATE/KEY. STATE is Bluetooth connection status pin-out, the output is low if not connected and output is high if connected.LED indicate the status of bluetooth connection: If the LED is flashing quickly, it means the bluetooth does not connect If the LED is flashing slowly, it means transfer to AT mode If the LED is double flashing",
    377,
    require("../prod_img/Bluetooth-Module-HC-05-Host-SDL415042708-1-0cdf7.jpeg"),
    4.2
  ),
  new Product(
    "21",
    "7",
    "Samsung116L Toner Cartridge Pack Of 1 M2625, M2626, M2675, M2676, M2825, M2826, M2826ND, M2875, M2876, M2876ND",
    "Samsung116L Toner Cartridge Pack Of 1 M2625, M2626, M2675, M2676, M2825, M2826, M2826ND, M2875, M2876, M2876ND",
    1268,
    require("../prod_img/Samsung116L-Toner-Cartridge-Pack-Of-SDL901092396-1-054ad.jpeg"),
    3.3
  ),
  new Product(
    "22",
    "7",
    "Arduino UNO R3 board with DIP ATmega328P",
    "Just imagine youR child in our HAP extremely flattering new Tank / Vest. The fun 5 colored design with trendy print in pure cotton interlock /rib fabric is a must have in your kids wardrobe this summer. Grab them soon before they're gone! HAP Kids Sporty cool Gym Style VEST is going to be your new favourite. In a cut you already know is super flattering, with its slim fit and racerback cut to look great with any of our super cool street shots .This 5 coloured fashion vest is a perfect blend of style, comfort and functionality.",
    587,
    require("../prod_img/Arduino-UNO-R3-board-with-SDL751172131-1-e8722.jpg"),
    4.4
  ),
  new Product(
    "23",
    "8",
    "WOW Skin Science Red Onion Black Seed Oil Shampoo & Conditioner Kit Shampoo + Conditioner 600 mL Pack of 2",
    "Two premium products with advanced botanical actives for highly effective shampoo and conditioning regimen. Regular use removes scalp build-ups, restores shine and smoothness to hair. Suitable for all hair types including colour treated and/or dandruff prone hair. All products guaranteed free of harmful sulphates, parabens, mineral oil and alcohol",
    594,
    require("../prod_img/WOW-Skin-Science-Red-Onion-SDL021384610-1-a8dc7.jpg"),
    4.3
  ),
  new Product(
    "24",
    "8",
    "ADS 36 hrs black eyeliner + ADS Kajal Pencil Black 10 gm Pack of 9",
    "36 HRS EYELINER This super sharp and ultra-thin Eyestudio Hypersharp Liner in the shade that helps you draw that precise and sharp line.",
    275,
    require("../prod_img/ADS-36-hrs-black-eyeliner-SDL707206109-1-385c1.jpg"),
    3.6
  ),
  new Product(
    "25",
    "8",
    "HUDA Beauty Precious Stones Obsession SAPPHIRE Palette EyeShadow shade 9",
    "Precious Stones Obsessions palette SAPPHIRE for your perfect eyelid. It contains some unique eyeshadow. It has all you need mattte eyeshadow, shimmer eyeshadow. So grab one till stocks last. All colours available.",
    300,
    require("../prod_img/HB-Precious-Stones-Obsession-SAPPHIRE-SDL966465210-1-8ccf5.jpg"),
    4
  ),
  new Product(
    "26",
    "9",
    "UB PHYSIO SOLUTIONS TENS MINI (Transcutaneous Electrical Nerve Stimulation)",
    "UB PHYSIO SOLUTIONS presents this white tens mini 2 channel is a safe and convenient way to relieve tension & fatigue from aching ankles calves & feet as well as improve circulation & muscle tone. With 0 to 99 minutes timer, it has reliable operation as it applies acupressure effect to the human body which relieves the nerve compressions from inter vertebrae disc spaces. Further, it has 7 second on and off burst mode selection and power input of 220V/50 Hz. The high functionality and durability makes this machine a good buy.",
    1499,
    require("../prod_img/UB-PHYSIO-SOLUTIONS-TENS-MINI-SDL394909257-1-cf229.jpg"),
    4.3
  ),
  new Product(
    "27",
    "9",
    "Mimo Electric Massager With USB Cable- Assorted",
    "Mimo multi-functional massager eases muscle ache and improves blood circulation. It can be uses no matter sitting, standing or lying down, the product features are compact design and easy to carry. It is a necessary healthcare product for work, life and study.",
    291,
    require("../prod_img/Mimo-Electric-Massager-With-USB-SDL163637901-1-eded4.jpg"),
    3.6
  ),
  new Product(
    "28",
    "9",
    "Nerr Formulations hot water gel bottle Electronic Hot Gel Bottle Pack Of 1",
    "Muscle pain can really bring you down and the body ache almost makes you immobile. Muscle pain can be caused due to stress or overworking. At times even injury can cause your muscles to ache. Therefore, a good pain relief product is good to have at hand. The NERR Hot Water Gel Bag is easy to use and relieves pain in the most natural way possible. this hot water bag is skin-friendly and can work effectively, to get you moving again. It is air tight, making sure that the hot water does not leak out and cause a mess or any accidents. This product is now available at Snapdeal at an affordable price. COLOR AS PER STOCK.",
    450,
    require("../prod_img/Nerr-Formulations-hot-water-gel-SDL312782785-1-00b9b.jpg"),
    4
  ),
  new Product(
    "29",
    "10",
    "Love Crochet Art crochet baby booties - Blue with yellow flower for 6-12 months baby",
    "100 % handmade crochet baby Booties :: It has been crocheted out of a gorgeous wool that is super easy to care for :: Best choice for birthday, party and photo:: Soft & Comfortable :: Take good care of your little one's delicate feet with crochet booties by Love Crochet Art :: It is both warm and stylish",
    269,
    require("../prod_img/Love-Crochet-Art-crochet-baby-SDL153756998-1-e6941.jpeg"),
    3
  ),
  new Product(
    "30",
    "10",
    "Apratim Black Slippers",
    "presents an exclusive range of footwear that are crafted to match up with the trending fashion. Featuring a classy pair of black and gold ethnic sandals that ensures comfort and durability and keeps your feet relaxed. Add this pair of sandals in your ethnic footwear collection.",
    280,
    require("../prod_img/Apratim-Black-Slippers-SDL100656975-1-b2ef3.jpeg"),
    3.7
  ),
  new Product(
    "31",
    "10",
    "scoffe Multi Color Casual Shoe Combo",
    "Scoffe provide a high quality comfortable shoes for young generation. Casual shoes[also called trainers , athletics shoes, tennis shoes, gym shoes,etc] are shoes primarily desidned for sports and daily activities formal parties or other forms of physical exercise but which are now also widely used for every day wear . The term generally describe a type of footwear with a flexible sole made of rubber and upper part made of mesh . Please check your size before the order place.",
    999,
    require("../prod_img/scoffe-Multi-Color-Casual-Shoe-SDL385058311-1-fc60a.jpeg"),
    3.3
  ),
  new Product(
    "32",
    "10",
    "Marc Loire Black Wedges Heels",
    "Up your glam quotient with these super comfortable heels suitable for both party wear and official meetings",
    977,
    require("../prod_img/Marc-Loire-Black-Wedges-Heels-SDL312194125-1-be474.jpg"),
    4
  ),
  new Product(
    "33",
    "11",
    "Els Grey Rectangle Spectacle Frame EBT-MEN-GM-NH",
    "Suitable for using with Power Glass; Needs help of Professional Optician to Replace glass; Not suitable for Plain Frame usage or not suitable for Computer Use; Brand Name & Size written On Glass is non removable; so no plain frame usage without power glas",
    469 ,
    require("../prod_img/Els-Grey-Rectangle-Spectacle-Frame-SDL763172312-1-53dce.jpg"),
    4.4
  ),
  new Product(
    "34",
    "11",
    "Zyaden Silver Rectangle Spectacle Frame FRA-379",
    "This is Rectangular Eyewear Frame",
    599,
    require("../prod_img/Zyaden-Silver-Rectangle-Spectacle-Frame-SDL955999921-1-2673c.jpeg"),
    3.9
  ),
  new Product(
    "35",
    "12",
    "Micromax ( 8GB , 2 GB ) Gray",
    "Micromax Canvas Juice 3 Q392 is the answer to you all your connectivity issues and provides incredible service in maintaining yourlink with the virtual world. You can chat with friends and family and be a part of the social media through this phone. Not to mention the convenience in accessing your daily work through this device is extremely easy.",
    4738,
    require("../prod_img/juice3image-56868.jpg"),
    3.8
  ),
  new Product(
    "36",
    "12",
    "Samsung galaxy j2 ( 8GB , 1 GB ) Black Gold",
    "The Samsung Galaxy E5 is the best phone if you are looking for a smartphone that has a sleek look and comes with the latest updates in software. The phone combines functionality with a pleasant presence factor that makes it one of the best android phones in its category in the market today.",
    6992,
    require("../prod_img/Samsung-Galaxy-J2-8GB-SDL394918103-1-9e290.jpg"),
    4
  ),
  new Product(
    "37",
    "12",
    "Intex Aqua Joy ( 4GB and Below , 512 MB ) White",
    "Intex Aqua Joy is a spectacular feature-packed smartphone that suits your style & caters all your needs. It allows seamless multitasking With 1.2 GHz Quad-Core Processor, 512 MB DDR2 RAM, 4GB ROM* (Includes memory used for OS & apps). It comes with RoHS compliant and SAR - Head: 0.893 W/Kg, Body: 0.796 W/Kg. The device is backed by Android Lollipop 5.1. Do anything, click pictures, watch videos, and listen to music to keep you entertained. It’s a joyful ride.",
    2411,
    require("../prod_img/Intex-Aqua-Joy-4GB-and-SDL770431021-1-502d9.jpg"),
    3
  )
];

export default lists;