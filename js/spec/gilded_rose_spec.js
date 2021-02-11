describe("Gilded Rose", function () {

  // DEXTERITY VEST TESTS
  it("Should lower dexterity vests quality with shelf life remaining by 1", function () {
    items = [new Item('+5 Dexterity Vest', 5, 10)];
    update_quality();
    expect(items[0].quality).toEqual(9);
    expect(items[0].sell_in).toEqual(4);
  });

  it("Should lower dexterity vests quality with NO shelf life remaining by 2", function () {
    items = [new Item('+5 Dexterity Vest', 0, 10)];
    update_quality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Should not allow dexterity vests quality to go below 0", function () {
    items = [new Item('+5 Dexterity Vest', -10, 1)];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(-11);
  });


  // ELIXIR OF THE MONGOOSE TESTS
  it("Should lower elixir quality with shelf life remaining by 1", function () {
    items = [new Item('Elixir of the Mongoose', 5, 10)];
    update_quality();
    expect(items[0].quality).toEqual(9);
    expect(items[0].sell_in).toEqual(4);
  });

  it("Should lower elixir quality with NO shelf life remaining by 2", function () {
    items = [new Item('Elixir of the Mongoose', 0, 10)];
    update_quality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Should not allow elixir quality to go below 0", function () {
    items = [new Item('Elixir of the Mongoose', -10, 1)];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(-11);
  });


  // AGED BRIE TESTS
  // ** These are based on my assumption in gilded_rose.js that the value rises by 1 in perpetuity **
  it("Should raise aged brie quality by 1", function () {
    items = [new Item('Aged Brie', 5, 10)];
    update_quality();
    expect(items[0].quality).toEqual(11);
    expect(items[0].sell_in).toEqual(4);
  });

  it("Should raise aged brie quality with NO shelf life remaining by 1", function () {
    items = [new Item('Aged Brie', 0, 10)];
    update_quality();
    expect(items[0].quality).toEqual(11);
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Should not allow aged brie quality to go above 50", function () {
    items = [new Item('Aged Brie', 15, 50)];
    update_quality();
    expect(items[0].quality).toEqual(50);
    expect(items[0].sell_in).toEqual(14);
  });


  // SULFURAS TESTS
  it("Should not change value or shelf life of sulfuras legendary items", function () {
    items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(10);
  });


  // BACKSTAGE CONCERT PASSES TESTS
  it("Should raise back stage passes quality by 1 when there are more than 10 days until the concert", function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)];
    update_quality();
    expect(items[0].quality).toEqual(11);
    expect(items[0].sell_in).toEqual(14);
  });

  it("Should raise back stage passes quality by 2 when there are between 6 and 10 days until the concert", function () {
    items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 6, 15),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8)
    ];
    update_quality();
    expect(items[0].quality).toEqual(17);
    expect(items[0].sell_in).toEqual(5);

    expect(items[1].quality).toEqual(10);
    expect(items[1].sell_in).toEqual(9);
  });

  it("Should raise back stage passes quality by 3 when there are between 1 and 5 days until the concert", function () {
    items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15)
    ];
    update_quality();
    expect(items[0].quality).toEqual(23);
    expect(items[0].sell_in).toEqual(0);

    expect(items[1].quality).toEqual(18);
    expect(items[1].sell_in).toEqual(4);
  });

  it("Should lower back stage passes quality to 0 when the concert has passed", function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(-1);
  });


  // CONJURED ITEMS TESTS
  it("Should lower conjured items quality with shelf life remaining by 2", function () {
    items = [new Item('Conjured Mana Cake', 3, 6)];
    update_quality();
    expect(items[0].quality).toEqual(4);
    expect(items[0].sell_in).toEqual(2);
  });

  it("Should lower conjured items quality with NO shelf life remaining by 4", function () {
    items = [new Item('Conjured Mana Cake', 0, 10)];
    update_quality();
    expect(items[0].quality).toEqual(6);
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Should not allow conjured items quality to go below 0", function () {
    items = [new Item('Conjured Mana Cake', -1, 1)];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(-2);
  });

});
