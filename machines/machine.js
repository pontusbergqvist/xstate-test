import { assign, createMachine } from "xstate";

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7IFMVsQlpQk4TkkPFo-LiEN4PFtTklAia3I4fM4qTTSnTgapasywGDWeyuTy+dLhWK2ByRQAjVBmP3UVXQ9VLTVrI6bQ0k+yhEK2wJI81uY0kY05eL2MthJEFQogfBUOCWV3iOaJuGgBFl0KuTy5ALBMLm2xOK1+LR7YJJNxaE2YynVxvvCrSaqsZsLDXwuwpHyuJLhJ2WnxOXehAdJIujoJaCdT-XhJx+F2vN2DT7fX6QVew5YbtaeNyuUctFzA0UhNM4YkQa8tm1AJDz8QJd1OexH1EZ8PjoDp0FwehID9X5P3XNs7HsK17FSZxvBCWCsnNKCPBg-Z7wQg0yJQ-oynpRkvRZNlqAIpMf0RHx-xNJ0DSNE0zQghBc23dESwCctMkrOcnwGTjPSgb1fV4ihOW5XkvX5QUQ2UfjW2sLUNiLJIkhHLMDkCXMpIuHYrWLTNFP2ZSH1U1D1I9JkeP9dAeCZXTzO-IiUyAkh72xMs3ANAJ8yHItsk8stvJJXyCiAA */
  
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7IFMVsQlpQk4TkkPFo-LiEN4PFtTklAia3I4fM4CoUQPgqHBLDTSkQ5uqlpq1vZ7KFXJ5cgFgmFzbYnFa-Fo9sEkm4tCbMZTXd6Bh9pNVWH6Fhr4XYUj5XElwk7LT4nJXQjGkiQkomgloU2n9eEnH4qdn3hU6F8fjI-hBC7DliW1p43K5E1pAm4DSkTWcYogO1ttQFa35ApXTvY+68fYNKh10Lh6JBWRRfhPi6AEfYrfZUs5vCFd1lzVuPDu+w9geBrvieohnvSjK1MyYBgne1CPgG06Ij4c4mk6BpGiaZobggqbluiOTxMG+yZEi4H9GUUGqDBLJstQnLcryMH8oKwpikhcLPlqGzNkkSQJqEIS2kuuEXDsVrGsRATBmEFFZqeAw0Uy9Hshy6A8EyDEUFxU48WsJLNtkfg7O4BoBOaknGTJpHyb2LpAA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7IFMVsQlpQk4TkkPFo-LiEN4PFtTklAia3I4fM4qTTSnTgapasywGDWeyOegeEy2dQ2ABRHhgfDynyq6HqpaatbJEhJPaGvZuA0Bc32fYkdE5eJ5-aZewFQogfBUOCWV3iOYJuGgBF50KuTy5ALBMLm2xOK1+LR7YJJNxaE2YymV+vvCrSaqsRsLDXwuwpHyuJLhJ2WnxObehPtJVPDoJaMcT-XhJx+F2vN2DT7fX6QZew5ZrtaeNyuYdaQIswPAdM3NS8tm1AJ9z8QJt1OcsZwfAYPjoDp0FwehID9X531XFs7HsK17FSZxvBCKCsjA8cIOLaDYINYj71ER96UZL0WRDChcMTL9ER8X8TSdA0jRNM0YkQcdN0LexizzMIkSY-oylYz0oG9X1OM5bleS9flBWFMVuObawtQ2VMkiSIdQhCW1ALEi4ditY0iwCOTMgUxDmIGFSmQ4-1A2DCojM-fC1hJVNsj8HZ3GzSJxIQRyIpckt5LvTylPdBlVPUv1qBIFlYGUEFaB8YKkwcewSA2bZ3GNWLzWOSr0SzDxjQ8QIjl8Cs8iAA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7IFMVsQlpQk4TkkPFo-LiEN4PFtTklAia3I4fM4CoUQPgqHBLDTSkQ5uqlpq1vZ7KFXJ5cgFgmFzbYnFa-Fo9sEkm4tCbMZTXd6Bh9pNVWH6Fhr4XYUj5XElwk7LT4nJXQjGkiQkomgloU2n9eEnH4qdn3hU6F8fjI-hBC7DliW1p43K5E1pAm4DSkTWcYogO1ttQFa35ApXTvY+68fYNKh10Lh6JBWRRfhPi6AEfYrfZUs5vCFd1lzVuPDu+w9geBrvieohnvSjK1MyYBgne1CPgG06Ij4c4mk6BpGiaZobgggSBPYJDojk8TBvsmRIuB-RlFBqgwSybLUJy3K8jB-KCsKYpIXCz5ahszZJEkCahCEtpLrhFw7FaxqkQEwZhFRWangMdFMox7IcugPBMkxFA8VOfFrCSJCEYa3jGgaATmtJzbZCG8kUSSvbKRBqnAvRUCwfBekkCysDKCCtA+AZga2AeLjeCGFkUj2kR4W4tp2XJ5GKS5BRAA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7IFMVsQlpQk4TkkPFo-LiEN4PFtTklAia3I4fM4CoUQPgqHBLDTSkQ5uqlpq1vZ7KFXJ5cgFgmFzbYnFa-Fo9sEkm4tCbMZTXd6Bh9pNVWH6Fhr4XYUj5XElwk7LT4nJXQjGkiQkomgloU2n9eEnH4qdn3hU6F8fjI-hBC7DliW1p43K5E1pAm4DSkTWcYogO1ttQFa35ApXTvY+68fYNKh10Lh6JBWRRfhPi6AEfYrfZUs5vCFd1lzVuPDu+w9geBrvieohnvSjK1MyYBgne1CPgG06Ij4c4mk6BpGiaZobgggToiQxxxj4-huIERyppmLwQQMUGqDBLJstQnLcryMH8oKwpikhcLPlqGzNkkSQJqEIS2kuuEXDsVrGjk8TBvsmRIuB-RlPRTJMeyHLoDwTLMRQvFTqAbJGIgy4JKRJFkRRJL6lEN4dMopb+ERdYEcEy49pEIAAEYUMobKoIg+z2CitbZDZlE+FE9S4FA2DOWsaJuba+7uAaARRLyEDKNgiAHFoUTYGA8WJeZThRAihwJCuHkZd55oWeF1l+ORlH6i6eRAA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBOAIwAOEgDYATAHY3vrwFYAZi1HHwAaEABPRA9HexJAoMc3Hy97ZwAWRI8AXxyIkRwCYnIqGgYmFnx2MAAnWopakiN6FQAzRtRhDCLxUqkK2Wr5fD4lc01dfUsTWDM1fEsbBAcMtwTfEPt7X2TnNwjolfsPEnt-fy8Mk+DM-2dHPIKesRLJcvRasEGISDYAYS+Km+hAA7tMkCBZvMLJDlrZnM5-CQPIFHNdnPZAuc3C5DogMh54msdlp0ulLts3E8QIVXqRAWAVKxaGDaMoyiQAMrYCiglkdWqoWgEIwAV2UbAAYp0RfhxcpaDh0NVIBDjKYJks7Nd4lpURk0hlHB4MlpnFp-PiEEFTkSMmb-B5nRbHvlaS9igygapqqywKD2ZyeXyBbLRRK2FyxQAjVBmIPUdVQzULbUrImnS7ZLxk9EeNyXa1rLQo7H3Y1eTJktwZGl0r0kRnMv1sjnUbnoHgs9sUNgAUR4YHwiscyehWrhdh8JEcgSrmSrDsymWt-l8KPsWWcsQ8ly8gUCeXd+CocEsDfEM1TsNA8O2GQ2bi2O1xbn21tsLlLGQuAWuXheC4QTUu6l5vGU0iVKw15zJOd7Tg8s5aFoXiZtsLgFtauYkJigSxPYAT2GSh51mBnp9O8dCfN8Mi-BAsEwosU7HFoj6BA6TpYvauaONaiSBCQhJ4ViB4Fvs9YURBAxtOguD0JAQY-Ix8HWHYhbxOiqFocRoT+KEn5AQkaHJP4WjzoSqGgc8oiNs2vpQP6ga9ipaYsbY-iGiQ+ocUaJpms4-EZK4mRZIEDzhfsPiSbZfT2SybbBry-J+oKwoRsorm3mpKzXMi3jlmhxqOJ5HjFs+ZbnJkoTVjsZE2b0JTxa2AaJhQnbdn6LmQhObkISsjjJLhulaL4iIlb+VpRASgTrBxWSmqi5xAQeMWNd6TIOU5bUkGysDKMCtCOFlzH9QijgkGhwQeJiO5XIWgTWrWXgoiVh6oZiVxunkQA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBOAIwAOEgDYATAHY3vrwFYAZi1HHwAaEABPRA9HexJAoMc3Hy97ZwAWRI8AXxyIkRwCYnIqGgYmFnx2MAAnWopakiN6FQAzRtRhDCLxUqkK2Wr5fD4lc01dfUsTWDM1fEsbBAcMtwTfEPt7X2TnNwjolfsPEnt-fy8Mk+DM-2dHPIKesRLJcvRasEGISDYAYS+Km+hAA7tMkCBZvMLJDlrZnM5-CQPIFHNdnPZAuc3C5DogMh54msdlp0ulLts3E8QIVXqRAWAVKxaGDaMoyiQAMrYCiglkdWqoWgEIwAV2UbAAYp0RfhxcpaDh0NVIBDjKYJks7G5AhkSGTrh4Mo5kvd-Acooggl4DYStBlnFo3Bl-GsaXTigygapqqywKD2ZyeXyBbLRRK2FyxQAjVBmIPUdVQzULbUrQm2l3XLyhHEO-EINb69JeDzeLQeEJu6k0-BUOCWT3iGap2GgeHbfWBTZxHa4tz7Qu2FxaEiuy5u+xeXNInsel5e-rlGRVKCtuZauF2LwPEiOLRaMsnbYuDyWo5eMeYwKxaf+exkwJ6heiJfvOifb6ryAbmGLbdjgdBIMldIlb3sDIr0cQtEkCccPBvLEvFvQda2eN8+g-Wg2nQXB6EgIMfj-LcOx1B99wyI9jxCAJQmHXMEjLM0tECK4qx8V9ehKRlmT9NkOWoEi00A2xB1OQ0ThNM0kQvRA4JIB84iddJnUcDwLS4+kSF430oH9QNBIobleX5P1BWFCNlGE9trB1YIQLdLZXWfPErSLF0zmcMsKyrRw3SCLSl10lkBODdAeBZIybIAsiVg0-VYjWK9K0fG5C1AxwDScHYrweNEUjyPIgA */

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBOAIwAOEgDYATAHY3vrwFYAZi1HHwAaEABPRA9HexJAoMc3Hy97ZwAWRI8AXxyIkRwCYnIqGgYmFnx2MAAnWopakiN6FQAzRtRhDCLxUqkK2Wr5fD4lc01dfUsTWDM1fEsbBAcMtwTfEPt7X2TnNwjolfsPEnt-fy8Mk+DM-2dHPIKesRLJcvRasEGISDYAYS+Km+hAA7tMkCBZvMLJDlrZnM5-CQPIFHNdnPZAuc3C5DogMh54msdlp0ulLts3E8QIVXqRAWAVKxaGDaMoyiQAMrYCiglkdWqoWgEIwAV2UbAAYp0RfhxcpaDh0NVIBDjKYJks7G5AhkSGTrh4Mo5kvd-Acooggl4DYStBlnFo3Bl-GsaXTigygapqqywKD2ZyeXyBbLRRK2FyxQAjVBmIPUdVQzULbUrQm2l3XLyhHEO-EINb69JeDzeLQeEJu6n5WkvL0kRnMv1sjnUbnoHgs9sUDjqIQKQTdUSN5u+qD+wO9zvdv29kZjZnqfTJ6FauF2Y225IZALbexZCleQsXLQkPdkzyZHw7Lx5Ov4KhwSye8QzVOw0Dw7b6wKbOIdlxNx9kLWwXHPV1LkSQI0TdbYPQbPp3mkSpWA-OYN2-OwvAeEhHC0LQyxObYXA8S0ji8c9MUCWJ7H3MlYIyRDR2Qso6E+b4ZF+CAMJhRZN2OB0EgyV0iVow8qMcQsYIvDwaKxLxaJA2tnlYt52NoNp0FwehICDH4+Kw6wdX8eJ0SI4iQgCUIwNzBIyzNLRAiuKsfBY3oSnHFk2zKIy00E2wQNOQ0ThNM0kQoxBZLMuInXSZ1HA8C0PPpJsfR8gNEwobleX5P1BWFCNlH8r8TJWXVzz1N0tldWC8StIsXTOZwywrKtHDdIJUrHDLWyymcuS7Hs-MhdcAuwlZkv1WI1ioyt7DJVFC1ExwDScO8tAeNEUh6vpvP66dOTZWBlGBWhHFKgTJtscss3IpLnH-Y1ks8QtcRC4IHQdAIHlyB8gA */

/** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIC2BDAxgBYCWAdmAHRoayYA2quEZUAxBuRWQG6oDWlaljxEyg9KloMmLBD1T5cAF2KpSAbQAMAXS3bEoAA6TiKtQZAAPRACYALJooBWOwHYAjADYvATlf3XVwAaEABPRHdXJwoADnc3G3cfTQBmT08-GwBfLJChHAISTiEpRmZSNjAAJyrUKopDOmUAMzrsKgkC0WKJUpkKuVJeRTMNHT0LY1hTVVILawR7RxcPbwz-N2CwxDjnHLzOkSLxGkxcKrB6MshWAGEL5UvyAHcJpBApmfN3hZsUmIoKQCMU0SRigU8URC4QQnk0dmcmh86QcMU8KR88X2IHyRzEHVO50u0ggNwAImA6GAlGA3kYTKN5jsfBR0n9kkifP8Yv9oYh0gD3E5-JE4UD3EjsbjCvj7mBlCxMC9MEoJBQAMqEVDPRWtKrYTBkQwAVyUrAAYm1DaQTUpMERcBVIHSPgzZkyEHZIqzXBjAnY7J47DyhXyEE5vKybD4A-9NL6MXYpYcZZw5QqKkqwM8VWrNdrdVajabWOrjQAjbCmF2fRk-fl-ZzRpzRuKeJzuXnbWHoih2GOeex2GzpTROJzJjBdY4UdMqTPK1UYDW4biKpeodhqSjyAQE4SpyhzxWLvOr9cSQbDBVqPQ1t3fUALJwxaL-OxAwNo7zxMMpOzRC447+Ji6TpK4Sa5DiKbdEeDzzlAWY5huK5rpmG6sNUtT1I0LRtPu06yvBJ7Zrmy7que6GXvIIyzHeOiTA+cz1ggXI2KyXjoq4PjIjGSRhpCLIgsJAEpO44JOD4k4HrBFAUlSCFkZuHA7kM-AnDJM7ydSF4YFeCg3mMugMe8tbuixAC0QosjYEGaJor4QdxcIxH+-yIoOsbcZEUQ5FBpDoHAFjSrBjHTHWT6IBZNg2I4rgxMiKQpMKbjIg5YYWZ4FD2TlIIpPGAEuDE0mET0pwkiwYVfMxkWejYYYxhQkQgqkQppOsE5QSFM4lGcFxXEwkBVRFViIMKAljtlSIog56KYpBBxTniZWSJgzS4MQVIQLmA0QMN5m1ZCYb9ux7jRrGIIJjGJXLXB8qKaeGD7Y+o0IGkLKQn6EGBsGYlOMdEFNedH6XUl11dTBM7HgupEofmOqZnqBrFkoz01a9w7uH2fz9siPkpFsMLpCkFA8YGQ4jnC443Yes7ETDyFnmhiEbmjHq+iyH4+OOgboi5-3dkGjicmkAbgq4kKdYtmlEfdJGM+Rq6XOtm1DaZTEeu4Eok-l8WRLZMQ2BJAnxX2MQfqkQIRjEcQ07J2mKaz6vhQdr1Wf4FDxYlyVOWlrmCw4fYDhTo7U35QA */
createMachine(
    {
      id: "Todo machine",
      initial: "Todos loading",
      context: {
        todos: [],
        error: "",
        newTodoInput: "",
      },
      states: {
        "Todos loading": {
          invoke: {
            src: "loadTodos",
            onDone: [
              {
                target: "Todos are loaded",
                actions: "assignTodosToContext",
              },
            ],
            onError: [
              {
                target: "Todos failed to load",
                actions: "assignErrorToContext",
              },
            ],
          },
        },

        "Todos are loaded": {
          on: {
            "Create new": "Creating new todo",
            Delete: "Deleting todo"
          },
        },

        "Todos failed to load": {},
 
        "Creating new todo": {
          states: {
            "Showing form input": {
              on: {
                "Form input changed": {
                  target: "Showing form input",
                  internal: true,
                  actions: "assignTodoToContext",
                },

                Submit: "Saving todo"
              },
            },

            "Saving todo": {
              invoke: {
                src: "saveTodo",

                onError: "Save failed",

                onDone: "#Todo machine.Todos loading",
              },
            },

            "Save failed": {
              actions: "assignErrorToContext"
            }
          },

          initial: "Showing form input",
        },

        "Deleting todo": {
          invoke: {
            src: "deleteTodo",
            onDone: "Todos loading"
          }
        }
      },
    },
    {
      actions: {
        assignTodosToContext: assign((ctx, event) => {
          return {
            todos: event.data,
          };
        }),
        assignErrorToContext: assign((ctx, event) => {
          return {
            error: event.data.message,
          };
        }),
        assignTodoToContext: assign((ctx, event) => {
          return {
            newTodoInput: event.value,
          };
        }),
      },
    }
  );
