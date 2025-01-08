const todayIs = document.querySelector('.wrapper p')
const interestingFact = document.querySelector('.interestingFact')

const day = new Date()
todayIs.textContent = 'Dzisiaj jest ' + day.toLocaleString('pl', {weekday: 'long'})

const interestingFacts = ['Stolicą Polski jest Warszawa.', 'Największym Zoo w Polsce jest to w Gdańsku Oliwie.', 'Apple jest najlepiej sprzedającym się telefonem na świecie.', 'Najdłuższa rzeka w Polsce to Wisła.', 'Przez Paryż przepływa rzeka Sekwana.', 'Przez Londyn przepływa rzeka Tamiza.', 'Kraków liczy prawie 750 tysięcy stałych mieszkańców.', 'Najbardziej popularną marką telefonów jest Samsung.', 'Największą marką telefonów w Chinach jest Xiaomi.']

interestingFact.textContent = interestingFacts[Math.floor(Math.random()*interestingFacts.length)]