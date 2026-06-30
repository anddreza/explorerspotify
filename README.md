## Passo a passo da master class
1. npm init playwright@latest
2. Rodar os testes: npx playwright test --ui
3. Problema de dependencias faltando:  Host system is missing dependencies to run browsers. ║
║ Missing libraries:                                   ║
║     libgstcodecparsers-1.0.so.0                      ║
║     libflite.so.1                                    ║
║     libflite_usenglish.so.1                          ║
║     libflite_cmu_grapheme_lang.so.1                  ║
║     libflite_cmu_grapheme_lex.so.1                   ║
║     libflite_cmu_indic_lang.so.1                     ║
║     libflite_cmu_indic_lex.so.1                      ║
║     libflite_cmulex.so.1                             ║
║     libflite_cmu_time_awb.so.1                       ║
║     libflite_cmu_us_awb.so.1                         ║
║     libflite_cmu_us_kal16.so.1                       ║
║     libflite_cmu_us_kal.so.1                         ║
║     libflite_cmu_us_rms.so.1                         ║
║     libflite_cmu_us_slt.so.1                         ║
║     libavif.so.13                                    ║
║     libx264.so

Off topic: Typescript (https://www.youtube.com/watch?v=QoqDr4H2G8U): 
- Typescript superset(extende) o JS, tipagem estática 
- O JS trabalha com tipagem dinâmica e o TS com tipagem estática , tipos serão definidos em tempo de compilação, TSC = compilador do typescript. 
- type mismatch, operações inválidas 
- TS voltará a ser um código JS
- 