document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "main").style.display = "none";
        document.querySelector(
          "#loader").style.display = "flex";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "main").style.display = "flex";
    }
};