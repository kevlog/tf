    // Flipdown timer
    const deadline = new Date("2025-07-04T16:59:00Z").getTime() / 1000;
    new FlipDown(deadline).start();

    // Modal toggle
    function toggleModal() {
      const modal = document.getElementById("modal");
      modal.classList.toggle("hidden");
    }

    // Salin
    function salinRekening() {
      const rekening = document.getElementById("rekening").textContent;
      navigator.clipboard.writeText(rekening).then(() => {
        document.getElementById("toast").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("toast").classList.add("hidden");
        }, 2000);
      });
    }

    // Particle background
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: "#0ea5e9" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 4 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0ea5e9",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          resize: true
        }
      },
      retina_detect: true
    });