function openMenu(menuSelector) {
  const menu = document.querySelector(menuSelector);

  menu.classList.toggle("show");
}

function changeIcon(triggerIconUpSelector, triggerIconDownSelector) {
  const triggerIconUp = document.querySelector(triggerIconUpSelector),
    triggerIconDown = document.querySelector(triggerIconDownSelector);

  triggerIconUp.classList.toggle("show");
  triggerIconDown.classList.toggle("hide");
}

function showMenu(menuSelector, triggerSelector, triggerIconUpSelector, triggerIconDownSelector) {
  const menuTrigger = document.querySelector(triggerSelector);
  const menu = document.querySelector(menuSelector);

  menuTrigger.addEventListener("click", () => {
    openMenu(menuSelector);
    changeIcon(triggerIconUpSelector, triggerIconDownSelector);
  });

  // window.addEventListener("click", (e) => {
  //   if (!e.target.matches(menuTrigger)) {
  //     if (menu.classList.contains('show')) {
  //       menu.classList.remove("show");
  //     }
  //   }
  // })

}

export default showMenu;