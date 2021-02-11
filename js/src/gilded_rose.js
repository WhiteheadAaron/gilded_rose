function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function lower_date(i) {
  items[i].sell_in--;
}

// This makes sure the quality never goes below 0
function lower_quality(i, amount) {
  items[i].quality = Math.max(items[i].quality - amount, 0);
}

// This makes sure the quality never goes above 50
function raise_quality(i, amount) {
  items[i].quality = Math.min(items[i].quality + amount, 50);
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {

    // This one is simple, lower by 1 value each day until the sell by date.
    // It then lowers by 2 until it has no value remaining.
    // Both the Dexterity Vest and the Elixir behave the same way, so I combined them for simplicity.
    if (items[i].name == '+5 Dexterity Vest' || items[i].name == 'Elixir of the Mongoose') {
      if (items[i].sell_in > 0) lower_quality(i, 1);
      else lower_quality(i, 2);
      lower_date(i);
    }

    // I don't see any specification what happens after the sell by date reaches 0.
    // With this code it will just continue to raise in value by 1 each day forever.
    if (items[i].name == 'Aged Brie') {
      raise_quality(i, 1);
      lower_date(i);
    }

    // Do nothing because the item's value does not change, and the sell by date is not relevant.
    if (items[i].name == 'Sulfuras, Hand of Ragnaros') { }

    // The concert tickets have 4 different behaviors depending on the sell by date.
    // I used conditionals to make sure that only one function would be executed on the quality level.
    // I used the lower function (even though I could have just hard coded the value to 0) for consistency.
    if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].sell_in <= 0) lower_quality(i, items[i].quality);
      if (items[i].sell_in > 0 && items[i].sell_in <= 5) raise_quality(i, 3);
      if (items[i].sell_in > 5 && items[i].sell_in <= 10) raise_quality(i, 2);
      if (items[i].sell_in > 10) raise_quality(i, 1);
      lower_date(i);
    }

    // The Conjured items behave the same as the Vest and the Elixir, just doubled.
    if (items[i].name == 'Conjured Mana Cake') {
      if (items[i].sell_in > 0) lower_quality(i, 2);
      else lower_quality(i, 4);
      lower_date(i);
    }
  }
}
