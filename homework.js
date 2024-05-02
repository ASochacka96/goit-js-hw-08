//Analiza metody JSON.parse():
const json = '{"name":"Mango","age":3,"isHappy":true}'; // ciąg w Json
const object = JSON.parse(json); // parsowanie, czyli w tym wypadku zamiania ciągu Json na obiekt w JavaScript
console.log(object); // wyświetlenie obiektu w konsoli


//Obsługa błędów:
const invalidJson = '{"name":"Mango","age":3,isHappy:true}'; // błędny ciąg w Json
try{ // funkcja do sprawdze
    const object = JSON.parse(invalidJson); // parsowanie błędnego ciągu w Json na obiekt
    console.log(object) // wyświetlenie wyniku, jeżeli funkcja try nie wyłapie błędu. W naszym przypadku, dana linijka jest ignorowana, ponieważ mamy błędny ciąg. 
} catch (error) { // funkcja do wychwycenia błędu 
    console.log("Name: " , error.name); // wyświetlenie rodzaju błędu 
    console.log("Message: ", error.message); // wyświetlenie wiadomości, która informuje o szczegółach błędu
}

console.log('Kod działa pomimo wystąpienia błędu') //sprawdzenie, czy kod dalej działa 