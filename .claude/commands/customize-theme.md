# Customize Theme

Help the user customize their application's theme using daisyUI's theme system.

## Process

1. Help them through the theme customization process:
   - Guide them to https://daisyui.com/theme-generator/
   - Have them create both light and dark theme variants
   - Ask them to provide the generated CSS theme definitions
2. Integrate their custom themes into `src/index.css`.

Note — there should be exactly two themes, one of them default and the other prefersdark. If the user provides a theme with default: false and prefersdark: false, infer which one it should be
