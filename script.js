import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      //auch e ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  //läuft Zeichen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    //Zählt über den Text in input
    const currentLetter = input[i] //speichert das aktuelle Zeichen aus input
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter) // hängt die grossbuchstabenversion
  }
  return result.join("") //macht aus der liste einen text
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    }
    if (currentElement === "E") {
      count = count + 1
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //  [a-z] sucht als  erstes alle zeichen zwischen a und z, und dann diese .test überprüft ob diese buchstaben  gefunden wurde und wenn ja dann gibt es true züruck
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  let hasSonderzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter)
  }

  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const lowerCase = currentElement.toLowerCase() //current element (grossbuchstaben) zu klein buchstaben umwandeln

    if (currentElement === lowerCase) {
      hasSonderzeichen = true
    } else {
      hasSonderzeichen = false
    }
  }

  return hasSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  let hasUnd = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        const dElement = input[i + 2]
        if (dElement === "d") {
          hasUnd = true
        }
      }
    }
  }
  return hasUnd
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }

  let has6 = false
  if (count === 6) {
    has6 = true
  }

  return has6
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const firstElement = input[0]

  // teste ob input genau 7 zeichen lang ist
  if (input.length === 7) {
    // gut so, weiter machen
  } else {
    return false
  }

  if (firstElement === "#") {
    // gut so, weiter machen
  } else {
    return false
  }

  // Iteriere durch die nächsten 6 Zeichen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57) {
      // gut so, weiter machen
    } else if (65 <= ascii && ascii <= 70) {
      // gut so, weiter machen
    } else {
      return false
    }
  }

  return true
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)
export function aufgabe11(args) {
  const input = args

  //variable um den code ASCII zu speichern
  let asciiCode = 0
  //code ASCII ein wert hochladen
  asciiCode = input.charCodeAt(0)
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  //variable die den porsition den ersten e speichert
  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e entdeckst, dann speichere die Position
    if (currentElement === "e") {
      // Nur die position vom ersten e speichern
      if (position === -1) {
        position = i
      }
    }
  }
  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  //variable die den porsition den letzten e speichert
  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e entdeckst, dann speichere die Position
    if (currentElement === "e") {
      // Nur die position vom letzten e speichern
      position = i
    }
  }
  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  //variable die die die position den dritten e speicher
  let position = -1
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn du e entdeckst, speichere diese position
    if (currentElement === "e") {
      // Zähle countE ums eins hoch
      countE = countE + 1
      // Wenn countE 3 ist, speichere die Position
      if (countE === 3) {
        position = i
      }
    }
  }
  return position
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein Space findest, dann gib result zurück und breche ab
    if (currentElement === " ") {
      return result.join("")
    }

    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []
  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // variable die die eingabe bis zu $ als erstes teils eine liste zählt
    if (dollarfound === false) {
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
    if (currentElement === "$") {
      dollarfound = true
    }
  }
  return [result1.join(""), result2.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe19(args) {
  const input = args
  //variable die jeden zeichen verdoppelt
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement) //hängt element am ende des listes
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  //variable die prüft ob nach jedem punkt ein space kommt
  let hasSpace = true
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      const nextElement = input[i + 1]
      if (nextElement === " ") {
        hasSpace = true
      } else {
        hasSpace = false
      }
    }
  }
  return hasSpace
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  //variable dass die eingabe umkehren wird
  const input = args.split("").reverse().join("") //nimmt die eingabe und trennt die zeichen, kehrt die zeichen um und dann nimmt es zusammen
  return input
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe23(args) {
  //variable dass die erste zeichen zusätzlich vorne und hinten gelegt werden
  const input = args
  return input[0] + input + input[0] //nimmt den zeichen vom position 0 (erste zeichen) und macht der vor und hinten der input(eingabe)
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)
export function aufgabe24(args) {
  const input = args
  //variable die das erste und letzte zeichen vertauschen
  return input[input.length - 1] + input.slice(1, input.length - 1) + input[0] // es gibt uns zuerst die letzt zeichen der eingabe, dann gibt es uns züruck ein teil der eingabe, also ie zeichen vom position 1 bis der zeichen vor der letzte-bsp. Hallo, hier wurde es dann all zuruck geben. dann gibt den code der erste zeichen züruck also der vom position 0. Zusammengefasst nimmt den code die letzte zeichen, fügt danach teil der eigabe (ohne erste und letzte zeichen) und dann fügt den erste zeochen am ende an
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  // variable dass den mittlere zeichen gelöscht wird
  return input.slice(0, input.length / 2) + input.slice(input.length / 2 + 1) // den code gibt teil des listes/ eingabe züruck, vom ersten zeichen (position0)bis die mitte der liste mitdem den code die hälfte berechnet. dann gibt den code züruck, teil der liste von der mitte bis der letzte zeichen aber ohne das mittel zeichen der würde übersprungt und mitdem wird er nicht züruck gegeben (gelöscht)
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe27(args) {
  const input = args
  //testet ob eine eingabe eine zahl ist

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //nimmt der zeichen des listes und gibt den ascii wert von den züruck
    if (48 <= ascii && ascii <= 57) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe30(args) {
  const input = args
  //variable die die die position den dritten e speicher
  let position = -1
  let countA = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn du a entdeckst, speichere diese position
    if (currentElement === "a") {
      // Zähle countE ums eins hoch
      countA = countA + 1
      // Wenn countE 2 ist, speichere die Position
      if (countA === 2) {
        position = i
      }
    }
  }
  return position
}

linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  //variable die der eingabe zu ascii code umwandelt
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //holt ascii wert dieses zeichen an
    result.push(ascii) //hängt ascii code am resultat
  }

  return result.join("") // resultat zusammenbringen sodass es nocht als liste züruckgegeben wird
}
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)
