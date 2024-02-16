export default function navLists(listObj) {
  const navBarLists = document.querySelector(".navLists");

  function updateNavLists() {
    while (navBarLists.firstChild) {
      navBarLists.removeChild(navBarLists.lastChild);
    }
    for (const [key, value] of Object.entries(listObj.getLists())) {
      const button = document.createElement("button");
      button.setAttribute("class", key);
      button.textContent = key;

      navBarLists.append(button);
    }
  }

  return { updateNavLists };
}
