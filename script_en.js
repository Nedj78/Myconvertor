function convert1() {
      const hours1 = Number(document.getElementById("hours1").value);
      const minutes1 = Number(document.getElementById("minutes1").value);
     
      if (hours1 === 0 && minutes1 === 0) {
        alert("Please enter at least one number.");
        return;
      }
    
      const totalMinutes = hours1 * 60 + minutes1;
      document.getElementById("result1").textContent = `${hours1} hour(s) and ${minutes1} minute(s) equal(s) ${totalMinutes} minute(s).`;
    
      document.getElementById("hours1").value = '';
      document.getElementById("minutes1").value = '';
    }

    function convert2() {
      const minutes2 = Number(document.getElementById("minutes2").value);
      const hours2 = Math.floor(minutes2 / 60);

      if (minutes2 === 0) {
        alert("Please enter at least one number.");
        return;
      }
      
      const remainingMinutes = minutes2 % 60;
      document.getElementById("result2").textContent = `${minutes2} minute(s) equal(s) ${hours2} hour(s) and ${remainingMinutes} minute(s).`;

      document.getElementById("minutes2").value = '';
    }

    function convert3() {
      const hours3 = Number(document.getElementById("hours3").value);
      const totalDays = Math.floor(hours3 / 24);

      if (hours3 === 0) {
        alert("Please enter at least one number.");
        return;
      }
      
      const remainingHours = hours3 % 24;
      document.getElementById("result3").textContent = `${hours3} hour(s) equal(s) ${totalDays} day(s) and ${remainingHours} hour(s).`;

      document.getElementById("hours3").value = '';
    }

    function convert3Workdays() {
      const hours3Bis = Number(document.getElementById("hours3-bis").value);
  
      if (hours3Bis === 0) {
          alert("Please enter at least one number.");
          return;
      }
  
      const hoursPerDay = 7; 
      const totalDays = Math.floor(hours3Bis / hoursPerDay);
      const remainingHours = hours3Bis % hoursPerDay;
  
      document.getElementById("result3WorkingDays").textContent = `${hours3Bis} hour(s) equal(s) ${totalDays} business day(s) and ${remainingHours} hour(s).`;
  
      document.getElementById("hours3-bis").value = '';
  }
    
    function convert4() {
      const days4 = Number(document.getElementById("days4").value);
      
      if (days4 === 0) {
        alert("Please enter at least one number.");
        return;
      }
      
      const totalHours = days4 * 24;
      document.getElementById("result4").textContent = `${days4} day(s) equal(s) ${totalHours} hour(s).`;

      document.getElementById("days4").value = '';
    }
    
    function convert4WorkDays() {
      const days4bis = Number(document.getElementById("days4-bis").value);
      
      if (days4bis === 0) {
        alert("Please enter at least one number.");
        return;
      }
    
      const hoursPerWorkday = 7;
      const totalHours = days4bis * hoursPerWorkday;
      
      document.getElementById("result4WorkDays").textContent = `${days4bis} day(s) equal(s) ${totalHours} hour(s).`;
    
      document.getElementById("days4-bis").value = '';
    }

    function convert5() {
      const hours5 = Number(document.getElementById("hours5").value);
      
      if (hours5 === 0) {
        alert("Please enter at least one number.");
        return;
      }
      
      const totalMonths = hours5 / 730;
      document.getElementById("result5").textContent = `${hours5} hour(s) equal(s) ${totalMonths} month(s).`;

      document.getElementById("hours5").value = '';
    }

    function convert6() {
      const hours6 = Number(document.getElementById("hours6").value);
      
      if (hours6 === 0) {
        alert("Please enter at least one number.");
        return;
      }
      
      const totalMonths2 = hours6 / 176;
      document.getElementById("result6").textContent = `${hours6} hour(s) equal(s) ${totalMonths2} month(s).`;

      document.getElementById("hours6").value = '';
    }

// ------------------------------------------------------------------

      let display = document.querySelector('.display');
      let scratchPad = document.querySelector('.scratch-pad');
      let scratchPadText = [];
      let lastResult = null;

      function appendToDisplay(value) {
        if (lastResult !== null) {
          display.innerHTML = '';
          lastResult = null;
        }
        display.innerHTML += value;
        updateScratchPad();
      }

      function clearDisplay() {
        display.innerHTML = '';
        scratchPadText = [];
        updateScratchPad();
      }

      function backspace() {
        display.innerHTML = display.innerHTML.slice(0, -1);
        updateScratchPad();
      }

      function percentage() {
        let expression = display.innerHTML;
        let result = eval(expression) / 100;
        display.innerHTML = result;
        scratchPadText.push(expression + '% = ' + result); 
        updateScratchPad();
      }

      function calculate() {
        let expression = display.innerHTML;
        let result = eval(expression);
        display.innerHTML = result;
        if (lastResult === null) {
          scratchPadText.push(expression + ' = ' + result);
        } else {
          scratchPadText.push(lastResult + ' ' + expression + ' = ' + result);
        }
        lastResult = result;
        updateScratchPad();
      }

      function updateScratchPad() {
        let scratchPadHTML = '<h2>Draft board</h2><br>';
        scratchPadText.forEach(function(item) {
          scratchPadHTML += '<br>' + '<p>' + item + '</p>' + '<br>';
        });
        scratchPad.innerHTML = scratchPadHTML;
      }

     const inputs = document.querySelectorAll("#minute1, #minute2");
     const btn = document.getElementById('convertBtn');
    
     inputs.forEach(input => {
      input.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          convert1();
        }
      });
    });
 


