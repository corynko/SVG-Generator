class Shape {
  constructor(text, color, text_color) {
    this.text = text;
    this.color = color;
    this.text_color = text_color;
  }
}

class Circle extends Shape {
  constructor(text, color, text_color) {
    super(text, color, text_color);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(text, color, text_color) {
    super(text, color, text_color);
  }

  render() {
    return `<svg width="300px" height="300px" viewBox="0 0 24 24" fill="${this.color}" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke-linecap="round" stroke-linejoin="round" /><text x="12" y="13" font-size="4" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, color, text_color) {
    super(text, color, text_color);
  }

  render() {
    return `<svg width="300px" height="200px" viewBox="0 0 24 24" fill="${this.color}" xmlns="http://www.w3.org/2000/svg">
    <g id="Shape / Triangle"><path id="Vector"
            d="M4.37891 15.1999C3.46947 16.775 3.01489 17.5634 3.08281 18.2097C3.14206 18.7734 3.43792 19.2851 3.89648 19.6182C4.42204 20.0001 5.3309 20.0001 7.14853 20.0001H16.8515C18.6691 20.0001 19.5778 20.0001 20.1034 19.6182C20.5619 19.2851 20.8579 18.7734 20.9172 18.2097C20.9851 17.5634 20.5307 16.775 19.6212 15.1999L14.7715 6.79986C13.8621 5.22468 13.4071 4.43722 12.8135 4.17291C12.2957 3.94236 11.704 3.94236 11.1862 4.17291C10.5928 4.43711 10.1381 5.22458 9.22946 6.79845L4.37891 15.1999Z"
            stroke-linecap="round" stroke-linejoin="round" /></g><text x="12" y="15" font-size="4" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
</svg>`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
