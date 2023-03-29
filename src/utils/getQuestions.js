import image0 from '../assets/images/tests/0.png'
import image1 from '../assets/images/tests/1.png'
import image2 from '../assets/images/tests/2.png'
import image3 from '../assets/images/tests/3.png'
import image4 from '../assets/images/tests/4.png'
import image5 from '../assets/images/tests/5.png'
import image6 from '../assets/images/tests/6.png'
import image7 from '../assets/images/tests/7.png'
import image8 from '../assets/images/tests/8.png'
import image9 from '../assets/images/tests/9.png'
import image10 from '../assets/images/tests/10.png'
import image11 from '../assets/images/tests/11.png'
import image12 from '../assets/images/tests/12.png'
import image13 from '../assets/images/tests/13.png'
import image14 from '../assets/images/tests/14.png'
import image15 from '../assets/images/tests/15.png'
import image16 from '../assets/images/tests/16.png'
import image17 from '../assets/images/tests/17.png'

const data = []

// ComplexForm
saveComplexForm(13, (Math.random() * 359).toFixed(0), (Math.random() * 59).toFixed(0), (Math.random() * 59).toFixed(0))
saveComplexForm(14, (Math.random() * 359).toFixed(0), (Math.random() * 59).toFixed(0), (Math.random() * 59).toFixed(0))
saveComplexForm(15, (Math.random() * 359).toFixed(0), (Math.random() * 59).toFixed(0), (Math.random() * 59).toFixed(0))

// IncomplexForm
saveIncomplexForm(16, (Math.random() * 359).toFixed(parseInt(Math.random() * (4 - 1 + 1) + 1)))
saveIncomplexForm(17, (Math.random() * 359).toFixed(parseInt(Math.random() * (4 - 1 + 1) + 1)))
saveIncomplexForm(18, (Math.random() * 359).toFixed(parseInt(Math.random() * (4 - 1 + 1) + 1)))

// Per Rectangles
savePerimeterCalc(34, Math.floor(Math.random() * (20 - 1 + 1) + 1), Math.floor((Math.random() * (100 - 1 + 1) + 1)))
savePerimeterCalc(35, Math.floor(Math.random() * (20 - 1 + 1) + 1), Math.floor((Math.random() * (100 - 1 + 1) + 1)))
savePerimeterCalc(36, Math.floor(Math.random() * (20 - 1 + 1) + 1), Math.floor((Math.random() * (100 - 1 + 1) + 1)))
savePerimeterCalc(37, Math.floor(Math.random() * (20 - 1 + 1) + 1), Math.floor((Math.random() * (100 - 1 + 1) + 1)))
savePerimeterCalc(38, Math.floor(Math.random() * (20 - 1 + 1) + 1), Math.floor((Math.random() * (100 - 1 + 1) + 1)))

// Per Circles
savePerimeterCalc(39, Math.floor(Math.random() * (100 - 1 + 1) + 1), 0)
savePerimeterCalc(40, Math.floor(Math.random() * (100 - 1 + 1) + 1), 0)
savePerimeterCalc(41, Math.floor(Math.random() * (100 - 1 + 1) + 1), 0)

