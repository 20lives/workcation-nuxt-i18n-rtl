module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: theme => ({
      lineHeight: theme('lineHeight.snug'),
      borderColor: 'transparent',
      borderRadius: theme('borderRadius.lg'),
      backgroundColor: theme('colors.gray.700'),
      focusBorderColor: 'transparent',
      focusShadow: 'none',
      checkboxSize: '1.5em',
      radioSize: '1.5em',
      checkedColor: theme('colors.indigo.500'),
      selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-rtl')
  ]
}
