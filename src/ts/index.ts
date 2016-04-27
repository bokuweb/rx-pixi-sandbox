/// <reference path="../../typings/browser.d.ts" />

"use strict";

import * as PIXI from 'pixi.js';
import { Observable } from 'rxjs/Observable';
import { greet } from './greet';

function hi(word:string = "TypeScript!!!!!!!!!!!!!!"):void {
  greet(word);
}
hi();

//const renderer:PIXI.WebGLRenderer | PIXI.CanvasRenderer = PIXI.autoDetectRenderer(800, 600, { transparent: true });
// const stage = new PIXI.Stage();
const stage = new PIXI.Container();
const renderer = PIXI.autoDetectRenderer(800, 600, { transparent: true });
document.body.appendChild(renderer.view);

const texture = PIXI.Texture.fromImage('bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

animate();
function animate() {
    requestAnimationFrame(animate);
    bunny.rotation += 0.1;
    renderer.render(stage);
}
