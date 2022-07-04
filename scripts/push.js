var element = document.getElementById("imgoffices");

var Visible = function (target) {
    // Все позиции элемента//All postions of element
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна// Get window position
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху//If position of bottom edge is bigger than position of top edge ,the element will be visible on the top side
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу//If position of top edge is lower than position of bottom edge,the element will be visible on the bottom side
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева//If postion of right edge is bigger than postion of left edge, the element will be visible on the left side
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа//If position of left edge is lower than postion of right edge, the element will be visible on the right side
      
      element.className = "animate__animated animate__fadeInRight";
    } else {
      element.className = "";
    };
  };
  
  window.addEventListener('scroll', function() {
    Visible (element);
  });
  
  Visible (element);