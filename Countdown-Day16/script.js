function countdown(callback) {
    const countdownElement = document.getElementById('countdown');
    
    setTimeout(() => {
      countdownElement.textContent = '10';
      setTimeout(() => {
        countdownElement.textContent = '9';
        setTimeout(() => {
          countdownElement.textContent = '8';
          setTimeout(() => {
            countdownElement.textContent = '7';
            setTimeout(() => {
              countdownElement.textContent = '6';
              setTimeout(() => {
                countdownElement.textContent = '5';
                setTimeout(() => {
                  countdownElement.textContent = '4';
                  setTimeout(() => {
                    countdownElement.textContent = '3';
                    setTimeout(() => {
                      countdownElement.textContent = '2';
                      setTimeout(() => {
                        countdownElement.textContent = '1';
                        setTimeout(() => {
                          countdownElement.textContent = '0';
                          setTimeout(() => {
                            countdownElement.textContent = 'Happy Independence Day';
                            if (callback) callback();
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  countdown();
  