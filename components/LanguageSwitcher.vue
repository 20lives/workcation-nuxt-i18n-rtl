<template>
  <span class="relative z-0 inline-flex shadow-sm">
    <nuxt-link
      :to="switchLocalePath('he')"
      type="button"
      :class="[$i18n.locale == 'he' ? 'bg-gray-300' : 'bg-white']"
      class="relative inline-flex items-center px-2 py-0 rounded-l-md border border-gray-300 text-sm leading-5 font-bold text-gray-800 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="20"
        class="hidden md:block"
      >
        <defs />
        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
        <g fill="#0052b4">
          <path
            d="M352.393 200.348H288.13L256 144.696l-32.129 55.652h-64.264L191.741 256l-32.134 55.652h64.264L256 367.304l32.13-55.652h64.263L320.259 256l32.134-55.652zM295.475 256l-19.736 34.188h-39.475L216.525 256l19.738-34.188h39.475L295.475 256zM256 187.623l7.346 12.724h-14.69L256 187.623zm-59.214 34.189h14.692l-7.346 12.724-7.346-12.724zm0 68.376l7.347-12.724 7.346 12.724h-14.693zM256 324.376l-7.345-12.724h14.691L256 324.376zm59.214-34.188h-14.692l7.347-12.724 7.345 12.724zm-14.692-68.376h14.692l-7.346 12.724-7.346-12.724zM415.357 55.652H96.643a257.293 257.293 0 00-59.069 66.783h436.852a257.346 257.346 0 00-59.069-66.783zM96.643 456.348h318.713a257.293 257.293 0 0059.069-66.783H37.574a257.346 257.346 0 0059.069 66.783z"
          />
        </g>
      </svg>
      <span class="md:pl-2">
        HE
      </span>
    </nuxt-link>
    <nuxt-link
      :to="switchLocalePath('en')"
      type="button"
      :class="[$i18n.locale == 'en' ? 'bg-gray-300' : 'bg-white']"
      class="-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 text-sm leading-5 font-bold text-gray-800 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="20"
        class="hidden md:block"
      >
        <defs />
        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
        <g fill="#0052b4">
          <path
            d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z"
          />
        </g>
        <g fill="#d80027">
          <path
            d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"
          />
          <path
            d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z"
          />
        </g>
      </svg>
      <span class="md:pl-2">
        EN
      </span>
    </nuxt-link>
  </span>
</template>

<style></style>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
