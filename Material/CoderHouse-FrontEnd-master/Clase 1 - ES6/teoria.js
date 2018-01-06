/*
  👨🏼‍🏫 Profesor: Leonardo Galante -> https://leonardogalante.com

  📕 Carrera Front-end: Nivel 3 Desarrollador Front-end (Camada 2735)

  🏎 Inicio: Sábado 06 de Enero

  🏁 Fin: Sábado 03 de Febrero

  📅 Días y Horarios: Sábados de 09:30hs a 16:30hs

  ☕️ Break: 1 hora a las 12:30hs. Hay café, agua caliente, galletitas.

  📶 Wi-Fi: Nombre -> "" - Contraseña: ""

  🏢 Lugar: Urban Station - El Salvador 4577 - Sala Open Space

  ☎️ Info: pablol@enjoyurbanstation.com - 11 4897 2162

  📚 Agenda / Temario (5 clases de 7 horas)
      * Sábado 6 de Enero - ES6 ó ECMAScript 2015
      * Sábado 13 de Enero - React (Parte I)
      * Sábado 20 de Enero - React (Parte II) & Workshop
      * Sábado 27 de Enero - Redux (Parte I)
      * Sábado 3 de Febrero - Redux (Parte II) & Proyecto Integrador

  💽 Recursos Opcionales:
    * ES6 - https://github.com/lndgalante/my-es6-list
    * React - https://github.com/lndgalante/my-react-list
    * Redux - https://github.com/lndgalante/my-redux-list

  ✅ ToDo:
      * Presentarnos
      * Tomar asistencia
      * Validación Slack (soporte@coderhouse.com)
      * Completar encuestas a las 16:15hs (15min antes)
      * Requisitos para el certificado: 80% de asistencia
      * Mostrar como usar la plataforma https://plataforma.coderhouse.com
      * Sala de Chat (Slack), Canal #curso2735 https://developershouse.slack.com
      * Devolución de TPs por GitHub y Plataforma
      * Organizar bien la sala, proyector y sillas
      * Podemos pedir zapatillas / snacks en recepción si hace falta

  🛠 Herramientas para los estudiantes:
      * Visual Studio Code (Editor de Código)
      * Prettier (Extension de Visual Studio Code)
      * Live-Server (Extension de Visual Studio Code)

      * CORS Toggle (Extensión de Google Chrome)
      * JSON Viewer (Extensión de Google Chrome)
      * React Developer Tools (Extensión de Google Chrome)

  👌 Slides Introducción a JavaScript: https://intro-js.now.sh

  📄 Documentación de JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript

  👨‍🎓 Lista de Alumnos
    const alumnos = [
        'Mario Quiroga',
        'Jesus Alvarez',
        'Assefi, Ershad',
        'Fernandez Rial, Maria Sol',
        'Fiz, Mercedes Maria',
        'Forti, Diego Rolando',
        'Marmolini López, Daniela Paula',
        'Molina, Mateo',
        'Perez Cobo, Francisco',
        'Quevedo, Agustín',
        'Quiroga, Priscila Mabel Diaz Quiroga',
        'Santi, Martin',
        'Morales, Judith',
        'Romano, Martín',
    ]

*/

// 1. Let y Const son el nuevo var 📦
// 2. Arrow Functions 🏹
// 3. Function Default Parameters 🚑
// 4. Destructuring objects and arrays ፨
// 5. Array methods: Map, reduce and filter 🔑
// 6. Spread Operator ⊙
// 7. Object property shorthand 🤝
// 8. Template Literals ✏️
// 9. Classes or Class 🏛

// 1. Let y Const son el nuevo var 📦
/*
    La nueva manera de definir variables de ahora en adelante son con let y const
        Estas quedan scopeadas por el bloque de código de donde están definidas

    Benificios let:
        * Se puede re-escribir su valor

    Benificios const:
        * No se puede re-escribir su valor
        * Los arrays y objetos se van a poder seguir modificando

    Benificios compartidos:
        * Tienen scope definido por bloque de código
        * No puede definirse otra variable con el mismo nombre
        * No generan hoisting arriba al principio de su scope

    Tips:
        * Usar de ahora en adelante let, y si la variable no va a ser re-escrita utilizar const
        * Tener cuidado al re-factorear código viejo cambiando var por let/const
*/

// 2. Arrow Functions 🏹
/*
    Las arrow functions son una nueva manera de definir funciones

    Beneficios:
        * Nos brindan una manera más corta de definir funciones anónimas
        * Si la función es de una sola línea nos brinda un return implícito
        * Mantienen el contexto actual donde están definidas
          Es decir no crea un nuevo this, sino que lo obtiene de su contexto
*/

// 3. Function Default Parameters 🚑
/*
    Nos permite definir valores por defecto a los parametros

    Se aplica cuando:
        * No enviamos ningún parámetro
        * Enviamos undefined como parámetro

    Beneficios:
        * Evitamos problemas al usar propiedades o métodos en undefined
*/

// 4. Destructuring objects and arrays ፨
/*
    Destructuring es una manera de crear nuevas variables
        extrayendo valores almacenados en objetos o arrays

    Beneficios:
        * No tenemos que generar una variable por cada propiedad del objeto
        * No tenemos que generar una variable por cada elemento del array
        * Olvidarnos del orden de los parámetros en las funciones
*/

// 5. Array methods: Map, filter and reduce 🔑
/*
    1. Map: nos permite generar una nueva copia de un array
        aplicandole una transformación a cada elemento

    2. Filter: nos permite filtrar elementos que deseemos o no deseemos

    3. Reduce: nos permite reducir nuestro array a un solo valor

    Beneficios:
        * Son métodos inmutables, es decir que no alteran nuestro array original
        * Son más declarativos que usar for o el método forEach
*/

// 6. Spread Operator ⊙
/*
    El spread operator "..." nos permite esparcir los elementos de un array
        o las propiedades de un objeto.

    Beneficios:
        * Generar una nueva copia de un array o de un objeto
        * Almacenar algunas propiedades o elementos y el resto almacenarlos en un array/objeto
*/

// 7. Object property shorthand 🤝
/*
    Cuando asignamos una variable a una propiedad, si el nombre de la variable
        es igual al de la propiedad, se escribe solo el nombre de la variable

    Beneficios:
        * Evitar escribir 2 veces lo mismo
*/

// 8. Template Literals ✏️
/*
    Es una nueva manera de definir strings pero en vez de usar comillas simples o dobles
        vamos a usar estas comillas `hola mundo`

    Benificios:
        * Nos permite interpolar variables sin necesidad de concatenar estas ultimas
        * Nos permite generar saltos de líneas sin usar salto de caracteres
*/

// 9. Classes or Class 🏛
/*
    Nos permiten modelar objetos de la realidad de manera más sencilla

    Beneficios:
        * Más fácil que definir una función y extenderla con prototype
        * Más fácil transición para aquellos que vienen de lenguajes como Java
 */
