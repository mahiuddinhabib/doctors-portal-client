module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'appointment': "url('/src/assets/images/appointment.png')",
        'banner': "url('/src/assets/images/bg.png')",
        'footer': "url('/src/assets/images/footer.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
