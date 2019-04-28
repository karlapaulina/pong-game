import { SVG_NS } from '../settings';

export default class Score {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    
    }
    render(svg, score) {

        let text = document.createElementNS(SVG_NS, 'text') 
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', 'pink');
        text.textContent = score;
        svg.appendChild(text);
    }
  }

  /*
-max score
-player x won alert
-Create balls with special effects (different speeds, sizes, effects, etc.)
-20 lines of code
  */