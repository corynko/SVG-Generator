const { Circle, Square, Triangle } = require("./shapes");

describe("Shape", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("circleGenerate", () => {
    it("should generate an SVG with the following attributes", () => {
      const text = "Hello!";
      const color = "red";
      const text_color = "cerulean";
      const circleGenerate = new Circle(text, color, text_color);
      expect(circleGenerate.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text></svg>`
      );
    });
  });

  describe("squareGenerate", () => {
    it("should generate an SVG with the following attributes", () => {
      const text = "Goodbye!";
      const color = "grey";
      const text_color = "orange";
      const squareGenerate = new Square(text, color, text_color);
      expect(squareGenerate.render()).toEqual(
        `<svg width="300px" height="300px" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke-linecap="round" stroke-linejoin="round" /><text x="12" y="13" font-size="4" text-anchor="middle" fill="${text_color}">${text}</text></svg>`
      );
    });
  });

  describe("triGenerate", () => {
    it("should generate an SVG with the following attributes", () => {
      const text = "Shalom!";
      const color = "yellow";
      const text_color = "#222222";
      const triGenerate = new Triangle(text, color, text_color);
      expect(triGenerate.render()).toEqual(
        `<svg width="300px" height="200px" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
    <g id="Shape / Triangle"><path id="Vector"
            d="M4.37891 15.1999C3.46947 16.775 3.01489 17.5634 3.08281 18.2097C3.14206 18.7734 3.43792 19.2851 3.89648 19.6182C4.42204 20.0001 5.3309 20.0001 7.14853 20.0001H16.8515C18.6691 20.0001 19.5778 20.0001 20.1034 19.6182C20.5619 19.2851 20.8579 18.7734 20.9172 18.2097C20.9851 17.5634 20.5307 16.775 19.6212 15.1999L14.7715 6.79986C13.8621 5.22468 13.4071 4.43722 12.8135 4.17291C12.2957 3.94236 11.704 3.94236 11.1862 4.17291C10.5928 4.43711 10.1381 5.22458 9.22946 6.79845L4.37891 15.1999Z"
            stroke-linecap="round" stroke-linejoin="round" /></g><text x="12" y="15" font-size="4" text-anchor="middle" fill="${text_color}">${text}</text>
</svg>`
      );
    });
  });
});