export const getQuestions = () => {
  return [
    {
      id: 0,
      question: '¿Cómo se llama esta figura?',
      image: image0,
      solutions: [
        'Punto'
      ]
    },
    {
      id: 1,
      question: '¿Cómo se llama esta figura?',
      image: image1,
      solutions: [
        'Recta'
      ]
    },
    {
      id: 2,
      question: '¿Cómo se llama esta figura?',
      image: image2,
      solutions: [
        'Origen',
        'Orígen',
        'Origen de las dos semirrectas',
        'Origen de las dos semirectas'
      ]
    },
    {
      id: 3,
      question: '¿Cómo se llama esta figura?',
      image: image3,
      solutions: [
        'Semirrecta',
        'Semirecta'
      ]
    },
    {
      id: 4,
      question: '¿Cómo se llama esta figura?',
      image: image4,
      solutions: [
        'Segmento'
      ]
    },
    {
      id: 5,
      question: '¿Cómo se llama esta figura?',
      image: image5,
      solutions: [
        'Secantes',
        'Lineas Secantes',
        'Linea Secante',
        'Secante',
        'lineas Secante',
        'linea Secantes'
      ]
    },
    {
      id: 6,
      question: '¿Cómo se llama esta figura?',
      image: image6,
      solutions: [
        'Paralelo',
        'Lineas Paralelo',
        'Linea Paralelo',
        'Paralela',
        'Lineas Paralela',
        'Linea Paralela',
        'Paralelas',
        'Lineas Paralelas',
        'Linea Paralelas'
      ]
    },
    {
      id: 7,
      question: '¿Cómo se llama esta figura?',
      image: image7,
      solutions: [
        'Perpendiculares',
        'Lineas Perpendiculares',
        'Linea Perpendiculares',
        'Perpendicular',
        'Lineas Perpendiculares',
        'Linea Perpendicular'
      ]
    },
    {
      id: 8,
      question: `¿Cómo se llama un ángulo de ${getRandomIntInclusive(0, 89)}º?`,
      image: null,
      solutions: [
        'Agudo',
        'Angulo Agudo',
        'Ángulo Agudo'
      ]
    },
    {
      id: 9,
      question: '¿Cómo se llama un ángulo de 90º?',
      image: null,
      solutions: [
        'Recto',
        'Angulo recto',
        'Ángulo recto'
      ]
    },
    {
      id: 10,
      question: `¿Cómo se llama un ángulo de ${getRandomIntInclusive(91, 179)}º?`,
      image: null,
      solutions: [
        'Obtuso',
        'Angulo Obtuso',
        'Ángulo Obtuso',
        'Convexo',
        'Angulo Convexo',
        'Ángulo Convexo'
      ]
    },
    {
      id: 11,
      question: `¿Cómo se llama un ángulo de ${getRandomIntInclusive(181, 359)}º?`,
      image: null,
      solutions: [
        'Cóncavo',
        'Concavo',
        'Angulo Cóncavo',
        'Ángulo Cóncavo',
        'Angulo Concavo',
        'Ángulo Concavo'
      ]
    },
    {
      id: 12,
      question: '¿Cómo se llama un ángulo de 360º?',
      image: null,
      solutions: [
        'Completo',
        'Angulo Completo',
        'Ángulo Completo'
      ]
    },
    {
      id: 13,
      question: `Convierte ${getComplexForm(13)[0]}º ${getComplexForm(13)[1]}' ${getComplexForm(13)[2]}'' a forma Incompleja (2 decimales y . en vez de ,)`,
      image: null,
      solutions: [
        `${getResultOfConvertToIncomplex(getComplexForm(13)[0], getComplexForm(13)[1], getComplexForm(13)[2])}º`,
        `${getResultOfConvertToIncomplex(getComplexForm(13)[0], getComplexForm(13)[1], getComplexForm(13)[2])}`
      ]
    },
    {
      id: 14,
      question: `Convierte ${getComplexForm(14)[0]}º ${getComplexForm(14)[1]}' ${getComplexForm(14)[2]}'' a forma Incompleja (2 decimales y . en vez de ,)`,
      image: null,
      solutions: [
        `${getResultOfConvertToIncomplex(getComplexForm(14)[0], getComplexForm(14)[1], getComplexForm(14)[2])}º`,
        `${getResultOfConvertToIncomplex(getComplexForm(14)[0], getComplexForm(14)[1], getComplexForm(14)[2])}`
      ]
    },
    {
      id: 15,
      question: `Convierte ${getComplexForm(15)[0]}º ${getComplexForm(15)[1]}' ${getComplexForm(15)[2]}'' a forma Incompleja (2 decimales y . en vez de ,)`,
      image: null,
      solutions: [
        `${getResultOfConvertToIncomplex(getComplexForm(15)[0], getComplexForm(15)[1], getComplexForm(15)[2])}º`,
        `${getResultOfConvertToIncomplex(getComplexForm(15)[0], getComplexForm(15)[1], getComplexForm(15)[2])}`
      ]
    },
    {
      id: 16,
      question: `Convierte ${getIncomplexForm(16)}º a forma compleja`,
      image: null,
      solutions: [
        `${getResultOfConvertToComplex(getIncomplexForm(16))}`
      ]
    },
    {
      id: 17,
      question: `Convierte ${getIncomplexForm(17)}º a forma compleja`,
      image: null,
      solutions: [
        `${getResultOfConvertToComplex(getIncomplexForm(17))}`
      ]
    },
    {
      id: 18,
      question: `Convierte ${getIncomplexForm(18)}º a forma compleja`,
      image: null,
      solutions: [
        `${getResultOfConvertToComplex(getIncomplexForm(18))}`
      ]
    },
    {
      id: 19,
      question: '¿Cómo se llama esta parte de un polígono?',
      image: image8,
      solutions: [
        'Lado',
        'lados'
      ]
    },
    {
      id: 20,
      question: '¿Cómo se llama esta parte de un polígono?',
      image: image9,
      solutions: [
        'Diagonal',
        'diagonales'
      ]
    },
    {
      id: 21,
      question: '¿Cómo se llama esta parte de un polígono?',
      image: image10,
      solutions: [
        'Vértice',
        'vertice',
        'vertices',
        'vértices'
      ]
    },
    {
      id: 22,
      question: '¿Cómo se llama esta parte de un polígono?',
      image: image11,
      solutions: [
        'Ángulo',
        'Ángulos',
        'angulos',
        'angulo'
      ]
    },
    {
      id: 23,
      question: '¿Cómo se llama a un polígono de 3 lados?',
      image: null,
      solutions: [
        'Triángulo',
        'Triangulo'
      ]
    },
    {
      id: 24,
      question: '¿Cómo se llama a un polígono de 4 lados?',
      image: null,
      solutions: [
        'Cuadrilátero',
        'Cuadrilatero'
      ]
    },
    {
      id: 25,
      question: '¿Cómo se llama a un polígono de 5 lados?',
      image: null,
      solutions: [
        'Pentágono',
        'Pentagono'
      ]
    },
    {
      id: 26,
      question: '¿Cómo se llama a un polígono de 6 lados?',
      image: null,
      solutions: [
        'Hexágono',
        'Hexagono'
      ]
    },
    {
      id: 27,
      question: '¿Cómo se llama a un polígono de 7 lados?',
      image: null,
      solutions: [
        'Heptágono',
        'Heptagono'
      ]
    },
    {
      id: 28,
      question: '¿Cómo se llama a un polígono de 8 lados?',
      image: null,
      solutions: [
        'Octógono',
        'Octogono'
      ]
    },
    {
      id: 28,
      question: '¿Cómo se llama este polígono?',
      image: image12,
      solutions: [
        'Cuadrado'
      ]
    },
    {
      id: 29,
      question: '¿Cómo se llama este polígono?',
      image: image13,
      solutions: [
        'Rectángulo',
        'Rectangulo'
      ]
    },
    {
      id: 30,
      question: '¿Cómo se llama este polígono?',
      image: image14,
      solutions: [
        'Rombo'
      ]
    },
    {
      id: 31,
      question: '¿Cómo se llama este polígono?',
      image: image15,
      solutions: [
        'Romboide'
      ]
    },
    {
      id: 32,
      question: '¿Cómo se llama este polígono?',
      image: image16,
      solutions: [
        'Trapecio'
      ]
    },
    {
      id: 33,
      question: '¿Cómo se llama este polígono?',
      image: image17,
      solutions: [
        'Trapezoide'
      ]
    },
    {
      id: 34,
      question: `Calcula el perímetro de un poligono regular, que tiene ${getPermiterCalc(34)[0]} lados y cada uno mide ${getPermiterCalc(34)[1]}cm`,
      image: null,
      solutions: [
        `${getPermiterCalc(34)[0] * getPermiterCalc(34)[1]}cm`,
        `${getPermiterCalc(34)[0] * getPermiterCalc(34)[1]}`
      ]
    },
    {
      id: 35,
      question: `Calcula el perímetro de un poligono regular, que tiene ${getPermiterCalc(35)[0]} lados y cada uno mide ${getPermiterCalc(35)[1]}cm`,
      image: null,
      solutions: [
        `${getPermiterCalc(35)[0] * getPermiterCalc(35)[1]}cm`,
        `${getPermiterCalc(35)[0] * getPermiterCalc(35)[1]}`
      ]
    },
    {
      id: 36,
      question: `Calcula el perímetro de un poligono regular, que tiene ${getPermiterCalc(36)[0]} lados y cada uno mide ${getPermiterCalc(36)[1]}cm`,
      image: null,
      solutions: [
        `${getPermiterCalc(36)[0] * getPermiterCalc(36)[1]}cm`,
        `${getPermiterCalc(36)[0] * getPermiterCalc(36)[1]}`
      ]
    },
    {
      id: 37,
      question: `Calcula el perímetro de un poligono regular, que tiene ${getPermiterCalc(37)[0]} lados y cada uno mide ${getPermiterCalc(37)[1]}cm`,
      image: null,
      solutions: [
        `${getPermiterCalc(37)[0] * getPermiterCalc(37)[1]}cm`,
        `${getPermiterCalc(37)[0] * getPermiterCalc(37)[1]}`
      ]
    },
    {
      id: 38,
      question: `Calcula el perímetro de un poligono regular, que tiene ${getPermiterCalc(38)[0]} lados y cada uno mide ${getPermiterCalc(38)[1]}cm`,
      image: null,
      solutions: [
        `${getPermiterCalc(38)[0] * getPermiterCalc(38)[1]}cm`,
        `${getPermiterCalc(38)[0] * getPermiterCalc(38)[1]}`
      ]
    },
    {
      id: 39,
      question: `Calcula el perímetro de un círculo, que tiene ${getPermiterCalc(39)[0]} de radio`,
      image: null,
      solutions: [
        `${(2 * Math.PI * getPermiterCalc(39)[0]).toFixed(2)}`,
        `${(2 * 3.14 * getPermiterCalc(39)[0]).toFixed(2)}`,
        `${(2 * 3.1415 * getPermiterCalc(39)[0]).toFixed(2)}`
      ]
    },
    {
      id: 40,
      question: `Calcula el perímetro de un círculo, que tiene ${getPermiterCalc(40)[0]} de radio`,
      image: null,
      solutions: [
        `${(2 * Math.PI * getPermiterCalc(40)[0]).toFixed(2)}`,
        `${(2 * 3.14 * getPermiterCalc(40)[0]).toFixed(2)}`,
        `${(2 * 3.1415 * getPermiterCalc(40)[0]).toFixed(2)}`
      ]
    },
    {
      id: 41,
      question: `Calcula el perímetro de un círculo, que tiene ${getPermiterCalc(41)[0]} de radio`,
      image: null,
      solutions: [
        `${(2 * Math.PI * getPermiterCalc(41)[0]).toFixed(2)}`,
        `${(2 * 3.14 * getPermiterCalc(41)[0]).toFixed(2)}`,
        `${(2 * 3.1415 * getPermiterCalc(41)[0]).toFixed(2)}`
      ]
    }
  ]
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getResultOfConvertToIncomplex (grados, minutos, segundos) {
  return `${(parseFloat(grados) + (minutos / 60) + (segundos / 3600)).toFixed(2)}`
}
function getResultOfConvertToComplex (incomplexForm) {
  const grados = Math.trunc(incomplexForm)
  const minutos = Math.floor((incomplexForm - Math.trunc(incomplexForm)) * 60)
  const segundos = Math.floor(((incomplexForm - Math.trunc(incomplexForm)) * 60 - Math.trunc((incomplexForm - Math.trunc(incomplexForm)) * 60)) * 60)
  return `${grados}º ${minutos}' ${segundos}''`
}

function saveComplexForm (newid, newgrados, newminutos, newsegundos) {
  data.push(
    {
      id: newid,
      grados: newgrados,
      minutos: newminutos,
      segundos: newsegundos
    }
  )
}
function savePerimeterCalc (newid, newlados, newLongitudLados) {
  data.push(
    {
      id: newid,
      lados: newlados,
      longitudLados: newLongitudLados
    }
  )
}
function saveIncomplexForm (newid, newincomplexForm) {
  data.push(
    {
      id: newid,
      incomplexForm: newincomplexForm
    }
  )
}
function getComplexForm (newid) {
  if (data.length <= 0) return
  const finded = data.filter((i) => i.id === newid)[0]
  return [finded.grados, finded.minutos, finded.segundos]
}
function getIncomplexForm (newid) {
  if (data.length <= 0) return
  const finded = data.filter((i) => i.id === newid)[0]

  return finded.incomplexForm
}
function getPermiterCalc (newid) {
  if (data.length <= 0) return
  const finded = data.filter((i) => i.id === newid)[0]

  return [finded.lados, finded.longitudLados]
}


