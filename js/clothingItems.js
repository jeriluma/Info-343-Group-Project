// populates the shop
var Clothes = {
    entries: [
            {type: 'dress', price: '50.45', title: 'Patterned Blue Dress', description: 'Purple wool blend long sleeve dress featuring a round neck, damask pattern, and a flounce hem. ', pic: 'img/dress1.jpg'},
            {type: 'dress', price: '27.27', title: 'Hummingbird Dress', description: 'Classic vintage fit, navy blue dress features sweet silhouettes of ivory hummingbirds.', pic: 'img/dress2.jpg'},
            {type: 'dress', price: '25.00', title: 'Pastel Rose Dress', description: 'A cream and pink dress adorned with brass-toned button up front.', pic: 'img/dress3.jpg'},
            {type: 'dress', price: '25.87', title: 'Peach Button Dress', description: 'Peach colored dress features a cockatoo print and brass-toned button up front.', pic: 'img/dress4.jpg'},
            {type: 'dress', price: '38.95', title: 'Polka Dot Dress', description: 'Polka dot dress in navy blue.', pic: 'img/dress5.jpg'},
            {type: 'dress', price: '47.20', title: 'Denim Polka Dots Dress', description: 'Denim dress with cut out back features a small bow and is covered in a polka dot print.', pic: 'img/dress6.jpg'},
            {type: 'dress', price: '23.40', title: 'Delye Dress', description: 'Black, tailored evening dress.', pic: 'img/dress7.jpg'},
            {type: 'dress', price: '22.00', title: 'Green Lace Dress', description: 'Dark green silk blend lace shift dress featuring a boat neck, short sleeves, a rear zip fastening and a scalloped hem. ', pic: 'img/dress8.jpg'},
            {type: 'dress', price: '45.00', title: 'The Red Dress', description: 'Ruby red wool blend pencil mini dress featuring a crew neck, short cap sleeves, and velvet geometric print throughout.', pic: 'img/dress9.jpg'},
            {type: 'dress', price: '48.00', title: 'Blue Bow Dress', description: 'Royal blue dress adorned with a front bow and v-neck back.', pic: 'img/dress10.jpg'},
            {type: 'accessory', price: '5.95', title: '12 Pair Earrings', description: 'Earrings with rhinestones and beads in various colors and sizes.', pic: 'img/accessory1.jpg'},
            {type: 'accessory', price: '6.00', title: '10-Pack Bracelets', description: 'Smooth and patterned metal bangles.', pic: 'img/accessory2.jpg'},
            {type: 'accessory', price: '6.00', title: '4-pack Bracelets', description: 'Elasticized bracelets with plastic beads.', pic: 'img/accessory3.jpg'},
            {type: 'accessory', price: '5.95', title: 'Necklace', description: 'Short metal necklace. Adjustable length. Length 17 1/4 in.', pic: 'img/accessory4.jpg'},
            {type: 'accessory', price: '3.00', title: 'Locket Necklace', description: 'Necklace in gold-colored metal with locket that opens. Adjustable length. Length 29 in.', pic: 'img/accessory5.jpg'},
            {type: 'accessory', price: '2.20', title: 'Two-Pack Rings', description: 'One gold-colored and one silver-colored metal ring, each with a chain decoration at top.', pic: 'img/accessory6.jpg'},
            {type: 'accessory', price: '1.99', title: 'Diamond Shaped Earrings', description: 'Large metal earrings with antique-look finish.', pic: 'img/accessory7.jpg'},
            {type: 'accessory', price: '4.30', title: 'Wide Metal Bracelet', description: 'Bracelet of eight bangles in embossed metal joined by metal links', pic: 'img/accessory8.jpg'},
            {type: 'accessory', price: '3.95', title: 'Chain Necklace', description: 'Short necklace consisting of three metal chains with different designs. Adjustable length. Length 16 1/4 in.', pic: 'img/accessory9.jpg'},
            {type: 'accessory', price: '6.00', title: 'Spiral Ring', description: 'Wide, spiral-shaped metal ring.', pic: 'img/accessory10.jpg'},
            {type: 'shirt', price: '25.55', title: 'Silk Blouse', description: 'Sleeveless, fitted blouse in silk with ruffles and keyhole opening at front.', pic: 'img/shirts1.jpg'},
            {type: 'shirt', price: '29.95', title: 'Wraparound Blouse', description: 'Long-sleeved, wraparound blouse in matte chiffon with pleats at shoulders and back.', pic: 'img/shirts2.jpg'},
            {type: 'shirt', price: '24.95', title: 'Denim Shirt', description: 'Long-sleeved, fitted shirt in stretch denim.', pic: 'img/shirts3.jpg'},
            {type: 'shirt', price: '24.30', title: 'Satin Blouse', description: 'Long-sleeved satin blouse with openwork lace section at top. ', pic: 'img/shirts4.jpg'},
            {type: 'shirt', price: '24.45', title: 'Polka-dot Blouse', description: 'Straight-cut polka-dot blouse in chiffon with buttons at front and short sleeves with sewn cuffs.', pic: 'img/shirts5.jpg'},
            {type: 'shirt', price: '44.95', title: 'Cotton Shirt', description: 'Straight-cut shirt in soft, airy cotton.', pic: 'img/shirts6.jpg'},
            {type: 'shirt', price: '34.95', title: 'Chiffon Blouse', description: 'Gently tailored blouse in airy chiffon with concealed buttons, metal button on collar, and long sleeves.', pic: 'img/shirts7.jpg'},
            {type: 'shirt', price: '25.00', title: 'Fitted Long-sleeved Shirt', description: 'Fitted, long-sleeved shirt in stretch fabric with V-neck. Buttons at front and at cuffs.', pic: 'img/shirts8.jpg'},
            {type: 'shirt', price: '25.00', title: 'Sleeveless Blouse', description: 'Straight-cut, sleeveless blouse with buttons at front. Front with washed denim look and back in transparent chiffon. Rounded hem and slits at sides.', pic: 'img/shirts9.jpg'},
            {type: 'shirt', price: '25.00', title: 'Blue Chiffon Blouse', description: 'Patterned chiffon with a wide neckline. 3/4-length sleeves with button at cuffs. Rounded hem, slightly longer at back.', pic: 'img/shirts10.jpg'},
            {type: 'sweater', price: '25.00', title: 'Grey Knit', description: 'Short, loose-knit sweater with wool in the yarn. Round neckline and long sleeves.', pic: 'img/sweaters1.jpg'},
            {type: 'sweater', price: '25.00', title: 'Green Knit Sweater', description: 'Short, loose-knit sweater with wool in the yarn. ', pic: 'img/sweaters2.jpg'},
            {type: 'sweater', price: '29.30', title: 'Jacquard-knit Sweater', description: 'Long-sleeved pattern- and jacquard-knit sweater in melange yarn.', pic: 'img/sweaters3.jpg'},
            {type: 'sweater', price: '24.95', title: 'Fine-knit Cardigan', description: 'Fine-knit cardigan in a soft fabric with a draped front section. ', pic: 'img/sweaters4.jpg'},
            {type: 'sweater', price: '60.20', title: 'White Cashmere Sweater', description: 'Long-sleeved, fine-knit sweater in cashmere wool.', pic: 'img/sweaters5.jpg'},
            {type: 'sweater', price: '12.95', title: 'Bubbly Yarn Sweater', description: 'Long-sleeved, loose-knit sweater in bubbly yarn.', pic: 'img/sweaters6.jpg'},
            {type: 'sweater', price: '23.00', title: 'Long Knit Sweater', description: 'Long, knit sweater in soft yarn. Perforated pattern at shoulders, front and back, and small slits at sides.', pic: 'img/sweaters7.jpg'},
            {type: 'sweater', price: '22.00', title: 'Purl-knit Cardigan', description: 'Purl-knit cardigan with 3/4-length sleeves and no buttons.', pic: 'img/sweaters8.jpg'},
            {type: 'sweater', price: '19.00', title: 'Long-sleeved Sweater', description: 'Long-sleeved top in sweatshirt fabric with studded yoke and studded, rounded hem.', pic: 'img/sweaters9.jpg'},
            {type: 'sweater', price: '35.00', title: 'Long Cardigan', description: 'Long, fine-knit cardigan in soft cotton with buttons and pockets at front. ', pic: 'img/sweaters10.jpg'},
            {type: 'jeans', price: '10.00', title: 'Skinny Low Jeans', description: 'Low-rise jeans in washed stretch denim with ultra-slim legs. Front and back pockets.', pic: 'img/jeans1.jpg'},
            {type: 'jeans', price: '25.00', title: 'Distressed Jeans', description: '5-pocket jeans in washed denim with a loose fit, tapered legs, regular waist, and heavily distressed details.', pic: 'img/jeans2.jpg'},
            {type: 'jeans', price: '30.23', title: 'Dark Wash Jeans', description: '5-pocket low-rise jeans in washed stretch denim with tapered legs and distressed details.', pic: 'img/jeans3.jpg'},
            {type: 'jeans', price: '15.30', title: 'Straight Regular Jeans', description: '5-pocket jeans in washed stretch denim with straight legs and regular waist.', pic: 'img/jeans4.jpg'},
            {type: 'jeans', price: '45.00', title: 'Embroidered Jeans', description: '5-pocket, low-rise jeans in washed stretch denim with slim legs. Decorative embroidery at front.', pic: 'img/jeans5.jpg'},
            {type: 'jeans', price: '33.00', title: 'Burgundy Cotton Jeans', description: 'Slim-fit jeans in stretch denim with slim legs, regular waist, and front and back pockets.', pic: 'img/jeans6.jpg'},
            {type: 'jeans', price: '13.30', title: 'Slim-fit Jeans', description: 'Slim-fit jeans in stretch denim with slim legs, regular waist, and front and back pockets.', pic: 'img/jeans7.jpg'},
            {type: 'jeans', price: '15.00', title: 'Bleached Jeans', description: '5-pocket, low-rise, slim-fit jeans in bleached stretch denim with ultra-slim legs.', pic: 'img/jeans8.jpg'},
            {type: 'jeans', price: '45.00', title: 'Cargo Jeans', description: 'Cargo jeans in dyed stretch twill with ultra-slim legs. Side pockets, leg pockets with flap and fastener, and back pockets.', pic: 'img/jeans9.jpg'},
            {type: 'jeans', price: '25.50', title: 'White Jeans', description: 'Jeans in stretch denim with ultra-slim legs. Narrow metal-embroidered trim along outer legs.', pic: 'img/jeans10.jpg'},
            {type: 'jacket', price: '35.00', title: 'Denim Jacket', description: 'Slim-fit jacket in stretch washed denim with distressed details and a button placket. Two chest pockets with flap and button. Adjustable tabs at sides of hem.', pic: 'img/jackets1.jpg'},
            {type: 'jacket', price: '49.40', title: 'Wool Jacket', description: 'Short, fitted, double-breasted jacket in woven fabric with wool content. Buttons in patterned, antique-finish metal. Lined.', pic: 'img/jackets2.jpg'},
            {type: 'jacket', price: '59.00', title: 'White Parka', description: 'Parka in washed twill with pile lining. Lined hood with faux fur trim, concealed front zip, and drawstring waistband.', pic: 'img/jackets3.jpg'},
            {type: 'jacket', price: '50.25', title: 'Cotton Canvas Jacket', description: 'High collar with decorative zip and concealed zip and snap fasteners at front. ', pic: 'img/jackets4.jpg'},
            {type: 'jacket', price: '45.00', title: 'Pile Collar Jacket', description: ' woven fabric with detachable pile collar. Asymmetrical zip, lapels with snap fasteners, tabs at hem, side pockets with decorative flaps, and zips at cuffs.', pic: 'img/jackets5.jpg'},
            {type: 'jacket', price: '49.00', title: 'Leather Jacket', description: 'Quilted shoulders, lapels with decorative metal buttons, asymmetrical front zip, side zip pockets, and zips at cuffs. Quilted lining.', pic: 'img/jackets6.jpg'},
            {type: 'jacket', price: '25.00', title: 'Padded Jacket', description: 'Fitted, padded jacket with decorative elasticized seams, stand-up collar, front zip and front pockets, and hood with faux fur trim.', pic: 'img/jackets7.jpg'},
            {type: 'jacket', price: '35.00', title: 'Quilted Cotton Parka', description: 'Detachable quilted lining with trim and hood in soft pile. Zip and buttons at front, two front flap pockets, and two side pockets with snap fastener.', pic: 'img/jackets8.jpg'},
            {type: 'jacket', price: '59.40', title: 'Trenchcoat', description: 'Straight-cut trenchcoat in woven fabric with a matte silk look.', pic: 'img/jackets9.jpg'},
            {type: 'jacket', price: '25.00', title: 'Padded Glossy Parka', description: 'Padded parka in glossy fabric.', pic: 'img/jackets10.jpg'},
            {type: 'shoes', price: '34.95', title: 'Ankle Boots', description: 'Ankle boots in imitation suede with side zip and rubber soles. ', pic: 'img/shoes1.jpg'},
            {type: 'shoes', price: '10.95', title: 'Black Sneakers', description: 'Sneakers with laces at front. Rubber soles.', pic: 'img/shoes2.jpg'},
            {type: 'shoes', price: '55.00', title: 'Suede Boots', description: 'Boots in suede with a low heel. Adjustable straps at front and at top. Chunky rubber soles.', pic: 'img/shoes3.jpg'},
            {type: 'shoes', price: '24.95', title: 'Ballet Flats', description: 'Ballet flats in imitation leather with grosgrain trim and quilted sides. Decorative bow at front and a gold-colored decorative detail on heel. ', pic: 'img/shoes4.jpg'},
            {type: 'shoes', price: '33.00', title: 'Suede Flats', description: 'Imitation suede ballet flats with rubber soles. ', pic: 'img/shoes5.jpg'},
            {type: 'shoes', price: '45.00', title: 'Black Heels', description: 'Imitation suede pumps. Heel height 3 in. Rubber soles.', pic: 'img/shoes6.jpg'},
            {type: 'shoes', price: '22.00', title: 'Tall Ankle Boots', description: 'Boots in imitation suede with laces and bow at heel. Side zip and rubber soles. Front platform height 1/2 in, heel height 4 1/2 in.', pic: 'img/shoes7.jpg'},
            {type: 'shoes', price: '14.00', title: 'Studded Ballet Flats', description: 'Ballet flats in imitation suede with decorative metal studs, satin lining and rubber soles.', pic: 'img/shoes8.jpg'},
            {type: 'shoes', price: '16.00', title: 'Sneakers', description: 'Sneakers in matte imitation leather with padded top section, laces at front, canvas lining, and rubber soles.', pic: 'img/shoes9.jpg'},
            {type: 'shoes', price: '28.00', title: 'Canvas Sneakers', description: 'Low canvas sneakers with laces and rubber soles.', pic: 'img/shoes10.jpg'}
    ] 
};