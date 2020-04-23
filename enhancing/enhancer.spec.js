const enhancer = require('./enhancer.js');
// test away!

// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
describe("enhancer.js", function() {
    describe("repair()", () => {
      it("restores durability to 100", () => {
        expect(enhancer.repair({ durability: 0 }).durability).toBe(100);
        expect(enhancer.repair({ durability: -1 }).durability).toBe(100);
        expect(enhancer.repair({ durability: 1 }).durability).toBe(100);
        expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
      });
    });
});
  
// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
describe("succeed()", () => {
    it("should increase the enhancement by one if less than 20", () => {
      expect(enhancer.succeed({ enhancement: 15 }).enhancement).toBe(16);
    });
});

// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
describe("fail()", () => {
    it("should decrease the durability of an item by 5 if the enhancement is less than 15", () => {
      const item = { name: "sword", enhancement: 14, durability: 80 };
      const expected = {
        name: "sword",
        enhancement: 14,
        durability: 75
      };
      const actual = enhancer.fail(item);
      expect(actual).toEqual(expected);
    });
});

// a get() method for use when working on the stretch problem.
describe("get()", () => {
    it("should not modify the name at all if the enhancement level is zero", () => {
      const item = { name: "sword", enhancement: 0, durability: 80 };
      const expected = {
        name: "sword",
        enhancement: 0,
        durability: 80
      };

      const actual = enhancer.get(item);
      expect(actual).toEqual(expected);
    });

    it("if enhancement is greater than zero should add [+n] to the name where n is the ehnhancement level  ", () => {
        const item = { name: "sword", enhancement: 1, durability: 80 };
        const expected = {
          name: "[+1] sword",
          enhancement: 1,
          durability: 80
        };
  
        const actual = enhancer.get(item);
        expect(actual).toEqual(expected);
      });
});