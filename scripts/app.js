const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add("in-view"), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.22 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const orbs = document.querySelectorAll(".orb");
document.addEventListener("pointermove", e => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  orbs.forEach(orb => {
    const speed = parseFloat(orb.dataset.speed || 0.2);
    const x = (clientX - centerX) * 0.02 * speed;
    const y = (clientY - centerY) * 0.02 * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

document.querySelectorAll(".magnetic").forEach(button => {
  const strength = 18;
  button.addEventListener("pointermove", e => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("pointerleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});

const marquee = document.querySelector(".marquee-track");
if (marquee && marquee.dataset.duplicate !== undefined) {
  marquee.innerHTML += marquee.innerHTML;
}
