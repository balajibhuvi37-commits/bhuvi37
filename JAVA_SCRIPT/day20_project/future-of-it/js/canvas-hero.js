/**
 * Canvas Hero Visualizer: Interactive Digital Neural & Cloud Network
 * Represents futuristic digital technology environment with AI, software development,
 * cloud nodes, and human-AI synaptic data streams.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;

  // Configuration
  const NODE_COUNT_DESKTOP = 65;
  const NODE_COUNT_MOBILE = 30;
  const MAX_DISTANCE = 140;
  const CURSOR_DISTANCE = 160;

  let nodes = [];
  let packets = [];
  let mouse = { x: null, y: null, active: false };

  function resize() {
    width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.parentElement.offsetHeight || window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    initNodes();
  }

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2.2 + 1.2;
      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.isSpecial = Math.random() > 0.85; // Golden or Teal hub nodes
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off borders
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity (gentle magnetic pull)
      if (mouse.active && mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_DISTANCE) {
          const force = (CURSOR_DISTANCE - dist) / CURSOR_DISTANCE;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      if (this.isSpecial) {
        ctx.fillStyle = `rgba(245, 158, 11, ${this.baseAlpha + 0.2})`;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = `rgba(6, 182, 212, ${this.baseAlpha})`;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowBlur = 6;
      }
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  class DataPacket {
    constructor(startNode, endNode) {
      this.start = startNode;
      this.end = endNode;
      this.progress = 0;
      this.speed = Math.random() * 0.015 + 0.008;
      this.alive = true;
    }

    update() {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.alive = false;
      }
    }

    draw() {
      const curX = this.start.x + (this.end.x - this.start.x) * this.progress;
      const curY = this.start.y + (this.end.y - this.start.y) * this.progress;

      ctx.beginPath();
      ctx.arc(curX, curY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initNodes() {
    nodes = [];
    packets = [];
    const count = window.innerWidth < 768 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
    for (let i = 0; i < count; i++) {
      nodes.push(new Node());
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw();
    }

    // Connect nodes with synaptic laser threads
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Occasionally spawn a data packet between close nodes
          if (Math.random() < 0.0008 && packets.length < 15) {
            packets.push(new DataPacket(nodes[i], nodes[j]));
          }
        }
      }
    }

    // Connect to mouse if active
    if (mouse.active && mouse.x !== null) {
      for (let i = 0; i < nodes.length; i++) {
        const dx = mouse.x - nodes[i].x;
        const dy = mouse.y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_DISTANCE) {
          const alpha = (1 - dist / CURSOR_DISTANCE) * 0.5;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(nodes[i].x, nodes[i].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    // Update & draw data packets
    for (let p = packets.length - 1; p >= 0; p--) {
      packets[p].update();
      if (!packets[p].alive) {
        packets.splice(p, 1);
      } else {
        packets[p].draw();
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Mouse Listeners
  window.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    } else {
      mouse.active = false;
    }
  });

  window.addEventListener('mouseleave', function () {
    mouse.active = false;
  });

  // Window Resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  // Init
  resize();
  render();
})();
