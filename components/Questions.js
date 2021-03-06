export const Questions = [
    { id: "0", uri: require("../assets/swipe.jpg"), text: "Celem aplikacji jest pomoc w wyborze przedmiotów fakultatywnych. W tym celu będą zadawne krótkie pytania, na które odpowiedziami jest \"tak\" lub \"nie\". Zrozumiałeś?", name: "tutorial"},
    { id: "1", uri: require("../assets/TPA_1.png"), text: "Lubisz wyzwania i programowanie obiektowe? Chesz zrozumieć język programowania od podstaw?", name: "TPA" },
    { id: "2", uri: require("../assets/TPA_2.png"), text: "Chcesz poznać czym są wzorce projektowe i jak wykorzystywać je w praktyce?", name: "TPA" },
    { id: "3", uri: require("../assets/TPA_3.png"), text: "Masz dość nudnych, tradycyjnych wykładów? Pragniesz prowadzić aktywnie dyskusje z prowadzącym i wspólnie rozwiązywać problemy?", name: "TPA" },
    { id: "4", uri: require("../assets/TPA_3.png"), text: "Chciałbyś nauczyć się efektywnie korzystać ze zintegrowanego środowiska programistycznego?", name: "TPA" },
    { id: "5", uri: require("../assets/PBS_1.jpg"), text: "Chcesz zdobyć umiejętności identyfikowania podatności na ataki aplikacji i systemów IoT?", name: "PBS" },
    { id: "6", uri: require("../assets/PBS_2.jpg"), text: "Pragniesz umieć wykryć nieuprawnioną aktywność w swoim systemie?", name: "PBS" },
    { id: "7", uri: require("../assets/PBS_3.png"), text: "Po ukończeniu kursu będziesz w stanie tworzyć wielowarstwowe zabezpieczenia systemów IoT, zainteresowany?", name: "PBS" },
    { id: "8", uri: require("../assets/PBS_4.png"), text: "Chciałbyś uzyskać jeden z certyfikatów, np. Certified Ethical Hacking (CEH)?", name: "PBS" },
    { id: "9", uri: require("../assets/ZZP_1.png"), text: "Chcesz znacznie pogłębić swoją wiedzę z języka Java?", name: "ZZP" },
    { id: "10", uri: require("../assets/ZZP_2.png"), text: "Chciałbyś wiedzieć jak programować obiektowo w kontekście rzeczywistych problemów biznesowych?", name: "ZZP" },
    { id: "11", uri: require("../assets/ZZP_3.png"), text: "Będziesz umieć zarządzać jakością swojego kodu.", name: "ZZP" },
    { id: "12", uri: require("../assets/ZZP_4.png"), text: "Będziesz w stanie tworzyć oprogramowanie na podstawie wymagań biznesowych. ", name: "ZZP" },
    { id: "13", uri: require("../assets/WZAIP_1.png"), text: "Po zakończeniu przedmiotu będziesz w pełni rozumieć klasyczne algorytmy oraz umieć je zastosować w praktyce.", name: "WZAIP" },
    { id: "14", uri: require("../assets/WZAIP_2.png"), text: "Przedmiot przygotuje Cię do pracy pod presją czasu oraz nauczy współzawodnictwa przy tworzeniu kodu.", name: "WZAIP" },
    { id: "15", uri: require("../assets/WZAIP_3.png"), text: "Będziesz w stanie tworzyć własne algorytmy do rozwiązywania napotkanych problemów.", name: "WZAIP" },
    { id: "16", uri: require("../assets/WZAIP_4.png"), text: "Chciałbyś znać swoje braki w wiedzy z zakresu algorytmów oraz znać kierunek dalszego rozwoju w tej dziedzinie?", name: "WZAIP" }
  ]

  var first = Questions.shift();

  Questions.sort(() => Math.random() - 0.5);

  Questions.unshift(first)


