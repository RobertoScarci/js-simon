const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    const myFunction = setInterval(function() {

    const now = new Date().getTime();
    const timeleft = countDownDate - now;
        

    // Calcolo i diversi minuti ore e secondi
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
   
    }, 1000);