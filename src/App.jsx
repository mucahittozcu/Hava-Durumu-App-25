import { useState } from 'react'
import './styles.css'

/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]
  // her gün için ayrı bir state tanımlanır. Bu state'ler ilgili günün hava durumu verilerini tutar. // 
  const [monday,setMonday] = useState(weatherData[0])
  const [tuesday,setTuesday] = useState(weatherData[1])
  const [wednesday,setWednesday] = useState(weatherData[2])
  // gösterilen günü izlemek için (currentDay) state'i kullanılır.Başlangıç olarak pazartesi günü kullanılır. //
  const [currentDay, setCurrentDay] = useState(monday)
  
  // Bu fonksiyon mevcut günün id özelliğine göre bir sonraki güne geçişi kontrol eder. //
const handleClick = () => {
  // eğer pazartesi günündeysem id[0] içinde bulunduğum günü salı yapar. //
  if(currentDay.id === 0) {
    setCurrentDay(tuesday)
  } else if (currentDay.id === 1) {
    setCurrentDay(wednesday)
  } else if (currentDay.id === 2){
    setCurrentDay(monday)
  }
}
  return (
    <>
       {/* currentDay.condition değeri "Güneşli" ise, div'in sınıfı app-container" "güneşli-background" olur. */}
      <div className={`app-container ${currentDay.condition.toLowerCase()}-background`}>
      <div className='weather-container'>
        <div className='icon'>
          {currentDay.condition === "Güneşli" ? "☀️": currentDay.condition === "Yağmurlu" ? "🌧️" : "❄️"}
          </div>
        <div className='condition-text'>{currentDay.condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{currentDay.lowTemp}</p>
            <p>En Düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{currentDay.highTemp}</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{currentDay.day}</div>
      </div>
      <button onClick={handleClick}>Test</button>
    </div>
    
    </>
  )
}

// const handleClick = () => {
//   if(weatherData.day === "Pazartesi") {
//     setMonday((pre) => pre === weatherData[0] ? weatherData[weatherData.length - 1] : weatherData[0])
//   } else if (weatherData.day === "Salı") {
//     setTuesday((pre) => pre === weatherData[1] ? weatherData[0] - 1 : weatherData[1])
//   } else if (weatherData.day === "Çarşamba"){
//     setWednesday((pre) => pre === weatherData[2] ? weatherData[1] : weatherData[2])
//   }
// }




// const [weather,setWeather] = useState({
//   monday: {},
//   tuesday: {},
//   wednesday: {},
// })

//   const weatherData = [
//     {
//       id: 0,
//       day: 'Pazartesi',
//       condition: 'Güneşli',
//       lowTemp: 20,
//       highTemp: 38,
//     },
//     {
//       id: 1,
//       day: 'Salı',
//       condition: 'Yağmurlu',
//       lowTemp: 8,
//       highTemp: 15,
//     },
//     {
//       id: 2,
//       day: 'Çarşamba',
//       condition: 'Karlı',
//       lowTemp: -5,
//       highTemp: 3,
//     },
//   ]
// // Tek bir state içinde tüm günlerin verilerini tutabilirsiniz ve her bir günü ayrı ayrı güncelleyebilirsiniz. //
// const mondayState = () => {
//  setWeather({
//   ...weather,
//   monday: weatherData[0]
//  })
// }

// const tuesdayState = () => {
//   setWeathersetWeather({
//     ...weather,
//     tuesday: weatherData[1]
//    })
// }

// const wednesdayState = () =>{
//   setWeathersetWeather({
//     ...weather,
//     wednesday: weatherData[2]
//    })
// }
// const handleClick = () => {
  
// }