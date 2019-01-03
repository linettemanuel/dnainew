var manu = document.querySelector('.manu');
var health = document.querySelector('.health');
var smart = document.querySelector('.smart');
var logi = document.querySelector('.logi');
var dnaiLogo = document.querySelectorAll('.text-copy');



var c = document.getElementById('canvi');
var $ = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var txt = function() {
  var _t = " ".split("").join(String.fromCharCode(0x2004));
  $.font = "comic sans";
  $.fillStyle = 'rgba(255, 255, 255, 1)';
  $.fillText(_t, (c.width - $.measureText(_t).width) * 0.5, c.height * 0.5);
  return _t;
}

var draw = function(a, b, t) {
  $.lineWidth = 0.1;
  $.fillStyle = 'rgba(0, 0, 0, 1)';
  $.fillRect(0, 0, w, h);
  for (var i = -60; i < 60; i += 1) {
    $.strokeStyle = 'rgba(90, 176, 99, 0.2)';
    $.beginPath();
    $.moveTo(0, h / 3);
    for (var j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.009 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
var t = 0;

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  $.fillStyle = 'hsla(160, 95%, 55%, 1)';
}, false);

var run = function() {
  window.requestAnimationFrame(run);
  t += 0.3;
  draw(33, 52 * Math.sin(t / 2400), t);
  txt();
};

run();

manu.onmouseover = () => {
  dnaiLogo[0].style.stroke = 'rgb(137, 84, 247)';
  dnaiLogo[2].style.stroke = 'rgb(137, 84, 247)';
  dnaiLogo[3].style.stroke = 'rgb(100, 113, 224)';
  dnaiLogo[4].style.stroke = 'rgb(138, 65, 211)';
  manu.style.color = 'rgb(137, 84, 247)';
  $.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  draw = function(a, b, t) {
    $.lineWidth = 0.1;
    $.fillStyle = 'rgba(0, 0, 0, 1)';
    $.fillRect(0, 0, w, h);
    for (var i = -60; i < 60; i += 1) {
      $.strokeStyle = 'rgba(137, 84, 247, 0.2)';
      $.beginPath();
      $.moveTo(0, h / 3);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(10 * Math.sin(i / 10) +
          j + 0.009 * j * j,
          Math.floor(h / 2 + j / 2 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
      };
      $.stroke();
    }
  }

}

health.onmouseover = () => {
  dnaiLogo[0].style.stroke = '#326938';
  dnaiLogo[2].style.stroke = '#42d684';
  dnaiLogo[3].style.stroke = '#49b04f';
  dnaiLogo[4].style.stroke = '#46a51c';
  health.style.color = '#326938';
  $.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  draw = function(a, b, t) {
    $.lineWidth = 0.1;
    $.fillStyle = 'rgba(0, 0, 0, 1)';
    $.fillRect(0, 0, w, h);
    for (var i = -60; i < 60; i += 1) {
      $.strokeStyle = 'rgba(90, 176, 99, 0.2)';
      $.beginPath();
      $.moveTo(0, h / 3);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(10 * Math.sin(i / 10) +
          j + 0.009 * j * j,
          Math.floor(h / 2 + j / 2 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
      };
      $.stroke();
    }
  }
}

health.onmouseover = () => {
  dnaiLogo[0].style.stroke = '#326938';
  dnaiLogo[2].style.stroke = '#42d684';
  dnaiLogo[3].style.stroke = '#49b04f';
  dnaiLogo[4].style.stroke = '#46a51c';
  health.style.color = '#326938';
  $.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  draw = function(a, b, t) {
    $.lineWidth = 0.1;
    $.fillStyle = 'rgba(0, 0, 0, 1)';
    $.fillRect(0, 0, w, h);
    for (var i = -60; i < 60; i += 1) {
      $.strokeStyle = 'rgba(90, 176, 99, 0.2)';
      $.beginPath();
      $.moveTo(0, h / 3);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(10 * Math.sin(i / 10) +
          j + 0.009 * j * j,
          Math.floor(h / 2 + j / 2 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
      };
      $.stroke();
    }
  }
}

smart.onmouseover = () => {
  dnaiLogo[0].style.stroke = 'rgb(247, 188, 51)';
  dnaiLogo[2].style.stroke = 'rgb(219, 135, 78)';
  dnaiLogo[3].style.stroke = 'rgb(232, 127, 23)';
  dnaiLogo[4].style.stroke = 'rgb(244, 212, 115)';
  smart.style.color = 'rgb(247, 188, 51)';
  $.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  draw = function(a, b, t) {
    $.lineWidth = 0.1;
    $.fillStyle = 'rgba(0, 0, 0, 1)';
    $.fillRect(0, 0, w, h);
    for (var i = -60; i < 60; i += 1) {
      $.strokeStyle = 'rgba(247, 188, 51, 0.2)';
      $.beginPath();
      $.moveTo(0, h / 3);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(10 * Math.sin(i / 10) +
          j + 0.009 * j * j,
          Math.floor(h / 2 + j / 2 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
      };
      $.stroke();
    }
  }
}

logi.onmouseover = () => {
  dnaiLogo[0].style.stroke = 'rgb(55, 129, 150)';
  dnaiLogo[2].style.stroke = 'rgb(66, 172, 221)';
  dnaiLogo[3].style.stroke = 'rgb(37, 94, 117)';
  dnaiLogo[4].style.stroke = 'rgb(87, 172, 214)';
  logi.style.color = 'rgb(66, 172, 221)';
  $.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  draw = function(a, b, t) {
    $.lineWidth = 0.1;
    $.fillStyle = 'rgba(0, 0, 0, 1)';
    $.fillRect(0, 0, w, h);
    for (var i = -60; i < 60; i += 1) {
      $.strokeStyle = 'rgba(66, 172, 221, 0.2)';
      $.beginPath();
      $.moveTo(0, h / 3);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(10 * Math.sin(i / 10) +
          j + 0.009 * j * j,
          Math.floor(h / 2 + j / 2 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
      };
      $.stroke();
    }
  }
}

manu.onmouseout = () => {
  manu.style.color = 'white';
}
health.onmouseout = () => {
  health.style.color = 'white';
}
logi.onmouseout = () => {
  logi.style.color = 'white';
}
smart.onmouseout = () => {
  smart.style.color = 'white';
}
