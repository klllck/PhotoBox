var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var file = "";
var fileName = "";

$(document).ready(function () {
  $("#hist-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;
    var x = [];

    var arr = dataArr.slice(0, dataArr.length / 100);
    console.log(dataArr);

    for (var i = 0; i < arr.length; i++) {
      x[i] = arr[i];
    }

    var trace = {
      x: x,
      type: "histogram",
    };
    var data = [trace];
    Plotly.newPlot("hist", data);
  });

  $("#negative-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;

    for (var i = 0; i < dataArr.length; i += 4) {
      var r = 255 - dataArr[i];
      var g = 255 - dataArr[i + 1];
      var b = 255 - dataArr[i + 2];

      dataArr[i] = r;
      dataArr[i + 1] = g;
      dataArr[i + 2] = b;
    }

    ctx.putImageData(imageData, imageX, imageY);
  });

  $("#log-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;
    var constant = 100;

    for (var i = 0; i < dataArr.length; i += 4) {
      var r = constant * Math.round(Math.log10(1 + dataArr[i]));
      var g = constant * Math.round(Math.log10(1 + dataArr[i + 1]));
      var b = constant * Math.round(Math.log10(1 + dataArr[i + 2]));

      dataArr[i] = r;
      dataArr[i + 1] = g;
      dataArr[i + 2] = b;
    }

    ctx.putImageData(imageData, imageX, imageY);
  });

  $("#power-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;
    var constant = 20;
    var power = 0.55;

    for (var i = 0; i < dataArr.length; i += 4) {
      var r = constant * Math.round(Math.pow(1 + dataArr[i], power));
      var g = constant * Math.round(Math.pow(1 + dataArr[i + 1], power));
      var b = constant * Math.round(Math.pow(1 + dataArr[i + 2], power));

      dataArr[i] = r;
      dataArr[i + 1] = g;
      dataArr[i + 2] = b;
    }

    ctx.putImageData(imageData, imageX, imageY);
  });

  $("#bw-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;

    for (var i = 0; i < dataArr.length; i += 4) {
      var avg = (dataArr[i] + dataArr[i + 1] + dataArr[i + 2]) / 3;

      dataArr[i] = avg;
      dataArr[i + 1] = avg;
      dataArr[i + 2] = avg;
    }

    ctx.putImageData(imageData, imageX, imageY);
  });

  $("#laplacian-btn").on("click", function (e) {
    var imageX = canvas.width / 2 - img.width / 2;
    var imageY = canvas.height / 2 - img.height / 2;
    var imageData = ctx.getImageData(imageX, imageY, img.width, img.height);
    var dataArr = imageData.data;

    var filter = LenaJS['laplacian'];

    LenaJS.filterImage(canvas, filter, img);
  });

  $("#brightness-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.brightness(10).render();
    });
  });

  $("#brightness-dec").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.brightness(-10).render();
    });
  });

  $("#contrast-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.contrast(10).render();
    });
  });

  $("#contrast-dec").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.contrast(-10).render();
    });
  });

  $("#saturation-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.saturation(10).render();
    });
  });

  $("#saturation-dec").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.saturation(-10).render();
    });
  });

  $("#noise-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.noise(10).render();
    });
  });

  $("#sharpen-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.sharpen(10).render();
    });
  });

  $("#sepia-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.sepia(20).render();
    });
  });

  $("#hue-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.hue(10).render();
    });
  });

  $("#blur-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.stackBlur(5).render();
    });
  });

  $("#gamma-inc").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.gamma(0.1).render();
    });
  });

  $("#vintage-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.vintage().render();
    });
  });

  $("#lomo-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.lomo().render();
    });
  });

  $("#calrity-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.clarity().render();
    });
  });

  $("#sincity-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.sinCity().render();
    });
  });

  $("#crossprocess-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.crossProcess().render();
    });
  });

  $("#pinhole-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.pinhole().render();
    });
  });

  $("#nostalgia-btn").on("click", function (e) {
    Caman("#canvas", img, function () {
      this.nostalgia().render();
    });
  });

  $("#upload-file").on("change", function () {
    file = document.querySelector("#upload-file").files[0];
    upload(file);
  });

  $("#refresh-btn").on("click", function (e) {
    upload(file);
  });

  $("#download-btn").on("click", function (e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");
  });
});

function upload(file) {
  var reader = new FileReader();

  if (file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }

  reader.addEventListener(
    "load",
    function () {
      img = new Image();
      img.src = reader.result;
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        $("#canvas").removeAttr("data-caman-id");
      };
    },
    false
  );
}

function download(canvas, filename) {
  var e;
  var lnk = document.createElement("a");

  lnk.download = filename;

  lnk.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}

