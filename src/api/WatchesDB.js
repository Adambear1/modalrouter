const arr = [
  {
    brand: "A. Favre & Fils",
    price: "35000",
    description:
      "This manual wind timepiece from A. Favre & Fils offers a significantly longer power reserve at a full 84 hours, which blows most of the competition out of the water. The movement is an in-house caliber DB1334/1 with a dial featuring a new date indicator that’s large and easy to read with a contemporary appeal that still retains elegance. The movement is breathtakingly beautiful and despite being a relatively young brand (don’t let the name fool you), they’ve managed to achieve an artistic appeal that drips of old world charm. Overall, it’s an exceptional timepiece and well worth the price tag.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/A.-Favre-Fils-Phoenix-10.1-589x900.webp",
  },
  {
    brand: "A. Lange & Sohne Double Split",
    price: "100000",
    description:
      "This flyback chronograph is an industry first with its double-rattrapante chronograph that’s superlatively executed with style and grace. The movement is extraordinary and despite its sporty appearance, the watch is slim enough that it passes the cuff test and has just enough elegance to work as a dress watch when your Calatrava is in for cleaning. An absolute gem of a timepiece, the proprietary L001.1 movement is exacting with only one flaw: the power reserve is just a little too basic for the price. ",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/A.-Lange-Sohne-Double-Split-900x720.webp",
  },
  {
    brand: "A. Lange & Sohne 1815 Chronograph",
    price: "150000",
    description:
      "One of the most innovative timepieces from the manufacturer and certainly my favorite, the Pour Le Merite is a testament to all things holy in horology. The constant force with fusee and chain gives the wearer an exact understanding of the time. More precise than the standard tourbillon, the watch can maintain impeccable time throughout its reserve. The biggest innovation of the watch is arguably its stop-seconds and zero-reset function, but in reality the entire watch is a masterpiece both inside and out. The only negatives are the short 36-hour power reserve and the unfortunate lack of inward angles that one expects on a timepiece in this price category. Priced right around 150,000 euros for the rose gold model, it’s a perfect addition to any collection.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/A.-Lange-Sohne-Richard-Lange-Tourbillon-%E2%80%9CPour-Le-Merite%E2%80%9D-900x600.webp",
  },
  {
    brand: "A. Lange & Sohne Lange I",
    price: "35000",
    description:
      "Arguably one of the most popular models produced by the manufacturer, the Lange I is a timepiece that’s as close to perfection as you’re going to get. Well priced between 25,000 and 35,000 euros, the watch is available in platinum and yellow or rose gold. The 38mm timepiece is a quintessential dress watch with that contemporary Eastern European flair. The new models have a larger balance wheel than the predecessor (which in my opinion was a better watch) and gives a more accurate reading. The only issue I really have with the Lange I is that they need to move the time indicator to the other side of the watch since it will almost always require a lift of the cuff to see it. Overall, an exemplary timepiece.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/A.-Lange-Sohne-Lange-I-900x575.webp",
  },
  {
    brand: "Badollet Ivresse",
    price: "188000",
    description:
      "It curves around your wrist like a bracelet and has an ultra modern movement with a contemporary, yet graceful appearance. Gracefully curved, the movement is designed by David Candaux as a rectangle to perfectly fit within the case and is truly a masterpiece. Priced at 188,000 euros, this elegant timepiece is the perfect statement for the dot-com billionaire.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/Badollet-Ivresse-900x900.webp",
  },
  {
    brand: "Breguet Classique Tourbillon Messidor",
    price: "275000",
    description:
      "My favorite Breguet timepiece, the skeleton dial is what every other watchmaker should strive for. Undeniably beautiful with a movement that matches if not exceeds its aesthetic appeal, this timepiece is a true collectible for the aficionado. Priced right under CHF 275,000 for the rose gold model, this is probably one of my top ten favorite watches on this list.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/Breguet-Classique-Tourbillon-Messidor-900x900.webp",
  },
  {
    brand: "Cabestan Trapezium",
    price: "190000",
    description:
      "You’ll either love it or hate it but the Trapezium is an architectural masterpiece. Surprisingly readable, the timepiece uses two separate crowns for winding and setting and is a style statement that can only be worn by the few who can pull it off. Priced just under CHF 190,000, the Trapezium is one of the most unique offerings to hit the market this century.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/Cabestan-Trapezium-900x900.webp",
  },
  {
    brand: "Cartier Rotonde Repetition Minutes Tourbillon Volant",
    price: "238000",
    description:
      "Many might be upset or disheartened that I didn’t include the Tank on this list. Let’s face it, the Tank is one of the most quintessential luxury timepieces but it’s also fairly entry-level. It’s a wonderful watch, it just doesn’t deserve a place in the Top 100. However, this particular timepiece from Cartier certainly does. Priced at 238,000 euros, it features an AP Renaud & Papi 9402MC movement that uses a pusher rather than a slide to operate the repetition. Its titanium case is ideal for the repeater and one that watch critics have been requesting for some time. The only downside is more of a personal irk and that is that the watch bears the Geneve seal despite the movement being from Le Locle.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/Cartier-Rotonde-Repetition-Minutes-Tourbillon-Volant-900x900.webp",
  },
  {
    brand: "Christiaan Van Der Klaauw Real Moon Joure Rush Hour at the Moon",
    price: "50000",
    description:
      "For the true stargazer, this ode-to-the-astronaut timepiece is an artistic expression with a true 3D moon phase complication. Adjusted using the crown, it’s a testament to state-of-the-art technology that’s brilliantly paired with old-world craftsmanship. Priced at just under CHF 50,000, this is a perfect timepiece for any astronaut that wants something more elegant than an Omega on his wrist. I just wouldn’t recommend taking it to space.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2015/08/Christiaan-Van-Der-Klaauw-Real-Moon-Joure-Rush-Hour-at-the-Moon-775x900.webp",
  },
  {
    brand: "Christophe Claret X-TREM-I Chocolate",
    price: "288000",
    description:
      "Provocative, contemporary and stylish, the X-TREM-I is another Christophe Claret timepiece worthy of our Top 100 list. The watch is stunning and priced reasonably between 268,000 CHF and 288,000. Using the FlyII movement, it uses magnetic spheres to give you an accurate reading of the time and is still easy-to-read at night. A new and inspiring way to tell time, the lateral indicators are a technological achievement in horology, which is why this timepiece made our list.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2016/01/Christophe-Claret-X-TREM-I-Chocolate-900x900.webp",
  },
  {
    brand: "De Bethune DBS Tourbillon",
    price: "195000",
    description:
      "At 195,000 CHF, the DBS features the world’s lightest tourbillon cage at just 0.18gr. The timepiece is remarkable, and the quality of the workmanship and attention to detail is unsurpassed. Despite the wearer not being able to read the time in the dark, this watch is competitively priced and well worth the investment. It’s a horological marvel and one that deserves your utmost respect.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2016/01/De-Bethune-DBS-Tourbillon-900x900.webp",
  },

  {
    brand: "Rolex GMT Master II",
    price: "5180",
    description:
      "It starts at just 5,180 CHF, but it will last a lifetime. Available in steel at that price, or yellow gold at a higher one, it features a ceramic bezel and is known for its robust capabilities in all conditions. The date goes backward automatically when traveling westbound making the GMT function easy to use. There are some issues that make it inadvisable to wear in sports conditions, but if you like Rolex, it is one watch worth having in your collection.",
    image:
      "https://www.gentlemansgazette.com/wp-content/uploads/2016/11/Rolex-GMT-Master-II-841x900.webp",
  },
];

export default {
  GetAll: () => {
    return arr
  },
  GetOne: (input = "")=> {
    var result = new Array();
    if (input === "") {
      return;
    } else {
      arr.map((item, index) => {
        var { brand, description } = item;
        if (
          "\\b" + input + "\\b".test(brand) ||
          "\\b" + input + "\\b".test(description)
        ) {
          return result.push(item);
        }
      });
    }
    return result;
  }
};
