<template>
  <nav
    class="nav flex flex-wrap items-center justify-between px-4 py-2 bg-slate-700"
  >
    <div
      class="flex flex-no-shrink items-center mx-5 mr-6 py-3 text-grey-darkest"
    >
      <span class="font-semibold text-xl tracking-tight text-slate-300"
        ><router-link to="/">TerminDev</router-link></span
      >
    </div>
    <input
      v-if="this.$route.name === 'main'"
      class="menu-btn hidden"
      type="checkbox"
      id="menu-btn"
    />
    <label
      v-if="this.$route.name === 'main'"
      class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
      for="menu-btn"
    >
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul
      v-if="this.$route.name === 'main'"
      class="menu mx-5 border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
    >
      <li class="border-t md:border-none">
        <a
          href="#softwares"
          class="block md:inline-block px-4 py-3 no-underline text-slate-300"
          >Softwares</a
        >
      </li>

      <li class="border-t md:border-none">
        <a
          href="#works"
          class="block md:inline-block px-4 py-3 no-underline text-slate-300"
          >Works</a
        >
      </li>

      <li class="border-t md:border-none">
        <router-link to="/contact"
          ><div
            class="block md:inline-block px-4 py-3 no-underline text-slate-300"
          >
            Contact
          </div></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: 0.125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    content: "";
    background: #b1b1b1;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>
