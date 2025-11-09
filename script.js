import { db, getDocs, collection, updateDoc, doc, increment } from "./firebase.js";

const grid = document.getElementById("websites");

async function loadWebsites() {
  const querySnapshot = await getDocs(collection(db, "websites"));
  const websites = [];
  querySnapshot.forEach((docSnap) => {
    websites.push({ id: docSnap.id, ...docSnap.data() });
  });

  // Show only 4 websites
  const four = websites.slice(0, 4);
  four.forEach((site) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${site.title}</h3>
      <iframe src="${site.url}" loading="lazy"></iframe>
      <button class="vote-btn" data-id="${site.id}">Vote</button>
      <p id="count-${site.id}">Votes: ${site.votes}</p>
    `;
    grid.appendChild(div);
  });

  document.querySelectorAll(".vote-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => voteWebsite(e.target.dataset.id))
  );
}

async function voteWebsite(id) {
  const voted = JSON.parse(localStorage.getItem("voted")) || [];
  if (voted.includes(id)) {
    alert("You already voted for this website!");
    return;
  }

  const ref = doc(db, "websites", id);
  await updateDoc(ref, { votes: increment(1) });
  voted.push(id);
  localStorage.setItem("voted", JSON.stringify(voted));

  const countEl = document.getElementById(`count-${id}`);
  const oldCount = parseInt(countEl.textContent.split(":")[1]);
  countEl.textContent = `Votes: ${oldCount + 1}`;
}

loadWebsites();